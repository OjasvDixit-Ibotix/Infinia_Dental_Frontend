import React from 'react';

const LeaveRequestTable = () => {
  const data = [
    {
      id: 'LV00002',
      type: 'Casual',
      from: '31 Dec 2024',
      to: '10 Jan 2025',
      days: 1,
      appliedOn: '20 Dec 2024',
      status: 'Pending',
    },
    {
      id: 'LV00003',
      type: 'Casual',
      from: '31 Dec 2024',
      to: '31 Dec 2024',
      days: 2,
      appliedOn: '18 Dec 2024',
      status: 'Rejected',
    },
    {
      id: 'LV00001',
      type: 'Casual',
      from: '25 Dec 2024',
      to: '25 Dec 2024',
      days: 1,
      appliedOn: '15 Dec 2024',
      status: 'Approved',
    },
  ];

  const statusColor = {
    Pending: 'bg-purple-300 text-purple-800',
    Approved: 'bg-emerald-500 text-white',
    Rejected: 'bg-yellow-300 text-yellow-900',
  };

  return (
    <div className="w-full bg-gray-100 rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Leave Request</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="text-gray-500 border-b">
            <tr>
              <th className="px-4 py-2">Req ID</th>
              <th className="px-4 py-2">Leave type</th>
              <th className="px-4 py-2  gap-1">
                From <span className="text-orange-400">↓</span>
              </th>
              <th className="px-4 py-2 gap-1">
                To <span className="text-orange-400">↓</span>
              </th>
              <th className="px-4 py-2">Days</th>
              <th className="px-4 py-2">Applied On</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="border-b last:border-none">
                <td className="px-4 py-3">{row.id}</td>
                <td className="px-4 py-3">{row.type}</td>
                <td className="px-4 py-3">{row.from}</td>
                <td className="px-4 py-3">{row.to}</td>
                <td className="px-4 py-3">{row.days}</td>
                <td className="px-4 py-3">{row.appliedOn}</td>
                <td className="px-4 py-3">
                  <span className={`px-3 py-1 rounded-xl text-xs font-medium ${statusColor[row.status]}`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveRequestTable;
