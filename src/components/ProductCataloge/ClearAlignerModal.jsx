import React from 'react';
import { ClearAlignerData } from './Data/ClearAlignerData';
// import AlignerIcon from '../../../assets/svgs/WelcomePage/AlignerIcon';

const CheckIcon = () => (
    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

const InfoCard = ({ title, items }) => (
    <div className="flex flex-col  bg-white rounded-2xl border border-[#efcd78] shadow-sm h-full">
        <div className="p-6">
            <h4 className="font-medium text-lg text-[#1d2127] mb-4">{title}</h4>
        </div>
        <div className="flex flex-col gap-3 px-6 pb-6">
            {items.map((item, index) => (
                <div key={index} className="flex gap-2 items-start">
                    <div className="w-4 h-4 mt-1 flex-shrink-0">
                        <CheckIcon />
                    </div>
                    <span className="font-normal text-sm text-[#5e6366] flex-1">{item}</span>
                </div>
            ))}
        </div>
    </div>
);


const ClearAlignerModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { 
    mainHeading, 
    bannerText, 
    tableData, 
    everyBoxIncludes, 
    priceIncluding, 
    extraCharge 
  } = ClearAlignerData;
  
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center  bg-black/30 backdrop-blur-sm p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl flex flex-col max-h-[95vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
            <h2 className="text-2xl font-semibold text-black">{mainHeading}</h2>
            <button onClick={onClose} className="text-3xl text-gray-400 hover:text-gray-700">&times;</button>
        </div>

        <div className="flex-grow">
            {/* Banner */}
            <div className="bg-[#efcd78] p-4 text-center">
                <p className="font-normal text-lg text-black whitespace-pre-line">
                    {bannerText}
                </p>
            </div>

            <div className="p-6 space-y-8">
                {/* Title and Icon */}
                <div className="flex items-center gap-4">
                   
                    <h3 className="text-3xl font-semibold text-black">{mainHeading}</h3>
                </div>

                {/* Pricing Table */}
                <div className="overflow-x-auto">
                    <div className="grid grid-cols-4 min-w-[700px] text-sm">
                        {/* Headers */}
                        <div className="bg-gradient-to-b from-[#363636] to-[#1f1f1f] p-3 text-white font-bold text-center">Treatment Plan</div>
                        <div className="bg-gradient-to-b from-[#363636] to-[#1f1f1f] p-3 text-white font-bold text-center">Pricing</div>
                        <div className="bg-gradient-to-b from-[#363636] to-[#1f1f1f] p-3 text-white font-bold text-center">Total Aligners</div>
                        <div className="bg-gradient-to-b from-[#363636] to-[#1f1f1f] p-3 text-white font-bold text-center">Refinement</div>

                        {/* Rows */}
                        {tableData.map((row, index) => (
                            <React.Fragment key={index}>
                                <div className={`p-3 text-center ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>{row.name}</div>
                                <div className={`p-3 text-center ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>{row.price}</div>
                                <div className={`p-3 text-center ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>{row.aligners}</div>
                                <div className={`p-3 text-center ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>{row.refinement}</div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <InfoCard title="Every Box Include" items={everyBoxIncludes} />
                    <InfoCard title="Price Including" items={priceIncluding} />
                    <InfoCard title="Extra Charge" items={extraCharge} />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ClearAlignerModal;