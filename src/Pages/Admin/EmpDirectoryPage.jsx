import React from 'react'
import EmpDirectoryHeaderComp from '../../components/EmployeeDirectory/EmpDirectoryHeaderComp'
import EmpDirectoryCards from '../../components/EmployeeDirectory/EmpDirectoryCards'
const EmpDirectoryPage = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 w-full">
      <EmpDirectoryHeaderComp/>
      <EmpDirectoryCards/>
    </div>
  )
}

export default EmpDirectoryPage