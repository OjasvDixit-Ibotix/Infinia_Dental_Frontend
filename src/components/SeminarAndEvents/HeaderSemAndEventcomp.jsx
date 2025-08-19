import React from 'react';
import SearchBar from '../SearchBar';

const HeaderSemAndEventcomp = () => {
  return (
    <div className="flex w-full flex-col items-start gap-6">
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div className="flex flex-col items-start">
          <h1 className="text-[#444] font-normal text-[24px] sm:text-[30px] leading-[32px] sm:leading-[36px] font-[Segoe UI Symbol]">
            Seminars & Events
          </h1>
          <p className="text-[#444] font-normal text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-[Segoe UI Symbol]">
            Professional development and training opportunities
          </p>
        </div>
      </div>

      <div className="w-full">
        <SearchBar placeholder={'Search Seminars or events...'} />
      </div>

      <div className="flex flex-wrap items-start gap-12 w-full">
        <div className="flex min-w-[160px] flex-col gap-3">
          <p className="text-[#444] font-normal text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-[Segoe UI Symbol]">
            Topic
          </p>
          <div className="flex items-center px-4 sm:px-[17px] pr-[29px] py-[9px] rounded-md border border-[#EFCD78] bg-[rgba(239,205,120,0.70)]">
            <p className="text-[#444] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-[Segoe UI Symbol]">
              All Topics
            </p>
          </div>
        </div>

        <div className="flex min-w-[160px] flex-col gap-3">
          <p className="text-[#444] font-normal text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-[Segoe UI Symbol]">
            Format
          </p>
          <div className="flex items-center px-4 sm:px-[17px] pr-[29px] py-[9px] rounded-md border border-[#EFCD78] bg-[rgba(239,205,120,0.70)]">
            <p className="text-[#444] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-[Segoe UI Symbol]">
              All Formats
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSemAndEventcomp;
