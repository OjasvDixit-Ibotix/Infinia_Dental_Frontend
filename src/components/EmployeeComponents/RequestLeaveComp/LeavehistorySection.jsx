import React from 'react';
import LeaveHistoryIcon from '../../../assets/svgs/EmpRequestLeave/LeaveHistoryIcon';


const leaveHistoryData = [
  { id: 1, date: "Jun 15, 2024", leaveType: "Annual Leave", duration: "3 days", status: "Approved", remarks: "Family vacation" },
  { id: 2, date: "Jun 10, 2024", leaveType: "Sick Leave", duration: "1 day", status: "Approved", remarks: "Medical appointment" },
  { id: 3, date: "Jun 05, 2024", leaveType: "Casual Leave", duration: "0.5 days", status: "Pending", remarks: "Personal work" },
  { id: 4, date: "May 28, 2024", leaveType: "Annual Leave", duration: "2 days", status: "Approved", remarks: "Extended weekend" },
  { id: 5, date: "May 28, 2024", leaveType: "Annual Leave", duration: "2 days", status: "Rejected", remarks: "Extended weekend" },
 
];


const statusStyles = {
  Approved: 'bg-green-100 text-green-700 border-green-200',
  Pending: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  Rejected: 'bg-red-100 text-red-700 border-red-200',
};


function LeaveHistorySection() {
  return (
    <div className="flex flex-col h-fit gap-5 self-stretch w-full  bg-white p-6 rounded-2xl shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex justify-center bg-[#444444] p-2.5 rounded-lg">
          <div className="w-6 h-6">
            <LeaveHistoryIcon/>
          </div>
        </div>
        <span className="font-normal text-2xl text-gray-800">Leave History</span>
      </div>

      <div className="flex flex-col self-stretch rounded-lg ">
        <div className="flex justify-center self-stretch h-12 bg-gray-50 border-b border-slate-200">
          <div className="w-[141px] flex items-center px-4"><span className="font-normal text-sm text-gray-700">Date</span></div>
          <div className="w-[136px] flex items-center px-4"><span className="font-normal text-sm text-gray-700">Leave Type</span></div>
          <div className="w-[108px] flex items-center px-4"><span className="font-normal text-sm text-gray-700">Duration</span></div>
          <div className="w-[132px] flex items-center px-4"><span className="font-normal text-sm text-gray-700">Status</span></div>
          <div className="flex-1 flex items-center px-4"><span className="font-normal text-sm text-gray-700">Remarks</span></div>
        </div>

        <div>
          {leaveHistoryData.map((leave,index) => (

            <div key={leave.id} className="flex justify-center self-stretch h-auto min-h-[55px] border-b border-slate-200 last:border-b-0">
              <div className="w-[141px] flex items-center px-4 py-2"><span className="font-normal text-sm text-[#020817]">{leave.date}</span></div>
              <div className="w-[136px] flex items-center px-4 py-2"><span className="font-normal text-sm text-gray-700">{leave.leaveType}</span></div>
              <div className="w-[108px] flex items-center px-4 py-2"><span className="font-normal text-sm text-gray-600">{leave.duration}</span></div>
              <div className="w-[132px] flex items-center p-4">
                <div className={`flex items-center px-3 py-1 rounded-full border text-xs font-medium ${statusStyles[leave.status]}`}>
                  {leave.status}
                </div>
              </div>
              <div className="flex-1 flex items-center px-4 py-2"><span className="font-normal text-sm text-gray-600">{leave.remarks}</span></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeaveHistorySection;