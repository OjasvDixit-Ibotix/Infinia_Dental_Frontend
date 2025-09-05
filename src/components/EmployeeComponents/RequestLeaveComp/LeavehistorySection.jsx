import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchLeaveHistory } from '../../../slices/leaveHistorySlice';
import LeaveHistoryIcon from '../../../assets/svgs/EmpRequestLeave/LeaveHistoryIcon';

const statusStyles = {
    approved: 'bg-green-100 text-green-700 border-green-200',
    pending: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    rejected: 'bg-red-100 text-red-700 border-red-200',
};

const LeaveRow = ({ leave }) => (
    
    <div className="flex flex-col md:flex-row md:items-center w-full p-4 md:p-0 border md:border-b md:border-x-0 md:border-t-0 border-slate-200 rounded-lg md:rounded-none mb-3 md:mb-0 last:border-b-0">
        
        <div className="flex justify-between py-1 md:w-1/5 md:px-4 md:py-3">
            <span className="font-semibold text-gray-500 md:hidden">From:</span>
            <span className="text-sm text-[#020817]">{leave.from_date}</span>
        </div>
        <div className="flex justify-between py-1 md:w-1/5 md:px-4 md:py-3">
            <span className="font-semibold text-gray-500 md:hidden">To:</span>
            <span className="text-sm text-[#020817]">{leave.to_date}</span>
        </div>
        <div className="flex justify-between py-1 md:w-1/5 md:px-4 md:py-3">
            <span className="font-semibold text-gray-500 md:hidden">Type:</span>
            <span className="text-sm text-gray-700">{leave.leave_type}</span>
        </div>
        <div className="flex justify-between py-1 md:w-[10%] md:px-4 md:py-3">
            <span className="font-semibold text-gray-500 md:hidden">Days:</span>
            <span className="text-sm text-gray-600">{leave.number_of_days}</span>
        </div>
         <div className="flex justify-between py-1 md:w-[15%] md:px-4 md:py-3">
            <span className="font-semibold text-gray-500 md:hidden">Status:</span>
            <div className={`flex items-center px-3 py-1 rounded-full border text-xs font-medium ${statusStyles[leave.status.toLowerCase()]}`}>
                {leave.status.charAt(0).toUpperCase() + leave.status.slice(1)}
            </div>
        </div>
        <div className="flex justify-between py-1 md:flex-1 md:px-4 md:py-3">
            <span className="font-semibold text-gray-500 md:hidden">Reason:</span>
            <span className="text-sm text-gray-600 text-right md:text-left">{leave.reason}</span>
        </div>
    </div>
);


function LeaveHistorySection() {
    const { leaves, status, error } = useSelector((state) => state.leaveHistory); 
    console.log('leaves', leaves);
       
    
    return (
        <div className="flex flex-col h-fit gap-5 self-stretch w-full bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center gap-4">
                <div className="flex justify-center bg-[#444444] p-2.5 rounded-lg">
                    <div className="w-6 h-6">
                        <LeaveHistoryIcon />
                    </div>
                </div>
                <span className="font-normal text-2xl text-gray-800">Leave History</span>
            </div>

            <div className="flex flex-col self-stretch">
               
                <div className="hidden md:flex self-stretch h-12 bg-gray-50 border-b border-slate-200 rounded-t-lg">
                    <div className="w-1/5 flex items-center px-4"><span className="font-normal text-sm text-gray-700">From</span></div>
                    <div className="w-1/5 flex items-center px-4"><span className="font-normal text-sm text-gray-700">To</span></div>
                    <div className="w-1/5 flex items-center px-4"><span className="font-normal text-sm text-gray-700">Leave Type</span></div>
                    <div className="w-[10%] flex items-center px-4"><span className="font-normal text-sm text-gray-700">Days</span></div>
                    <div className="w-[15%] flex items-center px-4"><span className="font-normal text-sm text-gray-700">Status</span></div>
                    <div className="flex-1 flex items-center px-4"><span className="font-normal text-sm text-gray-700">Reason</span></div>
                </div>

                {status === 'loading' && <div className="p-4 text-center text-gray-600">Loading...</div>}
                {status === 'failed' && <div className="p-4 text-center text-red-600">{error}</div>}
                {status === 'succeeded' && leaves.length === 0 && <div className="p-4 text-center text-gray-600">No leave history found</div>}
                
                {status === 'succeeded' && leaves.map((leave) => <LeaveRow key={leave.id} leave={leave} />)}
            </div>
        </div>
    );
}

export default LeaveHistorySection;