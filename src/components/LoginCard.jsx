import React from "react";
import { Link } from "react-router-dom";

const LoginCard = ({ onSwitch }) => {
  return (
    <div className="w-full max-w-[409px] bg-white rounded-[32px] sm:rounded-[40px] shadow-[0px_4px_35px_rgba(0,0,0,0.08)] px-4 sm:px-8 md:px-10 py-8 sm:py-10 mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-black">Welcome!</h2>
        <p className="text-xs sm:text-sm text-[#ABABAB]">
          No Account?{" "}
          <span
            onClick={onSwitch}
            className="text-[#EFCD78] font-semibold cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </div>
      <h1 className="text-2xl sm:text-[34px] font-normal text-black font-[Poppins] leading-tight mb-6">
        Log In
      </h1>
      <div className="mb-5">
        <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-black mb-2">
          Enter your username or email address
        </label>
        <input
          id="email"
          type="text"
          placeholder="Username or email address"
          className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-[#C0C0C0] rounded-md outline-none focus:border-[#3b82f6] text-xs sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-xs sm:text-sm font-medium text-black mb-2">
          Enter your Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-[#C0C0C0] rounded-md outline-none text-xs sm:text-sm"
        />
        <div className="text-right mt-2 text-xs text-[#EFCD78] cursor-pointer">
          Forgot Password
        </div>
      </div>
      <Link to='/dashboard'>
        <button className="w-full bg-[#2C2C2C] text-white py-2 sm:py-3 rounded-lg shadow hover:opacity-90 transition mt-4 text-xs sm:text-base">
          Log in
        </button>
      </Link>
    </div>
  );
};

export default LoginCard;
