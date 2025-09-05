import React from "react";
import RequestLeaveCardWrap from "./wrapper/RequestLeaveCardWrap";
import ClockIconYellow from "../../../assets/svgs/EmpTimesheet/ClockIconYellow";
import DailyAverage from "../../../assets/svgs/EmpTimesheet/DailyAverage";
import AnnualLeaveicon from "../../../assets/svgs/EmpRequestLeave/AnnualLeaveicon";
import { useSelector } from "react-redux";

const EmpRequestLeaveCards = () => {
  const { leaves } = useSelector((state) => state.leaveHistory);
  console.log("leaves", leaves);

const usedSickDays =
  leaves?.reduce((sum, leave) => {
    return leave?.leave_type === "Sick Leave"
      ? sum + (leave.number_of_days || 0)
      : sum;
  }, 0) || 0;

const usedPaidDays =
  leaves?.reduce((sum, leave) => {
    return leave?.leave_type === "Paid Leave"
      ? sum + (leave.number_of_days || 0)
      : sum;
  }, 0) || 0;


// const usedUnpaidDays =
//   leaves?.reduce((sum, leave) => {
//     return leave?.leave_type === "Unpaid Leave"  ? sum + (leave.number_of_days || 0)
//       : sum;
//   }, 0) || 0;


const totalLeaves = usedSickDays + usedPaidDays;

  console.log(totalLeaves);
  

  const leaveData = [
    {
      logo: <AnnualLeaveicon />,
      typeofleave: "Paid Time Off",
      totalleave: 2,
      daysleft: Math.max(2 - usedPaidDays, 0), 
    },
    {
      logo: <ClockIconYellow />,
      typeofleave: "Sick Leave",
      totalleave: 5,
      daysleft: Math.max(5 - usedSickDays, 0),
    },
    {
      logo: <DailyAverage />,
      typeofleave: "Total Paid Leaves",
      totalleave: 7,
      daysleft: Math.max(7 - totalLeaves, 0),
      
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full mt-3">
      {leaveData.map((leave, index) => (
        <RequestLeaveCardWrap
          key={index}
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
