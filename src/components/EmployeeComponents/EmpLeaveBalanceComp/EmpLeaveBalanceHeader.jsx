import React from 'react';
import PlusIcon from '../../../assets/svgs/EmpLeaveBalance/PlusIcon';
import { useNavigate } from 'react-router-dom';

const EmpLeaveBalanceHeader = () => {
    const navigate = useNavigate()
    return (
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between rounded-lg w-full gap-4 md:gap-0">
            <div>
                <h1 className="text-[#444] font-normal text-2xl md:text-[30px] leading-tight font-[Segoe UI Symbol]">
                    Leave Balance Overview
                </h1>
                <p className="text-[#444] font-normal text-sm md:text-[15.875px] leading-normal font-[Segoe UI Symbol]">
                    Track your leave balances, history, and pending requests
                </p>
            </div>
            <button  onClick={() => {navigate('/request-leave')}} className=" cursor-pointer flex items-center justify-center gap-2 bg-[#efcd78] px-6 py-3 rounded-xl h-10 self-start md:self-center">
                <div className="w-4 h-4">
                    <PlusIcon />
                </div>
                <span  className=" font-normal text-sm text-center text-[#444444]">
                    Request Leave
                </span>
            </button>
        </div>
    );
};

export default EmpLeaveBalanceHeader;