import React, { useState } from 'react';
import { ImplantData } from '../Data/ImplantData';

const PriceList = ({ items }) => (
  <ul className="space-y-2 text-gray-800 border-l-2 border-gray-200 pl-4 ml-1">
    {items.map((item, index) => (
      <li key={index} className="flex justify-between items-center text-sm gap-4">
        <span className="flex-1">{item.name}</span>
        <span className="font-semibold text-gray-900">${item.price}</span>
      </li>
    ))}
  </ul>
);

const CategoryDropdown = ({ category, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
        
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-black bg-[#EFCD7880] p-3 rounded-md hover:bg-[#EFCD78] transition-colors duration-200"
      >
        <span>{category}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="p-4 mt-[-8px] border rounded-b-md bg-white">
          {Array.isArray(data) ? (
            <PriceList items={data} />
          ) : (
            <div className="space-y-5">
              {Object.entries(data).map(([brand, prices]) => (
                <div key={brand}>
                  <h4 className="text-md font-bold text-gray-700 mb-2">{brand}</h4>
                  <PriceList items={prices} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const ProductModal = ({ isOpen, onClose, name }) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4"
    >
          <div onClick={(e) => e.stopPropagation()}
              className="relative w-full pb-6 max-w-3xl bg-white rounded-lg shadow-2xl flex flex-col">
              <div className="flex justify-between items-center p-4 border-b">
                  <div className="flex flex-1 justify-center items-center gap-2">
                      <div className="w-[70px] h-[2px] bg-black"></div>
                      <span className="font-normal text-[40px] text-black shrink-0">Implant</span>
                      <div className="w-[70px] h-[2px] bg-black"></div>
                  </div>
                  <button onClick={onClose} className="text-3xl text-gray-400 hover:text-gray-700">&times;</button>
              </div>
        
        

        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {Object.entries(ImplantData).map(([category, data]) => (
            <CategoryDropdown key={category} category={category} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;