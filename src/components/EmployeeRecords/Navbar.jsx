import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="  inline-flex h-10 px-2 sm:px-4 py-2 justify-center items-center gap-1 sm:gap-2 flex-shrink-0 rounded-[6px] border border-[#EFCD78] bg-[#FFF] hover:bg-[#EFCD7899] cursor-pointer mt-2 mb-4 w-fit" onClick={()=>navigate('/dashboard')}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
        <path d="M8.00065 12.6663L3.33398 7.99967L8.00065 3.33301" stroke="#444" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.6673 8H3.33398" stroke="#444" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-[#444] text-xs sm:text-sm md:text-base leading-[20px] fontSans" >
        Back to Dashboard  
      </span>
    </div>
  );
};

export default Navbar;
