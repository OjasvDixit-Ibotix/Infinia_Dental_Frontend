import React, { useState } from 'react';
// Assuming 'toast' is from a library like 'sonner' or 'react-toastify'
import { toast } from 'sonner'; 
import axios from 'axios';
import { fetchEmployees } from '../../slices/employee/employeesSlice';
import { useDispatch } from 'react-redux';
// A reusable input component to keep the form DRY (Don't Repeat Yourself)
const FormInput = ({ id, name, label, value, onChange, type = 'text', placeholder }) => (
    <label htmlFor={id} className="flex h-[48px] w-full flex-col justify-center rounded-lg border border-solid border-[#cfd3d4] px-4 py-2">
        <span className="text-[12px] font-normal text-[#5e6366]">{label}</span>
        <input
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full border-none bg-transparent p-0 text-[16px] font-normal text-[#444444] placeholder:text-[#abafb1] focus:outline-none"
            required // Added basic browser validation
        />
    </label>
);


const AddNewEmployeeForm = ({ setAddEmp }) => {
  const dispatch = useDispatch();
    // State for managing form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        user_role: '',
        email: '',
        department: '',
        joined: '',
        employeeId: '',
        phone: '',
        password: '',
        user_type: 'employee',
    });
    const [isLoading, setIsLoading] = useState(false);
    const api = import.meta.env.VITE_BACKEND_URL;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setIsLoading(true)

        const payload = {
            name: `${formData.firstName} ${formData.lastName}`,
            user_role: formData.user_role,
            email: formData.email,
            department: formData.department,
            join_date: formData.joined,
            employee_id: formData.employeeId,
            phone: formData.phone,
            password: formData.password,
            user_type: formData.user_type
        };

        try {
            
            const res = await axios.post(`${api}/users`, payload);
            
            console.log('API Response:', res.data);
            toast.success('Employee Added Successfully');
            dispatch(fetchEmployees());
            setAddEmp(false);

        } catch (err) {
            console.error('Submission Error:', err);
            const errorMessage = err.response?.data?.error || 'Failed to add employee. Please try again.';
            toast.error(errorMessage);
        } finally {
            setIsLoading(false); 
        }
    };

    return (
        // Modal container with backdrop
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
          
            <div className="relative w-full max-w-2xl h-auto max-h-[90vh] bg-[#F9F9F9] pt-5 rounded-tl-[30px] rounded-br-[30px] shadow-lg flex flex-col">
                {/* Modal Header */}
                <div className="flex justify-between items-center w-full px-6 md:px-12 pb-4 border-b border-gray-200">
                    <h1 className="font-normal text-2xl text-[#444444]">Add New Employee</h1>
                    <button onClick={() => setAddEmp(false)} className="p-2 text-[#444444] hover:bg-gray-200 rounded-full">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                {/* Form with scrolling for smaller screens */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 md:p-12 overflow-y-auto">
                    {/* Form Fields - Using a grid for responsive layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FormInput id="firstName" name="firstName" label="First name" value={formData.firstName} onChange={handleChange} placeholder="E.g. Priya" />
                        <FormInput id="lastName" name="lastName" label="Last name" value={formData.lastName} onChange={handleChange} placeholder="E.g. Sharma" />
                        <FormInput id="user_role" name="user_role" label="Job Position" value={formData.user_role} onChange={handleChange} placeholder="Dentist" />
                        <FormInput id="employeeId" name="employeeId" label="Employee Id" value={formData.employeeId} onChange={handleChange} placeholder="EMP002" />
                        <FormInput id="phone" name="phone" label="Phone Number" type="tel" value={formData.phone} onChange={handleChange} placeholder="9876543211" />
                        <FormInput id="department" name="department" label="Department" value={formData.department} onChange={handleChange} placeholder="Medical" />
                        <FormInput id="joined" name="joined" label="Joined" type="date" value={formData.joined} onChange={handleChange} placeholder="Jan 2023" />
                        <FormInput id="email" name="email" label="Email Address" type="email" value={formData.email} onChange={handleChange} placeholder="abc@gmail.com" />
                        <FormInput id="password" name="password" label="Password" type="password" value={formData.password} onChange={handleChange} placeholder="••••••••" />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                        <button type="submit" disabled={isLoading} className="w-full h-[50px] bg-[#efcd78] rounded-[10px] font-normal text-[16px] text-center text-[#444444] hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed">
                            {isLoading ? 'Saving...' : 'Save'}
                        </button>
                        <button type="button" onClick={() => setAddEmp(false)} className="w-full h-[50px] bg-[#444444] rounded-[10px] font-normal text-[16px] text-center text-[#efcd78] hover:opacity-90 transition-opacity">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNewEmployeeForm;
