import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { fetchTimeEntries } from "../../../slices/timeEntries/timeEntriesSlice"; // Adjust this import path
import BlackIconWrapper from "../../BlackIconWrapper";
import TimeEventsIcon from "../../../assets/svgs/EmpTimesheet/TimeEventsIcon";
import FilterIcon from "../../../assets/svgs/EmpTimesheet/FilterIcon";
import ExportIcon from "../../../assets/svgs/EmpTimesheet/ExportIcon";

const EmpTimeEntriesTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { timeEntries, isLoading, error } = useSelector((state) => state.timeEntries);

  return (
    <>
      {/* RESPONSIVE: This outer container now takes up available space */}
      <div className="flex flex-col gap-7 w-full">
        {/* RESPONSIVE: Removed fixed width w-[792px] */}
        <div className="commonCardCss h-fit flex flex-col gap-[30px] self-stretch w-full p-4 sm:p-6 rounded-2xl">
          
          {/* RESPONSIVE: Stacks on mobile, row on larger screens */}
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between sm:items-end self-stretch">
            <div className="flex items-center gap-3">
              <BlackIconWrapper logo={<TimeEventsIcon />} />
              <span className="font-normal text-xl sm:text-2xl leading-[24px] text-gray-800">
                Time Entries
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button className="h-9 flex items-center gap-2 bg-white px-3 py-1 rounded-md border border-slate-200">
                <FilterIcon />
                <span className="font-normal text-sm text-[#444]">Filter</span>
              </button>
              <button className="h-9 flex items-center gap-2 bg-white px-3 py-1 rounded-md border border-slate-200">
                <ExportIcon />
                <span className="font-normal text-sm text-[#444]">Export</span>
              </button>
            </div>
          </div>

          {/* RESPONSIVE: Added a wrapper to allow the table to scroll horizontally on small screens */}
          <div className="w-full overflow-x-auto">
            {/* Added min-width to ensure table layout is preserved while scrolling */}
            <div className="flex flex-col self-stretch rounded-lg border border-gray-200 min-w-[700px]">
              <div className="flex h-12 border-b border-slate-200 bg-gray-50">
                {["Date", "Clock In", "Clock Out", "Total Hours", "Status", "Notes"].map(
                  (header, idx) => (
                    // RESPONSIVE: Using flex-1 to allow columns to grow/shrink, with a base width
                    <div key={idx} className="flex items-center px-3 w-[15%] min-w-[120px]">
                      <span className="font-medium text-sm text-gray-600">{header}</span>
                    </div>
                  )
                )}
              </div>

              {isLoading ? (
                <div className="flex items-center justify-center h-[55px]">Loading entries...</div>
              ) : error ? (
                <div className="flex items-center justify-center h-[55px] text-red-500">Failed to load data: {error}</div>
              ) : timeEntries.length === 0 ? (
                <div className="flex items-center justify-center h-[55px]">No time entries found.</div>
              ) : (
                timeEntries.map((entry) => (
                  <div key={entry.id} className="flex items-center border-t border-slate-200 h-[55px]">
                    <div className="px-3 w-[15%] min-w-[120px]">
                      <span className="font-normal text-sm text-[#444]">{entry.date}</span>
                    </div>
                    {/* ... other columns with same classes ... */}
                    <div className="px-3 w-[15%] min-w-[120px]">
                      <span className="font-normal text-sm text-[#444]">{entry.clockIn}</span>
                    </div>
                    <div className="px-3 w-[15%] min-w-[120px]">
                      <span className="font-normal text-sm text-[#444]">{entry.clockOut}</span>
                    </div>
                    <div className="px-3 w-[15%] min-w-[120px]">
                      <span className="font-normal text-sm text-[#444]">{entry.totalHours}</span>
                    </div>
                    <div className="px-3 w-[15%] min-w-[120px]">
                      <span className={`text-xs px-3 py-[3px] rounded-full border ${entry.status === 'Complete' ? 'bg-green-100 border-green-200 text-green-800' : 'bg-yellow-100 border-yellow-200 text-yellow-800'}`}>
                        {entry.status}
                      </span>
                    </div>
                    <div className="px-3 w-[25%] min-w-[150px]">
                      <span className="font-normal text-sm text-[#444] truncate">{entry.notes}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* RESPONSIVE: Stack buttons vertically on small screens, make them full width */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div onClick={() => navigate("/request-leave")} className="h-14 sm:h-16 w-full sm:w-auto cursor-pointer flex justify-center items-center gap-2 bg-[#444444] px-5 py-2 rounded-xl">
            <span className="font-normal text-lg text-center text-white">
              Request Leave
            </span>
          </div>
          <div onClick={() => navigate("/leave-balance")} className="h-14 sm:h-16 w-full sm:w-auto cursor-pointer flex justify-center items-center gap-2 bg-[#efcd78] px-5 py-2 rounded-xl">
            <span className="font-normal text-lg text-center text-[#444444]">
              Leave Balance Overview
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmpTimeEntriesTable;