import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import BydepartmentIcon from "../../assets/svgs/WelcomePage/BydepartmentIcon";

const ByDepartment = () => {
    const { employees } = useSelector((state) => state.emp);

    const departmentData = useMemo(() => {
        if (!employees || employees.length === 0) {
            return [];
        }

        const actualEmployees = employees.filter(emp => emp.user_type === 'employee');
        const totalEmployeeCount = actualEmployees.length;

        if (totalEmployeeCount === 0) {
            return [];
        }

        const counts = actualEmployees.reduce((acc, employee) => {
            const dept = `${employee?.department?.charAt(0).toUpperCase() + employee?.department?.slice(1).toLowerCase()}` || 'Unassigned'; // Handle employees with no department
            acc[dept] = (acc[dept] || 0) + 1;
            return acc;
        }, {});

        const stats = Object.keys(counts).map(deptName => {
            const count = counts[deptName];
            const percent = Math.round((count / totalEmployeeCount) * 100);
            return { name: deptName, count, percent };
        });

        return stats.sort((a, b) => b.count - a.count);

    }, [employees]); 
    return (
        <div className="bg-white rounded-xl border border-[#F3C85C] p-5 w-full sm:max-w-sm shadow-md mb-4">
            <div className="flex items-center gap-2 mb-4">
                <BydepartmentIcon />
                <h2 className="text-[#444] text-base font-medium">By Department</h2>
            </div>
            
            {departmentData.map((dept, index) => (
                <div key={index} className="flex items-center justify-between mb-3">
                    <p className="text-sm text-[#111827] w-[100px] truncate" title={dept.name}>
                        {dept.name}
                    </p>

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
            {departmentData.length === 0 && (
                <p className="text-sm text-gray-500 text-center">No department data available.</p>
            )}
        </div>
    );
};

export default ByDepartment;