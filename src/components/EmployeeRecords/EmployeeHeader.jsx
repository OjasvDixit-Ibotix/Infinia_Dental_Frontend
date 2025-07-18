import React from 'react';

const EmployeeHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center   pt-4 sm:pt-6">
      <div>
        <h1 className="text-[#444] font-normal text-[24px] sm:text-[30px] leading-[32px] sm:leading-[36px] font-[Segoe UI Symbol]">
          Employee Records
        </h1>
        <p className="text-[#4B5563] font-normal text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-[Segoe UI Symbol]">
          6 employees found
        </p>
      </div>

      <button className="mt-4 sm:mt-0 inline-flex items-center gap-2 px-4 py-2 sm:px-[17px] sm:py-[9px] bg-[#EFCD78] rounded-[6px] border border-[#EFCD78] hover:bg-[#e6c25c] transition text-[#444] text-[14px] leading-[20px] font-[Segoe UI Symbol]">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
          <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="#444" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.66602 6.66699L7.99935 10.0003L11.3327 6.66699" stroke="#444" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 10V2" stroke="#444" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Add Employee
      </button>
    </div>
  );
};

export default EmployeeHeader;
