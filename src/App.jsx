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

const App = () => {

  const [ userType, setUserType] = useState('employee');
  
  return (
    <Router>
      <Routes>
           

             <Route path="/" element={<BgLoginRegister setUserType={setUserType} />} />
             <Route path='/dashboard'  element={<WelcomePage  userType={userType}/>} />
             {/* <Route  path='/emp-dashboard'  element={<EmpWelcomePage/>} /> */}
             <Route  element={<Layout/>}>
             <Route  path='/employee-details'  element={<EmployeeRecordsPage/>} />
             <Route  path='/leave-request'  element={<EmployeeLeave/>} />
             <Route  path='/employee-handbook'  element={<EmployeehandBooksPage/>} />
             <Route  path='/products'  element={<EmployeeProductPage/>} />
             <Route  path='/seminars-events'  element={<SeminarAndEventPage/>} />
             <Route  path='/forms'  element={<EmpFormsDocsPage/>} />
             <Route  path='/directory'  element={<EmpDirectoryPage/>} />
             <Route  path='/promotions'  element={<EmpPromotionsPage/>} />

                 //! Emp Routes
             <Route path= '/my-time' element={<EmptimesheetPage/>}></Route>
             <Route path= '/request-leave' element={<EmpRequestLeavePage/>}></Route>
       
          </Route>
      </Routes>
    </Router>
  );
};

export default App;
