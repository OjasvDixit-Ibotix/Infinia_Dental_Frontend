import React, { useState } from "react";
import ellipse1 from "../assets/images/Ellipse1.svg";
import gradient from "../assets/images/bg-gradient.png";
import righttable from "../assets/images/right-table.svg";
import logo from "../assets/images/logo.svg";
import LoginCard from "./LoginCard";
import SignUpCard from "./SignUpCard";

const BgLoginRegister = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="relative min-h-screen w-full flex flex-col md:flex-row">

      {/* Yellow Section */}
      <div className="relative w-full md:w-1/2 bg-[#EFCD78] overflow-hidden min-h-screen flex flex-col">
        {/* Centered logo on mobile, left on desktop */}
        <div className="z-10 w-[158px] mx-auto mt-6 md:mt-5 md:ml-6 md:mx-0 md:absolute md:top-5 md:left-6">
          <img src={logo} alt="Infinia Logo" className="w-full h-auto" />
        </div>

        <img
          src={ellipse1}
          alt="Ellipse"
          className="absolute top-0 left-0 w-[60%] opacity-50"
        />
      </div>

      {/* Right white section (only visible on md and above) */}
      <div className="hidden md:flex relative w-1/2 bg-white min-h-screen items-center justify-center px-6 py-10">
        <img
          src={righttable}
          alt="People working"
          className="absolute bottom-0 right-0 w-[250px] pointer-events-none"
        />
      </div>

      {/* Gradient Overlay */}
      <img
        src={gradient}
        alt="Gradient Overlay"
        className="absolute top-0 left-0 w-full h-full opacity-50 z-15"
      />

      {/* Card Section */}
      <div className="absolute inset-0 flex items-center justify-center z-20 p-4">
        {isLogin ? (
          <LoginCard onSwitch={() => setIsLogin(!isLogin)} />
        ) : (
          <SignUpCard onSwitch={() => setIsLogin(!isLogin)} />
        )}
      </div>
    </div>
  );
};

export default BgLoginRegister;
