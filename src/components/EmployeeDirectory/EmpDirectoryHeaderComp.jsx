import React from 'react'
import SearchBar from '../SearchBar'

const EmpDirectoryHeaderComp = () => {
  return (
    <div className="flex w-full flex-col items-start gap-4 sm:gap-6 mt-4 sm:mt-6">
      
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-3">
        <div className="flex flex-col items-start">
          <h1 className="text-[#444] font-normal text-lg sm:text-xl md:text-2xl lg:text-[30px] leading-6 sm:leading-7 md:leading-8 font-[Segoe UI Symbol]">
            Employee Directory
          </h1>
          <p className="text-[#444] font-normal text-xs sm:text-sm md:text-base leading-4 sm:leading-5 md:leading-6 font-[Segoe UI Symbol]">
            Find colleagues and contact information
          </p>
        </div>
      </div>

      <div className="w-full">
        <SearchBar placeholder="Search by name, department or title..." />
      </div>
    </div>
  )
}

export default EmpDirectoryHeaderComp
