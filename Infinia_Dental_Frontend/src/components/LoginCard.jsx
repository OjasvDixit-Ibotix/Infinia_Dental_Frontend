import React from "react";

const LoginCard = ({ onSwitch }) => {
  return (
    <div className="w-full  max-w-[409px] absolute   bg-white rounded-[40px] shadow-[0px_4px_35px_rgba(0,0,0,0.08)] px-6 sm:px-10 py-10">
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-black">Welcome!</h2>
        <p className="text-sm text-[#ABABAB]">
          No Account?{" "}
          <span
            onClick={onSwitch}
            className="text-[#EFCD78] font-semibold cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </div>

      <h1 className="text-[32px] sm:text-[34px] font-normal text-black font-[Poppins] leading-tight mb-6">
        Log In
      </h1>

      <div className="mb-5">
        <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
          Enter your username or email address
        </label>
        <input
          id="email"
          type="text"
          placeholder="Username or email address"
          className="w-full px-4 py-3 border border-[#C0C0C0] rounded-md outline-none focus:border-[#3b82f6]"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-black mb-2">
          Enter your Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 border border-[#C0C0C0] rounded-md outline-none"
        />
        <div className="text-right mt-2 text-xs text-[#EFCD78] cursor-pointer">
          Forgot Password
        </div>
      </div>

      <button className="w-full bg-[#2C2C2C] text-white py-3 rounded-lg shadow hover:opacity-90 transition mt-4">
        Log in
      </button>
    </div>
  );
};

export default LoginCard;
