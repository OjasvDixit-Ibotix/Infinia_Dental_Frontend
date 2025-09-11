import React from "react";
import faceScanVideo from "../../../assets/video/InfiniaDentalFaceScanVideoUpdate.mp4";

const EmpVideoComp = () => {
  return (
    <div className="relative w-full h-[430px] flex-shrink-0 self-stretch rounded-3xl mx-auto overflow-hidden">
      <video
        src={faceScanVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
      />

      <div className="absolute inset-0 bg-black/20 rounded-3xl" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
       <h1 className="text-white text-2xl sm:text-4xl lg:text-6xl font-light leading-tight">
        REVOLUTIONIZE YOUR
      </h1>
      <h1 className="text-white text-2xl sm:text-4xl lg:text-6xl font-light leading-tight mb-3">
        DENTAL PRACTICE
      </h1>

        <p className="text-white text-4xl mb-6" style={{ fontFamily: '"Alex Brush", cursive' }}>
          With Infinia Dental Lab
        </p>
      </div>
    </div>
  );
};

export default EmpVideoComp;
