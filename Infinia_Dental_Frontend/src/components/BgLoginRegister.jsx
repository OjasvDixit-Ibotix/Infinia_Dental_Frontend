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
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      
      <div className="relative w-full md:w-1/2 bg-[#EFCD78] overflow-hidden">
        {/* Logo */}
        <div className="absolute top-5 left-6 z-10 w-[158px]">
          <img src={logo} alt="Infinia Logo" className="w-full h-auto" />
        </div>

        <img
          src={ellipse1}
          alt="Ellipse"
          className="absolute top-0 left-0 w-[60%] opacity-50"
        />

        <img
          src={gradient}
          alt="Gradient Overlay"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
        />
      </div>

      <div className="relative w-full md:w-1/2 bg-white min-h-screen flex items-center justify-center px-6 py-10">
        <img
          src={righttable}
          alt="People working"
          className="hidden lg:block absolute bottom-0 right-0 w-[250px] pointer-events-none"
        />

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
