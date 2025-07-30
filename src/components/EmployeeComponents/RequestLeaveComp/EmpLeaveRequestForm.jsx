import React from 'react'
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import LeftArrowIcon from '../../../assets/svgs/EmpRequestLeave/LeftArrowIcon';
import RightArrowIcon from '../../../assets/svgs/EmpRequestLeave/RightArrowIcon';

const Dropdown = ({ placeholder }) => (
    <div className="flex items-center justify-between px-4 py-2  rounded-[8px] border-[0.2px] border-[#444] opacity-50 shadow-[0_4px_12px_0_rgba(239,205,120,0.20)]  bg-white text-gray-700 w-full text-sm">
        {placeholder}
        <ChevronDown className="w-4 h-4 text-yellow-500" />
    </div>
);

const DateSelector = ({ day, month, year }) => (
    <div className="flex gap-2">
        <Dropdown placeholder={day} />
        <Dropdown placeholder={month} />
        <Dropdown placeholder={year} />
    </div>
);

    // const [value, setValue] = useState(new Date());


 const EmpLeaveRequestForm = () => {

     const [date, setDate] = useState(new Date());
    //  <style>

    //  .react-calendar__month-view__weekdays__weekday abbr {
    //      text-decoration: none;
    //     }
    //     </style>

    return (

      <div className="commonCardCss w-full p-6 bg-[#FFFFFF] mt-5">
                    <span className="font-normal text-[20px] text-[#444444]">
                        Leave Request Form
                    </span>
                    <div className="flex flex-col lg:flex-row gap-9 mt-4">
                        {/* Left Side: Form */}
                        <div className="w-full lg:w-[580px] mt-3 flex flex-col gap-4 rounded-[8px] border-[0.4px] p-8 border-[#EFCD78] bg-[rgba(239,205,120,0.02)]">
                            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-x-6 gap-y-4">
                                <label className="text-[#3C3C3C] text-[16px] font-normal">Department*</label>
                                <div className="md:col-span-2">
                                    <Dropdown placeholder="Dentist" />
                                </div>

                                <label className="text-[#3C3C3C] text-[16px] font-normal">Request By*</label>
                                <div className="md:col-span-2">
                                    <Dropdown placeholder="Sarah" />
                                </div>

                                <label className="text-[#3C3C3C] text-[16px] font-normal">Leave Type</label>
                                <div className="md:col-span-2">
                                    <Dropdown placeholder="Sick leave" />
                                </div>

                                <label className="text-[#3C3C3C] text-[16px] font-normal">From</label>
                                <div className="md:col-span-2">
                                    <DateSelector day="16" month="Oct" year="2019" />
                                </div>

                                <label className="text-[#3C3C3C] text-[16px] font-normal">To</label>
                                <div className="md:col-span-2">
                                    <DateSelector day="19" month="Oct" year="2019" />
                                </div>

                                <label className="text-[#3C3C3C] text-[16px] font-normal">No. of Days</label>
                                <div className="md:col-span-2">
                                    <Dropdown placeholder="3" />
                                </div>

                                <label className="text-[#3C3C3C] text-[16px] font-normal self-start pt-2">Reason</label>
                                <div className="md:col-span-2">
                                    <textarea
                                        placeholder="Type here………"
                                        className="w-full px-4 py-2 rounded-[8px] border-[0.2px] border-[#444] opacity-50 shadow-[0_4px_12px_0_rgba(239,205,120,0.20)] text-sm focus:outline-none focus:border-amber-400"
                                        rows={3}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end mt-4">
                                <button className="bg-[#EFCD78] hover:bg-[#e6be63] px-6 py-2 rounded-md text-[#444] font-semibold text-sm transition-colors">
                                    Save
                                </button>
                            </div>
                        </div>

                        {/* Right Side: Calendar and Rules */}
                        <div className="pt-3 flex flex-col gap-5 flex-1">
                            <span className="font-normal text-[20px] text-[#444444]">Rules</span>
                            <div className="flex flex-row gap-5">
                                <div className="w-[140px] h-[100.714px] flex-shrink-0 rounded-[10px] flex flex-col items-center justify-between pb-2 text-center font-semibold bg-[#EFCD7866]">
                                    <div className="w-full h-[60.714px] text-[#444444] flex items-center justify-center flex-shrink-0 rounded-t-[10px] bg-[#EFCD78]">
                                        Balance CL
                                    </div>
                                    12
                                </div>
                                <div className="w-[140px] h-[100.714px] flex flex-col items-center justify-between pb-2 text-center font-semibold text-white flex-shrink-0 rounded-[10px] bg-[#C7C7C7]">
                                    <div className="w-full h-[60.714px] flex items-center justify-center flex-shrink-0 rounded-t-[10px] bg-[#444444]">
                                        Balance EL
                                    </div>
                                    23
                                </div>
                                <div className="w-[140px] h-[100.714px] flex flex-col items-center justify-between pb-2 text-center font-semibold bg-[#EFCD7866] flex-shrink-0 rounded-[10px]">
                                    <div className="w-full h-[60.714px] flex items-center justify-center text-[#444444] flex-shrink-0 rounded-t-[10px] bg-[#EFCD78]">
                                        Balance PL
                                    </div>
                                    11
                                </div>
                            </div>
                            
                           <div className="w-full rounded-2xl border border-[#EFCD78] bg-white p-4  mt-4">
                                 <Calendar 
                                    onChange={setDate}
                                    value={date}
                                    prevLabel={<LeftArrowIcon/>}
                                    nextLabel={<RightArrowIcon/>}
                                    prev2Label={null}
                                    next2Label={null}
                                    showNeighboringMonth={true}
                                    formatMonthYear={(locale, date) => date.toLocaleString('en-US', { month: 'long', year: 'numeric' })}
                                    formatShortWeekday={(locale, date) => date.toLocaleDateString(locale, { weekday: 'short' }).slice(0, 3)}
                                    className="w-full 
                                        [&_.react-calendar__navigation]:flex 
                                        [&_.react-calendar__navigation]:justify-center 
                                        [&_.react-calendar__navigation]:items-center 
                                        [&_.react-calendar__navigation]:mb-6 
                                        [&_.react-calendar__navigation__label]:font-bold 
                                        [&_.react-calendar__navigation__label]:text-xl 
                                        [&_.react-calendar__navigation__label]:text-[#3C3C3C] 
                                        [&_.react-calendar__navigation__label]:grow-0
                                        [&_.react-calendar__navigation__label]:mx-4
                                        [&_.react-calendar__navigation__label:hover]:bg-transparent
                                        [&_.react-calendar__navigation__label:focus]:bg-transparent
                                        [&_.react-calendar__navigation__button]:min-w-[44px]
                                        [&_.react-calendar__navigation__button]:p-0
                                        [&_.react-calendar__navigation__button:hover]:bg-transparent
                                        [&_.react-calendar__navigation__button:hover]:opacity-75
                                        [&_.react-calendar__navigation__button:disabled]:opacity-50
                                        [&_.react-calendar__month-view__weekdays]:text-center
                                        [&_.react-calendar__month-view__weekdays]:text-[#a0a0a0]
                                        [&_.react-calendar__month-view__weekdays]:font-medium
                                        [&_.react-calendar__month-view__weekdays]:mb-2 
                                        [&_.react-calendar__month-view__weekdays]:text-sm
                                    "
                                    tileClassName={({ date, view }) => {
                                        const classes = ['py-2', 'px-1', 'rounded-lg', 'transition-colors', 'duration-200', 'hover:bg-amber-100'];
                                        if (view === 'month') {
                                            const today = new Date();
                                            if (date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()) {
                                                classes.push('bg-gray-100', 'font-bold');
                                            }
                                        }
                                        return classes.join(' ');
                                    }}
                                    tileActiveClassName="!bg-[#EFCD78] !text-white hover:!bg-[#d9b460]"
                                    tileDisabledClassName="text-[#D0D0D0] font-normal text-base leading-[21px] tracking-[-0.32px]"
                                />
                            </div>
                            <div className="flex flex-row flex-wrap gap-x-5 gap-y-2 pl-4 mt-4">
                                <div className="flex flex-row items-center gap-2">
                                    <div className="w-4 h-4 rounded-full bg-[#EFCD78]"></div>
                                    <span className="font-normal text-sm text-[#969696]">Present</span>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <div className="w-4 h-4 rounded-full bg-[#FFEEC4]"></div>
                                    <span className="font-normal text-sm text-[#969696]">Holiday</span>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <div className="w-4 h-4 rounded-full bg-[#9A7FAC]"></div>
                                    <span className="font-normal text-sm text-[#969696]">Absent</span>
                                </div> 
                                <div className="flex flex-row items-center gap-2">
                                    <div className="w-4 h-4 rounded-full bg-[#668E8C]"></div>
                                    <span className="font-normal text-sm text-[#969696]">Leave</span>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <div className="w-4 h-4 rounded-full bg-[#6CB6B2]"></div>
                                    <span className="font-normal text-sm text-[#969696]">Week off</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default EmpLeaveRequestForm
