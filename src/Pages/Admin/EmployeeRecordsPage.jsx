import React from 'react';
import Navbar from '../../components/EmployeeRecords/Navbar';
import EmployeeHeader from '../../components/EmployeeRecords/EmployeeHeader';
import EmployeeProfileCard from '../../components/EmployeeRecords/EmployeeProfileCard';
import EmplSummaryCard from '../../components/EmployeeRecords/EmplSummaryCard';
import ByDepartment from '../../components/EmployeeRecords/ByDepartment';
import RecentActivity from '../../components/EmployeeRecords/RecentActivity';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchEmployees } from '../../slices/employee/employeesSlice';
const EmployeeRecordsPage = () => {
  

  const dispatch = useDispatch();
  
  const { employees, status: employeeStatus, error } = useSelector((state) => state.emp);
  
   useEffect(() => {
      if (employeeStatus === "idle") {
        dispatch(fetchEmployees());
      }
    }, [employeeStatus, dispatch]);
  return (   
    <>
           
      <EmployeeHeader />
      <div className="flex flex-col lg:flex-row gap-4 md:gap-2 mt-4 md:mt-2 w-full">
        <div className="w-full  lg:w-[72%]">
          <EmployeeProfileCard/>
        </div>
        <div className="w-full lg:w-[28%] pt-22 space-y-4 mt-4 lg:mt-0">
          <EmplSummaryCard />
          <ByDepartment /> 
          <RecentActivity />
        </div>
      </div>
    </>
  );
};

export default EmployeeRecordsPage;
