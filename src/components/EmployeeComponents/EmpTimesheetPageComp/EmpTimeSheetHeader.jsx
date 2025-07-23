import React from 'react'

const EmpTimeSheetHeader = () => {
  return (

      <div className="flex w-[100%] items-center justify-between">

        <div className="flex flex-col items-start gap-[4px]">
            <div className="flex flex-col self-stretch items-start ">

                <p class="text-[#444] font-[Segoe_UI_Symbol] text-3xl not-italic font-normal leading-9">
                    Timesheet
                </p>
            </div>
            <div className="flex flex-col self-stretch items-start ">
                
                 <p class="text-[#444] font-[Segoe_UI_Symbol] text-base not-italic  font-normal leading-6">
                    Track your work hours and manage time entries
                </p>
              </div>
        </div>
        <div className="flex flex-col items-start ">
            <div className="flex flex-col items-end self-stretch">
                <p className='text-[#444]  text-right font-[Segoe_UI_Symbol] text-2xl  not-italic font-normal leading-8'>
                    8:17:44 AM
                </p>
            </div>
            <div className="flex flex-col items-end self-stretch">
                <p className='text-[#444] text-right font-[Segoe_UI_Symbol] text-sm  not-italic font-normal leading-5'>
                    Friday, July 4, 2025
                </p>
                <p></p>
            </div>            
        </div>    
            
    </div>

  )
}

export default EmpTimeSheetHeader