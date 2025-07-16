import React from 'react'
import HeaderSemAndEventcomp from '../../components/SeminarAndEvents/HeaderSemAndEventcomp'
import SemAndEventsMain from '../../components/SeminarAndEvents/SemAndEventsMain'

const SeminarAndEventPage = () => {
  return (
    <>
    <div className='flex flex-col gap-8'>

    <HeaderSemAndEventcomp/>
    <SemAndEventsMain/>
    </div>
    </>
  )
}

export default SeminarAndEventPage