import React from 'react'
import FullNameIcon from './FullNameIcon';
const Bankdetails = () => {
const FullNameIcon1 = () => <div className="w-4 h-4 flex items-center justify-center text-gray-500"><FullNameIcon/></div>;
  const JoiningDateIcon = () => <div className="w-4 h-4 flex items-center justify-center text-gray-500">📅</div>;

  return (
    <div className="flex flex-col gap-6 self-stretch bg-white p-6 rounded-2xl border border-solid border-[#e8eaed]">
      <div className="w-full flex items-center gap-2">
        <span className="font-normal text-2xl text-[#444444]">Banking Information</span>
      </div> 
      <div className="self-stretch grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 self-stretch">
            <FullNameIcon1 />
            <span className="font-normal text-sm text-[#646e82]">Bank Name</span>
          </div>
          <div className="pt-1 pl-6">
            <span className="font-normal text-base text-[#444444]">HDFC Bank</span>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center self-stretch">
            <span className="font-normal text-sm text-[#646e82] pl-6">Account Number</span>
          </div>
          <div className="pt-1 pl-6">
            <span className="font-normal text-base text-[#444444]">*******028</span>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 self-stretch">
            <JoiningDateIcon />
            <span className="font-normal text-sm text-[#646e82]">Pan Number</span>
          </div>
          <div className="pt-1 pl-6">
            <span className="font-normal text-base text-[#444444]">HSH********</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bankdetails