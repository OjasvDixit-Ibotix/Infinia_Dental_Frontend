import React from 'react';
// 1. Import your video file from your assets folder
import faceScanVideo from '../../../assets/video/InfiniaDentalFaceScanVideoUpdate.mp4';

const EmpVideoComp = () => {
  return (
    // This parent div acts as a container for the video and the overlay
    <div
      className={`
        relative      /* Establishes a positioning context for the video */
        h-[242px]
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
      {/* 2. Add the HTML5 <video> element */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={faceScanVideo}
        autoPlay  // The video will start playing as soon as it is ready
        loop      // The video will start over again, every time it is finished
        muted     // Mutes the audio. Required for autoplay in most browsers
        playsInline // Prevents the video from going fullscreen on mobile devices
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default EmpVideoComp;