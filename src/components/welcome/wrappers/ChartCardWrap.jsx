import React from 'react'

const ChartCardWrap = ({logo,desc,total}) => {
  return (
    <div className="flex flex-col items-start gap-4 w-[160px] h-[180px] sm:w-[220px] sm:h-[200px] md:w-[259px] md:h-[254px] p-3 sm:p-5 flex-shrink-0 rounded-[20px] border-t-[3px] border-t-[rgba(239,205,120,0.5)] bg-[rgba(255,255,255,0.7)] shadow-[0_4px_8px_rgba(239,205,120,0.2)] backdrop-blur-[6px] transition-all duration-200">
      <div className='flex justify-between items-center self-stretch'>
        <div className="flex flex-col items-start p-2 sm:p-3 rounded-[16px] bg-[#444444] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]">
                {logo}
        </div>
        <div className='flex flex-col items-start'>
          <p className="text-[#668E8C] font-[Segoe UI Symbol] text-xs sm:text-[14px] font-semibold leading-[20px]"> 2.4
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start self-stretch">
        <p className="self-stretch text-[#444444] font-[Segoe UI Symbol] text-lg sm:text-[30px] not-italic leading-[24px] sm:leading-[36px]">
        123
        </p>
        <p className="self-stretch text-[#4B5563] font-[Segoe UI Symbol] text-xs sm:text-[14px] not-italic font-normal leading-[16px] sm:leading-[20px]">
         {desc}
        </p>
      </div>
      <div className="flex h-2 justify-center items-end flex-shrink-0 self-stretch">
       chart graph
      </div>
      <div className="flex flex-col items-start self-stretch">
        <p className="self-stretch text-[#6B7280] font-[Segoe UI Symbol] text-[10px] sm:text-[12px] not-italic font-normal leading-[14px] sm:leading-[16px]">
          this month
        </p>
      </div>
    </div>
  )
}

export default ChartCardWrap