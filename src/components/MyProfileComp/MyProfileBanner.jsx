import React from 'react';
import { useSelector } from 'react-redux';

const MyProfileBanner = () => {
  const {user} = useSelector(state=>state.auth)
  console.log('my-profile ', user);
  

  return (
    <div className="relative self-stretch rounded-3xl border mt-5 border-[#E8EAED] bg-white shadow-[0_8px_32px_-8px_rgba(40,44,52,0.1)]">     
      <div className="absolute rounded-3xl inset-0 bg-[linear-gradient(91deg,rgba(239,205,120,0.80)_0.62%,rgba(239,205,120,0.10)_100%)]" />    
      <div className="relative z-10 flex h-[158px] items-center gap-6 self-stretch p-8">
        <div className="h-24 w-24 flex-shrink-0 rounded-full bg-white/50">    
        </div>
        <div className="flex flex-col items-start  ">
          <h2 className="text-2xl fontSans ">{user?.name}</h2>
          <p className="text-[#444] fontSans">{user?.department}</p>
          <p className="text-[#444] fontSans">{user?.user_type}</p>
          <p className="text-[#444] fontSans">{`Employee ID: ${user?.employee_id}`}</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfileBanner;