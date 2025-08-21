import React, { useState } from "react";
import apiClient from "../utils/api/api";
import { toast } from "sonner";
import { useLocation, useNavigate } from "react-router-dom";

const VerificationOtpCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otp = code.join("");
    if (otp.length !== 6) {
      toast.error("Please enter all 6 digits of the OTP.");
      return;
    }

    const email = location.state?.email;

    const payload = { otp, email };

    try {
      const response = await apiClient.post("/auth/forget-password/verify", payload);
      toast.success(response.data?.message || "OTP verified successfully!");
      navigate("/create-new-password", { state: { otp, email } });
    } catch (err) {
      const errorMessage = err.response?.data?.error || "An unexpected error occurred.";
      toast.error(errorMessage);
      console.error("Verification failed:", err);
    }
  };

  const handleResend = async () => {
    try {
      setLoading(true);
      const email = location.state?.email;

      const response = await apiClient.post("/auth/forget-password/send", { email }); 
      toast.success(response.data?.message || "OTP resent successfully!");
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to resend OTP.");
      console.error("Resend OTP failed:", err);
    } finally {
      setLoading(false);
    }
    
  };

  return (
    <div className="flex flex-col items-center gap-8 bg-white px-[30px] py-3 shadow-md rounded-[10px]">
      <div className="flex flex-col gap-3">
        <span className="font-normal text-[30px] leading-[52px] text-[#444444]">
          Verification
        </span>
        <span className="font-normal text-base text-[#828282]">
          Enter the 6-digit code that you received in your email.
        </span>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full">
        <div className="flex gap-3">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              className="w-[48px] h-[52px] text-center text-xl font-medium text-[#444444] rounded-[5px] border border-solid border-[#9badca] outline-none"
            />
          ))}
        </div>
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2.5 bg-[#444444] px-8 py-[12px] rounded-[5px] hover:opacity-90 transition"
        >
          <span className="font-semibold text-base text-center text-white">
            Continue
          </span>
        </button>
      </form>

      <span className="font-normal text-sm text-center mt-4">
        Didn’t receive a code?{" "}
        <span
          onClick={handleResend}
          className="text-[#EFCD78] font-semibold cursor-pointer"
        >
          {loading ? "Resending..." : "Resend"}
        </span>
      </span>
    </div>
  );
};

export default VerificationOtpCard;
