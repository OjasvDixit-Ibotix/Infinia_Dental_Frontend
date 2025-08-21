// src/components/EmpdirectoryCardWrap.js

import React from 'react';

const EmpdirectoryCardWrap = ({ employee, hasChildren, isOpen, onClick }) => {
  return (
    <div 
      className="flex w-[320px] max-w-full p-[1px] flex-col items-start rounded-md border border-[#EFCD78] bg-white shadow-sm cursor-pointer hover:shadow-md transition-shadow"
      onClick={onClick}
    >
      <div className="flex p-4 flex-col items-start gap-4 w-full">
        <div className="flex items-center gap-3 w-full">
          {/* Avatar */}
          <div className="w-12 h-12 bg-[#EFCD78] text-[#444444] rounded-full flex items-center justify-center font-semibold">
            {employee.initials || '??'}
          </div>
          
          {/* Name and Role */}
          <div className="flex flex-col items-start flex-1">
            <p className="text-[#444] font-bold text-base">
              {employee.name}
            </p>
            <p className="text-gray-500 text-sm">
              {employee.role}
            </p>
          </div>
          
          {/* Expander Icon */}
          {hasChildren && (
            <div className="text-2xl font-light text-gray-400">
              {isOpen ? '−' : '+'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmpdirectoryCardWrap;