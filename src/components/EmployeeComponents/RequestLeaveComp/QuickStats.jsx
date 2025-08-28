import React from 'react';
import LeaveDistriIcon from '../../../assets/svgs/EmpLeaveBalance/LeaveDistriIcon';
import PendingRequseIcon from '../../../assets/svgs/EmpLeaveBalance/PendingRequseIcon';
import ApproveThisMonthIcon from '../../../assets/svgs/EmpLeaveBalance/ApproveThisMonthIcon';
import DaysRemainIcon from '../../../assets/svgs/EmpLeaveBalance/DaysRemainIcon';
import UsageThisYear from '../../../assets/svgs/EmpLeaveBalance/UsageThisYear';

const QuickStats = () => {
    return (
        <div className="flex flex-col gap-4 self-stretch rounded-2xl bg-white p-6 shadow-sm">
            {/* Component Header */}
            <div className="flex w-full items-center gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-[#444444] p-2.5">
                    <div className="h-6 w-6">
                        <LeaveDistriIcon />
                    </div>
                </div>
                <span className="text-2xl font-normal leading-6 text-gray-800">
                    Quick Stats
                </span>
            </div>

            {/* Stats List */}
            <div className="flex flex-col gap-2 self-stretch">
                {/* Stat Item: Pending Requests */}
                <div className="flex items-center justify-between self-stretch rounded-lg p-3 hover:bg-gray-50">
                    <div className="flex items-center">
                        <div className="flex rounded-lg bg-[#444444] p-2">
                            <div className="h-4 w-4">
                                <PendingRequseIcon />
                            </div>
                        </div>
                        <div className="pl-3">
                            <span className="text-sm font-normal text-[#444444]">
                                Pending Requests
                            </span>
                        </div>
                    </div>
                    <div>
                        <span className="text-lg font-normal text-[#444444]">3</span>
                    </div>
                </div>

                {/* Stat Item: Approved This Month */}
                <div className="flex items-center justify-between self-stretch rounded-lg p-3 hover:bg-gray-50">
                    <div className="flex items-center">
                        <div className="flex rounded-lg bg-[#444444] p-2">
                            <div className="h-4 w-4">
                                <ApproveThisMonthIcon />
                            </div>
                        </div>
                        <div className="pl-3">
                            <span className="text-[13.78px] font-normal leading-5 text-[#444444]">
                                Approved This Month
                            </span>
                        </div>
                    </div>
                    <div>
                        <span className="text-lg font-normal text-[#444444]">5</span>
                    </div>
                </div>

                {/* Stat Item: Days Remaining */}
                <div className="flex items-center justify-between self-stretch rounded-lg p-3 hover:bg-gray-50">
                    <div className="flex items-center">
                        <div className="flex rounded-lg bg-[#444444] p-2">
                            <div className="h-4 w-4">
                                <DaysRemainIcon />
                            </div>
                        </div>
                        <div className="pl-3">
                            <span className="text-sm font-normal text-[#444444]">
                                Days Remaining
                            </span>
                        </div>
                    </div>
                    <div>
                        <span className="text-lg font-normal text-[#444444]">34</span>
                    </div>
                </div>

                {/* Stat Item: Usage This Year */}
                <div className="flex items-center justify-between self-stretch rounded-lg p-3 hover:bg-gray-50">
                    <div className="flex items-center">
                        <div className="flex rounded-lg bg-[#444444] p-2">
                            <div className="h-4 w-4">
                                <UsageThisYear />
                            </div>
                        </div>
                        <div className="pl-3">
                            <span className="text-sm font-normal text-[#444444]">
                                Usage This Year
                            </span>
                        </div>
                    </div>
                    <div>
                        <span className="text-lg font-normal text-[#444444]">19</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickStats;