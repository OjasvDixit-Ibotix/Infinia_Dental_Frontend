import React from 'react'

const IconWrapper = ({logo}) => {
  return (
     <div className="flex flex-col items-start p-3 rounded-[16px] bg-[#444444] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]">
                {logo}
        </div>
  )
}

export default IconWrapper