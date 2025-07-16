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

const CardYellowBlackComp = () => {
  return (
    <div className= "flex flex-wrap justify-center sm:justify-start gap-4  sm:gap-6 md:gap-8">
      <CardYellowBlackWrap navigateTo ='/employee-details' logos={<EmployeDetails />} logodesc="Employee Details" bgColor="EFCD78" textColor="444" />
      <CardYellowBlackWrap navigateTo="/leave-request" logos={<LeaveRequest />} logodesc="Leave Request" bgColor="444" textColor="FFF" />
      <CardYellowBlackWrap navigateTo="/check-attendance" logos={<CheckAttendance />} logodesc="Check Attendance" bgColor="EFCD78" textColor="444" />
      <CardYellowBlackWrap  navigateTo="/employee-handbook" logos={<EmployehandBook />} logodesc="Employee Handbook" bgColor="444" textColor="FFF" />
      <CardYellowBlackWrap navigateTo="/products" logos={<Products />} logodesc="Products" bgColor="EFCD78" textColor="444" />
      <CardYellowBlackWrap  navigateTo="/seminars-events" logos={<SeminarEvent />} logodesc="Seminars & Events" bgColor="444" textColor="FFF" />
      <CardYellowBlackWrap navigateTo="/promotions"  logos={<Promotions />} logodesc="Promotions" bgColor="EFCD78" textColor="444" />
      <CardYellowBlackWrap navigateTo="/forms" logos={<Forms />} logodesc="Forms" bgColor="444" textColor="FFF" />
      <CardYellowBlackWrap  navigateTo="/directory" logos={<Directory />} logodesc="Directory" bgColor="EFCD78" textColor="444" />
    </div>
  );
};

export default CardYellowBlackComp;
