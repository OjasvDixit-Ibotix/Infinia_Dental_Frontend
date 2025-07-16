import React from 'react'
import SearchBar from '../SearchBar'
import DownloadIconYellow from '../../assets/svgs/WelcomePage/DownloadIconYellow'

const HeaderFormDocs = () => {
  return (
    <div className="flex w-full flex-col items-start gap-6">
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div className="flex flex-col items-start">
          <h1 className="text-[#444] font-normal text-xl sm:text-2xl md:text-[30px] leading-7 sm:leading-8 font-[Segoe UI Symbol]">
            Forms and Documents
          </h1>
          <p className="text-[#444] font-normal text-sm sm:text-base leading-5 sm:leading-6 font-[Segoe UI Symbol]">
            Access HR, tax, and product-related forms
          </p>
        </div>

        <button className="flex justify-center items-center gap-2 px-4 py-2 rounded-md bg-[#EFCD78] w-full sm:w-auto hover:bg-[#efcd78cc] transition">
          <DownloadIconYellow />
          <p className="text-white text-sm sm:text-base leading-5 sm:leading-6 font-[Segoe UI Symbol]">
            Download All Forms
          </p>
        </button>
      </div>

      <div className="w-full">
        <SearchBar placeholder="Search forms..." />
      </div>
    </div>
  );
};

export default HeaderFormDocs;
