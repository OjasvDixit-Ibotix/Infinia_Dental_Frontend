import React from 'react';
import SearchBar from '../SearchBar';

const WelcomeNavbar = () => {
  return (
    <div className="flex flex-col gap-3 rounded-[20px] w-full max-w-[1336px] mx-auto ">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2 sm:gap-4">
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-[12px] bg-[#444]">
            <p className="text-[#EFCD78] font-[400] text-[18px] leading-[28px] font-[Segoe UI Symbol]">ID</p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#444] font-[400] text-[18px] sm:text-[20px] md:text-[24px] leading-[26px] sm:leading-[28px] md:leading-[32px] font-[Segoe UI Symbol]">
              Welcome, Admin!
            </p>
            <p className="text-[#444] font-[400] text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px] font-[Segoe UI Symbol]">
              Infinia Dental HR Portal
            </p>
          </div>
        </div>
      </div>

      <SearchBar placeholder="Search employees, reports, leaves..." />

      <div className="flex flex-wrap gap-2">
        {['Time Off', 'Handbook', 'Seminars', 'Forms', 'Lab Protocols'].map((item) => (
          <div
            key={item}
            className="flex items-center px-3 sm:px-4 py-1 rounded-full border border-[#EFCD78] bg-[rgba(239,205,120,0.3)]"
          >
            <p className="text-[#444] text-xs sm:text-[12px] leading-[15px] sm:leading-[16px] font-[400] font-[Segoe UI Symbol]">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WelcomeNavbar;
