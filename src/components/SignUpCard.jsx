import React from "react";
import { Link } from "react-router-dom";
import { signupSchema } from "../utils/validations/authSchemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUpCard = ({ onSwitch }) => {
         
  const {
        register,handleSubmit, formState:{errors}
    }= useForm({
      resolver:zodResolver(signupSchema)
    })
     
     const formSubmit = (data) => {
      console.log("Form Data:", data);
    };
     

  return (
    <div className="w-full  max-w-[420px] bg-white rounded-[28px] sm:rounded-[32px] shadow-[0_4px_35px_rgba(0,0,0,0.08)] px-4 sm:px-8 py-5 mx-auto">
         
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg sm:text-xl text-black font-normal font-[Poppins] text-[20px] leading-normal">
          Welcome!
        </h2>
        <p className="text-xs sm:text-sm text-[#ABABAB]">
          Have an account?{" "}
          <span
            onClick={onSwitch}
            className="text-[#EFCD78] font-semibold cursor-pointer "
          >
            Log in
          </span>
        </p>
      </div>
      <h1 className="text-2xl sm:text-[34px] font-[Poppins] leading-tight mb-4 text-black font-poppins text-[55px] font-medium ">
        Sign up
      </h1>
       <div className="mb-4 flex gap-x-3 flex-row" >
        <label className="  text-black font-poppins text-[16px] font-normal leading-normal block text-xs sm:text-sm">
          Select Role 
        </label>
        <div className="flex items-center gap-x-6">
          <div className="flex items-center">
            <input
              id="role-admin"
              name="role"
              type="radio"
              value="admin"
              className="h-4 w-4 text-[#2C2C2C] focus:ring-[#EFCD78] border-gray-300"
            />
            <label
              htmlFor="role-admin"
              className="ml-2 block text-xs sm:text-sm text-gray-900 cursor-pointer"
            >
              Admin
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="role-employee"
              name="role"
              type="radio"
              value="employee"
              defaultChecked
              className="h-4 w-4 text-[#2C2C2C] focus:ring-[#EFCD78] border-gray-300"
            />
            <label
              htmlFor="role-employee"
              className="ml-2 block text-xs sm:text-sm text-gray-900 cursor-pointer"
            >
              Employee
            </label>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(formSubmit)}>

      <div className="mb-5">
        <label
          htmlFor="email"
          className=" mb-2 text-black font-poppins text-[16px] font-normal leading-normal block text-xs sm:text-sm"
        >
          Enter your username or email address
        </label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Username or email address"  {...register('email')}
          className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-[#C0C0C0] rounded-md outline-none focus:border-[#3b82f6] text-xs sm:text-sm"
        />
           {
            errors.email &&(
              <p  className="text-red-500 text-xs mt-1"> {errors.email.message}</p>
            )
          }
      </div> 
      <div className="mb-4 flex flex-col sm:flex-row gap-2 sm:gap-4">
        <div className="w-full sm:w-1/2">
          <label
            htmlFor="username"
            className="mb-2 text-black font-poppins text-[16px] font-normal leading-normal block text-xs sm:text-sm"
          >
            User name
          </label>
          <input
          {...register('name')}
            id="username"
            name="username"
            type="text"  
            placeholder="User name"
            className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-[#C0C0C0] rounded-md outline-none text-xs sm:text-sm"
          />
             {
            errors.name &&(
              <p  className="text-red-500 text-xs mt-1"> {errors.name.message}</p>
            )
          }
        </div>
        <div className="w-full sm:w-1/2">
          <label
            htmlFor="contact"
            className="mb-2 text-black font-poppins text-[16px] font-normal leading-normal block text-xs sm:text-sm"
          >
            Contact Number
          </label>
          <input
          {...register('number')}
            id="contact"
            name="contact"
            type="text"
            placeholder="Contact Number"
            className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-[#C0C0C0] rounded-md outline-none text-xs sm:text-sm"
          />
             {
            errors.number &&(
              <p  className="text-red-500 text-xs mt-1"> {errors.number.message}</p>
            )
          }
        </div>
      </div>

     
      <div className="mb-4">
        <label
          htmlFor="password"
          className="mb-2 text-black font-poppins text-[16px] font-normal leading-normal block text-xs sm:text-sm"
        >
          Enter your Password
        </label>
        <input
        {...register('password')}
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-[#C0C0C0] rounded-md outline-none text-xs sm:text-sm"
        />
         {
            errors.password &&(
              <p  className="text-red-500 text-xs mt-1"> {errors.password.message}</p>
            )
          }
      </div>
      <button className="w-full bg-[#2C2C2C] text-white py-2 sm:py-3 rounded-lg shadow hover:opacity-90 transition mt-4 text-xs sm:text-base">
        Sign Up
      </button>
      </form>

    </div>
  );
};

export default SignUpCard;