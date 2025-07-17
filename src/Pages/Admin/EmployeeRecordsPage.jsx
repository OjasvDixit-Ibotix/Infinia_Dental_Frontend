import React from 'react';
import Navbar from '../../components/EmployeeRecords/Navbar';
import EmployeeHeader from '../../components/EmployeeRecords/EmployeeHeader';
import EmployeeProfileCard from '../../components/EmployeeRecords/EmployeeProfileCard';
import EmplSummaryCard from '../../components/EmployeeRecords/EmplSummaryCard';
import ByDepartment from '../../components/EmployeeRecords/ByDepartment';
import RecentActivity from '../../components/EmployeeRecords/RecentActivity';

const EmployeeRecordsPage = () => {
  return (
    <>
      <EmployeeHeader />
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 mt-4 md:mt-6 w-full">
        <div className="w-full lg:w-[72%]">
          <EmployeeProfileCard />
        </div>
        <div className="w-full lg:w-[28%] space-y-4 mt-4 lg:mt-0">
          <EmplSummaryCard />
          <ByDepartment />
          <RecentActivity />
        </div>
      </div>
    </>
  );
};

export default EmployeeRecordsPage;
