

// src/layouts/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/EmployeeRecords/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar/>
    
        <Outlet />
      
    </>
  );
};

export default Layout;
