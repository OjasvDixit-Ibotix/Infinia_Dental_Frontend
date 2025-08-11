import React, { useState } from "react";

export default function EditEmployeeModal({ onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    employeeId: "EMP002",
    phone: "2252522XXX",
    email: "emma@infeniaDental.com",
    joiningDate: "Jan 2024",
    jobTitle: "Senior Dentist",
    department: "Clinical",
    employmentType: "Full Time",
    reportingManager: "Dr. Saurab",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Saved data:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-xl w-[650px] p-6 shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold">Edit Employee details</h2>
          <button onClick={onClose} className="text-gray-500 text-2xl">&times;</button>
        </div>

        {/* Profile */}
        <div className="flex items-center mt-4">
          <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-xl font-bold text-white">
            SJ
          </div>
          <div className="ml-4">
            <h3 className="font-semibold text-lg">Dr. Sarah Johnson</h3>
            <p className="text-gray-500 text-sm">Senior Dentist • Clinical</p>
            <div className="flex items-center mt-1">
              <span className="bg-green-200 text-green-800 px-2 py-0.5 rounded-full text-xs mr-2">Active</span>
              <span className="text-gray-400 text-sm">EMP001</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div>
            <label className="block text-sm text-gray-600 mb-1">First name</label>
            <input
              name="firstName"
              placeholder="E.g. Priya"
              value={formData.firstName}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2 w-full"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Last name</label>
            <input
              name="lastName"
              placeholder="E.g. Priya"
              value={formData.lastName}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2 w-full"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Employee Id</label>
            <input
              name="employeeId"
              value={formData.employeeId}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2 w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2 w-full"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email Address</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2 w-full"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Joining Date</label>
            <input
              name="joiningDate"
              value={formData.joiningDate}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2 w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Job Title</label>
            <input
              name="jobTitle"
              value={formData.jobTitle}
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
            <label className="block text-sm text-gray-600 mb-1">Employment type</label>
            <input
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2 w-full"
            />
          </div>

          <div className="col-span-3">
            <label className="block text-sm text-gray-600 mb-1">Reporting Manager</label>
            <input
              name="reportingManager"
              value={formData.reportingManager}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2 w-full"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end mt-6">
          <button
            onClick={handleSave}
            className="bg-yellow-400 px-6 py-2 rounded-lg mr-3 text-white hover:bg-yellow-500"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
