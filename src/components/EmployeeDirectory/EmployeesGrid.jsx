import React from 'react';
import  {employeeData}  from './employeeData'; // Adjust path if needed
import AllEmployeesCard from './AllEmployeesCard'; // We'll reuse the card component

const EmployeesGrid = () => {
  // Get the total number of employees
  const employeeCount = employeeData.length;

  return (
    <div className="p-4 sm:p-8 font-[Segoe UI Symbol] w-full">
      {/* Header Section */}
      <div className="mb-6 sm:mb-8">
        <p className="text-[#444] font-semibold text-xl md:text-2xl">
          All Employees ({employeeCount})
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {employeeData.map(employee => (
          <AllEmployeesCard 
            key={employee.id} 
            employee={employee} 
            hasChildren={false} 
          />
        ))}
      </div>
    </div>
  );
};

export default EmployeesGrid;