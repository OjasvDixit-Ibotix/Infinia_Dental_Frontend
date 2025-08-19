import React from 'react'
import LeaveDistriIcon from '../../../assets/svgs/EmpLeaveBalance/LeaveDistriIcon'
import ClockIconYellow from '../../../assets/svgs/EmpTimesheet/ClockIconYellow'
import PendingRequseIcon from '../../../assets/svgs/EmpLeaveBalance/PendingRequseIcon'
import ApproveThisMonthIcon from '../../../assets/svgs/EmpLeaveBalance/ApproveThisMonthIcon'
import DaysRemainIcon from '../../../assets/svgs/EmpLeaveBalance/DaysRemainIcon'
import UsageThisYear from '../../../assets/svgs/EmpLeaveBalance/UsageThisYear'

const QuickStats = () => {
  return (
   <div class="flex flex-col items-center gap-4 self-stretch rounded-2xl bg-white pt-6">
  <div class="flex w-[368px] items-center gap-4 px-8">
    <div class="h-[44px] w-[44px] flex-shrink-0 ">
      <div class="flex justify-center rounded-lg bg-[#444444] p-2.5">
        <div class="h-6 w-6">
            <LeaveDistriIcon/>
          </div>
      </div>
    </div>
    <span class="text-2xl font-normal leading-6 text-gray-800">
      Quick Stats
    </span>
  </div>

  <div class="flex flex-col gap-4 self-stretch px-6 pb-6">
    <div class="flex items-center justify-between self-stretch rounded-lg p-3">
      <div class="flex items-center">
        <div class="flex rounded-lg bg-[#444444] p-2">
          <div class="h-4 w-4">
            <PendingRequseIcon/>
            </div>
        </div>
        <div class="pl-3">
          <span class="text-sm font-normal text-[#444444]">
            Pending Requests
          </span>
        </div>
      </div>
      <div>
        <span class="text-lg font-normal text-[#444444]">3</span>
      </div>
    </div>

    <div class="flex items-center justify-between self-stretch rounded-lg p-3">
      <div class="flex items-center">
        <div class="flex rounded-lg bg-[#444444] p-2">
          <div class="h-4 w-4">
            <ApproveThisMonthIcon/>
            </div>
        </div>
        <div class="pl-3">
          <span class="text-[13.78px] font-normal leading-5 text-[#444444]">
            Approved This Month
          </span>
        </div>
      </div>
      <div>
        <span class="text-lg font-normal text-[#444444]">5</span>
      </div>
    </div>

    <div class="flex items-center justify-between self-stretch rounded-lg p-3">
      <div class="flex items-center">
        <div class="flex rounded-lg bg-[#444444] p-2">
          <div class="h-4 w-4">
            <DaysRemainIcon/>
            </div>
        </div>
        <div class="pl-3">
          <span class="text-sm font-normal text-[#444444]">
            Days Remaining
          </span>
        </div>
      </div>
      <div>
        <span class="text-lg font-normal text-[#444444]">34</span>
      </div>
    </div>

    <div class="flex items-center justify-between self-stretch rounded-lg p-3">
      <div class="flex items-center">
        <div class="flex rounded-lg bg-[#444444] p-2">
          <div class="h-4 w-4">
            <UsageThisYear/>
            </div>
        </div>
        <div class="pl-3">
          <span class="text-sm font-normal text-[#444444]">
            Usage This Year
          </span>
        </div>
      </div>
      <div>
        <span class="text-lg font-normal text-[#444444]">19</span>
      </div>
    </div>
  </div>
</div>
  )
}

export default QuickStats