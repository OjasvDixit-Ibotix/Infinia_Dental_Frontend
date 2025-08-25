import React, { useMemo } from 'react';
import BlackIconWrapper from '../../BlackIconWrapper';
import TimeEventsIcon from '../../../assets/svgs/EmpTimesheet/TimeEventsIcon';
import DailyAverage from '../../../assets/svgs/EmpTimesheet/DailyAverage';
import ClockIconYellow from '../../../assets/svgs/EmpTimesheet/ClockIconYellow';
import { useSelector } from 'react-redux';

const EmpTimeStats = () => {
    const { timeEntries, isLoading, error } = useSelector((state) => state.timeEntries);
      console.log(timeEntries);
      
    const stats = useMemo(() => {
        if (!timeEntries || timeEntries.length === 0) {
            return {
                totalHours: 0,
                daysWorked: 0,
                dailyAverage: 0,
                progressPercentage: 0,
                longestDay: 0, 
            };
        }

        // 1. Calculate minutes for each day to easily find the sum and the max
        const minutesPerDay = timeEntries.map(entry => {
            if (!entry.totalHours) return 0;
            const timeParts = entry.totalHours.match(/(\d+)h\s*(\d+)m/);
            if (!timeParts) return 0;

            const hours = parseInt(timeParts[1], 10);
            const minutes = parseInt(timeParts[2], 10);
            return (hours * 60) + minutes;
        });
          const getMinutes = (timeString) => {
            if (!timeString) return 0;
            const timeParts = timeString.match(/(\d+)h\s*(\d+)m/);
            if (!timeParts) return 0;
            const hours = parseInt(timeParts[1], 10);
            const minutes = parseInt(timeParts[2], 10);
            return (hours * 60) + minutes;
        };

        const totalMinutes = minutesPerDay.reduce((acc, curr) => acc + curr, 0);
        console.log(minutesPerDay);
        
        const maxMinutes = Math.max(...minutesPerDay); 

        const totalHours = parseFloat((totalMinutes / 60).toFixed(2));
        const daysWorked = timeEntries.length;
        const dailyAverage = daysWorked > 0 ? parseFloat((totalHours / daysWorked).toFixed(1)) : 0;
        const progressPercentage = (totalHours / 40) * 100;
        const longestDay = parseFloat((maxMinutes / 60).toFixed(2)); // Convert max minutes to decimal hours
           const longestEntry = timeEntries.reduce((longest, current) => {
            return getMinutes(current.totalHours) > getMinutes(longest.totalHours) ? current : longest;
        });
        return { totalHours, daysWorked, dailyAverage, progressPercentage, longestDay: longestEntry.totalHours };
    }, [timeEntries]);

    return (
        <div className="flex flex-col gap-6 self-stretch  lg:w-[468px]">

            {/* Total Hours Card */}
            <div className="commonCardCss flex flex-col items-center gap-4 self-stretch pt-6 rounded-2xl">
                <div className="flex items-center gap-2 w-[245px] h-[46px]">
                    <BlackIconWrapper logo={<TimeEventsIcon />} />
                    <span className="font-normal text-sm text-[#444444]">This Week</span>
                </div>

                <div className="flex flex-col gap-4 self-stretch px-6 pb-6">
                    <div className="flex flex-col items-center self-stretch">
                        <span className="font-normal text-3xl text-[#efcd78]">{stats.totalHours}h</span>
                        <span className="font-normal text-sm leading-5 text-[#444444]">Total Hours</span>
                    </div>

                    <div className="self-stretch h-2 bg-gray-200 rounded-full">
                        <div 
                            className="h-2 bg-gradient-to-b from-[#efcd78] to-[#e7b538] rounded-full" 
                            style={{ width: `${stats.progressPercentage}%` }} 
                        />
                    </div>

                    <div className="flex flex-col items-center self-stretch">
                        <span className="font-normal text-xs text-gray-500">{stats.totalHours}/40 hours</span>
                    </div>
                </div>
            </div>

            {/* Daily Average Card */}
            <div className="commonCardCss flex flex-col gap-4 self-stretch p-6 rounded-2xl">
                <div className="flex items-center gap-4">
                    <BlackIconWrapper logo={<DailyAverage />} />
                    <span className="font-normal text-sm text-[#444444]">Daily Average</span>
                </div>
                <div className="flex flex-col items-center self-stretch">
                    <span className="font-normal text-2xl text-[#efcd78]">{stats.dailyAverage}h</span>
                    <span className="font-normal text-sm text-[#444444]">Per Working Day</span>
                </div>
            </div>

            {/* Quick Stats Card */}
            <div className=" commonCardCss flex flex-col items-center gap-4 self-stretch pt-6 rounded-2xl">
                <div className="w-[254px] flex items-center gap-4">
                    <BlackIconWrapper logo={<ClockIconYellow />} />
                    <span className="font-normal text-sm text-[#444444]">Quick Stats</span>
                </div>
                <div className="flex flex-col gap-3 self-stretch px-6 pb-6">
                    <div className="flex justify-between items-center">
                        <span className="font-normal text-sm text-[#444444]">Days Worked</span>
                        <span className="font-normal text-base text-[#444444]">{stats.daysWorked}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-normal text-sm text-[#444444]">Longest Day</span>
                        {/* 2. Display the dynamically calculated longest day */}
                        <span className="font-normal text-base text-[#444444]">{stats.longestDay}h</span>
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