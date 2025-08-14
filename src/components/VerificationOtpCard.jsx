import React, { useState } from "react";
import CreateNewPasswordCard from "./CreateNewPasswordCard";

const VerificationOtpCard = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [showpasswordcard,setShowPasswordCard] = useState(false)

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPasswordCard(true);
  };

  if(showpasswordcard)
     return <CreateNewPasswordCard/>

  

  return (

    <div className="flex flex-col items-center gap-8 bg-white px-[30px] py-3 shadow-md rounded-[10px]">
      {/* Title */}
      <div className="flex flex-col gap-3">

      <span className="font-normal text-[30px] leading-[52px] text-[#444444]">
         Verification
        </span>

      {/* Subtitle */}
      <span className="font-normal text-base text-[#828282] ">
        Enter your 6 digits code that you received on your email.
      </span>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-2 w-full"
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

        {/* Timer */}
        <span className="font-normal text-base text-center text-[#f2451c]">
          00:30
        </span>

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
