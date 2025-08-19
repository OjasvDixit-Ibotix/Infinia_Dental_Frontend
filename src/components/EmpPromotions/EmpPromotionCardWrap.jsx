import React from 'react'
import DownloadSvg from '../../assets/svgs/WelcomePage/DownloadSvg'
import PrintBlackIcon from '../../assets/svgs/WelcomePage/PrintBlackIcon'
import EyeIconWhite from '../../assets/svgs/WelcomePage/EyeIconWhite'

const EmpPromotionCardWrap = ({ image, name, desc }) => {
  return (
    <div className="flex flex-col rounded-lg border border-gray-100 bg-white shadow-sm w-full max-w-[428px]">
      <div className="w-full px-[13px]">
        <img src={image} alt={name} className="w-full h-auto rounded-t-lg" />
      </div>
      <div className="p-4 sm:p-6 flex flex-col gap-2">
        <p className="text-[#444] text-base sm:text-xl md:text-lg font-normal">{name}</p>
        <p className="text-[#444] text-base sm:text-sm ">{desc}</p>

        <div className="flex gap-2 pt-2 w-full">
          <div className="flex flex-1 h-9 items-center justify-center gap-2 rounded-md border border-[#EFCD78] bg-white">
            <DownloadSvg />
            <span className="text-sm sm:text-base text-[#444]">Download</span>
          </div>

          <div className="flex flex-1 h-9 items-center justify-center gap-2 rounded-md border border-[#EFCD78] bg-white">
            <PrintBlackIcon />
            <span className="text-sm sm:text-base text-[#444]">Print</span>
          </div>

          <div className="flex h-9 w-9 sm:w-9 sm:h-9 items-center justify-center rounded-md bg-[#EFCD78]">
            <EyeIconWhite />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmpPromotionCardWrap
