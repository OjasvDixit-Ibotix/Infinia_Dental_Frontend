import React, { useEffect } from 'react';
import SearchBar from '../SearchBar';
// import NotificationIcon from '../../assets/svgs/WelcomePage/NotificationIcon';
import LogOutIcon from '../../assets/svgs/WelcomePage/LogOutIcon';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../slices/auth/authSlice';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

  

const WelcomeNavbar = () => {
const { user } = useSelector((state) => state.auth);

const routes = {
  ...(user?.user_type === "admin" ?  { "Directory": "/directory"}: { "Time Off": "/time-off" }),
  "Handbook": "/employee-handbook",
  "Seminars": "/seminars-events",
  "Forms": "/forms",
  "Lab Protocols": "/lab-policy",
};  



  const dispatch = useDispatch();

  const handlelogOut=()=>{
    dispatch(logout())
    toast.success('Log out successfully')
  }
   

  console.log('fef',user);

  return (
    <div className="flex flex-col gap-3 rounded-[20px] w-full  mx-auto ">
      <div className="flex flex-row  items-start  justify-between w-full gap-2 sm:gap-4">
    
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-[12px] bg-[#444]">
            <p className="text-[#EFCD78] font-[400] text-[18px] leading-[28px] font-[Segoe UI Symbol]">ID</p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#444] font-[400] text-[18px] sm:text-[20px] md:text-[24px] leading-[26px] sm:leading-[28px] md:leading-[32px] font-[Segoe UI Symbol]">
              Welcome, { user?.name}!
            </p>
            <p className="text-[#444] font-[400] text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px] font-[Segoe UI Symbol]">
              Infinia Dental {user?.user_type==='admin'?'admin':'employee'} Portal
            </p>
          </div>
        </div>
        <div className="flex items-center">
            <button onClick={handlelogOut} className="flex h-[36px] py-[0px] content-center items-center cursor-pointer">
            <LogOutIcon/>     
          </button>
        </div>  
      </div>

      <SearchBar placeholder="Search employees, reports, leaves..." />

     <div className="flex flex-wrap gap-2">
      {Object.entries(routes).map(([label, path]) => (
        <Link 
          key={label} 
          to={path} 
          className="flex items-center px-3 sm:px-4 py-1 rounded-full border border-[#EFCD78] bg-[rgba(239,205,120,0.3)]"
        >
          <p className="text-[#444] text-xs sm:text-[12px] leading-[15px] sm:leading-[16px] font-[400] font-[Segoe UI Symbol]">
            {label}
          </p>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default WelcomeNavbar;
