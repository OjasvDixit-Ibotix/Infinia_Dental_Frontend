import React, { useState, useCallback, useEffect, use } from "react";
import ellipse1 from "../assets/images/Ellipse1.svg";
import gradient from "../assets/images/bg-gradient.png";
import righttable from "../assets/images/right-table.svg";
import logo from "../assets/images/logo.svg";
import LoginCard from "../components/LoginCard";
import SignUpCard from "../components/SignUpCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BgLoginRegister = () => {
  const navigate= useNavigate()
  const islogin = useSelector((state)=>state.auth.islogin);
  const [isSignup, setIsSignup] = useState(false);

  const handleSwitch = useCallback(() => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  }, []);

  useEffect(()=>{
    if(islogin){
        navigate('/dashboard')
    }
  },[islogin,navigate])

  return (
    <div className=" overflow-y-hidden relative min-h-screen w-full flex flex-col md:flex-row">
      
      <div className="relative w-full h-1/2 md:h-auto md:w-1/2 bg-[#EFCD78] overflow-hidden flex flex-col min-h-[460px] md:min-h-screen">
        <div className="z-10 w-[120px] sm:w-[158px] mx-auto mt-6 md:mt-2 md:ml-4 md:mx-0 md:absolute md:top-5 md:left-6">
          <img src={logo} alt="Infinia Logo" className="w-full h-auto" />
        </div>
        <img
          src={ellipse1}
          alt=""
          className="absolute top-0 left-0 w-[60%] opacity-50 hidden sm:block"
        />
      </div>
      <div className="relative w-full h-1/2 md:h-auto md:w-1/2 bg-white flex items-center justify-center px-6 py-10 min-h-[60px] md:min-h-screen">
        <img
          src={righttable}
          alt="People working" 
          className="absolute bottom-0 right-0 w-[180px] lg:w-[300px] pointer-events-none hidden md:block"
        />
      </div>
      <img
        src={gradient}
        alt=""
        className="absolute top-0 left-0 w-full h-full opacity-50 z-15 pointer-events-none select-none"
      />
      <div className="absolute inset-0 flex items-center justify-center z-20 p-2 sm:p-4">
        <div className="w-full max-w-[420px]">
          {isSignup ? (
            <SignUpCard onSwitch={handleSwitch} />
          ) : (
            <LoginCard onSwitch={handleSwitch} />
          )}
        </div>
      </div>
    </div>
  );
};

export default BgLoginRegister;
