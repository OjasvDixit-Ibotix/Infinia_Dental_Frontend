import React, { useState } from 'react';

const AddNewEmployeeForm = ({ setAddEmp }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobPosition: '',
    email: '',
    department: '',
    joined: '',
    employeeId: '',
    phone: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  
    setAddEmp(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="w-[605px] h-[510px] bg-[#F9F9F9] pt-5 rounded-tl-[30px] rounded-tr-[0px] rounded-br-[30px] rounded-bl-[30px] overflow-hidden shadow-lg flex flex-col">
        <div className="flex flex-row mx-auto justify-between items-center w-full px-12 ">
          <h1 className="font-normal text-2xl text-[#444444]">Add New Employee</h1>
          <button onClick={() => setAddEmp(false)} className="p-2 -mr-2 text-[#444444]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col mt-2 gap-6 max-w-[490px] mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-[30px] self-stretch">
            <label htmlFor="firstName" className="h-[48px] w-full sm:w-[280px] flex flex-col justify-center px-4 py-2 rounded-lg border border-solid border-[#cfd3d4]">
              <span className="font-normal text-[12px] text-[#5e6366]">First name</span>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="E.g. Priya"
                value={formData.firstName}
                onChange={handleChange}
                className="font-normal text-[16px] text-[#444444] placeholder:text-[#abafb1] bg-transparent border-none p-0 w-full focus:outline-none"
              />
            </label>
            <label htmlFor="lastName" className="h-[48px] w-full sm:w-[280px] flex flex-col justify-center px-4 py-2 rounded-lg border border-solid border-[#cfd3d4]">
              <span className="font-normal text-[12px] text-[#5e6366]">Last name</span>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="E.g. Sharma"
                value={formData.lastName}
                onChange={handleChange}
                className="font-normal text-[16px] text-[#444444] placeholder:text-[#abafb1] bg-transparent border-none p-0 w-full focus:outline-none"
              />
            </label>
          </div>

          <div className="flex items-center gap-[30px] self-stretch">
            <label htmlFor="jobPosition" className="h-[48px] w-full flex flex-col justify-center px-4 py-2 rounded-lg border border-solid border-[#cfd3d4]">
              <span className="font-normal text-[12px] text-[#5e6366]">Job Position</span>
              <input type="text" id="jobPosition" name="jobPosition" 
              placeholder='Dentist'
              value={formData.jobPosition} 
              onChange={handleChange} className="font-normal text-[16px] text-[#444444] bg-transparent border-none p-0 w-full focus:outline-none" />
            </label>
          </div>
           <div className="flex flex-col sm:flex-row items-center gap-[30px] self-stretch">
            <label htmlFor="employeeId" className="h-13 w-full sm:w-[280px] flex flex-col justify-center px-4 py-2 rounded-lg border border-solid border-[#cfd3d4]">
              <span className="font-normal text-[12px] text-[#5e6366]">Employee Id</span>
              <input placeholder='EMP002' type="text" id="employeeId" name="employeeId" value={formData.employeeId} onChange={handleChange} className="font-normal text-[16px] text-[#444444] bg-transparent border-none p-0 w-full focus:outline-none" />
            </label>
            <label htmlFor="phone" className="h-[48px] w-full sm:w-[280px] flex flex-col justify-center px-4 py-2 rounded-lg border border-solid border-[#cfd3d4]">
              <span className="font-normal text-[12px] text-[#5e6366]">Phone Number</span>
              <input type="tel" id="phone" name="phone" placeholder='9876543211' value={formData.phone} onChange={handleChange} className="font-normal text-[16px] text-[#444444] bg-transparent border-none p-0 w-full focus:outline-none" />
            </label>
          </div>



          <div className="flex flex-col sm:flex-row items-center gap-[30px] self-stretch">
            <label htmlFor="department" className="h-[48px] w-full sm:w-[280px] flex flex-col justify-center px-4 py-2 rounded-lg border border-solid border-[#cfd3d4]">
              <span className="font-normal text-[12px] text-[#5e6366]">Department</span>
              <input type="text" placeholder='Medical' id="department" name="department" value={formData.department} onChange={handleChange} className="font-normal text-[16px] text-[#444444] bg-transparent border-none p-0 w-full focus:outline-none" />
            </label>
            <label htmlFor="joined" className="h-[48px] w-full sm:w-[280px] flex flex-col justify-center px-4 py-2 rounded-lg border border-solid border-[#cfd3d4]">
              <span className="font-normal text-[12px] text-[#5e6366]">Joined</span>
              <input type="text" placeholder='Jan 2023' id="joined" name="joined" value={formData.joined} onChange={handleChange} className="font-normal text-[16px] text-[#444444] bg-transparent border-none p-0 w-full focus:outline-none" />
            </label>
          </div>
          
          <div className="flex items-center gap-[30px] self-stretch">
            <label htmlFor="email" className="h-[48px] w-full flex flex-col justify-center px-4 py-2 rounded-lg border border-solid border-[#cfd3d4]">
              <span className="font-normal text-[12px] text-[#5e6366]">Email Address</span>
              <input placeholder='abc@gmail.com' type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="font-normal text-[16px] text-[#444444] bg-transparent border-none p-0 w-full focus:outline-none" />
            </label>
          </div>

         
          <div className="flex flex-col sm:flex-row items-center gap-[30px] self-stretch">
            <button type="submit" className="w-full sm:w-auto flex justify-center items-center grow h-[50px] bg-[#efcd78] rounded-[10px] font-normal text-[16px] text-center text-[#444444] hover:opacity-90 transition-opacity">
              Save
            </button>
            <button type="button" onClick={() => setAddEmp(false)} className="w-full sm:w-auto flex justify-center items-center grow h-[50px] bg-[#444444] rounded-[10px] font-normal text-[16px] text-center text-[#efcd78] hover:opacity-90 transition-opacity">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewEmployeeForm;
