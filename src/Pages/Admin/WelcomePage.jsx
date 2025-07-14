import React from 'react';
import WelcomeNavbar from '../../components/welcome/WelcomeNavbar';
import CardYellowBlackComp from '../../components/welcome/CardYellowBlackComp';
import WelcomeChartComp from '../../components/welcome/WelcomeChartComp';
import TodayOverviewComp from '../../components/welcome/TodayOverviewComp';

const WelcomePage = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 md:px-7 py-6 gap-8 w-full max-w-[1440px] mx-auto">
      <WelcomeNavbar />
      <CardYellowBlackComp />
      <WelcomeChartComp />
      <TodayOverviewComp/>
      
    </div>
  );
};

export default WelcomePage;
