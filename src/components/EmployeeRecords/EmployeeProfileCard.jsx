import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import SearchBar from "../SearchBar";
import EmpRecordsPopUp from "./EmpRecordsPopUp";
import RowColView from "../../assets/svgs/WelcomePage/RowColView";
import OneColView from "../../assets/svgs/WelcomePage/OneColView";
import { usePagination } from "../../utils/customHooks/usePagination";
import PaginationControls from "../PaginationControls";
import Spinner from "../../utils/customHooks/Spinner";

const getInitials = (name) => {
    if (!name) return "??";
    const nameParts = name.trim().split(" ");
    if (nameParts.length > 1) {
        return `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
};
const formatJoinDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", { month: "long", year: "numeric" });
};
const formatStatus = (status) => {
    switch (status) {
        case "active": return "Active";
        case "on_leave": return "On Leave";
        default: return "Former";
    }
};
const capitalize = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};


const EmployeeProfileCard = () => {
    const { employees, status: employeeStatus, error } = useSelector((state) => state.emp);
    console.log('employees',employees);
    

    const [selectedEmp, setSelectedEmp] = useState(null);
    const [view, setView] = useState("cards");
    const [searchTerm, setSearchTerm] = useState("");

    const statusColors = {
        Active: "bg-[#6C8B88] text-white",
        "On Leave": "bg-[#8D6A9F] text-white",
        Former: "bg-[#D1D5DB] text-black",
    };


    const formattedEmployees = useMemo(() =>
        employees
            .filter(emp => emp.user_type.toLowerCase() === 'employee')
            .map((emp) => ({
                ...emp,
                initials: getInitials(emp.name),
                joined: formatJoinDate(emp.join_date),
                status: formatStatus(emp.user_status),
            })),
        [employees]
    );
    const filteredEmployees = useMemo(() =>
        formattedEmployees.filter(
            (emp) =>
                emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (emp.department?.toLowerCase()?? '').includes(searchTerm.toLowerCase()) ||
                (emp.employee_id?.toLowerCase()?? '').includes(searchTerm.toLowerCase())
        ),
        [formattedEmployees, searchTerm]
    );

    const {
        paginatedData,
        currentPage,
        totalPages,
        nextPage,
        prevPage,
        goToPage
    } = usePagination(filteredEmployees, 9);

    let content;
    if (employeeStatus === "loading") {
        content = <div className="grid place-items-center h-[400px]">
        <Spinner />; </div>
            
    } else if (employeeStatus === "succeeded") {
        content = (
            <>
                {view === "cards" && (
                    <div className="overflow-y-auto max-h-[1059px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
                        {paginatedData.map((emp) => (
                            <div
                                key={emp.id} 
                                className="bg-white rounded-xl border border-[#F3C85C] p-5 w-full shadow-sm relative cursor-pointer"
                                onClick={() => setSelectedEmp(emp)}
                            >
                                <input type="checkbox" className="absolute top-4 left-4 h-4 w-4 accent-[#F3C85C]" />
                                <div className="flex justify-center mt-2">
                                    <div className="w-12 h-12 bg-[#444] text-white font-semibold text-sm rounded-full flex items-center justify-center">
                                        {emp?.initials}
                                    </div>
                                </div>
                                <h2 className="text-[15px] font-medium text-center mt-3">{emp?.name}</h2>
                                <p className="text-xs text-center text-[#6B7280]">{emp?.employee_id}</p>
                                <div className="mt-2 flex justify-center">
                                    <span className={`text-xs px-3 py-[2px] rounded-full ${statusColors[emp?.status]}`}>{emp?.status}</span>
                                </div>
                                <div className="text-[13px] mt-5 space-y-[6px]">
                                    <div className="flex justify-between"><span className="text-[#6B7280]">Role:</span><span> {emp?.user_role.length > 15
                                                                                                                                    ? `${emp.user_role.substring(0, 15)}...`
                                                                                                                                    : emp?.user_role}</span></div>
                                    <div className="flex justify-between"><span className="text-[#6B7280]">Department:</span><span> {emp.department.length > 15
                                                                                                                                    ? `${emp.department.substring(0, 15)}...`
                                                                                                                                    : emp?.department}
                                                                                                                                </span></div>
                                    <div className="flex justify-between"><span className="text-[#6B7280]">Joined:</span><span>{emp.joined}</span></div>
                                    <div className="mt-4">
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-[#111827]">Attendance</span>
                                            {/* 5. Use original percentage and floor it here */}
                                            <span className="text-[#111827]">{Math.floor(emp.attendance_percentage)}%</span>
                                        </div>
                                        <div className="w-full h-[6px] bg-gray-200 rounded-full">
                                            <div className="h-[6px] rounded-full bg-[#EFCD78]" style={{ width: `${emp.attendance_percentage}%` }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {view === "table" && (
                    <div className="bg-[#FFFFFFB2] rounded-xl shadow-md mt-6  overflow-x-auto">
                        <table className="w-full text-left">
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
                                {paginatedData.map((emp, idx) => (
                                    <tr
                                        key={idx}
                                        className="hover:bg-gray-50 cursor-pointer"
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
                                        <td className="p-3 text-[14px] text-[#6B7280]">{emp.employee_id}</td>
                                        <td className="p-3 text-[14px] text-[#6B7280]">{emp.user_role}</td>
                                        <td className="p-3 text-[14px] text-[#6B7280]">{emp.department}</td>
                                        <td className="p-3 text-[14px] text-[#6B7280]">{emp.joined}</td>
                                        <td className="p-3">
                                            <span className={`text-xs px-3 text-[14px]  py-[3px] rounded-full ${statusColors[emp.status]}`}>{emp.status}</span>
                                        </td>
                                        <td className="p-3 text-gray-500 text-xl">⋮</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </>
        );
    } else if (employeeStatus === "failed") {
        content = <p className="text-center mt-6 text-red-500">Error: {error}</p>;
    }

    return (
        <div className="w-full pt-4">
            <div className="flex flex-row items-center  justify-between gap-4 ">
                <SearchBar
                    placeholder="Search by name, department, ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="flex items-center gap-2 bg-white rounded-[6px] p-[4px] shadow-[0_4px_12px_0_rgba(239,205,120,0.10)]">
                    <div
                        onClick={() => setView("cards")}
                        className={`flex items-center justify-center rounded-[6px] p-2 cursor-pointer ${view === "cards"
                                ? "bg-[#EFCD78] shadow-[0_4px_6px_-4px_rgba(0,0,0,0.10)]"
                                : "bg-white"
                            }`}
                    >
                        <OneColView />
                    </div>

                    <div
                        onClick={() => setView("table")}
                        className={`flex items-center justify-center rounded-[6px] p-2 cursor-pointer ${view === "table"
                                ? "bg-[#EFCD78] shadow-[0_4px_6px_-4px_rgba(0,0,0,0.10)]"
                                : "bg-white"
                            }`}
                    >
                        <RowColView />
                    </div>
                </div>


            </div>
            {content}
            {filteredEmployees.length > 0 && (
                <PaginationControls
                    currentPage={currentPage}
                    totalPages={totalPages}
                    nextPage={nextPage}
                    prevPage={prevPage}
                    goToPage={goToPage}
                />
            )}
            {selectedEmp && (
                <EmpRecordsPopUp   selectedEmp={selectedEmp} setSelectedEmp={setSelectedEmp} />
            )}
        </div>
    );
};

export default EmployeeProfileCard;