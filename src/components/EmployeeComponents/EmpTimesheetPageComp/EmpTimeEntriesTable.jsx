import React, { useState, useEffect } from "react";
import BlackIconWrapper from "../../BlackIconWrapper";
import TimeEventsIcon from "../../../assets/svgs/EmpTimesheet/TimeEventsIcon";
import FilterIcon from "../../../assets/svgs/EmpTimesheet/FilterIcon";
import ExportIcon from "../../../assets/svgs/EmpTimesheet/ExportIcon";
import { useNavigate } from "react-router-dom";
import apiClient from "../../../utils/api/api";

const formatDate = (dateString) => {
  if (!dateString) return "--";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const formatTime = (dateTimeString) => {
  if (!dateTimeString) return "--";
  const date = new Date(dateTimeString);
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

const formatStatus = (status) => {
    if (!status) return "--";
    return status.charAt(0).toUpperCase() + status.slice(1);
}

const EmpTimeEntriesTable = () => {
  const navigate = useNavigate();
  const [timeEntries, setTimeEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const fetchTimeEntries = async () => {
    try {
    
      // const authHeader = { username: "a34a@gmail.com", password: "asdf1234" };
      // const basicAuth = "Basic " + btoa(`${authHeader.username}:${authHeader.password}`);
      
      const response = await apiClient.get("/time-entries");
      //     , {
      //   headers: {
      //     "ngrok-skip-browser-warning": "true",
      //     Authorization: basicAuth,
      //   },
      // });

      console.log('dwdw',response.data);
      

      if (response.data && response.data.time_entries) {
        const formattedEntries = response.data.time_entries.map((entry) => ({
          id: entry.id, 
          date: formatDate(entry.date),
          clockIn: formatTime(entry.clock_in),
          clockOut: formatTime(entry.clock_out),
          totalHours: entry.total_hours ? `${entry.total_hours}h` : "--",
          status: formatStatus(entry.status),
          notes: entry.notes ?? "--",
        }));
        setTimeEntries(formattedEntries);     
      } else {
          setTimeEntries([]);
      }

    } catch (e) {
      console.error("Failed to fetch time entries:", e);
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    fetchTimeEntries();
  }, []); 

  return (
    <>
      <div className="flex flex-col gap-7 ">
        <div className="commonCardCss h-fit flex flex-col gap-[30px] self-stretch w-[792px] p-6 rounded-2xl">
          <div className="flex justify-between items-end self-stretch">
            <div className="flex items-center gap-3">
              <BlackIconWrapper logo={<TimeEventsIcon />} />
              <span className="font-normal text-[24px] leading-[24px] text-gray-800">
                Time Entries
              </span>
            </div>
            <div className="flex items-center gap-2 mt-4">
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

          <div className="flex flex-col self-stretch rounded-lg border border-gray-200">
            <div className="flex h-12 border-b border-slate-200">
              {["Date", "Clock In", "Clock Out", "Total Hours", "Status", "Notes"].map(
                (header, idx) => (
                  <div key={idx} className="flex items-center px-2 w-full max-w-[150px] min-w-[130px]">
                    <span className="font-normal text-sm text-[#444]">{header}</span>
                  </div>
                )
              )}
            </div>

            {isLoading ? (
                <div className="flex items-center justify-center h-[55px]">Loading entries...</div>
            ) : error ? (
                <div className="flex items-center justify-center h-[55px] text-red-500">Failed to load data.</div>
            ) : timeEntries.length === 0 ? (
                <div className="flex items-center justify-center h-[55px]">No time entries found.</div>
            ) : (
                timeEntries.map((entry) => (
              <div
                // BEST PRACTICE: Use a unique ID from the data as the key
                key={entry.id}
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
                  <span className={`text-xs px-3 py-[3px] rounded-full border ${entry.status === 'Complete' ? 'bg-green-200 border-green-300' : 'bg-[#efcd78] border-[#efcd78]'} text-[#444]`}>
                    {entry.status}
                  </span>
                </div>
                <div className="px-0 w-full max-w-[250px]">
                  <span className="font-normal text-sm text-[#444]">{entry.notes}</span>
                </div>
              </div>
            )))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div onClick={() => navigate("/request-leave")} className="h-16 cursor-pointer flex justify-center items-center gap-2 bg-[#444444] px-5 py-2 rounded-xl">
            <span className="font-normal text-lg text-center text-white">
              Request Leave
            </span>
          </div>
          <div onClick={() => navigate("/leave-balance")} className="h-16 flex flex-col pl-6">
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
};

export default EmpTimeEntriesTable;