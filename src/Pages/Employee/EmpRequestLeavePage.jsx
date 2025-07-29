import React from 'react'
import EmpReqLeaveHeader from '../../components/EmployeeComponents/RequestLeaveComp/EmpReqLeaveHeader'
import EmpRequestLeaveCards from '../../components/EmployeeComponents/RequestLeaveComp/EmpRequestLeaveCards'
import EmpLeaveRequestForm from '../../components/EmployeeComponents/RequestLeaveComp/EmpLeaveRequestForm'

const EmpRequestLeavePage = () => {
  return (
   <>
   <EmpReqLeaveHeader/>
   <EmpRequestLeaveCards/>
   <EmpLeaveRequestForm/>
   
     
   </>
  )
}

export default EmpRequestLeavePage