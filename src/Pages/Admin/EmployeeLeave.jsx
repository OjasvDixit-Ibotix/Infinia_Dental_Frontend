import React from 'react'
import Navbar from '../../components/EmployeeRecords/Navbar'
import EmpLeaveHeader from '../../components/EmployeeLeave/EmpLeaveHeader'
import LeaveRequestTable from '../../components/EmployeeLeave/LeaveRequestTable'
import HolidayListCard from '../../components/EmployeeLeave/HolidayListCard'
import AllLeaveTable from '../../components/EmployeeLeave/AllLeaveTable'

const EmployeeLeave = () => {
  return (
  <>
   <EmpLeaveHeader/>
  <div className="flex flex-col md:flex-row gap-5">
    <div className="w-full md:w-2/3">
      <LeaveRequestTable />
    </div>
    <div className="w-full md:w-1/3">
      <HolidayListCard />
    </div>
  </div>

  <div className="w-full pt-7">
    <AllLeaveTable />
</div>


  </>
  )
}

export default EmployeeLeave