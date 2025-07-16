import React, { useState } from "react";
import { Search } from "lucide-react"; 

const EmpHandBookFilter = () => {
  const filters = [
    { name: "All Sections", count: 8 },
    { name: "Policies", count: 3 },
    { name: "Benefits", count: 2 },
    { name: "Code of Conduct", count: 1 },
    { name: "Safety", count: 2 },
  ];

  const [activeFilter, setActiveFilter] = useState("All Sections");

  return (
    <div className="bg-[#F3F3F3] p-5 rounded-xl shadow-sm max-w-6xl ">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search handbook topics..."
          className="w-full border border-gray-200 rounded-md pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#EFCD78]"
        />
      </div>

      <div className="mt-4">
        <p className="text-sm text-[#444] mb-2">Quick Filters:</p>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(filter.name)}
              className={`px-3 py-1 text-xs rounded-full border ${
                activeFilter === filter.name
                  ? "bg-[#EFCD78] text-[#444] font-medium"
                  : "bg-[#EFCD7833] text-[#444] border-gray-200"
              }`}
            >
              {filter.name} ({filter.count})
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmpHandBookFilter;
