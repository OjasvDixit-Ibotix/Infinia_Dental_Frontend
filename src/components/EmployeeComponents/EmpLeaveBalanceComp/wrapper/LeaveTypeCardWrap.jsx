import React from 'react';
import BlackIconWrapper from '../../../BlackIconWrapper';

const LeaveTypeCardWrap = ({ logo, typeofLeave, available, used, total ,status }) => {

    console.log('status',status); 
    const usagePercent = total > 0 ? Math.round((used / total) * 100) : 0;
    return (
        <div className="flex flex-col justify-between self-stretch h-[276px] bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center">
                <BlackIconWrapper logo={logo} />
                 {/* <div className="flex items-center bg-yellow-100 px-[11px] py-[3px] rounded-full border border-solid border-[#efcd78]">
                    <span className="font-normal text-xs text-yellow-700">{status}</span>
                </div>  */}
            </div>

            <div>
                <span className="font-normal text-base text-[#444444]" style={ typeofLeave==='Unpaid' ? {fontSize: '18px'} : {fontSize: '20px'}} >
                    {typeofLeave === 'Compensatory Off' ? typeofLeave : `${typeofLeave} Leave`}
                </span>
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                    {
                        typeofLeave==='Unpaid' ? <></> :<>
                          <span className="text-sm text-gray-600">Available</span>
                          <span className="text-lg text-[#444444]">{available}</span></> 
                    }                  
                </div>
                <div className="flex justify-between items-center">
                      {
                        typeofLeave==='Unpaid' ? <></> :<>
                            <span className="text-sm text-gray-600">Total</span>
                    <span className="text-sm text-gray-500">{total}</span>
                    </>
                    } 
                
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Used</span>
                    <span className="text-sm text-gray-500">{used}</span>
                </div>

                <div className="flex flex-col gap-1">
                        {typeofLeave === "Unpaid" ? (
                            <></>
                        ) : (
                            <>
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-500">Usage</span>
                                <span className="text-xs text-gray-500">
                                {usagePercent > 100 ? "100" : usagePercent}%
                                </span>
                            </div>

                            <div className="h-2 bg-gray-200 rounded-full">
                                <div
                                className="h-2 bg-[#efcd78] rounded-full transition-all duration-500"
                                style={{ width: `${Math.min(usagePercent, 100)}%` }}
                                 />
                            </div>
                            </>
                        )}
                        </div>

            </div>
        </div>
    );
};

export default LeaveTypeCardWrap;
