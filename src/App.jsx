import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BgLoginRegister from './Pages/BgLoginRegister';
import EmployeeLeave from './Pages/Admin/EmployeeLeave';
import WelcomePage from '../src/Pages/Admin/WelcomePage'
import EmployeehandBooksPage from './Pages/Admin/EmployeehandBooksPage';
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
const App = () => {

  // const [ userType, setUserType] = useState('employee');

  const user = useSelector((state)=>state.auth.user)
  
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
            <Route path="/employee-details" element={<EmployeeRecordsPage />} />
            <Route path="/leave-request" element={<EmployeeLeave />} />
            <Route path="/employee-handbook" element={<EmployeehandBooksPage />} />
            <Route path="/products" element={<EmployeeProductPage />} />
            <Route path="/seminars-events" element={<SeminarAndEventPage />} />
            <Route path="/forms" element={<EmpFormsDocsPage />} />
            <Route path="/directory" element={<EmpDirectoryPage />} />
            <Route path="/promotions" element={<EmpPromotionsPage />} />

          </Route>
            {/* Emp Routes */}

          <Route element={<PrivateRoute><Layout /></PrivateRoute>}>
            <Route path="/my-time" element={<EmptimesheetPage />} />
            <Route path="/request-leave" element={<EmpRequestLeavePage />} />
            <Route path="/leave-balance" element={<EmpLeaveBalancePage />} />
          </Route>


      </Routes>
      <Toaster richColors position="top-right" />
    </Router>
  );
};

export default App;
