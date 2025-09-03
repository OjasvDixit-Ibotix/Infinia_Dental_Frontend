import React, { useState, useEffect } from "react";
import axios from "axios"; 
import { set } from "zod";
import { toast } from "sonner";

export default function EditEmployeeModal({ onClose, selectedEmp }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    employeeId: "",
    phone: "",
    email: "",
    joiningDate: "",
    jobTitle: "",
    department: "",
    employmentType: "",
    reportingManager: "",
  });

  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (selectedEmp) {
      const [firstName, ...lastNameParts] = selectedEmp.name ? selectedEmp.name.split(" ") : ["", ""];
      setFormData({
        firstName: firstName || "",
        lastName: lastNameParts.join(" ") || "",
        employeeId: selectedEmp.employee_id || "",
        phone: selectedEmp.phone || "",
        email: selectedEmp.email || "",
        joiningDate: selectedEmp.join_date || "",
        jobTitle: selectedEmp.jobTitle || " ", 
        department: selectedEmp.department || " ",
        employmentType: selectedEmp.employmentType || " ",
        reportingManager: selectedEmp.reportingManager || " ",
      });
    }
  }, [selectedEmp]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setIsSaving(true); 
    try {
      
      const response = await axios.put(`/current-user/${selectedEmp.id}`, formData); 
      
      console.log("Update successful:", response.data);
      toast.success('Employee details saved successfully!');
      onClose(); 

    } catch (error) {
      setIsSaving(false);
      console.error("Failed to update employee:", error);
      alert("Failed to save details. Please try again."); 
    }
  };

  return (
    <div className="fixed inset-0 flex z-50 items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-xl w-[650px] p-6 shadow-lg">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold">Edit Employee Details</h2>
          <button onClick={onClose} className="text-gray-500 text-2xl" disabled={isSaving}>&times;</button>
        </div>

        <div className="flex items-center mt-4">
          <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-xl font-bold text-white">
            {formData.firstName.charAt(0)}{formData.lastName.charAt(0)}
          </div>
          <div className="ml-4">
            <h3 className="font-semibold text-lg">{selectedEmp?.name}</h3>
            <p className="text-gray-500 text-sm">{selectedEmp?.user_role}</p>
            <div className="flex items-center mt-1">
              <span className="bg-green-200 text-green-800 px-2 py-0.5 rounded-full text-xs mr-2">{selectedEmp?.status}</span>
              <span className="text-gray-400 text-sm">{selectedEmp?.employee_id}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">First name</label>
              <input name="firstName" value={formData.firstName} onChange={handleChange} className="border rounded-lg px-3 py-2 w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Last name</label>
              <input name="lastName" value={formData.lastName} onChange={handleChange} className="border rounded-lg px-3 py-2 w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Employee Id</label>
              <input name="employeeId" value={formData.employeeId} onChange={handleChange} className="border rounded-lg px-3 py-2 w-full" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             <div>
              <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
              <input name="phone" value={formData.phone} onChange={handleChange} className="border rounded-lg px-3 py-2 w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="border rounded-lg px-3 py-2 w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Joining Date</label>
              <input type="text" name="joiningDate" value={formData.joiningDate} onChange={handleChange} className="border rounded-lg px-3 py-2 w-full" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Job Title</label>
              <input name="jobTitle" value={formData.jobTitle} onChange={handleChange} className="border rounded-lg px-3 py-2 w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Department</label>
              <input name="department" value={formData.department} onChange={handleChange} className="border rounded-lg px-3 py-2 w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Employment type</label>
              <input name="employmentType" value={formData.employmentType} onChange={handleChange} className="border rounded-lg px-3 py-2 w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Reporting Manager</label>
              <input name="reportingManager" value={formData.reportingManager} onChange={handleChange} className="border rounded-lg px-3 py-2 w-full" />
            </div>
          </div>
        </div>

        {/* --- Action Buttons --- */}
        <div className="flex justify-end mt-6">
          <button onClick={onClose} className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 mr-3" disabled={isSaving}>
            Cancel
          </button>
          <button onClick={handleSave} className="bg-yellow-400 px-6 py-2 rounded-lg text-white hover:bg-yellow-500 disabled:bg-yellow-300 disabled:cursor-not-allowed" disabled={isSaving}>
            {isSaving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}