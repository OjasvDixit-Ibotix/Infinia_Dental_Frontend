import React, { useState, useEffect } from "react";
import axios from "axios"; 
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import apiClient from "../../utils/api/api";
import { id } from "zod/v4/locales";
import { fetchEmployees } from "../../slices/employee/employeesSlice";
export default function EditEmployeeModal({ onClose, selectedEmp ,setSelectedEmp }) {

  const dispatch = useDispatch();
  console.log("Selected Employee for Edit:", selectedEmp);

  const [formData, setFormData] = useState({
    id: "",
    first_name: "",
    last_name: "",
    employee_id: "",
    phone: "",
    email: "",
    user_role: "",
    job_title: "",
    department: "",
    employee_type: "",
    report_manager: "",
  });

  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
  if (selectedEmp) {
    const [firstName, ...lastNameParts] = selectedEmp.name
      ? selectedEmp.name.split(" ")
      : ["", ""];

    setFormData({
      id: selectedEmp.id || "",
      first_name: firstName || "",
      last_name: lastNameParts.join(" ") || "",
      // name: selectedEmp.name || "",
      employee_id: selectedEmp.employee_id || "",
      phone: selectedEmp.phone || "",
      email: selectedEmp.email || "",
      user_role: selectedEmp.user_role || "",
      department: selectedEmp.department || "",
      employee_type: selectedEmp.employee_type || "",
      report_manager: selectedEmp.report_manager || "",
      join_date: selectedEmp.join_date || "",
      job_title: selectedEmp.job_title || "",
    });
  }
}, [selectedEmp]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    console.log('formdata',formData);
      const payload = {
    id: formData.id,
    name: `${formData.first_name} ${formData.last_name}`.trim(),
    email: formData.email,
    phone: formData.phone,
    employee_id: formData.employee_id,
    department: formData.department,
    employee_type: formData.employee_type,
    report_manager: formData.report_manager,
    job_title: formData.job_title,
    join_date: formData.join_date,
    user_role: formData.user_role,
  };
    
    try {
      const response = await apiClient.put(
        '/current-user',
        payload
      );
      console.log("Update successful:", response.data);
      toast.success("Employee details updated successfully!");
      onClose();
      setSelectedEmp(false)
      dispatch(fetchEmployees());
    } catch (error) {
      console.error("Failed to update employee:", error);
      toast.error("Failed to save details. Please try again.");
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 flex z-50 items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-xl w-[650px] p-6 shadow-lg">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold">Edit Employee Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 text-2xl"
            disabled={isSaving}
          >
            &times;
          </button>
        </div>

        {/* Profile Section */}
        <div className="flex items-center mt-4">
          <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-xl font-bold text-white">
            {formData.first_name.charAt(0)}
            {formData.last_name.charAt(0)}
          </div>
          <div className="ml-4">
            <h3 className="font-semibold text-lg">{selectedEmp?.name}</h3>
            <p className="text-gray-500 text-sm">{selectedEmp?.user_role}</p>
            <div className="flex items-center mt-1">
              <span className="bg-green-200 text-green-800 px-2 py-0.5 rounded-full text-xs mr-2">
                {selectedEmp?.status}
              </span>
              <span className="text-gray-400 text-sm">
                {selectedEmp?.employee_id}
              </span>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">First name</label>
              <input
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Last name</label>
              <input
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Employee Id</label>
              <input
                name="employee_id"
                value={formData.employee_id}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Phone</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Joining Date</label>
              <input
                type="date"
                name="join_date"
                value={formData.join_date}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Job Title</label>
              <input
                name="job_title"
                value={formData.user_role}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Department</label>
              <input
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Employment Type</label>
              <input
                name="employee_type"
                value={formData.employee_type}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Reporting Manager</label>
              <input
                name="report_manager"
                value={formData.report_manager}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 mr-3"
            disabled={isSaving}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-yellow-400 px-6 py-2 rounded-lg text-white hover:bg-yellow-500 disabled:bg-yellow-300 disabled:cursor-not-allowed"
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
