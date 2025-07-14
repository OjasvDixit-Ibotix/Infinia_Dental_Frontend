import React from 'react'
import Navbar from '../../components/EmployeeRecords/Navbar'
import EmpLeaveHeader from '../../components/EmployeeLeave/EmpLeaveHeader'
import LeaveRequestTable from '../../components/EmployeeLeave/LeaveRequestTable'
import HolidayListCard from '../../components/EmployeeLeave/HolidayListCard'

const EmployeeLeave = () => {
  return (
  <>
   <EmpLeaveHeader/>
   <LeaveRequestTable/>
   <HolidayListCard/>
   
  </>
  )
}

export default EmployeeLeave