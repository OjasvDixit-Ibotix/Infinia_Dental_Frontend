import React from "react";
import BlackIconWrapper from "../../BlackIconWrapper";
import EmployehandBook from "../../../assets/svgs/WelcomePage/EmployehandBook";
import LeaveRequest from "../../../assets/svgs/WelcomePage/LeaveRequest";
import LeaveToday from "../../../assets/svgs/WelcomePage/LeaveToday";
import TimeEventsIcon from "../../../assets/svgs/EmpTimesheet/TimeEventsIcon";
import FilterIcon from "../../../assets/svgs/EmpTimesheet/FilterIcon";
import ExportIcon from "../../../assets/svgs/EmpTimesheet/ExportIcon";
import { useNavigate } from "react-router-dom";

const timeEntries = [
  {
    date: "Jul 4, 2024",
    clockIn: "08:00 AM",
    clockOut: "05:30 PM",
    totalHours: "8.5h",
    status: "Complete",
    notes: "--",
  },
  {
    date: "Jul 3, 2024",
    clockIn: "08:15 AM",
    clockOut: "05:45 PM",
    totalHours: "8.5h",
    status: "Complete",
    notes: "Late due to appointment",
  },
  {
    date: "Jul 2, 2024",
    clockIn: "07:45 AM",
    clockOut: "06:00 PM",
    totalHours: "9.25h",
    status: "Complete",
    notes: "Overtime for patient care",
  },
  {
    date: "Jul 1, 2024",
    clockIn: "08:00 AM",
    clockOut: "05:00 PM",
    totalHours: "8h",
    status: "Complete",
    notes: "--",
  },
];

const  EmpTimeEntriesTable=()=> {
  const navigate= useNavigate()
  return (
    <>
    <div className="flex flex-col gap-7 ">

    <div className= "commonCardCss h-fit flex flex-col  gap-[30px] self-stretch w-[792px]  p-6 rounded-2xl">
      <div className=" flex  justify-between items-end self-stretch ">
        <div className="flex items-center gap-3 ">
         <BlackIconWrapper  logo={<TimeEventsIcon/>}/>
          <span className="font-normal text-[24px] leading-[24px] text-gray-800">
            Time Entries
          </span>
        </div>
        <div className="flex items-center gap-2  mt-4">
          <button className="h-9 flex items-center gap-2 bg-white px-3 py-1 rounded-md border border-slate-200">
            <FilterIcon/>
            <span className="font-normal text-sm text-[#444]">Filter</span>
          </button>
          <button className="h-9 flex items-center gap-2 bg-white px-3 py-1 rounded-md border border-slate-200">
            <ExportIcon/>
            <span className="font-normal text-sm text-[#444]">Export</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col self-stretch rounded-lg border border-gray-200">
        <div className="flex h-12 border-b border-slate-200">
          {["Date", "Clock In", "Clock Out", "Total Hours", "Status", "Notes"].map(
            (header, idx) => (
              <div
                key={idx}
                className="flex items-center px-2   w-full max-w-[150px] min-w-[130px]"
              >
                <span className="font-normal text-sm text-[#444]">{header}</span>
              </div>
            )
          )}
        </div>

        {timeEntries.map((entry, idx) => (
          <div
            key={idx}
            className="flex items-center border-t border-slate-200 h-[55px]"
          >
            <div className="px-2 w-full max-w-[150px] min-w-[130px]">
              <span className="font-normal text-sm text-[#444]">{entry.date}</span>
            </div>
            <div className="px-2 w-full max-w-[150px] min-w-[130px]">
              <span className="font-normal text-sm text-[#444]">{entry.clockIn}</span>
            </div>
            <div className="px-2 w-full max-w-[150px] min-w-[130px]">
              <span className="font-normal text-sm text-[#444]">{entry.clockOut}</span>
            </div>
            <div className="px-2 w-full max-w-[150px] min-w-[130px]">
              <span className="font-normal text-sm text-[#444]">{entry.totalHours}</span>
            </div>
            <div className="px-2 w-full max-w-[150px] min-w-[130px]">
              <span className="text-xs bg-[#efcd78] text-[#444] px-3 py-[3px] rounded-full border border-[#efcd78]">
                {entry.status}
              </span>
            </div>
            <div className="px-0 w-full max-w-[250px]">
              <span className="font-normal text-sm text-[#444]">{entry.notes}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

   <div className="flex items-center gap-4">
        
        <div onClick={()=>navigate('/request-leave')}  className="h-16 cursor-pointer flex justify-center items-center gap-2 bg-[#444444] px-5 py-2 rounded-xl">
            <span className="font-normal text-lg text-center text-white">
            Request Leave
            </span>
        </div>

        <div  className=" h-16 flex flex-col pl-6">
            <div className="h-16 flex justify-center cursor-pointer items-center gap-2 bg-[#efcd78] px-5 py-2 rounded-xl">
              <span className="font-normal text-lg text-center text-[#444444]">
                  Leave Balance Overview
              </span>
            </div>
        </div>
     </div>
    </div>
    </>



  );
}


export default EmpTimeEntriesTable