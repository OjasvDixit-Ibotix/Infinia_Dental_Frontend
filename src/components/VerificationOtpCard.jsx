import React, { useState } from "react";
import CreateNewPasswordCard from "./CreateNewPasswordCard";
import apiClient from "../utils/api/api";

// Accept 'email' as a prop from the parent component
const VerificationOtpCard = ({ email }) => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [showPasswordCard, setShowPasswordCard] = useState(false);
  const [error, setError] = useState(""); 

  // Handle input change for OTP fields
  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Auto move to next input
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    // 1. Join the array of digits into a single OTP string
    const otp = code.join("");

    // 2. Check if the OTP is complete
    if (otp.length !== 6) {
      setError("Please enter all 6 digits of the OTP.");
      return;
    }

    // 3. Create the correct payload object
    const payload = {
      email,
      otp,
    };

    try {
      // 4. Send the payload to the backend
      const response = await apiClient.post('/auth/forget-password/verify', payload);
      
      // Assuming a successful response means we can proceed
      if (response.data && response.data.resetToken) {
         // You might want to pass the resetToken to the next component
        setShowPasswordCard(true);
      } else {
        // Handle cases where the API call succeeds but verification fails
        setError("Verification failed. Please try again.");
      }

    } catch (err) {
      // Handle API errors (e.g., invalid OTP, expired)
      const errorMessage = err.response?.data?.error || "An unexpected error occurred.";
      setError(errorMessage);
      console.error("Verification failed:", err);
    }
  };

  if (showPasswordCard) {
    // You'll likely need to pass the resetToken from the API response here
    return <CreateNewPasswordCard />;
  }

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
        className="flex flex-col items-center gap-4 w-full" // Increased gap
      >
        {/* OTP Inputs */}
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

        {/* Display API Error Message */}
        {error && (
          <span className="font-normal text-sm text-center text-red-500">
            {error}
          </span>
        )}

        {/* Continue Button */}
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2.5 bg-[#444444] px-8 py-[12px] rounded-[5px] hover:opacity-90 transition"
        >
          <span className="font-semibold text-base text-center text-white">
            Continue
          </span>
        </button>
      </form>

      {/* Resend text */}
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