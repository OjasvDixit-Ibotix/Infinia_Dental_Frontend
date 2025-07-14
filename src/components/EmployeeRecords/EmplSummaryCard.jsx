import React from 'react';
import TotalEmpl from '../../assets/svgs/WelcomePage/TotalEmpl';
import ActiveIcon from '../../assets/svgs/WelcomePage/ActiveIcon';
import EmplSummary from '../../assets/svgs/WelcomePage/EmplSummary';

const EmplSummaryCard = () => {
  return (
    <div className="bg-white rounded-xl border border-[#F3C85C] p-5 w-full sm:max-w-sm shadow-md mb-4">
      <h2 className="text-[#444] text-base font-medium flex items-center gap-2 mb-4">
        <EmplSummary />
        Employee Summary
      </h2>

      <div className="bg-[#EDF1F1] rounded-md px-4 py-3 flex items-center gap-4 mb-3">
        <div className="bg-[#2A2A2A] w-10 h-10 flex items-center justify-center rounded-md">
          <TotalEmpl />
        </div>
        <div>
          <p className="text-sm text-[#444]">Total</p>
          <p className="text-sm text-[#EFCD78] font-semibold">6</p>
        </div>
      </div>

      <div className="bg-[#EDF1F1] rounded-md px-4 py-3 flex items-center gap-4 mb-3">
        <div className="bg-[#2A2A2A] w-10 h-10 flex items-center justify-center rounded-md">
          <ActiveIcon />
        </div>
        <div>
          <p className="text-sm text-[#444]">Active</p>
          <p className="text-sm text-[#EFCD78] font-semibold">4</p>
        </div>
      </div>

      <div className="bg-[#E9E5E9] rounded-md px-4 py-3 flex items-center gap-4">
        <div className="bg-[#2A2A2A] w-10 h-10 flex items-center justify-center rounded-md">
        </div>
        <div>
          <p className="text-sm text-[#444]">On Leave</p>
          <p className="text-sm text-[#EFCD78] font-semibold">1</p>
        </div>
      </div>
    </div>
  );
};

export default EmplSummaryCard;
