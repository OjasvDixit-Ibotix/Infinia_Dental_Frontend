import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BgLoginRegister from './Pages/BgLoginRegister';
import EmployeeLeave from './Pages/Admin/EmployeeLeave';
import WelcomePage from '../src/Pages/Admin/WelcomePage'
import EmployeehandBooksPage from './Pages/Admin/EmployeehandBooksPage';
import LoginCard from './components/LoginCard';
import SignUpCard from './components/SignUpCard';
import Layout from './components/Layout';
import EmployeeProductPage from './Pages/Admin/EmployeeProductPage';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<BgLoginRegister />} /> */}
             <Route  element={<Layout/>}>
             <Route index path='/'  element={<EmployeeProductPage/>} />
             </Route>
      </Routes>
    </Router>
  );
};

export default App;
