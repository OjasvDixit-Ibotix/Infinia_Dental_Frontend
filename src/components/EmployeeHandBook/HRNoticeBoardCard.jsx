import React from "react";

const notices = [
  { title: "New Safety Protocol Updates", date: "Jan 5" },
  { title: "Holiday Schedule Updated", date: "Jan 3" },
];

const HRNoticeboard = () => {
  return (
    <div className="flex flex-col p-6 gap-4 rounded-2xl bg-[rgba(255,255,255,0.8)] shadow-[0_4px_12px_rgba(0,0,0,0.10)] backdrop-blur-[2px] ">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 flex items-center justify-center bg-[#2A2A2A] rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-[#EFCD78]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C8.67 6.165 8 7.388 8 8.75V14l-1.405 1.405A2.032 2.032 0 015 17h5m0 0v1a3 3 0 006 0v-1m-6 0h6"
            />
          </svg>
        </div>
        <h2 className="text-[#444] text-lg font-medium">HR Noticeboard</h2>
      </div>

      <div className="flex flex-col gap-3">
        {notices.map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center bg-[#F9F4E9] rounded-md p-3"
          >
            <div className="flex flex-col">
              <p className="text-sm text-[#444] font-medium">{item.title}</p>
              <div className="flex items-center gap-1 mt-1 text-xs text-[#444]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {item.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HRNoticeboard;
