import React, { useState, useEffect } from 'react';

const EmpTimeSheetHeader = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Set up an interval to update the time every second
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []); // The empty array ensures this effect runs only once on mount

  // Format the time to a string like "1:08:52 PM"
  const formattedTime = new Intl.DateTimeFormat('en-IN', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  }).format(currentDateTime);

  // Format the date to a string like "Monday, August 11, 2025"
  const formattedDate = new Intl.DateTimeFormat('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(currentDateTime);

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex flex-col items-start gap-1">
        <p className="text-[#444] font-[Segoe_UI] text-3xl font-normal leading-9">
          Timesheet
        </p>
        <p className="text-[#444] font-[Segoe_UI] text-base font-normal leading-6">
          Track your work hours and manage time entries
        </p>
      </div>

      <div className="flex flex-col items-end">
        <p className='text-[#444] text-right font-["Segoe UI"] text-2xl font-normal leading-8'>
          {formattedTime}
        </p>
        <p className='text-[#444] text-right font-["Segoe UI"] text-sm font-normal leading-5'>
          {formattedDate}
        </p>
      </div>
    </div>
  );
};

export default EmpTimeSheetHeader;