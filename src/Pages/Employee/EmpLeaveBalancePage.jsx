import React from 'react'
import EmpLeaveBalanceHeader from '../../components/EmployeeComponents/EmpLeaveBalanceComp/EmpLeaveBalanceHeader'
import LeaveTypeCards from '../../components/EmployeeComponents/EmpLeaveBalanceComp/LeaveTypeCards'
import LeavehistorySection from '../../components/EmployeeComponents/RequestLeaveComp/LeavehistorySection'
import LeaveDistributionSection from '../../components/EmployeeComponents/RequestLeaveComp/LeaveDistributionSection'
import QuickStats from '../../components/EmployeeComponents/RequestLeaveComp/QuickStats'
import { fetchLeaveHistory } from '../../slices/leaveHistorySlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
const EmpLeaveBalancePage = () => {
   const dispatch = useDispatch();
   // const { leaves, status, error } = useSelector((state) => state.leaveHistory);


    useEffect(() => {
       dispatch(fetchLeaveHistory());
     }, [dispatch]);
  return (
   <>
   <EmpLeaveBalanceHeader/>
   <LeaveTypeCards/>
   <div className="flex gap-6 flex-row mt-5">
   <LeavehistorySection/>
      <div className="flex flex-col gap-4">
   
   <LeaveDistributionSection/>
   <QuickStats/>
      </div>
   </div>
   </>
  )
}

export default EmpLeaveBalancePage