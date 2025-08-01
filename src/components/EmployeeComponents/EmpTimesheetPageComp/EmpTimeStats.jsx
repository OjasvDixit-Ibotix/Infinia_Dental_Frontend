import React from 'react';
import BlackIconWrapper from '../../BlackIconWrapper';
import TimeEventsIcon from '../../../assets/svgs/EmpTimesheet/TimeEventsIcon';
import DailyAverage from '../../../assets/svgs/EmpTimesheet/DailyAverage';
import ClockIcon from '../../../assets/svgs/WelcomePage/ClockIcon';
import ClockIconYellow from '../../../assets/svgs/EmpTimesheet/ClockIconYellow';

const EmpTimeStats = () => {
  return (
    <div className="flex flex-col gap-6 self-stretch w-[304px] lg:w-[468px]">

      <div className= "commonCardCss flex flex-col items-center gap-4 self-stretch  pt-6 rounded-2xl">
        <div className="flex items-center gap-2  w-[245px] h-[46px]">
         <BlackIconWrapper logo={<TimeEventsIcon/>}/>
          <span className="font-normal text-sm text-[#444444]">This Week</span>
        </div>

        <div className="flex flex-col gap-4 self-stretch px-6 pb-6">
          <div className="flex flex-col items-center self-stretch">
            <span className="font-normal text-3xl text-[#efcd78]">34.25h</span>
            <span className="font-normal text-sm leading-5 text-[#444444]">Total Hours</span>
          </div>

          <div className="self-stretch h-2 bg-gray-200 rounded-full">
            <div className="w-[202px] h-2 bg-gradient-to-b from-[#efcd78] to-[#e7b538] rounded-full" />
          </div>

          <div className="flex flex-col items-center self-stretch">
            <span className="font-normal text-xs text-gray-500">34.25/40 hours</span>
          </div>
        </div>
      </div>

      <div className="commonCardCss flex flex-col gap-4 self-stretch  p-6 rounded-2xl">
        <div className="flex items-center gap-4">
             <BlackIconWrapper logo={<DailyAverage/>}/>
         
          <span className="font-normal text-sm text-[#444444]">Daily Average</span>
        </div>

        <div className="flex flex-col items-center self-stretch">
          <span className="font-normal text-2xl text-[#efcd78]">8.6h</span>
          <span className="font-normal text-sm text-[#444444]">Per Working Day</span>
        </div>
      </div>

      <div className=" commonCardCss flex flex-col items-center gap-4 self-stretch pt-6 rounded-2xl">
        <div className="w-[254px] flex items-center gap-4">
         <BlackIconWrapper logo={<ClockIconYellow/>}/>
          <span className="font-normal text-sm text-[#444444]">Quick Stats</span>
        </div>

        <div className="flex flex-col gap-3 self-stretch px-6 pb-6">
          <div className="flex justify-between items-center">
            <span className="font-normal text-sm text-[#444444]">Days Worked</span>
            <span className="font-normal text-base text-[#444444]">4</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-normal text-sm text-[#444444]">Longest Day</span>
            <span className="font-normal text-base text-[#444444]">9.25h</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-normal text-sm text-[#444444]">On Time</span>
            <div className="flex items-center bg-[#efcd78] px-[11px] py-[3px] rounded-full border border-[#efcd78]">
              <span className="font-normal text-xs text-[#efcd78]">95%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpTimeStats;
