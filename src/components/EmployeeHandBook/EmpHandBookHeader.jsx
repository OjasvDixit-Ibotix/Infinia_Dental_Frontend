import React from "react";
import EmployehandBookYellow from "../../assets/svgs/WelcomePage/EmployehandBookYellow";

const EmpHandBookHeader = () => {
  return (
    <div className="flex items-center gap-3 p-4 rounded-lg w-full">
      <div className="w-10 h-10 flex items-center justify-center bg-[#444] rounded-md">
        <EmployehandBookYellow/>
      </div>

      <div>
        <h1 className="text-[#444] font-normal text-[30px] leading-[36px] font-[Segoe UI Symbol]">
       Employee handbook
         </h1>

        <p className="text-[#444] font-normal text-[15.875px] leading-[24px] font-[Segoe UI Symbol]">
          Your comprehensive guide to Infinia Dental policies and procedures
         </p>

       
      </div>
    </div>
  );
};

export default EmpHandBookHeader;
