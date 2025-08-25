// src/components/EmployeeComponents/EmpTimesheetPageComp/EmpTimeSheetHeader.jsx

import React, { useState, useEffect } from 'react';

const EmpTimeSheetHeader = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = new Intl.DateTimeFormat('en-IN', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  }).format(currentDateTime);

  const formattedDate = new Intl.DateTimeFormat('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(currentDateTime);

  return (
    // RESPONSIVE: Stacks vertically on small screens, row on screens > 640px (sm)
    <div className="flex w-full flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col items-start gap-1">
        {/* RESPONSIVE: Adjusted font sizes for mobile */}
        <p className="text-[#444] font-[Segoe_UI] text-2xl md:text-3xl font-normal leading-tight">
          Timesheet
        </p>
        <p className="text-[#444] font-[Segoe_UI] text-sm md:text-base font-normal leading-6">
          Track your work hours and manage time entries
        </p>
      </div>

      {/* RESPONSIVE: Aligns to start on mobile, end on larger screens */}
      <div className="flex flex-col items-start sm:items-end">
        {/* RESPONSIVE: Adjusted font sizes for mobile */}
        <p className='text-[#444] text-right font-["Segoe UI"] text-xl md:text-2xl font-normal leading-8'>
          {formattedTime}
        </p>
        <p className='text-[#444] text-right font-["Segoe UI"] text-xs md:text-sm font-normal leading-5'>
          {formattedDate}
        </p>
      </div>
    </div>
  );
};

export default EmpTimeSheetHeader;