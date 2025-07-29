import React from 'react';

const RequestLeaveCardWrap = ({ logo, daysleft, typeofleave, noOfDaysUsed, percentRemain, leaveleftoutof, totalleave }) => {
  const progressPercentage = ((totalleave - daysleft) / totalleave) * 100;

  return (
    <div className="  flex flex-col w-full md:w-1/3  lg:w-1/4 min-w-[359px]  bg-white p-6 rounded-2xl">
      <div className="flex flex-col gap-4 self-stretch p-4">

        <div className="flex items-center justify-between self-stretch">
          <div className="w-[44px] h-[44px] flex justify-center items-center bg-[#444444] rounded-lg">
            <div className="w-6 h-6">
              {logo}
            </div>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-2xl text-[#444444]">{daysleft}</span>
            <span className="text-sm text-[#444444]">Days Left</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <span className="text-sm text-[#444444]">{typeofleave}</span>
            <span className="text-sm text-[#efcd78]">{leaveleftoutof}</span>
          </div>

          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-[#efcd78] rounded-full" style={{ width: `${progressPercentage}%` }} />
          </div>

          <div className="flex justify-between">
            <span className="text-xs text-[#444444]">Used: {noOfDaysUsed} days</span>
            <span className="text-xs text-[#444444]">{percentRemain} remaining</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestLeaveCardWrap;
