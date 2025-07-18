import React, { useState } from "react";
import EditPencilIcon from "../../assets/svgs/WelcomePage/EditPencilIcon";
import ArchieveIcon from "../../assets/svgs/WelcomePage/ArchieveIcon";

const EmpRecordsPopUp = ({ isOpen, setSelectedEmp }) => {
  if (!isOpen) return null;

  const [selectTab, setSelectTab] = useState("PersonalInfo");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="w-[605px] h-[510px] bg-[#F9F9F9] rounded-tl-[30px] rounded-tr-[0px] rounded-br-[30px] rounded-bl-[30px] overflow-hidden shadow-lg flex flex-col">

        <div className="px-6 py-5 relative">
          <button
            onClick={() => setSelectedEmp(null)}
            className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
          >
            ✕
          </button>

          <p className="text-[#444] font-[400] text-[30px] leading-[36px] font-[Segoe UI Symbol]">
            Employee Records
          </p>

          <div className="flex items-center gap-4 mb-4 pt-4">
            <div className="w-14 h-14 rounded-full bg-[#EFCD78] flex items-center justify-center text-[#444] text-lg font-bold">
              SJ
            </div>
            <div>
              <p className="text-[#444] text-lg font-[Segoe UI Symbol]">
                Dr. Sarah Johnson
              </p>
              <p className="text-sm text-gray-600 font-[Segoe UI Symbol]">
                Senior Dentist • Clinical
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-[Segoe UI Symbol]">
                  Active
                </span>
                <span className="text-sm text-gray-500 font-[Segoe UI Symbol]">
                  EMP001
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mb-4">
            <button className="px-3 py-1 border border-gray-400 rounded-md text-sm flex items-center gap-1 font-[Segoe UI Symbol]">
              <EditPencilIcon/> Edit Profile
            </button>
            <button className="px-3 py-1 bg-[#444] text-white rounded-md text-sm flex items-center gap-1 font-[Segoe UI Symbol]">
              <ArchieveIcon/> Archive
            </button>
          </div>

          <div className="flex gap-4 pb-2 text-sm font-medium">
            {["PersonalInfo", "JobSalary", "LeaveHistory", "AttendanceStats"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectTab(tab)}
                  className={`px-3 py-1 rounded-md font-[Segoe UI Symbol] cursor-pointer ${
                    selectTab === tab
                      ? "bg-[#EFCD78] text-[#444]"
                      : "text-[#444] hover:bg-[#EFCD78]"
                  }`}
                >
                  {tab === "PersonalInfo"
                    ? "Personal Info"
                    : tab === "JobSalary"
                    ? "Job & Salary"
                    : tab === "LeaveHistory"
                    ? "Leave History"
                    : "Attendance Stats"}
                </button>
              )
            )}
          </div>
        </div>

        <div className="bg-[#444] px-6 py-6 flex-1 overflow-y-auto">

          {selectTab === "PersonalInfo" && (
            <div className="flex flex-wrap gap-4">
              <div className="bg-[#EFCD78] rounded-lg p-4 w-full md:w-[calc(50%-8px)]">
                <h3 className="text-[#444] font-semibold mb-2 font-[Segoe UI Symbol]">
                  Contact Information
                </h3>
                <p className="text-sm text-[#444] font-[Segoe UI Symbol]">
                  <strong>Email</strong>
                  <br />
                  sarah.johnson@infiniadental.com
                </p>
                <p className="text-sm text-[#444] mt-2 font-[Segoe UI Symbol]">
                  <strong>Phone</strong>
                  <br />
                  9255564XXX
                </p>
              </div>

              <div className="bg-[#EFCD78] rounded-lg p-4 w-full md:w-[calc(50%-8px)]">
                <h3 className="text-[#444] font-semibold mb-2 font-[Segoe UI Symbol]">
                  Employee Information
                </h3>
                <p className="text-sm text-[#444] font-[Segoe UI Symbol]">
                  <strong>Joining Date</strong>
                  <br />
                  March 15, 2022
                </p>
                <p className="text-sm text-[#444] mt-2 font-[Segoe UI Symbol]">
                  <strong>Employee ID</strong>
                  <br />
                  EMP001
                </p>
              </div>
            </div>
          )}

          {selectTab === "JobSalary" && (
            <div className="bg-[#EFCD78] rounded-lg p-4 w-full">
              <h3 className="text-[#444] font-semibold mb-4 font-[Segoe UI Symbol]">
                Position Details
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-[#444] font-[Segoe UI Symbol]">
                <div>
                  <strong>Job Title</strong>
                  <p>Senior Dentist</p>
                </div>
                <div>
                  <strong>Department</strong>
                  <p>Clinical</p>
                </div>
                <div>
                  <strong>Employment Type</strong>
                  <p>Full Time</p>
                </div>
                <div>
                  <strong>Reporting Manager</strong>
                  <p>Dr. Saurab</p>
                </div>
              </div>
            </div>
          )}

          {selectTab === "LeaveHistory" && (
            <div className="bg-[#EFCD78] rounded-lg p-4 w-full">
              <h3 className="text-[#444] font-semibold mb-4 font-[Segoe UI Symbol]">
                Leave Overview
              </h3>
              <div className="flex gap-4  ">
                {[
                  { label: "Days Remaining", value: 3 },
                  { label: "Days Used", value: 8 },
                  { label: "Total Allocation", value: 20 },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#F9F9F9] rounded-lg p-3 flex flex-col items-center w-[200px]"
                  >
                    <p className="text-[#444] text-lg font-bold">{item.value}</p>
                    <p className="text-[#444] text-xs text-center">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectTab === "AttendanceStats" && (
            <div className="bg-[#EFCD78] rounded-lg p-4 w-full">
              <h3 className="text-[#444] font-semibold mb-4 font-[Segoe UI Symbol]">
                Attendance Overview
              </h3>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <p className="text-[#444] font-[Segoe UI Symbol]">
                    Monthly Attendance Rate
                  </p>
                  <p className="text-[#444] font-[Segoe UI Symbol]">89%</p>
                </div>
                <div className="h-[10px] w-full bg-[#E5E7EB] rounded-full">
                  <div
                    className="h-[10px] bg-[#444] rounded-full"
                    style={{ width: "89%" }}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmpRecordsPopUp;
