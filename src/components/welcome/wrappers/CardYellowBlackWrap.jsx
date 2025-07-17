import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardYellowBlackWrap = ({ logos, logodesc, bgColor, textColor, navigateTo }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(navigateTo)}
      className="cursor-pointer flex flex-col items-center justify-center flex-1 min-w-[120px] max-w-[180px] sm:min-w-[150px]  h-[110px] sm:h-[130px] rounded-[8px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] backdrop-blur-[2px] transition-all duration-200"
      style={{ backgroundColor: `#${bgColor}` }}
    >
      <div className="flex flex-col items-center p-2 sm:p-3 gap-2 sm:gap-[11.25px]">
        <div className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 rounded-[12px] bg-[rgba(255,255,255,0.3)] backdrop-blur-[3px]">
          {logos}
        </div>
        <p
          className="text-center text-xs sm:text-[14px] leading-[17.5px] font-[400] font-[Segoe UI Symbol]"
          style={{ color: `#${textColor}` }}
        >
          {logodesc}
        </p>
      </div>
    </div>
  );
};

export default CardYellowBlackWrap;
