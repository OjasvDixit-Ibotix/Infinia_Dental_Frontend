import React from 'react';


const RequestLeaveCardWrap = ({ logo, typeofleave, totalleave, daysleft }) => {

  const daysUsed = totalleave - daysleft;

  const progressPercentage = totalleave > 0 ? (daysUsed / totalleave) * 100 : 0;

  const percentRemaining = totalleave > 0 ? Math.round((daysleft / totalleave) * 100) : 0;
  
  const leaveLeftOutOfString = `${daysleft}/${totalleave}`;


  return (
    <div className="flex flex-col flex-1 bg-white p-4 sm:p-6 rounded-2xl shadow-sm">
      <div className="flex flex-col gap-4 self-stretch">

        <div className="flex items-center justify-between self-stretch">
          <div className="w-11 h-11 flex justify-center items-center bg-[#444444] rounded-lg flex-shrink-0">
            <div className="w-6 h-6 text-white">
              {logo}
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-2xl sm:text-3xl font-semibold text-[#444444]">{daysleft}</span>
            <span className="text-sm text-gray-500">Days Left</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <span className="text-sm font-medium text-[#444444]">{typeofleave}</span>
            <span className="text-sm font-semibold text-[#efcd78]">{leaveLeftOutOfString}</span>
          </div>

          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-2 bg-[#efcd78] rounded-full transition-all duration-500"
              // Use the calculated progress percentage
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          <div className="flex justify-between">
            {/* Use the calculated days used */}
            <span className="text-xs text-gray-500">Used: {daysUsed} days</span>
            {/* Use the calculated remaining percentage */}
            <span className="text-xs text-gray-500">{percentRemaining}% remaining</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestLeaveCardWrap;