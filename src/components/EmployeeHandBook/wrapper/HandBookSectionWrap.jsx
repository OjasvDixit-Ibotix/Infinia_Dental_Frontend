import React, { useState } from "react";

const HandBookSectionWrap = ({ title, category, updatedOn, content, color }) => {

  const [isOpen, setIsOpen] = useState(false);

  const renderContent = (data) => {
    if (!data) return null;

    if (typeof data === "string") {
      return <p className="mb-2">{data}</p>;
    }

    if (Array.isArray(data)) {
      return (
        <ul className="list-disc pl-5 space-y-1">
          {data.map((item, idx) => (
            <li key={idx}>{renderContent(item)}</li>
          ))}
        </ul>
      );
    }

    if (typeof data === "object") {
      return (
        <div className="space-y-2">
          {Object.entries(data).map(([key, value], idx) => (
            <div key={idx}>
              {/* Key as subheading */}
              <h4 className="font-semibold text-gray-800 capitalize">
                {key.replace(/_/g, " ")}
              </h4>
              <div className="pl-4">{renderContent(value)}</div>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="w-full flex flex-col rounded-md border border-gray-200 bg-white p-4 shadow-sm">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-col">
          <h3 className="text-[#020817] text-[16px] font-medium">{title}</h3>

          <div className="flex items-center gap-3 mt-1">
            {category && (
              <span className="flex items-center px-3 py-[2px] rounded-full  text-[12px] tracking-[-0.6px]"
               style={{
                backgroundColor: color.bg,
                color: color.text
              }}
              >
                {category}
              </span>
            )}
            {updatedOn && (
              <div className="flex items-center text-gray-500 text-[12px] tracking-[-0.6px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mr-1 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Updated: {updatedOn}
              </div>
            )}
          </div>
        </div>

        <button className="text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="mt-3 text-sm text-gray-700 leading-relaxed">
          {renderContent(content)}
        </div>
      )}
    </div>
  );
};

export default HandBookSectionWrap;
