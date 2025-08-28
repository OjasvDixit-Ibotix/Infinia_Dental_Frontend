import React from 'react'
import QuickActions from '../../components/EmployeeHandBook/QuickActions'
import RecentlyUpdated from '../../components/EmployeeHandBook/RecentlyUpdated'
import HRNoticeboard from '../../components/EmployeeHandBook/HRNoticeBoardCard'
import ContactHrCard from '../../components/EmployeeHandBook/ContactHrCard'
import EmpLabPolicyHeader from '../../components/EmployeeComponents/EmpLabPolicyComp/EmpLabPolicyHeader'
import EmpLabPolicyFilter from '../../components/EmployeeComponents/EmpLabPolicyComp/EmpLabPolicyFilter'
import LabPolicySectionsComp from '../../components/EmployeeComponents/EmpLabPolicyComp/LabPolicySectionsComp'

const EmployeelabPolicy = () => {
  return (
     <div className='flex flex-col gap-4 md:gap-[18px] w-full'>
      <EmpLabPolicyHeader/>
      <EmpLabPolicyFilter/>
      <div>
        <div className='flex flex-col lg:flex-row  gap-4 h-fit w-full  '>
          <LabPolicySectionsComp/>
          <div className='flex flex-col w-full lg:w-[300px] lg:flex-shrink-0 gap-2 md:gap-3 mt-3 lg:mt-0'>
            <QuickActions/>
            <RecentlyUpdated/>
            <HRNoticeboard/>
            <ContactHrCard/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeelabPolicy