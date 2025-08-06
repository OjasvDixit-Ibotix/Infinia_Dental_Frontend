import React from 'react'
import EmpLeaveBalanceHeader from '../../components/EmployeeComponents/EmpLeaveBalanceComp/EmpLeaveBalanceHeader'
import LeaveTypeCards from '../../components/EmployeeComponents/EmpLeaveBalanceComp/LeaveTypeCards'
import LeavehistorySection from '../../components/EmployeeComponents/RequestLeaveComp/LeavehistorySection'
import LeaveDistributionSection from '../../components/EmployeeComponents/RequestLeaveComp/LeaveDistributionSection'

const EmpLeaveBalancePage = () => {
  return (
   <>

   <EmpLeaveBalanceHeader/>
   <LeaveTypeCards/>
   <div className="flex gap-6 flex-row mt-5">
   <LeavehistorySection/>
    
   <LeaveDistributionSection/>
   </div>
   </>
  )
}

export default EmpLeaveBalancePage