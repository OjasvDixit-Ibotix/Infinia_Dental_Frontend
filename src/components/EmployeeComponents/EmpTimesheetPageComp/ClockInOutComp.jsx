import React from 'react'
import ClockIcon from '../../../assets/svgs/WelcomePage/ClockIcon'
import ClockInsvg from '../../../assets/svgs/EmpTimesheet/ClockInsvg'
import ClockOutSvg from '../../../assets/svgs/EmpTimesheet/ClockOutSvg'

const ClockInOutComp = () => {
  return (
   <div className=" commonCardCss p-8 ">
  <div className="flex flex-col gap-6 self-stretch">

    <div className="flex justify-center items-center gap-0 self-stretch">
      <div className="h-16 flex justify-center items-center gap-2 bg-emerald-600 px-5 py-2 rounded-xl">
        <div className="h-4 w-7 flex flex-col pr-3">
          <div className="h-4 w-4 flex flex-col justify-center items-center">
            <div className="grow w-4">
              <ClockInsvg/>
            </div>
          </div>
        </div>
        <span className="font-normal text-lg text-center text-white">Clock In</span>
      </div>

      <div className="h-16 flex flex-col pl-6">
        <div className="h-16 flex justify-center items-center gap-2 bg-red-500 px-5 py-2 rounded-xl">
          <div className="h-4 w-7 flex flex-col pr-3">
            <div className="h-4 w-4 flex flex-col justify-center items-center">
              <div className="grow w-4">
               <ClockOutSvg/>
              </div>
            </div>
          </div>
          <span className="font-normal text-lg text-center text-purple-50">Clock Out</span>
        </div>
      </div>
    </div>

    <div className="flex justify-center items-center self-stretch">
      <div className="flex items-center bg-gray-100 px-[17px] py-[9px] rounded-full border border-solid border-gray-200">
        <div className="h-4 w-6 flex flex-col pr-2">
          <div className="h-4 w-4 flex flex-col justify-center">
            <div className="grow w-4">
              <svg className="w-[13.33px] h-[13.33px]" />
              <svg className="w-[2.66px] h-[5.33px]" />
            </div>
          </div>
        </div>
        <span className="font-normal text-sm text-center text-[#444444]">
          Not Logged In
        </span>
      </div>
    </div>
  </div>
</div>

  )
}

export default ClockInOutComp