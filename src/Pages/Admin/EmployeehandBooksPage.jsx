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
    <> 
    <EmpHandBookHeader/>
    <div className='flex flex-col gap-[18px]'> 
    <EmpHandBookFilter/>
    <div>
    <div className='flex  h-fit gap-[12px]'>
         <HandBookSectionsComp/>
         <div className='flex gap-3 flex-col'>

           <QuickActions/>
           <RecentlyUpdated/>
           <HRNoticeboard/>
           <ContactHrCard/>
         </div>

    </div>

    </div>
    </div>
      
    </>
  )
}

export default EmployeehandBooksPage