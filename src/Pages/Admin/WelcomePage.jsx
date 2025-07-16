import React from 'react';
import WelcomeNavbar from '../../components/welcome/WelcomeNavbar';
import CardYellowBlackComp from '../../components/welcome/CardYellowBlackComp';
import WelcomeChartComp from '../../components/welcome/WelcomeChartComp';
import TodayOverviewComp from '../../components/welcome/TodayOverviewComp';
import RecentActivitiesComp from '../../components/welcome/RecentActivitesComp';
import WhatNewComp from '../../components/welcome/WhatNewComp';

const WelcomePage = () => {
  return (
    <div className= "bg-[#EAEAEA]  px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-9 min-h-screen flex flex-col items-center gap-8 w-full  ">
      <WelcomeNavbar />
      <CardYellowBlackComp />
      <WelcomeChartComp />
      <div className='flex gap-5 '>

      <TodayOverviewComp/>
      <RecentActivitiesComp/>
      </div>
      <WhatNewComp/>
      
    </div>
  );
};

export default WelcomePage;
