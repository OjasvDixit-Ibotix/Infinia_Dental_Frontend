import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/EmployeeRecords/Navbar';

const Layout = () => {
  return (
      <div className="bg-[#EAEAEA] ">

    <div className=" max-w-[1550px] mx-auto min-h-screen px-2 sm:px-4 md:px-8 lg:px-12 xl:px-20 py-4 sm:py-8 flex flex-col">
      <div className="flex-1 flex flex-col">
      <Navbar />
        <Outlet />
      </div>
      </div>
    </div>
    
  );
};

export default Layout;
