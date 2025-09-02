import React from "react";

const LabPolicySectionWrap = ({ title, category, updatedOn, isOpen, onToggle, children, categoryColor }) => {
  const defaultcolor = { bg: '#F1F5F9', text: '#444' };
  const color = categoryColor || defaultcolor;

  return (
    <div className="w-full flex flex-col rounded-md border cursor-pointer border-gray-200 bg-white p-4 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center w-full " onClick={onToggle}>
        <div className="flex flex-col">
          <h3 className="text-[#020817] text-[16px] font-medium">{title}</h3>
          <div className="flex items-center gap-3 mt-1">
            <span
              className="flex items-center px-3 py-[2px] rounded-full text-[12px] tracking-[-0.6px]"
              style={{
                backgroundColor: color.bg,
                color: color.text
              }}
            >
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
        <button className="text-gray-500 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-5 h-5 transition-transform cursor-pointer duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 pt-4 border-t border-gray-200 text-sm">
          {children}
        </div>
      )}
    </div>
  );
};

export default LabPolicySectionWrap;