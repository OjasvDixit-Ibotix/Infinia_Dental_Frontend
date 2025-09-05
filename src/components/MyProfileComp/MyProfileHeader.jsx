import React, { use } from 'react'
import { useSelector } from 'react-redux'
// import { useSelector } from 'react-redux';
const MyProfileHeader = () => {
  const {user} = useSelector((state) => state.auth);
  
  
  
  function checkUserType() {
     if(user?.user_type.toLowerCase() === 'admin') {
       return 'HR'
     }
     else{
       return 'Employee'
     }
  }

  return (
    <div className="flex flex-col gap-1 ">
        <span class="font-normal text-3xl text-[#444444]">My Profile - {checkUserType()} Portal</span>
        <span class="font-normal text-[15.75px] leading-[24px] text-[#646e82]">Manage your {checkUserType()} account, permissions and system preferences</span>
    </div>
  )
}

export default MyProfileHeader