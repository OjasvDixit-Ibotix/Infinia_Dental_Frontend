import React from 'react'
import EmailIcon from '../../assets/svgs/WelcomePage/EmailIcon'
import CallIcon from '../../assets/svgs/WelcomePage/CallIcon'
import LocationIcon from '../../assets/svgs/WelcomePage/LocationIcon'

const EmpdirectoryCardWrap = () => {
  return (
    <div className="flex min-w-[316px] max-w-full p-[1px] flex-col items-start rounded-md border border-[#EFCD78] bg-white shadow-sm">
      <div className="flex p-4 sm:p-6 flex-col items-start gap-4 w-full">

        <div className="flex items-start gap-3 w-full">
          <div className="flex justify-center">
            <div className="w-12 h-12 bg-[#EFCD78] text-[#444444] text-sm rounded-full flex items-center justify-center text-center leading-6 font-normal font-[Segoe UI Symbol]">
              AC
            </div>
          </div>

          <div className="flex flex-col items-start flex-1">
            <p className="text-[#444] font-normal text-base leading-6 font-[Segoe UI Symbol]">
              De. Amit Kumar
            </p>
            <p className="text-[#444] text-sm leading-5 font-normal font-[Segoe UI Symbol]">
              CEO
            </p>
            <div className="flex py-[3px] px-[11px] items-center rounded-full border border-[#444]">
              <p className="text-[#444] text-xs leading-4 font-normal font-[Segoe UI Symbol]">
                Dr. Amit kumar
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2 w-full">
          <div className="flex items-center gap-2 w-full">
            <EmailIcon />
            <p className="text-[#444] text-sm leading-5 font-normal font-[Segoe UI Symbol] break-words">
              amit.kumar@gmail.com
            </p>
          </div>
          <div className="flex items-center gap-2 w-full">
            <CallIcon />
            <p className="text-[#444] text-sm leading-5 font-normal font-[Segoe UI Symbol]">
              9876543543
            </p>
          </div>
          <div className="flex items-center gap-2 w-full">
            <LocationIcon />
            <p className="text-[#444] text-sm leading-5 font-normal font-[Segoe UI Symbol]">
              Main Office
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmpdirectoryCardWrap
