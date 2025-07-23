import React from 'react'
import BlackIconWrapper from '../BlackIconWrapper'
import CurrentPromotionsIcon from '../../assets/svgs/WelcomePage/CurrentPromotionsIcon'
import SearchBar from '../SearchBar'
import AllPromotionsIcon from '../../assets/svgs/WelcomePage/AllPromotionsIcon'

const EmpPromotionHeader = () => {
  return (
    <div className="w-full flex flex-col gap-4 sm:gap-6 mb-6">
      <div className="flex flex-col  gap-4">
        <div className="flex items-center gap-3">
          <BlackIconWrapper logo={<CurrentPromotionsIcon />} />
          <p className="text-[#444] text-xl sm:text-2xl md:text-3xl font-normal">
            Current Promotions
          </p>
        </div>
        <SearchBar placeholder={'Search current promotions...'} />
      </div>

      <div className="flex items-center gap-2">
        <BlackIconWrapper logo={<AllPromotionsIcon />} />
        <p className="text-[#444] text-lg sm:text-xl md:text-2xl font-normal">
          All Promotions (4)
        </p>
      </div>
    </div>
  )
}

export default EmpPromotionHeader
