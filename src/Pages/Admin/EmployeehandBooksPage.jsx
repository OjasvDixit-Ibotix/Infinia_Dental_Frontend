import React from 'react'
import EmpHandBookHeader from '../../components/EmployeeHandBook/EmpHandBookHeader'
import EmpHandBookFilter from '../../components/EmployeeHandBook/EmpHandBookFilter'
import HandBookSectionsComp from '../../components/EmployeeHandBook/HandBookSectionsComp'
import QuickActions from '../../components/EmployeeHandBook/QuickActions'
import RecentlyUpdated from '../../components/EmployeeHandBook/RecentlyUpdated'
import HRNoticeboard from '../../components/EmployeeHandBook/HRNoticeBoardCard'
import ContactHrCard from '../../components/EmployeeHandBook/ContactHrCard'

const EmployeehandBooksPage = () => {
  return (
    <div className='flex flex-col gap-4 md:gap-[18px] w-full'>
      <EmpHandBookHeader/>
      <EmpHandBookFilter/>
      <div>
        <div className='flex flex-col lg:flex-row gap-3 md:gap-[12px] h-fit w-full'>
          <HandBookSectionsComp/>
          <div className='flex gap-2 md:gap-3 flex-col mt-3 lg:mt-0'>
            <QuickActions/>
            <RecentlyUpdated/>
            <HRNoticeboard/>
            <ContactHrCard/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeehandBooksPage