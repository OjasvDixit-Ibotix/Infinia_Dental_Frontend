import React, { useState } from 'react';
import BlackIconWrapper from '../BlackIconWrapper';
import TotalEmpl from '../../assets/svgs/WelcomePage/TotalEmpl';
import PersonalInfoIcon from '../../assets/svgs/MyProfile/PersonalInfoIcon';
import RoleandAccessIcon from '../../assets/svgs/MyProfile/RoleandAccessIcon';
import RecentActionsIcon from '../../assets/svgs/MyProfile/RecentActionsIcon';
import PersonalInfoContent from './PersonalInfoContent';
import JobInfoContent from './JobInfoContent';
import Bankdetails from './Bankdetails';

// Mock data for different tabs
const tabContent = {
  'Personal Info': {
    title: 'Personal Info',
    subtitle: '3 forms available',
  
  },
  'Tax Forms': {
    title: 'Tax Forms',
    subtitle: '2 forms available',
   
  },
  'Product Related': {
    title: 'Product Related',
    subtitle: '5 documents available',
   
  },
};

const tabs = [
  { label: 'Personal Info', icon :<PersonalInfoIcon/> },
  { label: 'Job Info',  icon :<RoleandAccessIcon/> },
  { label: 'Bank Details', icon :<RecentActionsIcon/> },
];

const MyProfileEmpDetails = () => {
  const [activeTab, setActiveTab] = useState('Personal Info');
  const currentContent = tabContent[activeTab];

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex w-full flex-wrap p-1 items-center justify-between rounded-md  bg-[#FFF] gap-2 sm:gap-4">
        {tabs.map((tab, idx) => (
          <div
            key={idx}
            onClick={() => setActiveTab(tab.label)}
            className={`flex flex-1 min-w-[100px] justify-center items-center gap-2 rounded  px-4 sm:px-6 py-1 cursor-pointer transition ${
              activeTab === tab.label
                ? 'bg-[#EFCD78] shadow-sm'
                : 'hover:bg-gray-100' 
            }`}
          >
            <div className="">{tab.icon}
            </div>
            <p className="text-[#444] text-sm sm:text-base leading-5 sm:leading-6 font-[Segoe UI Symbol]">
              {tab.label}
            </p>
          </div>
        ))}
      </div>
      {
        activeTab === 'Personal Info' &&(
            <PersonalInfoContent />
        )
    }
    {activeTab === 'Job Info' && (
       <JobInfoContent />
       )
   }
   {activeTab === 'Bank Details' && (
       <Bankdetails />
       )
   }
    </div>
  );
};

export default MyProfileEmpDetails;