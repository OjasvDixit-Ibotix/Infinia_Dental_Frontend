import React from 'react';
import { useSelector } from 'react-redux';
import LeaveTypeCardWrap from './wrapper/LeaveTypeCardWrap';
import AnnualLeaveicon from '../../../assets/svgs/EmpRequestLeave/AnnualLeaveicon';
import SickLeaveIcon from '../../../assets/svgs/EmpLeaveBalance/SickLeaveIcon';
import CasualLeaveIcons from '../../../assets/svgs/EmpLeaveBalance/CasualLeaveIcons';

const LeaveTypeCards = () => {
  const { leaves } = useSelector((state) => state.leaveHistory);

  console.log('asdf',leaves);
  
  const totals = {
    paid: 2,
    sick: 5,
    unpaid: leaves?.unpaid || 0,
  };

  const usedSickDays =
    leaves?.reduce(
      (sum, leave) =>
        leave?.leave_type === 'sick' ? sum + (leave.number_of_days || 0) : sum,
      0
    ) || 0;

  const usedPaidDays =
    leaves?.reduce(
      (sum, leave) =>
        leave?.leave_type === 'paid' ? sum + (leave.number_of_days || 0) : sum,
      0
    ) || 0;

  const usedUnpaidDays =
    leaves?.reduce(
      (sum, leave) =>
        leave?.leave_type === 'unpaid' ? sum + (leave.number_of_days || 0) : sum,
      0
    ) || 0;


//   const totalLeavesUsed = usedPaidDays + usedSickDays;

  const cards = [
    {
      logo: <AnnualLeaveicon />,
      typeofLeave: 'Paid',
      total: totals.paid,
      used: usedPaidDays,
      available: Math.max(totals.paid - usedPaidDays, 0),
    },
    {
      logo: <SickLeaveIcon />,
      typeofLeave: 'Sick',
      total: totals.sick,
      used: usedSickDays,
      available: Math.max(totals.sick - usedSickDays, 0),
    },
    {
      logo: <CasualLeaveIcons />,
      typeofLeave: 'Unpaid',
      total: totals.unpaid,
      used: usedUnpaidDays,
      available: Math.max(totals.unpaid - usedUnpaidDays, 0),
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-5">
      {cards.map((c, i) => (
        <LeaveTypeCardWrap
          key={i}
          logo={c.logo}
          typeofLeave={c.typeofLeave}
          available={c.available}
          used={c.used}
          total={c.total}
          status={leaves.status}
        />
      ))}
    </div>
  );
};

export default LeaveTypeCards;
