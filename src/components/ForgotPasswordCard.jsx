import React, { memo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema } from "../utils/validations/authSchemas";
import { toast } from "sonner";
import apiClient from "../utils/api/api";
import VerificationOtpCard from "./VerificationOtpCard";
import { email } from "zod";
import { useNavigate } from "react-router-dom";

const ForgotPasswordCard = ({ onSwitch }) => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
  });
   const [submittedEmail, setSubmittedEmail] = useState("");


  const [showOtpCard, setShowOtpCard] = useState(false);

  const formSubmit = async (data) => {
    console.log("Sending password reset for:", data.email);
    try {
      const res = await apiClient.post("/auth/forget-password/send", data);
      console.log(res)
      toast.success(res.data.message || "OTP sent to your email.");
      setSubmittedEmail(data.email);
      navigate('/verify-otp')
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to send reset email. Please try again.");
    }
  };

  if (showOtpCard) {
    return <VerificationOtpCard email={submittedEmail}/>;
  }

  return (
    <div className="flex flex-col items-center gap-8 bg-white px-[30px] py-3 shadow-md rounded-[10px]">
      <div className="flex flex-col gap-3">
        <span className="font-normal text-[30px] leading-[52px] text-[#444444]">
          Forgot password
        </span>
        <span className="font-normal text-sm text-[#828282]">
          Enter your email for the verification process, we will send 6 digits
          code to your email.
        </span>
      </div>

      <form
        onSubmit={handleSubmit(formSubmit)}
        className="flex flex-col gap-6 w-full"
      >
        <div className="flex flex-col gap-1 rounded-sm">
          <span className="font-normal text-sm text-[#444444]">E-mail</span>
          <input
            type="text"
            placeholder="hannah.green@test.com"
            {...register("email")}
            className="w-full flex items-center gap-2.5 px-3 py-3 rounded-[5px] border border-solid border-[#9badca] text-base text-[#444444] outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
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

      <span
        onClick={()=>navigate('/login')}
        className="text-[#EFCD78] font-semibold cursor-pointer text-sm mt-4"
      >
        &larr; Back to Log in
      </span>
    </div>
  );
};

export default memo(ForgotPasswordCard);
