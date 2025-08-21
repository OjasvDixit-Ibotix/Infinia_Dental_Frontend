import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import apiClient from "../utils/api/api";
import { useLocation, useNavigate } from "react-router-dom";

const createPasswordSchema = z
  .object({
    new_password: z.string().min(6, "Password must be at least 6 characters"),
    confirm_password: z.string().min(6, "Confirm your password"),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

const CreateNewPasswordCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email; 
  const otp = location.state?.otp; 
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(createPasswordSchema),
  });

  const onSubmit = async(data) => {
    try {
      const payload = {
      
        new_password: data.new_password,
        email: email, 
        otp: otp, 
      };
      // console.log('asdf',payload);
      

      const res = await apiClient.post("/auth/forget-password", payload);

      toast.success(res.data?.message || "Password updated successfully!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.error || "Failed to update password.");
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 bg-white px-[30px] py-6 shadow-md rounded-[10px] w-full max-w-md">
      {/* Title */}
      <div className="flex flex-col gap-2 text-center">
        <span className="font-normal text-[30px] text-[#444444]">
          New Password
        </span>
        <span className="font-normal text-sm text-[#828282]">
          Set the new password for your account so you can login and access all
          features.
        </span>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full">
        {/* New Password */}
        <div className="flex flex-col gap-1">
          <span className="text-sm text-[rgb(68,68,68)]">Enter new password</span>
          <input
            type="password"
            placeholder="8 symbols at least"
            {...register("new_password")}
            className="w-full px-3 py-3 rounded-[5px] border border-[#eaeaea] text-base text-[#444444] outline-none"
          />
          {errors.new_password && (
            <p className="text-red-500 text-xs">{errors.new_password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col gap-1">
          <span className="text-sm text-[#444444]">Confirm password</span>
          <input
            type="password"
            placeholder="Confirm password"
            {...register("confirm_password")}
            className="w-full px-3 py-3 rounded-[5px] border border-[#eaeaea] text-base text-[#444444] outline-none"
          />
          {errors.confirm_password && (
            <p className="text-red-500 text-xs">{errors.confirm_password.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center items-center bg-[#444444] px-8 py-3 rounded-[5px] hover:opacity-90 transition disabled:opacity-50"
        >
          <span className="font-semibold text-base text-white">
            {isSubmitting ? "Updating..." : "UPDATE PASSWORD"}
          </span>
        </button>
      </form>
    </div>
  );
};

export default CreateNewPasswordCard;
