import React from 'react'
import PlusIcon from '../../../assets/svgs/EmpLeaveBalance/PlusIcon'

const EmpLeaveBalanceHeader = () => {
  return (
     <div className="flex flex-row items-center justify-between rounded-lg w-full ">
      <div className=""> 

            <h1 className="text-[#444] font-normal text-[30px] leading-[36px] font-[Segoe UI Symbol]">
          Leave Balance Overview
            </h1>
        <p className="text-[#444] font-normal text-[15.875px] leading-[24px] font-[Segoe UI Symbol]">
         Track your leave balances, history, and pending requests
         </p>       
      </div>
      <div class="h-10 flex justify-center items-center gap-2 bg-[#efcd78] px-6 py-3 rounded-xl">
          <div class="h-4 w-6 flex flex-col pr-2">
            <div class="h-4 w-4 flex flex-col justify-center items-center">
              <div class="grow w-4">
                <PlusIcon/>
              </div>
            </div>
          </div>
          
          <span class="font-normal text-sm text-center text-[#444444]">
            Request Leave
          </span>
          
        </div>


    </div>
  )
}

export default EmpLeaveBalanceHeader