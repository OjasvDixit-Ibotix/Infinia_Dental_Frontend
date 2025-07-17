import React from 'react';
import WelcomeNavbar from '../../components/welcome/WelcomeNavbar';
import CardYellowBlackComp from '../../components/welcome/CardYellowBlackComp';
import WelcomeChartComp from '../../components/welcome/WelcomeChartComp';
import TodayOverviewComp from '../../components/welcome/TodayOverviewComp';
import RecentActivitiesComp from '../../components/welcome/RecentActivitesComp';
import WhatNewComp from '../../components/welcome/WhatNewComp';

const WelcomePage = () => {
  return (
    <div className="bg-[#EAEAEA] px-2 sm:px-4 md:px-8 lg:px-12 xl:px-20 py-4 sm:py-8 min-h-screen flex flex-col gap-6 w-full">
      <WelcomeNavbar />
      <CardYellowBlackComp />
      <WelcomeChartComp />
      <div className="flex mx-auto justify-center flex-col lg:flex-row gap-4 w-full ">
        <TodayOverviewComp />
        <RecentActivitiesComp />
      </div>
      <WhatNewComp />
    </div>
  );
};

export default WelcomePage;
