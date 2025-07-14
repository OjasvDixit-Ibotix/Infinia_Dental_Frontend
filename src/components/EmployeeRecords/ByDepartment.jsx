import React from "react";
import BydepartmentIcon from "../../assets/svgs/WelcomePage/BydepartmentIcon";

const departments = [
  { name: "Clinical", count: 3, percent: 75 },
  { name: "Administration", count: 1, percent: 25 },
  { name: "Front Desk", count: 1, percent: 25 },
  { name: "Specialty", count: 1, percent: 25 },
];

const ByDepartment = () => {
  return (
    <div className="bg-white rounded-xl border border-[#F3C85C] p-5 w-full sm:max-w-sm shadow-md mb-4">
      <div className="flex items-center gap-2 mb-4">
        <BydepartmentIcon />
        <h2 className="text-[#444] text-base font-medium">By Department</h2>
      </div>

      {departments.map((dept, index) => (
        <div key={index} className="flex items-center justify-between mb-3">
          <p className="text-sm text-[#111827] w-[100px] truncate">{dept.name}</p>

          <div className="flex-1 mx-2">
            <div className="w-full h-2 bg-[#E5E7EB] rounded-full">
              <div
                className="h-2 bg-[#EFCD78] rounded-full"
                style={{ width: `${dept.percent}%` }}
              />
            </div>
          </div>

          <p className="text-sm text-[#111827] w-4 text-right">{dept.count}</p>
        </div>
      ))}
    </div>
  );
};

export default ByDepartment;
