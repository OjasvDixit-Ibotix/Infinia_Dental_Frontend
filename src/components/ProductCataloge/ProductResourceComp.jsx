import React from 'react';
import DownloadSvg from '../../assets/svgs/WelcomePage/DownloadSvg';
import productPDF from '../../assets/documents/Product-Pictures.pdf';

const ProductResourceComp = () => {
  const handleDownload = () => {
    window.open(productPDF, "_blank"); 
  };

  return (
    <div className="flex flex-col items-start self-stretch p-6 sm:p-[25px] rounded-[16px] border border-[#EFCD78] bg-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.10)]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full">

        <div className="flex flex-col items-start gap-2 w-full sm:w-[70%]">
          <p className="text-[#444] font-[Segoe UI Symbol] text-lg sm:text-[18px] leading-[28px] font-normal">
            Product Resource
          </p>
          <p className="text-[#444] font-[Segoe UI Symbol] text-sm sm:text-[13.89px] leading-[20px] font-normal">
            All prices are internal and subject to periodic updates. For samples or custom pricing, contact our team.
          </p>
        </div>

        <button 
          onClick={handleDownload}
          className="flex h-9 px-3 justify-center items-center gap-2 w-full sm:w-auto rounded-md bg-[#EFCD78]"
        >
          <div className="flex w-[24px] h-[16px] pr-2 flex-col items-start">
            <DownloadSvg />
          </div>
          <p className="text-[#444]  cursor-pointer text-center font-normal text-sm sm:text-[13.78px] leading-[20px] font-[Segoe UI Symbol]">
            Download Full Catalog
          </p>
        </button>
      </div>
    </div>
  );
};

export default ProductResourceComp;
