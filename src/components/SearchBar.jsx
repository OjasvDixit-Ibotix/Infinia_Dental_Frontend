import React from 'react'
import Searchicon from '../assets/svgs/WelcomePage/Searchicon'

const SearchBar = ({ placeholder }) => {
  return (
    <div className="w-full max-w-full sm:max-w-[672px]">
      <div className="relative flex items-center h-[44px] sm:h-[48px] rounded-[10px] sm:rounded-[12px] border border-[#EFCD78] bg-[rgba(255,255,255,0.5)] w-full px-3 sm:px-4 pl-9 sm:pl-10">
        <div className="absolute left-[10px] sm:left-[12px] top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-600">
          <Searchicon />
        </div>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full bg-transparent border-none outline-none text-[#444] text-sm sm:text-base placeholder:text-[#444] placeholder:text-sm sm:placeholder:text-[14px] placeholder:font-[400] placeholder:leading-none placeholder:font-[Segoe UI Symbol]"
        />
      </div>
    </div>
  )
}

export default SearchBar
