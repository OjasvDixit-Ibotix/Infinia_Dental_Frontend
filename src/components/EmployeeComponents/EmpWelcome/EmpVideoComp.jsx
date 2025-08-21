import React from 'react';
import faceScanVideo from '../../../assets/video/InfiniaDentalFaceScanVideoUpdate.mp4';

const EmpVideoComp = () => {
  return (
    <div
      className={`
        relative     
        h-[262px]
        w-full
        flex-shrink-0
        self-stretch
        rounded-3xl
        mx-auto
        overflow-hidden 
        before:absolute
        before:inset-0
        before:rounded-3xl
        before:bg-black/40 
        before:content-['']
        before:z-10      
      `}
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={faceScanVideo}
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default EmpVideoComp;