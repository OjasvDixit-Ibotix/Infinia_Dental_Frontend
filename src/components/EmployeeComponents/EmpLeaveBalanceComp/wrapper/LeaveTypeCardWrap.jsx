import React from 'react';
import BlackIconWrapper from '../../../BlackIconWrapper';

const LeaveTypeCardWrap = ({ logo, typeofLeave, available, used, usage, total }) => {
    return (
        // --- RESPONSIVE CHANGE ---
        // Removed fixed width `w-[206px]` to allow the card to be sized by its grid parent.
        <div className="flex flex-col justify-between self-stretch h-[276px] bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center">
                <BlackIconWrapper logo={logo} />
                <div className="flex items-center bg-yellow-100 px-[11px] py-[3px] rounded-full border border-solid border-[#efcd78]">
                    <span className="font-normal text-xs text-yellow-700">2 Pending</span>
                </div>
            </div>

            <div>
                <span className="font-normal text-base text-[#444444]">
                    {typeofLeave === 'Compensatory Off' ? typeofLeave : `${typeofLeave} Leave`}
                </span>
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center self-stretch">
                    <span className="font-normal text-sm text-gray-600">Available</span>
                    <span className="font-normal text-lg text-[#444444]">{available}</span>
                </div>
                <div className="flex justify-between items-center self-stretch">
                    <span className="font-normal text-[13.5625px] leading-[20px] text-gray-600">Total</span>
                    <span className="font-normal text-sm text-gray-500">{total}</span>
                </div>
                <div className="flex justify-between items-center self-stretch">
                    <span className="font-normal text-sm text-gray-600">Used</span>
                    <span className="font-normal text-sm text-gray-500">{used}</span>
                </div>

                <div className="flex flex-col gap-1 self-stretch">
                    <div className="flex justify-between items-center self-stretch">
                        <span className="font-normal text-xs text-gray-500">Usage</span>
                        <span className="font-normal text-xs text-gray-500">{usage}</span>
                    </div>
                    <div className="self-stretch h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-[#efcd78] rounded-full" style={{ width: `${usage}` }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeaveTypeCardWrap;