import React, { useState } from 'react';
import RupeeIcon from '../../../assets/svgs/WelcomePage/RupeeIcon';
import ClockIcon from '../../../assets/svgs/WelcomePage/ClockIcon';
import EyeIcon from '../../../assets/svgs/WelcomePage/EyeIcon';
import DownloadSvg from '../../../assets/svgs/WelcomePage/DownloadSvg';
import ProductModal from './ProductModal';

const ProductsCardListWrap = ({data, image, name, desc, price, noOf }) => {

  const [isOpen,setIsOpen] = useState(false)
  return (
    <>
    <div className="flex w-full h-[394px] p-1 flex-col items-start flex-shrink-0
        rounded-[16px] border border-[#F3F4F6] bg-white 
        shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">

      <div className="w-full h-[200px] rounded-t-[16px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col w-full px-4 py-3 gap-2">
        <p className="text-[#444] font-[Segoe UI Symbol] text-[18px] leading-[28px] font-normal">
          {name}
        </p>

        <p className="text-[#444] font-[Segoe UI Symbol] text-[13.89px] leading-[20px] font-normal">
          {desc}
        </p>

        <div className="flex justify-between items-center mt-1 w-full">
          {/* <div className="flex items-center gap-1">
            <RupeeIcon />
            <p className="text-[#444] text-[14px] leading-[20px] font-normal">
              {price}
            </p>
          </div> */}

          <div className="flex items-center gap-1">
            <ClockIcon />
            <p className="text-[#444] text-[14px] leading-[20px] font-normal">
              {`${noOf} working days`}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-3 w-full">
          <button onClick={()=>setIsOpen(!isOpen)}  className="flex h-9 flex-1 px-[13px] py-[1px] justify-center items-center gap-2
              rounded-md border border-[#EFCD78] bg-white hover:bg-[#f0d693] hover:text-white cursor-pointer">
            <EyeIcon />
            <p className="text-[#444] text-center text-[14px] leading-[20px] font-normal">
              View Details
            </p>
          </button>

          {/* <button className="flex h-9 w-9 justify-center items-center rounded-md border border-[#EFCD78] bg-white">
            <DownloadSvg />
          </button> */}
        </div>
      </div>
    </div>
      <ProductModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        image={image}
        name={name}
        desc={desc}
        price={price}
        noOf={noOf}
        data={data}

      />

    </>

    
  );
};

export default ProductsCardListWrap;
