import React from 'react'
import ChartCardWrap from './wrappers/ChartCardWrap'
import TotalEmpl from '../../assets/svgs/WelcomePage/TotalEmpl'
import NewHires from '../../assets/svgs/WelcomePage/NewHires'
import PendingLeaves from '../../assets/svgs/WelcomePage/PendingLeaves'
import CheckAttendance from '../../assets/svgs/WelcomePage/CheckAttendance'

const WelcomeChartComp = () => {
  return (
    <>
     <div className='flex flex-wrap justify-center gap-5 '>

    <ChartCardWrap  logo={<TotalEmpl/>}  desc={'Total Employees'} />
    <ChartCardWrap logo={<NewHires/>}  desc={'New Hires'} />
    <ChartCardWrap logo={<PendingLeaves/>} desc={'Pending Leaves'} />
    <ChartCardWrap  logo={<CheckAttendance/>} desc={'Attendance Rate'}/>
     </div>
    </> 

  )
}

export default WelcomeChartComp