import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/EmployeeRecords/Navbar';

const Layout = () => {
  return (
    <div className="bg-[#EAEAEA] min-h-screen px-2 sm:px-4 md:px-8 lg:px-12 xl:px-20 py-4 sm:py-8 flex flex-col">
      <Navbar />
      <div className="flex-1 w-full max-w-[1440px] mx-auto flex flex-col">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
