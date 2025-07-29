import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../utils/validations/authSchemas";

const SignUpCard = ({ onSwitch }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const formSubmit = (data) => {
    console.log("Form Data:", data);
  };
  const [selectrole, setSelectRole] = useState('employee');
  

  return (
    <div className="w-full max-w-[480px] bg-white rounded-[28px] shadow-md px-4 sm:px-6 py-5 mx-auto font-poppins">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-base font-medium text-black">Welcome!</h2>
        <p className="text-xs text-gray-400">
          Have an Account?{" "}
          <span
            onClick={onSwitch}
            className="text-[#EFCD78] font-semibold cursor-pointer"
          >
            Log in
          </span>
        </p>
      </div>

      <h1 className="text-xl font-semibold text-black mb-4">Sign up</h1>

      {/* Role Selection */}
      <div className="mb-4 flex flex-row gap-2">
        <label className=" text-xs font-medium text-black block mb-1">
          Select Role
        </label>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-1 text-xs text-black">
            <input
              type="radio"
              name="role"
              value="admin"
              className="accent-[#EFCD78]" 
              onChange={()=>setSelectRole('admin')}

            />
            Admin
          </label>
          <label className="flex items-center gap-1 text-xs text-black ">
            <input
              type="radio"
              name="role"
              value="employee"
              defaultChecked
              className="accent-[#EFCD78]"
              onChange={()=>setSelectRole('employee')}
            />
            Employee
          </label>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(formSubmit)}>
        {
          selectrole ==='employee'&&(
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email */}
          <div>
            <label className="text-xs text-black block mb-1 font-[Poppins]">Email</label>
            <input
              {...register("email")}
              placeholder="Email"
              className="w-full border border-[#C0C0C0] px-3 py-3 rounded-md text-xs"
            />
            {errors.email && (
              <p className="text-red-500 text-[10px] mt-0.5">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-xs text-black block mb-1 font-[Poppins]">Password</label>
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="w-full border border-[#C0C0C0] px-3 py-3 rounded-md text-xs"
            />
            {errors.password && (
              <p className="text-red-500 text-[10px] mt-0.5">{errors.password.message}</p>
            )}
          </div>

          {/* Name */}
          <div>
            <label className="text-xs text-black block mb-1 font-[Poppins]">Name</label>
            <input
              {...register("name")}
              placeholder="Full Name"
              className="w-full border border-[#C0C0C0] px-3 py-3 rounded-md text-xs"
            />
            {errors.name && (
              <p className="text-red-500 text-[10px] mt-0.5">{errors.name.message}</p>
            )}
          </div>

          {/* Contact No. */}
          <div>
            <label className="text-xs text-black block mb-1 font-[Poppins]">Contact No.</label>
            <input
              {...register("number")}
              placeholder="Contact"
              className="w-full border border-[#C0C0C0] px-3 py-3 rounded-md text-xs"
            />
            {errors.number && (
              <p className="text-red-500 text-[10px] mt-0.5">{errors.number.message}</p>
            )}
          </div>

          {/* Employee ID */}
          <div>
            <label className="text-xs text-black block mb-1 font-[Poppins]">Employee ID</label>
            <input
              {...register("employeeId")}
              placeholder="Employee ID"
              className="w-full border border-[#C0C0C0] px-3 py-3 rounded-md text-xs"
            />
          </div>

          {/* Job Role */}
          <div>
            <label className="text-xs text-black block mb-1 font-[Poppins]">Job Role</label>
            <input
              {...register("jobRole")}
              placeholder="Role"
              className="w-full border border-[#C0C0C0] px-3 py-3 rounded-md text-xs"
            />
          </div>

          {/* Department */}
          <div>
            <label className="text-xs text-black block mb-1 font-[Poppins]">Department</label>
            <input
              {...register("department")}
              placeholder="Department"
              className="w-full border border-[#C0C0C0] px-3 py-3 rounded-md text-xs"
            />
          </div>

          {/* Joined On */}
          <div>
            <label className="text-xs text-black block mb-1 font-[Poppins]">Joined On</label>
            <input
              {...register("joinedOn")}
              placeholder="MM/YY"
              className="w-full border border-[#C0C0C0] px-3 py-3 rounded-md text-xs"
            />
          </div>
             </div>
          )
        }

        {
          selectrole === 'admin' &&(
             <div className="flex flex-col gap-4  ">
              {/* Email */}
              <div>
                <label className="text-xs text-black block mb-1 font-[Poppins]">Enter Email address</label>
                <input
                  {...register("email")}
                  placeholder="Email"
                  className="w-full border border-[#C0C0C0] px-3 py-3 rounded-md text-xs"
                />
                {errors.email && (
                  <p className="text-red-500 text-[10px] mt-0.5">{errors.email.message}</p>
                )}
              </div>

           <div className="flex flex-row gap-3">
                {/* Name */}
              <div className="w-1/2">
                <label className="text-xs text-black block mb-1 font-[Poppins]">Name</label>
                <input
                  {...register("name")}
                  placeholder="Full Name"
                  className="w-full border border-[#C0C0C0] px-3 py-3 rounded-md text-xs"
                />
                {errors.name && (
                  <p className="text-red-500 text-[10px] mt-0.5">{errors.name.message}</p>
                )}
              </div>

              {/* Contact No. */}
              <div className="w-1/2">
                <label className="text-xs text-black block mb-1 font-[Poppins]">Contact No.</label>
                <input
                  {...register("number")}
                  placeholder="Contact"
                  className="w-full border border-[#C0C0C0] px-3 py-3 rounded-md text-xs"
                />
                {errors.number && (
                  <p className="text-red-500 text-[10px] mt-0.5">{errors.number.message}</p>
                )}
              </div>
            </div> 
            
               {/* Password */}
              <div>
                <label className="text-xs text-black block mb-1 font-[Poppins]">Password</label>
                <input
                  {...register("password")}
                  type="password"
                  placeholder="Password"
                  className="w-full border border-[#C0C0C0] px-3 py-3 rounded-md text-xs"
                />
                {errors.password && (
                  <p className="text-red-500 text-[10px] mt-0.5">{errors.password.message}</p>
                )}
              </div>



            </div>
          )
        }

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#2C2C2C] text-white py-3 mt-5 rounded-md text-xs font-medium hover:opacity-90 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpCard;
