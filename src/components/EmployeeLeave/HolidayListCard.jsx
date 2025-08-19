import React from 'react';

const HolidayListCard = () => {
    const holidays = [
        { name: 'New Year', date: 'Jan 01' },
        { name: 'Republic Day', date: 'Jan 26' },
        { name: 'Holi', date: 'Mar 25' },
        { name: 'Independence Day', date: 'Aug 15' },
        { name: 'Gandhi Jayanti', date: 'Aug 15' },
    ];

    return (
        <div className=" relative rounded-2xl p-6 w-95 h-full text-gray-800 overflow-hidden" style={{
            borderRadius: '20px',
            background: 'rgba(239, 205, 120, 0.80)',
        }}>
            <div className="absolute w-40 h-40 opacity-50 rounded-full top-4 left-20"><svg xmlns="http://www.w3.org/2000/svg" width="148" height="149" viewBox="0 0 148 149" fill="none">
                <ellipse opacity="0.14" cx="74" cy="74.5" rx="74" ry="74.5" fill="white" fill-opacity="0.19" />
            </svg></div>
            <div className="absolute w-32 h-32 opacity-50 rounded-full bottom-8 right-4"><svg xmlns="http://www.w3.org/2000/svg" width="177" height="203" viewBox="0 0 177 203" fill="none">
                <path opacity="0.19" d="M101.721 0.0859375C131.595 0.0859375 158.45 13.0106 177.001 33.5723V169.322C158.45 189.884 131.595 202.81 101.721 202.81C45.7403 202.809 0.359544 157.429 0.359375 101.448C0.359375 45.4677 45.7402 0.0861242 101.721 0.0859375Z" fill="white" fill-opacity="0.7" />
            </svg></div>
            <div className="absolute w-24 h-24  opacity-40 rounded-full top-16 right-10"></div>

            <h2 className="text-lg font-semibold mb-4 relative z-10">Holiday List (2025)</h2>
            <ul className="space-y-2 relative z-10">
                {holidays.map((holiday, index) => (
                    <li key={index} className="flex justify-between">
                        <span>{holiday.name}</span>
                        <span>{holiday.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HolidayListCard;
