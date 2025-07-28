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
const CardYellowBlackComp = () => {
  return (

    <div className=" flex flex-wrap  content-center gap-4 sm:gap-5 md:gap-6 lg:gap-7">
      
      {/* <CardYellowBlackWrap navigateTo="/employee-details" logos={<EmployeDetails />} logodesc="Employee Details" bgColor="EFCD78" textColor="444" />
      <CardYellowBlackWrap navigateTo="/leave-request" logos={<LeaveRequest />} logodesc="Leave Request" bgColor="444" textColor="FFF" />
      <CardYellowBlackWrap navigateTo="/products" logos={<Products />} logodesc="Products" bgColor="EFCD78" textColor="444" />
      <CardYellowBlackWrap navigateTo="/seminars-events" logos={<SeminarEvent />} logodesc="Seminars & Events" bgColor="444" textColor="FFF" />
      <CardYellowBlackWrap navigateTo="/promotions" logos={<Promotions />} logodesc="Promotions" bgColor="EFCD78" textColor="444" />
      <CardYellowBlackWrap navigateTo="/employee-handbook" logos={<EmployehandBook />} logodesc="Employee Handbook" bgColor="444" textColor="FFF" />
      <CardYellowBlackWrap navigateTo="/directory" logos={<Directory />} logodesc="Directory" bgColor="EFCD78" textColor="444" />
      <CardYellowBlackWrap navigateTo="/forms" logos={<Forms />} logodesc="Forms" bgColor="444" textColor="FFF" /> */}
  

      {/* Employeee cards */}


      <CardYellowBlackWrap navigateTo="/my-time" logos={<ClockIcon />} logodesc="My Time" bgColor="EFCD78" textColor="444" /> 
      <CardYellowBlackWrap navigateTo="/forms" logos={<svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
  <path d="M4.70117 22.25V5.75C4.70117 5.02065 4.9909 4.32118 5.50663 3.80546C6.02235 3.28973 6.72183 3 7.45117 3H21.2012C21.4929 3 21.7727 3.11589 21.979 3.32218C22.1853 3.52847 22.3012 3.80826 22.3012 4.1V23.9C22.3012 24.1917 22.1853 24.4715 21.979 24.6778C21.7727 24.8841 21.4929 25 21.2012 25H7.45117C6.72183 25 6.02235 24.7103 5.50663 24.1945C4.9909 23.6788 4.70117 22.9793 4.70117 22.25ZM4.70117 22.25C4.70117 21.5207 4.9909 20.8212 5.50663 20.3055C6.02235 19.7897 6.72183 19.5 7.45117 19.5H22.3012" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
   </svg>} logodesc="Employee Resources" bgColor="444" textColor="FFF" />

      <CardYellowBlackWrap navigateTo="/my-time" logos={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M12.9016 24.7047C13.236 24.8977 13.6154 24.9994 14.0016 24.9994C14.3877 24.9994 14.7671 24.8977 15.1016 24.7047L22.8016 20.3047C23.1357 20.1118 23.4132 19.8344 23.6063 19.5004C23.7993 19.1664 23.9012 18.7874 23.9016 18.4017V9.60165C23.9012 9.21585 23.7993 8.83694 23.6063 8.50293C23.4132 8.16892 23.1357 7.89155 22.8016 7.69865L15.1016 3.29865C14.7671 3.10556 14.3877 3.00391 14.0016 3.00391C13.6154 3.00391 13.236 3.10556 12.9016 3.29865L5.20156 7.69865C4.86745 7.89155 4.58994 8.16892 4.39687 8.50293C4.2038 8.83694 4.10196 9.21585 4.10156 9.60165V18.4017C4.10196 18.7874 4.2038 19.1664 4.39687 19.5004C4.58994 19.8344 4.86745 20.1118 5.20156 20.3047L12.9016 24.7047Z" stroke="#444444" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14 25V14" stroke="#444444" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.43164 8.5L12.9049 13.7074C13.2386 13.8993 13.6168 14.0002 14.0016 14.0002C14.3865 14.0002 14.7647 13.8993 15.0983 13.7074L23.5716 8.5" stroke="#444444" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.05078 5.49805L18.9508 11.163" stroke="#444444" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>} logodesc="All about Products" bgColor="EFCD78" textColor="444" /> 

      <CardYellowBlackWrap navigateTo="/my-time" logos={<PolicyContolaSvg />} logodesc="Policy & control" bgColor="444" textColor="FFF" /> 
      <CardYellowBlackWrap navigateTo="/my-time" logos={<PolicyControlBlackSvg/>} logodesc="My Profile" bgColor="EFCD78" textColor="444" /> 

    </div>
  );
};

export default CardYellowBlackComp;
