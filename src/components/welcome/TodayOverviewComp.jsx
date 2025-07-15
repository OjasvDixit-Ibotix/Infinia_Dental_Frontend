import React from 'react'
import BirthdayGift from '../../assets/svgs/WelcomePage/BirthdayGift'
import LeaveRequest from '../../assets/svgs/WelcomePage/LeaveRequest'
import LeaveToday from '../../assets/svgs/WelcomePage/LeaveToday'
import WorkAnnivers from '../../assets/svgs/WelcomePage/WorkAnnivers'

const TodayOverviewComp = () => {
  return (
     <div className="bg-white rounded-lg shadow-sm p-6 w-[577px] text-[#111827]">
      <h2 className="text-[18px] font-semibold mb-6">Today's Overview</h2>

      <div className="flex gap-3 items-start mb-6">
        <div className="bg-[#F3C85C] rounded p-2">
        <BirthdayGift/>
        </div>
        <div>
          <p className="text-[16px] font-medium">Birthdays Today</p>
          <div>

          <p className="text-[14px] mt-1">Sarah Johnson</p>
          </div>
          <p className="text-[12px] text-[#6B7280]">Marketing</p>
        </div>
      </div>

      
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-3">
          <div className="bg-[#F3C85C] rounded p-2 h-fit">
            <LeaveToday/>
            
          </div>
          <div>
            <p className="text-[16px] font-medium">On Leave Today</p>
            <p className="text-[14px] mt-1">Emily Davis</p>
            <p className="text-[12px] text-[#6B7280]">HR</p>
          </div>
        </div>
        <p className="text-[12px] text-[#9CA3AF] mt-2">Sick Leave</p>
      </div>

      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          <div className="bg-[#F3C85C] rounded p-2 h-fit">
            <WorkAnnivers/>
           
          </div>
          <div>
            <p className="text-[16px] font-medium">Work Anniversaries</p>
            <p className="text-[14px] mt-1">Robert Kim</p>
            <p className="text-[12px] text-[#6B7280]">Finance</p>
          </div>
        </div>
        <p className="text-[12px] text-[#111827] mt-2">5 years</p>
      </div>
    </div>
  )
}

export default TodayOverviewComp