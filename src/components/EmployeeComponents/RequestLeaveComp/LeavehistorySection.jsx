import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeaveHistory } from '../../../slices/leaveHistorySlice';
import LeaveHistoryIcon from '../../../assets/svgs/EmpRequestLeave/LeaveHistoryIcon';

const statusStyles = {
  approved: 'bg-green-100 text-green-700 border-green-200',
  pending: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  rejected: 'bg-red-100 text-red-700 border-red-200',
};

function LeaveHistorySection() {
  const dispatch = useDispatch();
  const { leaves, status, error } = useSelector((state) => state.leaveHistory);

  useEffect(() => {
    dispatch(fetchLeaveHistory());
  }, [dispatch]);

  return (
    <div className="flex flex-col h-fit  gap-5 self-stretch w-[710px] bg-white p-6 rounded-2xl shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex justify-center bg-[#444444] p-2.5 rounded-lg">
          <div className="w-6 h-6">
            <LeaveHistoryIcon />
          </div>
        </div>
        <span className="font-normal text-2xl text-gray-800">Leave History</span>
      </div>

      <div className="flex flex-col self-stretch rounded-lg ">
        <div className="flex justify-center self-stretch h-12 bg-gray-50 border-b border-slate-200">
          <div className="w-[141px] flex items-center px-4"><span className="font-normal text-sm text-gray-700">From</span></div>
          <div className="w-[141px] flex items-center px-4"><span className="font-normal text-sm text-gray-700">To</span></div>
          <div className="w-[136px] flex items-center px-4"><span className="font-normal text-sm text-gray-700">Leave Type</span></div>
          <div className="w-[108px] flex items-center px-4"><span className="font-normal text-sm text-gray-700">Days</span></div>
          <div className="w-[132px] flex items-center px-4"><span className="font-normal text-sm text-gray-700">Status</span></div>
          <div className="w-[100px] flex-1 flex items-center px-4"><span className="font-normal text-sm text-gray-700">Reason</span></div>
        </div>

        {status === 'loading' && (
          <div className="p-4 text-center text-gray-600">Loading...</div>
        )}

        {status === 'failed' && (
          <div className="p-4 text-center text-red-600">{error}</div>
        )}

        {status === 'succeeded' && leaves.map((leave) => (
          <div key={leave.id} className="flex justify-center self-stretch h-auto min-h-[55px] border-b border-slate-200 last:border-b-0">
            <div className="w-[141px] flex items-center px-4 py-2"><span className="font-normal text-sm text-[#020817]">{leave.from_date}</span></div>
            <div className="w-[141px] flex items-center px-4 py-2"><span className="font-normal text-sm text-[#020817]">{leave.to_date}</span></div>
            <div className="w-[136px] flex items-center px-4 py-2"><span className="font-normal text-sm text-gray-700">{leave.leave_type}</span></div>
            <div className="w-[108px] flex items-center px-4 py-2"><span className="font-normal text-sm text-gray-600">{leave.number_of_days}</span></div>
            <div className="w-[132px] flex items-center p-4">
              <div className={`flex items-center px-3 py-1 rounded-full border text-xs font-medium ${statusStyles[leave.status.toLowerCase()]}`}>
                {leave.status.charAt(0).toUpperCase() + leave.status.slice(1)}
              </div>
            </div>
            <div className="flex-1 flex items-center px-4 py-2"><span className="font-normal text-sm text-gray-600">{leave.reason}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeaveHistorySection;
