import React from 'react';
import TableWrapper from '../TableWrapper';
const leaveData = [
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

const columns = ['Req ID', 'Leave type', 'From', 'To', 'Days', 'Applied On', 'Status'];

const statusColor = {
  Pending: 'bg-purple-300 text-purple-800',
  Approved: 'bg-emerald-500 text-white',
  Rejected: 'bg-yellow-300 text-yellow-900',
};

const LeaveRequestTable = () => {
  return (
    <TableWrapper title="Leave Request" columns={columns} rows={leaveData} statusColorMap={statusColor} />
  );
};

export default LeaveRequestTable;
