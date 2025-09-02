import React, { useState } from "react";
import { Search } from "lucide-react"; 

const EmpLabPolicyFilter = () => {
  
//   const filters = [
//     { name: "All Sections", count: 8 },
//     { name: "Product Policy", count: 3 },
//     { name: "Payment Policy", count: 2 },
//     { name: "Warranty & Remake", count: 1 },
//     { name: "Training Manual ", count: 2 },
//   ];

//   const [activeFilter, setActiveFilter] = useState("All Sections");

  return (
    <div className="bg-[#F3F3F3] p-5 rounded-xl shadow-sm  ">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search policy or protocol..."
          className="w-full border border-[#EFCD78] rounded-md pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#EFCD78]"
        />
      </div>

    
    </div>
  );
};

export default EmpLabPolicyFilter;
