import React from "react";
import { Link } from "react-router-dom";

const SignUpCard = ({ onSwitch }) => {
  return (
    <div className="w-full max-w-[420px]  absolute  bg-white rounded-[32px] shadow-[0_4px_35px_rgba(0,0,0,0.08)] px-6 sm:px-8 py-8">
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-black">Welcome!</h2>
        <p className="text-sm text-[#ABABAB]">
          Have an account?{" "}
          <span
            onClick={onSwitch}
            className="text-[#EFCD78] font-semibold cursor-pointer"
          >
            Log in
          </span>
        </p>
      </div>

      <h1 className="text-[32px] sm:text-[34px] font-normal font-[Poppins] text-black leading-tight mb-6">
        Sign up
      </h1>

      <div className="mb-5">
        <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
          Enter your username or email address
        </label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Username or email address"
          className="w-full px-4 py-3 border border-[#C0C0C0] rounded-md outline-none focus:border-[#3b82f6]"
        />
      </div>

      <div className="mb-4 flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/2">
          <label htmlFor="username" className="block text-sm font-medium text-black mb-2">
            User name
          </label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="User name"
            className="w-full px-4 py-3 border border-[#C0C0C0] rounded-md outline-none"
          />
        </div>

        <div className="w-full sm:w-1/2">
          <label htmlFor="contact" className="block text-sm font-medium text-black mb-2">
            Contact Number
          </label>
          <input
            id="contact"
            name="contact"
            type="text"
            placeholder="Contact Number"
            className="w-full px-4 py-3 border border-[#C0C0C0] rounded-md outline-none"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-black mb-2">
          Enter your Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 border border-[#C0C0C0] rounded-md outline-none"
        />
      </div>

      <button className="w-full bg-[#2C2C2C] text-white py-3 rounded-lg shadow hover:opacity-90 transition mt-4">
        Sign Up
      </button>
    </div>
  );
};

export default SignUpCard;
