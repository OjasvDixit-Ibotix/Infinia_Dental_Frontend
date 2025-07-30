import React from 'react'
import photo from '../../../assets/svgs/EmpWelocomePageSvgs/videoPhoto.svg'

const EmpVideoComp = () => {
    return (
    <div
      className={`
        relative 
        h-[242px] 
        w-full 
        flex-shrink-0 
        self-stretch 
        rounded-3xl 
        bg-cover 
        bg-center 
        bg-no-repeat 
        before:absolute 
        before:inset-0 
        before:rounded-3xl 
        before:bg-#00000080
        before:content-['']
      `}
     
      style={{ backgroundImage: `url(${photo})` }}
    >
    </div>
  )
}

export default EmpVideoComp