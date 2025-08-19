import React from 'react'
import EmpdirectoryCardWrap from './EmpdirectoryCardWrap'

const EmpDirectoryCards = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 items-start w-full">
      
      <div className="flex items-center w-full">
        <div className="flex min-w-[166px] flex-col items-start">
          <p className="text-[#444] font-normal text-lg sm:text-xl md:text-[20px] leading-6 sm:leading-7 md:leading-[28px] font-[Segoe UI Symbol]">
            All Employees (9)
          </p>
        </div>
      </div>

      <div className=" flex flex-wrap gap-5 w-full">
        <EmpdirectoryCardWrap />
        <EmpdirectoryCardWrap />
        <EmpdirectoryCardWrap />
        <EmpdirectoryCardWrap />
        <EmpdirectoryCardWrap />
        <EmpdirectoryCardWrap />
        <EmpdirectoryCardWrap />
        <EmpdirectoryCardWrap />


      </div>
    </div>
  )
}

export default EmpDirectoryCards
