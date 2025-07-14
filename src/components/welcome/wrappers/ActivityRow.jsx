import React from 'react';

const ActivityRow = ({ icon, title, description, time }) => {
  return (
    <div className="flex items-start gap-3 mb-6">
      <div className="bg-[#F3C85C] rounded p-2 w-8 h-8 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-[16px] font-medium">{title}</p>
        <p className="text-[12px] text-[#6B7280]">{description}</p>
        <p className="text-[12px] text-[#9CA3AF] mt-1">{time}</p>
      </div>
    </div>
  );
};

export default ActivityRow;
