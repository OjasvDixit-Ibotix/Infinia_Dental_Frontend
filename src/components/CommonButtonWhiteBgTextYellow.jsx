import React from 'react'
import { useState } from 'react'

const CommonButtonWhiteBgTextYellow = ({icon,text,hovericon}) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <button className=" text-[#EFCD78] text-center text-sm font-normal leading-5 font-[Segoe UI Symbol] flex h-9 px-[22.75px] py-[1px] justify-center items-center hover:text-[#444444] gap-2 rounded-md border border-[#EFCD78] hover:border-[#EFCD78] bg-white hover:bg-[#EFCD7880]" 
       onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
  <div className="flex w-[20px] h-[16px] flex-col content-center items-center shrink-0">
     {isHovered ? hovericon : icon}
  </div>
   {text}
</button>

  )
}

export default CommonButtonWhiteBgTextYellow