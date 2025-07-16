import React from 'react'

const TabList = () => {
  return (
    <div className="flex w-full flex-wrap  h-auto p-1 items-center justify-between rounded-md bg-[#EFCD78]/70 gap-2 sm:gap-4">
      
      {/* Tab 1 */}
      <div className="flex flex-1 min-w-[100px] justify-center items-center gap-2 rounded px-4 sm:px-6 py-2 cursor-pointer hover:bg-[#FFF] transition">
        <div className="w-2 h-2 rounded-full bg-[#444]"></div>
        <p className="text-[#444] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-[Segoe UI Symbol]">
          Current
        </p>
      </div>

      {/* Tab 2 */}
      <div className="flex flex-1 min-w-[100px] justify-center items-center gap-2 rounded px-4 sm:px-6 py-2 bg-[#FFF] shadow-sm cursor-pointer">
        <div className="w-2 h-2 rounded-full bg-[#EAB308]"></div>
        <p className="text-[#444] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-[Segoe UI Symbol]">
          Upcoming
        </p>
      </div>

      {/* Tab 3 */}
      <div className="flex flex-1 min-w-[100px] justify-center items-center gap-2 rounded px-4 sm:px-6 py-2 cursor-pointer hover:bg-[#FFF] transition">
        <div className="w-2 h-2 rounded-full bg-[#444]"></div>
        <p className="text-[#444] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-[Segoe UI Symbol]">
          Past
        </p>
      </div>

    </div>
  )
}

export default TabList
