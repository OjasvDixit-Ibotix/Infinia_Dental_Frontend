import React, { useState } from 'react';
import EmpdirectoryCardWrap from './EmpdirectoryCardWrap';
import { employeeData } from './employeeData'; // Adjust path if needed

// This is a "recursive" component. It renders itself for each child.
const OrgChartNode = ({ employee, allEmployees }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Find children of the current employee
  const directReports = allEmployees.filter(e => e.reportsTo === employee.id);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex flex-col items-start">
      {/* Employee Card */}
      <EmpdirectoryCardWrap
        employee={employee}
        hasChildren={directReports.length > 0}
        isOpen={isOpen}
        onClick={handleToggle}
      />

      {/* Children Container */}
      {isOpen && directReports.length > 0 && (
        <div className="relative pt-8 pl-10">
          {/* Vertical line from parent to children */}
          <div className="absolute top-0 left-5 h-full w-px bg-gray-300"></div>

          <div className="flex flex-col gap-5">
            {directReports.map(report => (
              <div key={report.id} className="relative">
                {/* Horizontal line to each child */}
                <div className="absolute top-8 -left-5 h-px w-5 bg-gray-300"></div>
                <OrgChartNode employee={report} allEmployees={allEmployees} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


// This is the main component you will export and use
const OrganizationChart = () => {
  // Get top-level employees (CEO, CTO, etc.)
  const rootEmployees = employeeData.filter(e => e.reportsTo === null);

  return (
    <div className="p-4 sm:p-8 font-[Segoe UI Symbol] w-full">
      <h1 className="text-2xl font-bold text-[#444] mb-6">
        Organizational Chart
      </h1>
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {rootEmployees.map(employee => (
          <OrgChartNode 
            key={employee.id} 
            employee={employee} 
            allEmployees={employeeData} 
          />
        ))}
      </div>
    </div>
  );
};

export default OrganizationChart;