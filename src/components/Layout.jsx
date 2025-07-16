import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/EmployeeRecords/Navbar';

const Layout = () => {
  return (
    <>
      <div className="bg-[#EAEAEA] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-9 min-h-screen">
      <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
