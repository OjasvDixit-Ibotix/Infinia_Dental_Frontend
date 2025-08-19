import React from "react";
import EmployehandBookYellow from "../../assets/svgs/WelcomePage/EmployehandBookYellow";
import { useNavigate } from "react-router-dom";

const EmpHandBookHeader = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-row items-center justify-between   rounded-lg w-full">
     

      <div className="">
            <h1 className="text-[#444] font-normal text-[30px] leading-[36px] font-[Segoe UI Symbol]">
          Employee Handbook, Forms and Directory
            </h1>

        <p className="text-[#444] font-normal text-[15.875px] leading-[24px] font-[Segoe UI Symbol]">
          Your comprehensive guide to Infinia Dental policies and procedures
         </p>

       
      </div>
      
      <div className=" flex flex-row gap-4">
        <button onClick={()=>navigate('/forms')} className="flex h-[60px] py-2 px-5 justify-center items-center rounded-lg gap-[8px] bg-[#444] fontSans text-[#FFFFFF] shadow-[0_4px_12px_0_rgba(0,0,0,0.10)]">
            Forms

        </button>

         <button className="flex h-[60px] py-2 px-5 justify-center items-center rounded-lg gap-[8px] bg-[#EFCD78] fontSans text-[#444444] shadow-[0_4px_12px_0_rgba(0,0,0,0.10)]">
            Directory
        </button>
      </div>

    

    </div>
  );
};

export default EmpHandBookHeader;
