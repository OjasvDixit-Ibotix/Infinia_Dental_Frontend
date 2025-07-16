import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardYellowBlackWrap = ({ logos, logodesc,bgColor ,textColor,navigateTo}) => {
  const navigate = useNavigate();
  return (
  <div onClick={()=>navigate(navigateTo)} 
  className={`cursor-pointer flex flex-col items-start w-full max-w-[198px] h-[130px] rounded-[8px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] backdrop-blur-[2px]`}
  style={{ backgroundColor: `#${bgColor}` }}
>
  <div className="flex flex-col items-center p-3 gap-[11.25px] self-stretch">
    <div className="flex justify-center items-center w-12 h-12 rounded-[12px] bg-[rgba(255,255,255,0.3)] backdrop-blur-[3px]">
      {logos}
    </div>
    <div className="flex flex-col items-center pb-[0.75px] self-stretch">
      <p
        className="self-stretch text-center text-[14px] leading-[17.5px] font-[400] font-[Segoe UI Symbol]"
        style={{ color: `#${textColor}` }}
      >
        {logodesc}
      </p>
    </div>
  </div>
</div>

  );
};

export default CardYellowBlackWrap;
