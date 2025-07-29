import React from 'react'

import { ChevronDown } from 'lucide-react';

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

const EmpLeaveRequestForm = () => {

    return (
        <div className="commonCardCss  w-full p-6 bg-[#FFFFFF] mt-5 ">

            <span className=" font-normal text-[20px] text-[#444444]">
                Leave Request Form
            </span>
            <div className="flex flex-row gap-9">

                <div className="w-[580px]  mt-3 h-[540px] flex flex-col gap-2 rounded-[8px]  border-[0.4px] p-8 border-[#EFCD78] bg-[rgba(239,205,120,0.02)]">
                    <div className="grid grid-cols-3 items-center gap-6">
                        <label className="text-[#3C3C3C] font-segoeSymbol text-[16px] font-normal leading-[29px]  ">Department*</label>
                        <div className="col-span-2">

                            <Dropdown placeholder="Dentist" />
                        </div>

                        <label className="text-[#3C3C3C] font-segoeSymbol text-[16px] font-normal leading-[29px] ">Request By*</label>
                        <div className="col-span-2">
                            <Dropdown placeholder="Sarah" />
                        </div>

                        <label className="text-[#3C3C3C] font-segoeSymbol text-[16px] font-normal leading-[29px] ">Leave Type</label>
                        <div className="col-span-2">
                            <Dropdown placeholder="Sick leave" />
                        </div>

                        <label className="text-[#3C3C3C] font-segoeSymbol text-[16px] font-normal leading-[29px] ">From</label>
                        <div className="col-span-2">
                            <DateSelector day="16" month="Oct" year="2019" />
                        </div>

                        <label className="text-[#3C3C3C] font-segoeSymbol text-[16px] font-normal leading-[29px] ">To</label>
                        <div className="col-span-2">
                            <DateSelector day="19" month="Oct" year="2019" />
                        </div>

                        <label className="text-[#3C3C3C] font-segoeSymbol text-[16px] font-normal leading-[29px] ">No. of Days</label>
                        <div className="col-span-2">
                            <Dropdown placeholder="3" />
                        </div>

                        <label className="text-[#3C3C3C] font-segoeSymbol text-[16px] font-normal leading-[29px] ">Reason</label>
                        <div className="col-span-2 ">
                            <textarea
                                placeholder="Type here………"
                                className="w-full px-4 py-2 rounded-[8px] border-[0.2px] border-[#444] opacity-50 shadow-[0_4px_12px_0_rgba(239,205,120,0.20)] text-sm"
                                rows={3}
                            />
                        </div>
                    </div>

                    <div className=" flex justify-end   ">
                        <button className="bg-[#EFCD78] hover:bg-[#e6be63] px-6 py-2 rounded-md text-[#444] font-semibold text-sm">
                            Save
                        </button>
                    </div>

                </div>

                <div className="pt-3 flex flex-col gap-5">
                    <span class="font-normal text-[20px] leading-[24px] text-[#444444] ">Rules</span>
                    <div className="flex flex-row gap-5">
                        <div className="w-[140px] h-[100.714px]  flex-shrink-0 rounded-[10px] flex flex-col items-center bg-[#EFCD7866]">
                            <div className="w-[140px] h-[60.714px] text-[#444444] flex items-center  justify-center flex-shrink-0 rounded-[10px] bg-[#EFCD78]">
                                Balance CL
                            </div>
                            12
                        </div>
                        <div className="w-[140px] h-[100.714px] flex flex-col items-center   flex-shrink-0 rounded-[10px]  bg-[#C7C7C7]">

                            <div className="w-[140px] h-[60.714px] flex items-center  justify-center  flex-shrink-0 rounded-[10px] text-[#FFFFFF]   bg-[#444444]">
                                Balance EL
                            </div>
                            23
                        </div>
                        <div className="w-[140px] h-[100.714px] flex flex-col items-center  flex-shrink-0 rounded-[10px]  bg-[#EFCD7866]">

                            <div className="w-[140px] h-[60.714px] flex items-center  justify-center text-[#444444]   flex-shrink-0 rounded-[10px] bg-[#EFCD78]">
                                Balance PL
                            </div>
                            11
                        </div>


                    </div>

                   
                   <div className="rounded-2xl border border-[#EFCD78] bg-white h-[270px]">
    
                     </div>
                     <div className="flex flex-row flex-wrap  gap-5 pl-7">
                        <div className="flex flex-row gap-2">
                            <div className="w-[25px] h-[32px] rotate-90 flex-shrink-0 rounded-2xl bg-[#EFCD78]">
 
                                </div>
                                <span class="font-normal text-[14px] leading-[29px] text-[#969696]">Present</span>
                        </div>
                         <div className="flex flex-row gap-2">
                            <div className="w-[25px] h-[32px] rotate-90 flex-shrink-0 rounded-2xl bg-[#FFEEC4]">
 
                                </div>
                                <span class="font-normal text-[14px] leading-[29px] text-[#969696]">Holiday</span>
                        </div> <div className="flex flex-row gap-2">
                            <div className="w-[25px] h-[32px] rotate-90 flex-shrink-0 rounded-2xl bg-[#9A7FAC]">
 
                                </div>
                                <span class="font-normal text-[14px] leading-[29px] text-[#969696]">Absent</span>
                        </div> 
                        <div className="flex flex-row gap-2">
                            <div className="w-[25px] h-[32px] rotate-90 flex-shrink-0 rounded-2xl bg-[#668E8C]">
 
                                </div>
                                <span class="font-normal text-[14px] leading-[29px] text-[#969696]">Leave</span>
                        </div>
                         <div className="flex flex-row gap-2">
                            <div className="w-[25px] h-[32px] rotate-90 flex-shrink-0 rounded-2xl bg-[#6CB6B2]">
 
                                </div>
                                <span class="font-normal text-[14px] leading-[29px] text-[#969696]">Week off</span>
                        </div>
                     </div>

                    

                </div>

                
            </div>


        </div>
    )
}

export default EmpLeaveRequestForm
