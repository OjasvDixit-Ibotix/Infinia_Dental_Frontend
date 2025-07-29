import React from 'react';

const EmpReqLeaveHeader = () => {
  return (
    <div className="w-full max-w-[1336px] flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <div>
          <span className="font-normal text-3xl text-[#444444]">
            Request Leave
          </span>
        </div>
        <div>
          <span className="font-normal text-base text-[#444444]">
            Apply for leaves
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmpReqLeaveHeader;
