import React from 'react'
import Searchicon from '../assets/svgs/WelcomePage/Searchicon'
const SearchBar = ({placeholder}) => {
  return (
     <div className="w-full max-w-[672px]">
        <div className="relative flex items-center h-[48px] rounded-[12px] border border-[#EFCD78] bg-[rgba(255,255,255,0.5)] w-full px-4 pl-10">
          <div className="absolute left-[12px] top-[14px] w-5 h-5 text-gray-600">
            <Searchicon />
          </div>
          <input
            type="text"
            placeholder={placeholder}
            className="w-full bg-transparent border-none outline-none text-[#444] placeholder:text-[#444] placeholder:text-[14px] placeholder:font-[400] placeholder:leading-none placeholder:font-[Segoe UI Symbol]"
          />
        </div>
      </div>
  )
}

export default SearchBar