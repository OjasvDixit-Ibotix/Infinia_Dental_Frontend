import React from "react";
import { CalendarDays } from "lucide-react";
import BlackIconWrapper from "../../BlackIconWrapper";
import CalendarIconYellow from "../../../assets/svgs/WelcomePage/CalendarIconYellow";

const events = {
  8: "training",
  15: "training",
  22: "training",
  28: "training",
};


const EmpCalendar = () => {
  
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
     <div className="flex  h-[489px] flex-col items-start shrink-0">

    <div className=" flex flex-col items-start h-[500px] p-6 gap-3 shrink-0 self-stretch 
                rounded-md bg-white/60 shadow-xl backdrop-blur-sm">

      <div className="flex items-center gap-4 self-stretch">
        <BlackIconWrapper logo={<CalendarIconYellow />}/>
        <h2 className="text-[#444] font-normal text-[24px] leading-[24px] tracking-[-0.6px] font-[Segoe UI Symbol]">Calendar</h2>
      </div>

      {/* Calendar Grid a*/}

      <div className="w-full grid grid-cols-7 gap-2 text-center text-sm font-medium text-[#3a312a] ">
        {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
          <div className="" key={day}>{day}</div>
        ))}
        {days.map((day,index) => (
          <div
            key={day+index}
            className={`w-10 h-8 flex items-center justify-center rounded-md text-[#444] text-center text-[12px] leading-[16px] font-normal font-[Segoe UI Symbol] ${
              events[day] ? "bg-[#EFCD78] text-[#FFFFFF] " : "" 
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className=" flex flex-col items-start   border-t border-gray-400 pt-[17px] gap-[12px]  w-full text-[#444] text-[16px] leading-[24px] font-normal font-[Segoe UI Symbol]">
       <div className="flex flex-col items-start stretch-0 gap-[12px] ">
          Upcoming Events
        </div>
         <div className="flex   items-center stretch-0 gap-2">
          <span className="w-3 h-3 rounded-full  bg-blue-500"></span>
          Team Meeting
        </div>
         <div className="flex  items-center  stretch-0 gap-2">
          <span className="w-3 h-3 rounded-full bg-orange-500"></span>
          Product Launch
        </div>
      <div className="flex   items-center stretch-0 gap-2">   
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          Training Seminar
        </div>
        <div className="flex   items-center stretch-0 gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          Holiday
        </div>
      </div>
      
    </div>
     </div>

  );
};

export default EmpCalendar;
