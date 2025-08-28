import React from 'react';
import CardYellowBlackWrap from './wrappers/CardYellowBlackWrap';
import EmployehandBook from '../../assets/svgs/WelcomePage/EmployehandBook';
import LeaveRequest from '../../assets/svgs/WelcomePage/LeaveRequest';
import CheckAttendance from '../../assets/svgs/WelcomePage/CheckAttendance';
import Products from '../../assets/svgs/WelcomePage/Products';
import Promotions from '../../assets/svgs/WelcomePage/Promotions';
import Forms from '../../assets/svgs/WelcomePage/forms';
import Directory from '../../assets/svgs/WelcomePage/Directory';
import SeminarEvent from '../../assets/svgs/WelcomePage/SeminarEvent';
import EmployeDetails from '../../assets/svgs/WelcomePage/EmployeDetails';
import ClockIcon from '../../assets/svgs/WelcomePage/ClockIcon';
import PolicyContolaSvg from '../../assets/svgs/WelcomePage/PolicyContolaSvg';
import PolicyControlBlackSvg from '../../assets/svgs/WelcomePage/policyControlBlackSvg';
import TotalEmpl from '../../assets/svgs/WelcomePage/TotalEmpl';
import MyProfileIcon from '../../assets/svgs/EmpWelocomePageSvgs/MyProfileIcon';
import EmpResourcesicon from '../../assets/svgs/EmpWelocomePageSvgs/EmpResourcesicon';
import AllAoutProductsIcon from '../../assets/svgs/EmpWelocomePageSvgs/AllAoutProductsIcon';
import EmpClockIcon from '../../assets/svgs/EmpWelocomePageSvgs/EmpClockIcon';
import LeaveRequestBlackIcon from '../../assets/svgs/WelcomePage/LeaveRequestBlackIcon';
import EmpDetailsIcon from '../../assets/svgs/WelcomePage/EmpDetailsIcon';
import { useSelector } from 'react-redux';
import MyProfilePage from '../../Pages/MyProfilePage';

const CardYellowBlackComp = () => {

  const {user} = useSelector((state)=>state.auth)
  console.log('in card',user);
  
  
  return ( 

    <div className=" flex flex-wrap  content-center gap-4 sm:gap-5 md:gap-6 lg:gap-6  w-full mx-auto">
        
      {
        user?.user_type==='admin' &&(
          <>
      <CardYellowBlackWrap navigateTo="/leave-request" logos={<LeaveRequestBlackIcon />} logodesc="Leave Request" bgColor="EFCD78" textColor="444" />
      <CardYellowBlackWrap navigateTo="/employee-details" logos={<EmpDetailsIcon />} logodesc="Employee Details" bgColor="444" textColor="FFF" />
      <CardYellowBlackWrap navigateTo="/employee-handbook" logos={<EmployehandBook />} logodesc="Employee Resources" bgColor="EFC878" textColor="444" />
      <CardYellowBlackWrap navigateTo="/products" logos={<Products />} logodesc="All about Products" bgColor="444" textColor="FFF" />
      <CardYellowBlackWrap navigateTo="/my-profile" logos={<MyProfileIcon />} logodesc="My Profile" bgColor="EFC878" textColor="444" />
          </>
        )
      }      
      {/* <CardYellowBlackWrap navigateTo="/seminars-events" logos={<SeminarEvent />} logodesc="Seminars & Events" bgColor="444" textColor="FFF" />
      <CardYellowBlackWrap navigateTo="/promotions" logos={<Promotions />} logodesc="Promotions" bgColor="EFCD78" textColor="444" />
      <CardYellowBlackWrap navigateTo="/directory" logos={<Directory />} logodesc="Directory" bgColor="EFCD78" textColor="444" />
      <CardYellowBlackWrap navigateTo="/forms" logos={<Forms />} logodesc="Forms" bgColor="444" textColor="FFF" />
   */}

      {/* Employeee cards */}

    {
      user?.user_type === 'employee' &&(
        <>
      <CardYellowBlackWrap   navigateTo="/my-time" logos={<EmpClockIcon />} logodesc="My Time" bgColor="EFCD78" textColor="444" /> 
      <CardYellowBlackWrap navigateTo="/employee-handbook" logos={<EmpResourcesicon/>} logodesc="Employee Resources" bgColor="444" textColor="FFF" />

      <CardYellowBlackWrap navigateTo='/products' logos={<AllAoutProductsIcon/>} logodesc="All about Products" bgColor="EFCD78" textColor="444" /> 
          
      <CardYellowBlackWrap  logos={<PolicyContolaSvg />} logodesc="Policy & control" bgColor="444" textColor="FFF" /> 
      <CardYellowBlackWrap navigateTo='/my-profile' logos={<MyProfileIcon/>} logodesc="My Profile" bgColor="EFCD78" textColor="444" /> 

        </>
      )
    }

   

    </div>
  );
};

export default CardYellowBlackComp;
