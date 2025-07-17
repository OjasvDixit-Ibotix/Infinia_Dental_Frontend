import React from 'react'
import HeaderSemAndEventcomp from '../../components/SeminarAndEvents/HeaderSemAndEventcomp'
import SemAndEventsMain from '../../components/SeminarAndEvents/SemAndEventsMain'

const SeminarAndEventPage = () => {
  return (
    <div className='flex flex-col gap-4 md:gap-8 w-full'>
      <HeaderSemAndEventcomp/>
      <SemAndEventsMain/>
    </div>
  )
}

export default SeminarAndEventPage