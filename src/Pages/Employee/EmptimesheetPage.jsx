import React from 'react'
import EmpTimeSheetHeader from '../../components/EmployeeComponents/EmpTimesheetPageComp/EmpTimeSheetHeader'
import ClockInOutComp from '../../components/EmployeeComponents/EmpTimesheetPageComp/ClockInOutComp'
import EmpTimeEntriesTable from '../../components/EmployeeComponents/EmpTimesheetPageComp/EmpTimeEntriesTable'
import EmpTimeStats from '../../components/EmployeeComponents/EmpTimesheetPageComp/EmpTimeStats'

const EmptimesheetPage = () => {
  return (
    <>
    <div className="flex flex-col gap-6">

    <div className="flex flex-col gap-[17px]">
    <EmpTimeSheetHeader/>
    <ClockInOutComp/>
    </div>
    <div className="flex flex-row gap-6">

       <EmpTimeEntriesTable></EmpTimeEntriesTable>
       <EmpTimeStats/>
       
    </div>
      
    </div>
    </>
  )
}

export default EmptimesheetPage