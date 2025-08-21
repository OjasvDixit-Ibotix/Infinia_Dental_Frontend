import React, { useState } from "react";
import CreateNewPasswordCard from "./CreateNewPasswordCard";
import apiClient from "../utils/api/api";
import { toast } from "sonner";
import { useLocation, useNavigate } from "react-router-dom";
const VerificationOtpCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  // const [showPasswordCard, setShowPasswordCard] = useState(false);
  // const [error, setError] = useState(""); 

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
    // Clear previous errors

    const otp = code.join("");
    if (otp.length !== 6) {
      setError("Please enter all 6 digits of the OTP.");
      return;
    }
    const email = location.state?.email; 
    console.log('emial',email);
    

    const payload = {
      otp,
      email,
    };

    try {
      console.log('payload', payload);
      
      const response = await apiClient.post('/auth/forget-password/verify', payload);
          // toast.success('OTP send successfully')
          toast.success(response.data?.message || "OTP verified successfully!");
          // setShowPasswordCard(true);
          navigate('/create-new-password', { state: { otp: otp, email: email } });

    } catch (err) {
      const errorMessage = err.response?.data?.error || "An unexpected error occurred.";
      toast.error(errorMessage);
      // setError(errorMessage);
      console.error("Verification failed:", err);
    }
  };


  return (
    <div className="flex flex-col items-center gap-8 bg-white px-[30px] py-3 shadow-md rounded-[10px]">
      {/* Title */}
      <div className="flex flex-col gap-3">
        <span className="font-normal text-[30px] leading-[52px] text-[#444444]">
          Verification
        </span>
        {/* Subtitle */}
        <span className="font-normal text-base text-[#828282] ">
          Enter the 6-digit code that you received in your email.
        </span>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4 w-full" 
      >
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
        If you didn’t receive a code!{" "}
        <span className="text-[#EFCD78] font-semibold cursor-pointer">
          Resend
        </span>
      </span>
    </div>
  );
};

export default VerificationOtpCard;