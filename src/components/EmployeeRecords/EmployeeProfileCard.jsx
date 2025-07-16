import React from "react";
import SearchBar from "../SearchBar";

const employeesData = [
  {
    initials: "SJ",
    name: "Dr. Sarah Johnson",
    empId: "EMP001",
    status: "Active",
    role: "Senior Dentist",
    department: "Clinical",
    joined: "Mar 2022",
    attendance: 98,
  },
  {
    initials: "MC",
    name: "Michael Chen",
    empId: "EMP002",
    status: "Active",
    role: "Dental Hygienist",
    department: "Clinical",
    joined: "Jan 2023",
    attendance: 95,
  },
  {
    initials: "ER",
    name: "Emma Rodriguez",
    empId: "EMP003",
    status: "On Leave",
    role: "Office Manager",
    department: "Administration",
    joined: "Nov 2021",
    attendance: 92,
  },
  {
    initials: "LA",
    name: "Lisa Anderson",
    empId: "EMP005",
    status: "Former",
    role: "Receptionist",
    department: "Front Desk",
    joined: "Sep 2022",
    attendance: 88,
  },
  {
    initials: "DRT",
    name: "Dr. Robert Taylor",
    empId: "EMP006",
    status: "Active",
    role: "Orthodontist",
    department: "Specialty",
    joined: "May 2020",
    attendance: 99,
  },
  {
    initials: "JW",
    name: "James Wilson",
    empId: "EMP004",
    status: "Active",
    role: "Dental Assistant",
    department: "Clinical",
    joined: "Jun 2023",
    attendance: 97,
  },
];

const statusColors = {
  Active: "bg-[#6C8B88] text-white",
  "On Leave": "bg-[#8D6A9F] text-white",
  Former: "bg-[#D1D5DB] text-black",
};

const EmployeeProfileCard = () => {
  return (
    <div className="w-full  px-4 sm:px-6 pt-4">
      <SearchBar placeholder="Search by name, department, ID..." />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
        {employeesData.map((emp, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-[#F3C85C] p-5 w-full shadow-sm relative"
          >
            <input
              type="checkbox"
              className="absolute top-4 left-4 h-4 w-4 accent-[#F3C85C]"
            />

            <div className="flex justify-center mt-2">
              <div className="w-12 h-12 bg-[#444] text-white font-semibold text-sm rounded-full flex items-center justify-center">
                {emp.initials}
              </div>
            </div>

            <h2 className="text-[15px] font-medium text-center mt-3">{emp.name}</h2>
            <p className="text-xs text-center text-[#6B7280]">{emp.empId}</p>

            <div className="mt-2 flex justify-center">
              <span
                className={`text-xs px-3 py-[2px] rounded-full ${statusColors[emp.status]}`}
              >
                {emp.status}
              </span>
            </div>

            <div className="text-[13px] mt-5 space-y-[6px]">
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Role:</span>
                <span>{emp.role}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Department:</span>
                <span>{emp.department}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Joined:</span>
                <span>{emp.joined}</span>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-[#111827]">Attendance</span>
                <span className="text-[#111827]">{emp.attendance}%</span>
              </div>
              <div className="w-full h-[6px] bg-gray-200 rounded-full">
                <div
                  className="h-[6px] rounded-full bg-[#EFCD78]"
                  style={{ width: `${emp.attendance}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeProfileCard;
