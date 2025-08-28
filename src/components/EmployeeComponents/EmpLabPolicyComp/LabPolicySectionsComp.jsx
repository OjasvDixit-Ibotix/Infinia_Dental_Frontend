import React from 'react'
// import EmployehandBookYellow from '../../assets/svgs/WelcomePage/EmployehandBookYellow'
import HandBookSectionWrap from './wrapper/HandBookSectionWrap'

const LabPolicySectionsComp = () => {
  return (
    <div class=" w-full flex flex-col p-6  items-start gap-6 rounded-2xl bg-white/80 shadow-md backdrop-blur-sm">
          <div className='flex items-center gap-[10px] self-stretch'>
             <div className=" p-[10px] gap-[10px] flex items-center justify-center bg-[#444] rounded-md">
        {/* <EmployehandBookYellow/> */}
      </div>
      <h3 className="text-[#020817] font-normal text-[24px] leading-[24px] tracking-[-0.6px] font-[Segoe_UI_Symbol]">
   Policy Documents
</h3>

       {/* <div className="flex flex-col items-end flex-1 min-w-[74.69px] ">
        <div className='flex items-center px-[11px] py-[3px] rounded-full bg-[#F1F5F9] '>
            <p className=" text-[#444] font-[400] text-[12px] leading-[16px] tracking-[-0.6px] font-[Segoe UI Symbol]">
              8 section
              </p>

        </div>
       </div> */}


          </div>


          <div className='flex flex-col items-start gap-[8px] self-stretch'>
            <HandBookSectionWrap  title="Company Overview"
              category="General"
                updatedOn="Dec 15, 2024"/>
                 <HandBookSectionWrap  title="Company Overview"
              category="General"
                updatedOn="Dec 15, 2024"/>
                 <HandBookSectionWrap  title="Company Overview"
              category="General"
                updatedOn="Dec 15, 2024"/>
                 <HandBookSectionWrap  title="Company Overview"
              category="General"
                updatedOn="Dec 15, 2024"/>
                 <HandBookSectionWrap  title="Company Overview"
              category="General"
                updatedOn="Dec 15, 2024"/>
                 <HandBookSectionWrap  title="Company Overview"
              category="General"
                updatedOn="Dec 15, 2024"/>
                 <HandBookSectionWrap  title="Company Overview"
              category="General"
                updatedOn="Dec 15, 2024"/>
          </div>



</div>

  )
}

export default LabPolicySectionsComp