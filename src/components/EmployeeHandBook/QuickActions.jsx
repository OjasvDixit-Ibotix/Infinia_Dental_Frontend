import { Download } from 'lucide-react'
import React from 'react'
import DownloadSvg from '../../assets/svgs/WelcomePage/DownloadSvg'

const QuickActions = () => {
  return (
   <div className="flex flex-col items-center gap-6 pt-6 rounded-2xl bg-white/80 shadow-md backdrop-blur-sm w-full">
  <div className='flex  flex-col items-start'>
    <p className="text-[#444] font-normal text-[18px] leading-[28px] tracking-[-0.45px] font-[Segoe UI Symbol]">
  Quick Actions
</p>
</div>
<div className="flex flex-col items-start gap-3 px-6 pb-6 w-full">

    <div className="flex h-9 px-3 justify-center items-center gap-2 w-full rounded-md bg-[#EFCD78]">
        <div className='flex w-[24px] h-[16px] pr-[8px] flex-col items-start '>
           <DownloadSvg/>
        </div>
        <p className="text-[#444] text-center font-normal text-[13.78px] leading-[20px] font-[Segoe UI Symbol]">
  Download Full Handbook
</p>

</div>



  </div>
</div>

  )
}

export default QuickActions