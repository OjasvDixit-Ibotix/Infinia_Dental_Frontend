import React from 'react'
import BlackIconWrapper from '../BlackIconWrapper'
import TotalEmpl from '../../assets/svgs/WelcomePage/TotalEmpl'

const TabListFormDocs = () => {
  return (
    <div className="w-full flex flex-col gap-6">
        
      <div className="flex w-full flex-wrap p-1 items-center justify-between rounded-md bg-[#EFCD7880] gap-2 sm:gap-4">
        {[
          { label: 'HR Forms', active: false },
          { label: 'Tax Forms', active: true },
          { label: 'Product Related', active: false },
        ].map((tab, idx) => (
          <div
            key={idx}
            className={`flex flex-1 min-w-[100px] justify-center items-center gap-2 rounded px-4 sm:px-6 py-2 cursor-pointer transition ${
              tab.active ? 'bg-white shadow-sm' : 'hover:bg-white'
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                tab.active ? 'bg-[#EAB308]' : 'bg-[#444]'
              }`}
            ></div>
            <p className="text-[#444] text-sm sm:text-base leading-5 sm:leading-6 font-[Segoe UI Symbol]">
              {tab.label}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-start gap-4 w-full">
        <div className="flex items-center gap-3">
          <BlackIconWrapper logo={<TotalEmpl />} />
          <div className="flex flex-col items-start">
            <p className="text-[#444] text-lg sm:text-xl md:text-2xl leading-5 sm:leading-6 font-[Segoe UI Symbol]">
              HR Forms
            </p>
            <p className="text-[#444] text-sm sm:text-base leading-5 sm:leading-6 font-[Segoe UI Symbol]">
              3 forms available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabListFormDocs;
