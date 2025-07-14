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
      <Navbar />
      <EmployeeHeader />

      <div className="flex flex-col lg:flex-row gap-6 mt-6 ">
        {/* Left Section */}
        <div className="w-full lg:w-[72%]">
          <EmployeeProfileCard />
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-[28%] space-y-4">
          <EmplSummaryCard />
          <ByDepartment />
          <RecentActivity />
        </div>
      </div>
    </>
  );
};

export default EmployeeRecordsPage;
