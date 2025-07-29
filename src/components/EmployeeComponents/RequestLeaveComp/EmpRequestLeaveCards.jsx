import React from 'react'
import RequestLeaveCardWrap from './wrapper/RequestLeaveCardWrap'
import ClockIconYellow from '../../../assets/svgs/EmpTimesheet/ClockIconYellow'
import DailyAverage from '../../../assets/svgs/EmpTimesheet/DailyAverage'
import AnnualLeaveicon from '../../../assets/svgs/EmpRequestLeave/AnnualLeaveicon'
const EmpRequestLeaveCards = () => {
  const leaveData = [
    {
      daysleft: 15,
      logo: <AnnualLeaveicon/>,
      typeofleave: "Annual Leave",
      noOfDaysUsed: 10,
      totalleave: 25,
      percentRemain: "60%",
      leaveleftoutof: "15/25",
    },
    {
      daysleft: 5,
      logo:<ClockIconYellow/>,
      typeofleave: "Sick Leave",
      noOfDaysUsed: 5,
      totalleave: 10,
      percentRemain: "50%",
      leaveleftoutof: "5/10",
    },
    {
      daysleft: 7,
      logo:<DailyAverage/>,
      typeofleave: "Casual Leave",
      noOfDaysUsed: 3,
      totalleave: 10,
      percentRemain: "70%",
      leaveleftoutof: "7/10",
    },
  ]

  return (
    <div className="flex flex-wrap gap-3 w-full">
      {leaveData.map((leave, idx) => (
        <RequestLeaveCardWrap
          key={idx}
          logo={leave.logo}
          daysleft={leave.daysleft}
          typeofleave={leave.typeofleave}
          noOfDaysUsed={leave.noOfDaysUsed}
          percentRemain={leave.percentRemain}
          leaveleftoutof={leave.leaveleftoutof}
          totalleave={leave.totalleave}
        />
      ))}
    </div>
  )
}

export default EmpRequestLeaveCards
