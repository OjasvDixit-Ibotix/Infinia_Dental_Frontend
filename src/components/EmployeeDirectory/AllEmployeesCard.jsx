import React from 'react';

const AllEmployeesCard = ({ employee, hasChildren }) => {
  return (
    <div 
      className="flex w-full max-w-full p-[1px] flex-col items-start rounded-md border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex p-4 flex-col items-start gap-4 w-full">
        <div className="flex items-center gap-3 w-full">
          {/* Avatar */}
          <div className="w-12 h-12 bg-[#EFCD78] text-[#444444] rounded-full flex items-center justify-center font-semibold">
            {employee.initials || '??'}
          </div>
          
          {/* Name and Role */}
          <div className="flex flex-col items-start flex-1">
            <p className="text-[#444] font-bold text-base">
              {employee.name}
            </p>
            <p className="text-gray-500 text-sm">
              {employee.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEmployeesCard;