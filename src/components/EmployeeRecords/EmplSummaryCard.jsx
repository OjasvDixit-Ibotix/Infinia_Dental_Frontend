import React, { useMemo } from 'react';
import TotalEmpl from '../../assets/svgs/WelcomePage/TotalEmpl';
import ActiveIcon from '../../assets/svgs/WelcomePage/ActiveIcon';
import OnLeaveIcon from '../../assets/svgs/WelcomePage/OnLeaveIcon'; 
import EmplSummary from '../../assets/svgs/WelcomePage/EmplSummary';
import { useSelector } from 'react-redux';

const EmplSummaryCard = () => {
    const { employees } = useSelector((state) => state.emp);
    const summaryStats = useMemo(() => {
        if (!employees || employees.length === 0) {
            return { total: 0, active: 0, onLeave: 0 };
        }
        const total = employees.filter(e => e.user_type.toLowerCase() === 'employee').length;
        const active = employees.filter(e => e.user_status === 'active' && e.user_type === 'employee').length;
        const onLeave = employees.filter(e => e.user_status === 'on_leave' && e.user_type === 'employee').length;

        return { total, active, onLeave };
    }, [employees]);

    return (
        <div className="bg-white rounded-xl border border-[#F3C85C] p-5 w-full sm:max-w-sm shadow-md mb-4">
            <h2 className="text-[#444] text-base font-medium flex items-center gap-2 mb-4">
                <EmplSummary />
                Employee Summary
            </h2>

            {/* Total Employees */}
            <div className="bg-[#EDF1F1] rounded-md px-4 py-3 flex items-center gap-4 mb-3">
                <div className="bg-[#2A2A2A] w-10 h-10 flex items-center justify-center rounded-md">
                    <TotalEmpl />
                </div>
                <div>
                    <p className="text-sm text-[#444]">Total Employees</p>
                    {/* 2. Use the dynamically calculated value */}
                    <p className="text-sm text-[#EFCD78] font-semibold">{summaryStats.total}</p>
                </div>
            </div>

            {/* Active Employees */}
            <div className="bg-[#EDF1F1] rounded-md px-4 py-3 flex items-center gap-4 mb-3">
                <div className="bg-[#2A2A2A] w-10 h-10 flex items-center justify-center rounded-md">
                    <ActiveIcon />
                </div>
                <div>
                    <p className="text-sm text-[#444]">Active</p>
                    {/* 2. Use the dynamically calculated value */}
                    <p className="text-sm text-[#EFCD78] font-semibold">{summaryStats.active}</p>
                </div>
            </div>
            
            {/* On Leave Employees */}
            <div className="bg-[#EDF1F1] rounded-md px-4 py-3 flex items-center gap-4">
                <div className="bg-[#2A2A2A] w-10 h-10 flex items-center justify-center rounded-md">
                   
                    <OnLeaveIcon />
                </div>
                <div>
                    <p className="text-sm text-[#444]">On Leave</p>
                    <p className="text-sm text-[#EFCD78] font-semibold">{summaryStats.onLeave}</p>
                </div>
            </div>
        </div>
    );
};

export default EmplSummaryCard;