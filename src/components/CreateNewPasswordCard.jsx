import React from "react";

const CreateNewPasswordCard = () => {
  return (
    <div className="flex flex-col items-center gap-8 bg-white px-[30px] py-3 shadow-md rounded-[10px]">
      {/* Title */}
      <div className="flex flex-col gap-3">

      <span className="font-normal text-[40px] leading-[52px] text-[#444444]">
        New Password
      </span>

      {/* Subtitle */}
      <span className="font-normal text-base text-[#828282] ">
        Set the new password for your account so you can login and access all features.
      </span>
      </div>
      {/* Form */}
      <div className="flex flex-col gap-6 w-full">
        {/* New Password */}
        <div className="flex flex-col gap-1 rounded-sm">
          <span className="font-normal text-sm text-[#444444]">
            Enter new password
          </span>
          <input
            type="password"
            placeholder="8 symbols at least"
            className="w-full flex items-center gap-2.5 bg-neutral-50 px-3 py-4 rounded-[5px] border border-solid border-[#eaeaea] text-base text-[#444444] outline-none"
          />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col gap-1 rounded-sm">
          <span className="font-normal text-sm text-[#444444]">
            Confirm password
          </span>
          <input
            type="password"
            placeholder="8 symbols at least"
            className="w-full flex items-center gap-2.5 bg-neutral-50 px-3 py-4 rounded-[5px] border border-solid border-[#eaeaea] text-base text-[#444444] outline-none"
          />
        </div>

        {/* Update Button */}
        <button className="w-full flex justify-center items-center gap-2.5 bg-[#444444] px-8 py-[18px] rounded-[5px] hover:opacity-90 transition">
          <span className="font-semibold text-base text-center underline text-white">
            UPDATE PASSWORD
          </span>
        </button>
      </div>
    </div>
  );
};

export default CreateNewPasswordCard;
