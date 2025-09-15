import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BgLoginRegister from './Pages/BgLoginRegister';
import EmployeeLeave from './Pages/Admin/EmployeeLeave';
import WelcomePage from '../src/Pages/Admin/WelcomePage';
import EmployeehandBooksPage from './Pages/CommonPages/EmployeehandBooksPage';
import LoginCard from './components/LoginCard';
import SignUpCard from './components/SignUpCard';
import Layout from './components/Layout';
import EmployeeProductPage from './Pages/Admin/EmployeeProductPage';
import SeminarAndEventPage from './Pages/Admin/SeminarAndEventPage';
import EmpFormsDocsPage from './Pages/Admin/EmpFormsDocsPage';
import EmpDirectoryPage from './Pages/Admin/EmpDirectoryPage';
import EmployeeRecordsPage from './Pages/Admin/EmployeeRecordsPage';
import EmptimesheetPage from './Pages/Employee/EmptimesheetPage';
// import EmpPromotionsPage from './Pages/Admin/EmpPromotionsPage';
import EmpRequestLeavePage from './Pages/Employee/EmpRequestLeavePage';
import { Toaster } from 'sonner';
import PrivateRoute from './utils/PrivateRoute';
import ScrollToTop from './utils/ScrollToTop';
import EmpLeaveBalancePage from './Pages/Employee/EmpLeaveBalancePage';
import MyProfilePage from './Pages/MyProfilePage';
import ForgotPasswordCard from './components/ForgotPasswordCard';
import VerificationOtpCard from './components/VerificationOtpCard';
import './App.css';
import CreateNewPasswordCard from './components/CreateNewPasswordCard';
import { fetchCurrentUser } from '../src/slices/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeaveHistory } from './slices/leaveHistorySlice';
import Spinner from './utils/customHooks/Spinner';
import EmployeelabPolicy from './Pages/CommonPages/EmployeelabPolicy';

const App = () => {
  const dispatch = useDispatch();
  const { islogin, token, user, loading } = useSelector((state) => state.auth);

  useEffect(() => {

    if (token && !user) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, token, user]);

  const leaveStatus = useSelector((state) => state.leaveHistory.status);

  useEffect(() => {

    if (islogin && leaveStatus === 'idle' && user?.user_type.toLowerCase() === 'employee') {
      dispatch(fetchLeaveHistory());
    }

  }, [islogin, leaveStatus, dispatch]);


  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <WelcomePage />
            </PrivateRoute>
          }/>
        <Route path="/" element={<BgLoginRegister />}>
          <Route path="/login" element={<LoginCard />} />
          <Route path="/signup" element={<SignUpCard />} />
          <Route path="/forgot-password" element={<ForgotPasswordCard />} />
          <Route path="/verify-otp" element={<VerificationOtpCard />} />
          <Route path="/create-new-password" element={<CreateNewPasswordCard />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<PrivateRoute><Layout /></PrivateRoute>}>
          <Route path="/employee-details" element={<PrivateRoute roles={['admin']}><EmployeeRecordsPage /></PrivateRoute>} />
          <Route path="/leave-request" element={<PrivateRoute roles={['admin']}><EmployeeLeave /></PrivateRoute>} />
          <Route path="/products" element={<EmployeeProductPage />} />
          <Route path="/directory" element={<EmpDirectoryPage />} />
          <Route path="/seminars-events" element={<SeminarAndEventPage />} />
          <Route path="/forms" element={<EmpFormsDocsPage />} />
          {/* <Route path="/promotions" element={<EmpPromotionsPage />} /> */}
          <Route path="/my-profile" element={<MyProfilePage />} />
          <Route path="/employee-handbook" element={<EmployeehandBooksPage />} />
          <Route path="/lab-policy" element={<EmployeelabPolicy />} />
          <Route path="/my-time" element={<PrivateRoute roles={['employee']}><EmptimesheetPage /></PrivateRoute>} />
          <Route path="/request-leave" element={<PrivateRoute roles={['employee']}><EmpRequestLeavePage /></PrivateRoute>} />
          <Route path="/leave-balance" element={<PrivateRoute roles={['employee']}><EmpLeaveBalancePage /></PrivateRoute>} />
        </Route>

        <Route path="*" element={<Navigate to={islogin ? "/dashboard" : "/"} replace />} />
          {/* <Route path="/promotions" element={<EmpPromotionsPage />} /> */}


        {/* Test Route */}
        <Route element={<Layout />}>
          <Route path="/spinner" element={<Spinner />} />
        </Route>
      </Routes>
      <Toaster richColors position="top-right" />
    </Router>
  );
};

export default App;
