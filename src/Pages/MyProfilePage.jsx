import React from 'react'
import MyProfileHeader from '../components/MyProfileComp/MyProfileHeader'
import MyProfileBanner from '../components/MyProfileComp/MyProfileBanner'
import MyProfileEmpDetails from '../components/MyProfileComp/MyProfileEmpDetails'

const MyProfilePage = () => {
  return (
   <>
   <MyProfileHeader/>
   <div className="flex flex-col gap-7">

   <MyProfileBanner/>
   <MyProfileEmpDetails/>
   </div>
   </>
  )
}

export default MyProfilePage