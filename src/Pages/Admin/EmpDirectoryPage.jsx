import React from 'react'
import EmpDirectoryHeaderComp from '../../components/EmployeeDirectory/EmpDirectoryHeaderComp'
import EmpDirectoryCards from '../../components/EmployeeDirectory/EmpDirectoryCards'
import OrganizationChart from '../../components/EmployeeDirectory/OrganizationChart'
const EmpDirectoryPage = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 w-full">
      <EmpDirectoryHeaderComp/>
      <OrganizationChart/>
      <EmpDirectoryCards/>
    </div>
  )
}

export default EmpDirectoryPage