import React from 'react';
import TableWrapper from '../TableWrapper';

const AllLeaveTable = () => {
  const columns = [
    'S. No',
    'Leave Req No',
    'Department',
    'Employee Name',
    'Leave type',
    'Date (Start–End)',
    'Total Days',
    'Leave Status',
    'Request Reason',
    'Approved Date',
    'Approved By',
  ];

  const rows = [
    {
      sno: 1,
      reqNo: 'LV00002',
      department: 'CPS1127',
      employee: 'Amit Tiwari / CPS1127',
      type: 'Casual',
      date: '07/Apr/2025:FD - 07/Apr/2025:FD',
      days: 1,
      status: 'Pending',
      reason: '',
      approvedDate: '',
      approvedBy: '',
    },
    {
      sno: 2,
      reqNo: 'LV00003',
      department: 'CPS1127',
      employee: 'Amit Tiwari / CPS1127',
      type: 'Casual',
      date: '07/Apr/2025:FD - 07/Apr/2025:FD',
      days: 2,
      status: 'Rejected',
      reason: '',
      approvedDate: '',
      approvedBy: '',
    },
    {
      sno: 3,
      reqNo: 'LV00001',
      department: 'CPS1127',
      employee: 'Amit Tiwari / CPS1127',
      type: 'Casual',
      date: '07/Apr/2025:FD - 07/Apr/2025:FD',
      days: 1,
      status: 'Approved',
      reason: '',
      approvedDate: '',
      approvedBy: '',
    },
  ];

  const statusColorMap = {
    Pending: 'bg-purple-400 text-white',
    Rejected: 'bg-yellow-300 text-yellow-900',
    Approved: 'bg-emerald-600 text-white',
  };

  return ( 
    

    <TableWrapper  
      title="All Leave"
      columns={columns}
      rows={rows}
      statusColorMap={statusColorMap}
      />
  );
};

export default AllLeaveTable;
