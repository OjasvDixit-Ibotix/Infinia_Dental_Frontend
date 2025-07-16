import React from 'react'
import ClockIcon from '../../../assets/svgs/WelcomePage/ClockIcon'
import LocationIcon from '../../../assets/svgs/WelcomePage/LocationIcon'
import ProfileIcon from '../../../assets/svgs/WelcomePage/ProfileIcon'
import CalendarIconYellow from '../../../assets/svgs/WelcomePage/CalendarIconYellow'
import RemindMeIcon from '../../../assets/svgs/WelcomePage/RemindMeIcon'

const TabPanelCardWrap = () => {
  return (
    <div className="flex flex-col p-1 rounded-lg border border-[#EFCD78] bg-white shadow-sm w-full ">
      <div className="flex flex-col gap-4 p-4 sm:p-6 w-full">
        
        {/* Title */}
        <p className="text-[#444] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] font-normal font-[Segoe UI Symbol]">
          Digital Dentistry: CAD/CAM Integration
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center px-3 py-1 rounded-full bg-[#444]">
            <p className="text-[#EFCD78] text-[11px] sm:text-[12px] leading-[16px] sm:leading-[20px] font-[Segoe UI Symbol]">
              Certificate
            </p>
          </div>
          <div className="flex items-center px-3 py-1 rounded-full bg-[#444]">
            <p className="text-[#EFCD78] text-[11px] sm:text-[12px] leading-[16px] sm:leading-[20px] font-[Segoe UI Symbol]">
              Hands-on
            </p>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <ClockIcon />
            <p className="text-[#444] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-[Segoe UI Symbol]">
              January 15, 2025, 10:00 AM - 12:00 PM
            </p>
          </div>
          <div className="flex items-center gap-2">
            <LocationIcon />
            <p className="text-[#444] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-[Segoe UI Symbol]">
              Online
            </p>
          </div>
          <div className="flex items-center gap-2">
            <ProfileIcon />
            <p className="text-[#444] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-[Segoe UI Symbol]">
              Dr. Alex Chan
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-[#444] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-[Segoe UI Symbol]">
          Comprehensive overview of CAD/CAM technology integration in modern dental practice.
        </p>

        {/* Seats Left */}
        <p className="text-[#EA580C] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-[Segoe UI Symbol]">
          12 seats left
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-2">
          <button className="flex justify-center items-center px-4 py-2 rounded-md bg-[#EFCD78] w-full sm:w-auto">
            <p className="text-white text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-[Segoe UI Symbol]">
              Register Now
            </p>
          </button>

          <button className="flex justify-center items-center gap-2 px-4 py-2 rounded-md border border-[#EFCD78] bg-white w-full sm:w-auto">
            <CalendarIconYellow />
            <p className="text-[#EFCD78] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-[Segoe UI Symbol]">
              Add to Calendar
            </p>
          </button>

          <button className="flex justify-center items-center gap-2 px-4 py-2 rounded-md border border-[#EFCD78] bg-white w-full sm:w-auto">
            <RemindMeIcon />
            <p className="text-[#444] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-[Segoe UI Symbol]">
              Remind Me
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TabPanelCardWrap
