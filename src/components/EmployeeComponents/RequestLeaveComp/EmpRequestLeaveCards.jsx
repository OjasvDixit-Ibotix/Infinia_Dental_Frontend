import React from 'react';
import RequestLeaveCardWrap from './wrapper/RequestLeaveCardWrap';
import ClockIconYellow from '../../../assets/svgs/EmpTimesheet/ClockIconYellow';
import DailyAverage from '../../../assets/svgs/EmpTimesheet/DailyAverage';
import AnnualLeaveicon from '../../../assets/svgs/EmpRequestLeave/AnnualLeaveicon';

const EmpRequestLeaveCards = () => {
 
  const leaveData = [
    {
      logo: <AnnualLeaveicon />,
      typeofleave: "Paid Time Off",
      totalleave: 2,
      daysleft: 2,
    },
    {
      logo: <ClockIconYellow />,
      typeofleave: "Sick Leave",
      totalleave: 5,
      daysleft:4
    },
    {
      logo: <DailyAverage />,
      typeofleave: "Total Leaves",
      totalleave: 7,
      daysleft: 1,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
      {leaveData.map((leave) => (
        <RequestLeaveCardWrap
          key={leave.typeofleave}
          logo={leave.logo}
          typeofleave={leave.typeofleave}
          totalleave={leave.totalleave}
          daysleft={leave.daysleft}
        />
      ))}
    </div>
  );
};

export default EmpRequestLeaveCards;