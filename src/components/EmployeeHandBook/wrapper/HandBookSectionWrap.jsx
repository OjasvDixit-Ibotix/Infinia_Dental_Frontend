import React from "react";

const HandBookSectionWrap = ({ title, category, updatedOn }) => {
  return (
    <div className="w-full flex justify-between items-center rounded-md border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col">
        <h3 className="text-[#020817] text-[16px] font-medium">{title}</h3>

        <div className="flex items-center gap-3 mt-1">
          <span className="flex items-center px-3 py-[2px] rounded-full bg-[#F1F5F9] text-[#444] text-[12px] tracking-[-0.6px]">
            {category}
          </span>
          <div className="flex items-center text-gray-500 text-[12px] tracking-[-0.6px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-1 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Updated: {updatedOn}
          </div>
        </div>
      </div>

      <button className="text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
};

export default HandBookSectionWrap;
