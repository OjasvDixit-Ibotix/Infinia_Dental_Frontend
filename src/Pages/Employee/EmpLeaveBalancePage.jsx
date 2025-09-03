import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import EmpLeaveBalanceHeader from '../../components/EmployeeComponents/EmpLeaveBalanceComp/EmpLeaveBalanceHeader';
import LeaveTypeCards from '../../components/EmployeeComponents/EmpLeaveBalanceComp/LeaveTypeCards';
import LeavehistorySection from '../../components/EmployeeComponents/RequestLeaveComp/LeavehistorySection';
import LeaveDistributionSection from '../../components/EmployeeComponents/RequestLeaveComp/LeaveDistributionSection';
import QuickStats from '../../components/EmployeeComponents/RequestLeaveComp/QuickStats';
import { fetchLeaveHistory } from '../../slices/leaveHistorySlice';

const EmpLeaveBalancePage = () => {
 
    return (
        <>
            <EmpLeaveBalanceHeader />
            <LeaveTypeCards />
            
            {/* --- RESPONSIVE CHANGE --- */}
            {/* Stacks vertically on mobile/tablet, becomes a row on large screens (1024px and up) */}
            <div className="flex flex-col lg:flex-row gap-6 mt-5">
                
                {/* Main content section - takes up full width on mobile, 2/3 on large screens */}
                <div className="w-full lg:w-2/3">
                    <LeavehistorySection />
                </div>

                {/* Sidebar section - takes up full width on mobile, 1/3 on large screens */}
                <div className="flex flex-col gap-6 w-full lg:w-1/3">
                    <LeaveDistributionSection />
                    <QuickStats />
                </div>
            </div>
        </>
    );
};

export default EmpLeaveBalancePage;