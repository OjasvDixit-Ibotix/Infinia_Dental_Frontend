import React, { useState } from "react";
import SearchBar from "../SearchBar";
import EmpRecordsPopUp from "./EmpRecordsPopUp";
import RowColView from "../../assets/svgs/WelcomePage/RowColView";
import OneColView from "../../assets/svgs/WelcomePage/OneColView";

const employeesData = [
  {
    initials: "SJ",
    name: "Dr. Sarah Johnson",
    empId: "EMP001",
    status: "Active",
    role: "Senior Dentist",
    department: "Clinical",
    joined: "March 2022",
    attendance: '54'
  },
  {
    initials: "MC",
    name: "Michael Chen",
    empId: "EMP002",
    status: "Active",
    role: "Dental Hygienist",
    department: "Clinical",
    joined: "Jan 2023",
    attendance: '67'

  },
  {
    initials: "ER",
    name: "Emma Rodriguez",
    empId: "EMP003",
    status: "On Leave",
    role: "Office Manager",
    department: "Administration",
    joined: "Nov 2021",
    attendance: '87'

  },
  {
    initials: "LA",
    name: "Lisa Anderson",
    empId: "EMP006",
    status: "Former",
    role: "Receptionist",
    department: "Front Desk",
    joined: "Sep 2022",
    attendance: '37'

  },
  {
    initials: "DRT",
    name: "Dr. Robert Taylor",
    empId: "EMP005",
    status: "Active",
    role: "Orthodontist",
    department: "Specialty",
    joined: "May 2020",
    attendance: '94'

  },
  {
    initials: "JW",
    name: "James Wilson",
    empId: "EMP004",
    status: "Active",
    role: "Dental Assistant",
    department: "Clinical",
    joined: "Jun 2023",
    attendance: '100'

  },
];

const statusColors = {
  Active: "bg-[#6C8B88] text-white",
  "On Leave": "bg-[#8D6A9F] text-white",
  Former: "bg-[#D1D5DB] text-black",
};

const EmployeeProfileCard = () => {
  const [selectedEmp, setSelectedEmp] = useState(null);
  const [view, setView] = useState("cards"); 

  return (
    <div className="w-full  pt-4">
      <div className="flex flex-row items-center w-[650px] justify-between gap-4 ">
        <SearchBar placeholder="Search by name, department, ID..." />

        <div className="flex items-center gap-2 bg-white rounded-[6px] p-[4px] shadow-[0_4px_12px_0_rgba(239,205,120,0.10)]">
          <div
            onClick={() => setView("cards")}
            className={`flex items-center justify-center rounded-[6px] p-2 cursor-pointer ${
              view === "cards"
                ? "bg-[#EFCD78] shadow-[0_4px_6px_-4px_rgba(0,0,0,0.10)]"
                : "bg-white"
            }`}
          >
            <OneColView />
          </div>

          <div
            onClick={() => setView("table")}
            className={`flex items-center justify-center rounded-[6px] p-2 cursor-pointer ${
              view === "table"
                ? "bg-[#EFCD78] shadow-[0_4px_6px_-4px_rgba(0,0,0,0.10)]"
                : "bg-white"
            }`}
          >
            <RowColView />
          </div>
        </div>
      </div>

      {view === "cards" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
          {employeesData.map((emp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-[#F3C85C] p-5 w-full shadow-sm relative cursor-pointer"
              onClick={() => setSelectedEmp(emp)}
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

              <h2 className="text-[15px] font-medium text-center mt-3">
                {emp.name}
              </h2>
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
        </div>


              
            
          ))}
        </div>
      )}

      {view === "table" && (
        <div className="bg-[#FFFFFFB2] rounded-xl shadow-md mt-6 overflow-hidden">
          <table className="w-full text-left ">
            <thead className="bg-gray-100 text-[#444] text-sm">
              <tr>
                <th className="p-3"></th>
                <th className="p-3">Name</th>
                <th className="p-3">ID</th>
                <th className="p-3">Role</th>
                <th className="p-3">Departments</th>
                <th className="p-3">Joining Date</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {employeesData.map((emp, idx) => (
                <tr
                  key={idx}
                  className=" hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedEmp(emp)}
                >
                  <td className="p-3">
                    <input type="checkbox" className="accent-[#F3C85C]" />
                  </td>
                  <td className="p-3 flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#EFCD78] text-[#444]  text-sm font-bold rounded-full flex items-center justify-center">
                      {emp.initials}
                    </div>
                    <span className="font-medium text-[#444]">{emp.name}</span>
                  </td>
                  <td className="p-3 text-[14px] text-[#6B7280]">{emp.empId}</td>
                  <td className="p-3 text-[14px] text-[#6B7280]">{emp.role}</td>
                  <td className="p-3 text-[14px] text-[#6B7280]">{emp.department}</td>
                  <td className="p-3 text-[14px] text-[#6B7280]">{emp.joined}</td>
                  <td className="p-3">
                    <span
                      className={`text-xs px-3 text-[14px]  py-[3px] rounded-full ${statusColors[emp.status]}`}
                    >
                      {emp.status}
                    </span>
                  </td>
                  <td className="p-3 text-gray-500 text-xl">⋮</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedEmp && (
        <EmpRecordsPopUp isOpen={true} setSelectedEmp={setSelectedEmp} />
      )}
    </div>
  );
};

export default EmployeeProfileCard;
