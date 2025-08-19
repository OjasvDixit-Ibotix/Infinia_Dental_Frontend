import React from 'react'
import TabList from './TabList'
import TabPanelCardWrap from './wrapper/TabPanelCardWrap'

const SemAndEventsMain = () => {
  return (
    <div className="flex flex-col gap-6 w-full  mx-auto">
      {/* Tabs */}
      <TabList />

      {/* Tab Panel Cards (one column) */}
      <div className="flex flex-col gap-4 w-full">
        <div className='flex items-center gap-[8px] self-stretch'> 
          <div className='size-[12px] rounded-lg bg-[#E7B63A]'></div>
           <p className="text-[#444] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-[Segoe UI Symbol]">
          Upcoming Events
        </p>
        </div>
        <TabPanelCardWrap />
        <TabPanelCardWrap />
        <TabPanelCardWrap />
      </div>
    </div>
  )
}

export default SemAndEventsMain
