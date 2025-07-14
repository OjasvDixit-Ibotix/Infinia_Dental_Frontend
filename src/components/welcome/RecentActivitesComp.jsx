import React from 'react';
import OnBoardIcon from '../../assets/svgs/WelcomePage/OnBoardIcon';
import LeavePendingIcon from '../../assets/svgs/WelcomePage/LeaveToday';
import MonthlyHr from '../../assets/svgs/WelcomePage/MonthlyHr';
import PerformIcon from '../../assets/svgs/WelcomePage/PerformReview';
import ActivityRow from './wrappers/ActivityRow';

const RecentActivitiesComp = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 w-[500px]  text-[#111827]">
      <h2 className="text-[18px] font-semibold mb-6">Recent Activities</h2>

      <ActivityRow
        icon={<OnBoardIcon className="w-5 h-5" />}
        title="John Smith was onboarded"
        description="Software Engineer - Development Team"
        time="2 hours ago"
      />

      <ActivityRow
        icon={<LeavePendingIcon className="w-5 h-5" />}
        title="3 leave requests pending"
        description="Requires manager approval"
        time="4 hours ago"
      />

      <ActivityRow
        icon={<MonthlyHr className="w-5 h-5" />}
        title="Monthly HR report generated"
        description="Performance metrics and analytics"
        time="1 day ago"
      />

      <ActivityRow
        icon={<PerformIcon className="w-5 h-5" />}
        title="Performance review completed"
        description="Lisa Wang - Marketing Manager"
        time="2 days ago"
      />
    </div>
  );
};

export default RecentActivitiesComp;
