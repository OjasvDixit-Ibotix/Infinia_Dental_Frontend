import React from "react";

const updates = [
  { title: "Leave & Attendance Policy", tag: "policies", date: "Dec 20" },
  { title: "Lab Protocols", tag: "safety", date: "Dec 25" },
  { title: "Remote Work Policy", tag: "policies", date: "Jan 1" },
];

const tagColors = {
  policies: "bg-yellow-200 text-yellow-800",
  safety: "bg-orange-200 text-orange-800",
};

const RecentlyUpdated = () => {
  return (
    <div className="flex flex-col p-6 gap-4 rounded-2xl bg-[rgba(255,255,255,0.8)] shadow-[0_4px_12px_rgba(0,0,0,0.10)] backdrop-blur-[2px] w-[280px]">
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
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 className="text-[#444] text-lg font-medium">Recently Updated</h2>
      </div>

      {/* List */}
      <div className="flex flex-col gap-3">
        {updates.map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center bg-[#F9F4E9] rounded-md p-3"
          >
            <div className="flex flex-col">
              <p className="text-sm text-[#444] font-medium">{item.title}</p>
              <div className="flex items-center gap-2 mt-1">
                <span
                  className={`px-2 py-0.5 rounded-full text-xs capitalize ${tagColors[item.tag]}`}
                >
                  {item.tag}
                </span>
                <span className="text-xs text-[#444]">{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyUpdated;
