import React from 'react';
import Searchicon from '../../assets/svgs/WelcomePage/Searchicon';

const WelcomeNavbar = () => {
  return (
    <div className="flex flex-col items-start gap-4 rounded-[20px] py-4 px-2 w-full max-w-[1336px] mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-[12px] bg-[#444]">
            <p className="text-[#EFCD78] font-[400] text-[18px] leading-[28px] font-[Segoe UI Symbol]">ID</p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#444] font-[400] text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-[Segoe UI Symbol]">
              Welcome, Admin!
            </p>
            <p className="text-[#444] font-[400] text-[14px] leading-[20px] font-[Segoe UI Symbol]">
              Infinia Dental HR Portal
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[672px]">
        <div className="relative flex items-center h-[48px] rounded-[12px] border border-[#EFCD78] bg-[rgba(255,255,255,0.5)] w-full px-4 pl-10">
          <div className="absolute left-[12px] top-[14px] w-5 h-5 text-gray-600">
            <Searchicon />
          </div>
          <input
            type="text"
            placeholder="Search employees, reports, leaves..."
            className="w-full bg-transparent border-none outline-none text-[#444] placeholder:text-[#444] placeholder:text-[14px] placeholder:font-[400] placeholder:leading-none placeholder:font-[Segoe UI Symbol]"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {['Time Off', 'Handbook', 'Seminars', 'Forms', 'Lab Protocols'].map((item) => (
          <div
            key={item}
            className="flex items-center h-[22px] px-[11px] py-[3px] rounded-full border border-[#EFCD78] bg-[rgba(239,205,120,0.3)]"
          >
            <p className="text-[#444] text-[12px] leading-[16px] font-[400] font-segouisymbol">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WelcomeNavbar;
