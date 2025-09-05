// src/pages/EmptimesheetPage.jsx

import React from 'react';
import EmpTimeSheetHeader from '../../components/EmployeeComponents/EmpTimesheetPageComp/EmpTimeSheetHeader';
import ClockInOutComp from '../../components/EmployeeComponents/EmpTimesheetPageComp/ClockInOutComp';
import EmpTimeEntriesTable from '../../components/EmployeeComponents/EmpTimesheetPageComp/EmpTimeEntriesTable';
import EmpTimeStats from '../../components/EmployeeComponents/EmpTimesheetPageComp/EmpTimeStats';
import { fetchTimeEntries } from '../../slices/timeEntries/timeEntriesSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const EmptimesheetPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTimeEntries());
  }, []);

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6"> 
          <EmpTimeSheetHeader />
          <ClockInOutComp />
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          <EmpTimeEntriesTable />
          <EmpTimeStats />
        </div>
      </div>
    </>
  );
};

export default EmptimesheetPage;