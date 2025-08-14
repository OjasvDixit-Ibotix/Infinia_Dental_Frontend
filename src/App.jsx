import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BgLoginRegister from './Pages/BgLoginRegister';
import EmployeeLeave from './Pages/Admin/EmployeeLeave';
import WelcomePage from '../src/Pages/Admin/WelcomePage'
import EmployeehandBooksPage from './Pages/CommonPages/EmployeehandBooksPage';
import LoginCard from './components/LoginCard';
import SignUpCard from './components/SignUpCard';
import Layout from './components/Layout';
import EmployeeProductPage from './Pages/Admin/EmployeeProductPage';
import SeminarAndEventPage from './Pages/Admin/SeminarAndEventPage';
import EmpFormsDocsPage from './Pages/Admin/EmpFormsDocsPage';
import EmpDirectoryPage from './Pages/Admin/EmpDirectoryPage';
import EmployeeRecordsPage from './Pages/Admin/EmployeeRecordsPage'
import EmpWelcomePage from './Pages/Employee/EmpWelcomePage';
import EmptimesheetPage from './Pages/Employee/EmptimesheetPage';
import EmpPromotionsPage from './Pages/Admin/EmpPromotionsPage';
import EmpRequestLeavePage from './Pages/Employee/EmpRequestLeavePage';
import { Toaster } from 'sonner';
import PrivateRoute from './utils/PrivateRoute';
import ScrollToTop from './utils/ScrollToTop';
import EmpLeaveBalancePage from './Pages/Employee/EmpLeaveBalancePage';
import { useSelector } from 'react-redux';
import MyProfilePage from './Pages/MyProfilePage';
import { Navigate } from 'react-router-dom';
const App = () => {

  // const [ userType, setUserType] = useState('employee');

  const {user, islogin} = useSelector((state)=>state.auth)

  console.log('islogin',islogin)
  
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
                  <Route 
                    path="/dashboard"
                    element={
                      <PrivateRoute>
                        <WelcomePage   />
                      </PrivateRoute>
                    }
                  />
                  <Route 
                    path="/"
                    element={
                        <BgLoginRegister  />                  
                    }
                  />


                  {/* Admin Routes */}


          <Route element={<PrivateRoute><Layout /></PrivateRoute>}>

            <Route path="/employee-details" element={<PrivateRoute roles= {['admin']}><EmployeeRecordsPage /></PrivateRoute>} />
            {/* <Route path="/employee-details" element={<EmployeeRecordsPage />} /> */}
            <Route path="/leave-request" element={<PrivateRoute roles= {['admin']}><EmployeeLeave /></PrivateRoute>} />

            {/* <Route path="/leave-request" element={<EmployeeLeave />} /> */}
            <Route path="/products" element={<EmployeeProductPage />} />
            <Route path="/directory" element={<EmpDirectoryPage />} />
            <Route path="/seminars-events" element={<SeminarAndEventPage />} />
            <Route path="/forms" element={<EmpFormsDocsPage />} />
            <Route path="/promotions" element={<EmpPromotionsPage />} />

       
            {/* Emp Routes */}

            <Route path="/my-time" element={<PrivateRoute roles= {['employee']}><EmptimesheetPage /></PrivateRoute>} />
            <Route path="/request-leave" element={<PrivateRoute roles= {['employee']}><EmpRequestLeavePage /></PrivateRoute>} />
            <Route path="/leave-balance" element={<PrivateRoute roles= {['employee']}><EmpLeaveBalancePage /></PrivateRoute>} />

          </Route>
          
          {/* <Route  element={<Layout />} >
          
            <Route path="/employee-handbook" element={<EmployeehandBooksPage />} /> 
            <Route path="/products" element={<EmployeeProductPage />} />
            <Route path="/employee-details" element={<EmployeeRecordsPage />} />
            <Route path="/my-profile" element={<MyProfilePage />} />

          </Route> */}
        <Route path="*" element={<Navigate to={islogin ? "/dashboard" : "/"} replace />} />
               
      </Routes>
      <Toaster richColors position="top-right" />
    </Router>
  );
};

export default App;
