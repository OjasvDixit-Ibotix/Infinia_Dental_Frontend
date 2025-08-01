import React from 'react';
import WelcomeNavbar from '../../components/welcome/WelcomeNavbar';
import CardYellowBlackComp from '../../components/welcome/CardYellowBlackComp';
import WelcomeChartComp from '../../components/welcome/WelcomeChartComp';
import TodayOverviewComp from '../../components/welcome/TodayOverviewComp';
import RecentActivitiesComp from '../../components/welcome/RecentActivitesComp';
import WhatNewComp from '../../components/welcome/WhatNewComp';
import EmpVideoComp from '../../components/EmployeeComponents/EmpWelcome/EmpVideoComp';
import EmpCalendar from '../../components/EmployeeComponents/EmpWelcome/EmpCalendar';
import { useSelector } from 'react-redux';


const WelcomePage = () => {

    const {user_type} = useSelector((state) => state.auth);
      
  return (
    <div className="w-full  bg-[rgb(234,234,234)]">

    <div className="max-w-[1450px] mx-auto  px-2 sm:px-4 md:px-8 lg:px-12 xl:px-20 py-4 sm:py-8 min-h-screen flex flex-col gap-6 ">
    
      <WelcomeNavbar />
      <EmpVideoComp/>
      <CardYellowBlackComp />
      {/* <WelcomeChartComp /> */}

      {/* <div className="flex mx-auto justify-center flex-col lg:flex-row gap-4 w-full ">
        <TodayOverviewComp />
        <RecentActivitiesComp/>
      </div> */}
      {/* <WhatNewComp /> */}
          

           
      {/* Employee  components*/}
{/* 
      <div className="flex mx-auto justify-center flex-col lg:flex-row gap-4 w-full ">
        <TodayOverviewComp />
        <RecentActivitiesComp/>

      </div> */}

      <div className="flex mx-auto  justify-center flex-row lg:flex-row gap-4 w-full">
      <EmpCalendar/>
      <WhatNewComp />      
      </div>
    </div>
    </div>

  );
};

export default WelcomePage;
