import React, { useState } from 'react';
import Searchicon from '../../assets/svgs/WelcomePage/Searchicon';

const HandbookFilter = ({ onSearch, onFilterChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All Sections');

  const filters = [
    { name: 'All Sections', count: 8 },
    { name: 'Policies', count: 3 },
    { name: 'Benefits', count: 2 },
    { name: 'Code of Conduct', count: 1 },
    { name: 'Safety', count: 2 },
  ];

  const handleFilterClick = (name) => {
    setActiveFilter(name);
    if (onFilterChange) onFilterChange(name);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (onSearch) onSearch(value);
  };

  return (
    <div
      className=" p-6 rounded-xl shadow-md max-w-4xl mx-auto"
      style={{ fontFamily: '"Segoe UI Symbol", sans-serif' }}
    >
      <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#9CA3AF" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.9995 14.0005L11.1328 11.1338" stroke="#9CA3AF" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        <input
          type="text"
          placeholder="Search handbook topics..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full outline-none bg-transparent text-sm "
        />
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-700 mb-2">Quick Filters:</p>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter, index) => {
            const isActive = activeFilter === filter.name;
            return (
              <button
                key={index}
                onClick={() => handleFilterClick(filter.name)}
                className={`px-3 py-1 rounded-full text-sm transition ${
                  isActive
                    ? 'bg-[#EFCD78] text-gray-800 font-medium'
                    : 'bg-[#EFCD7833] text-gray-700'
                }`}
              >
                {filter.name} ({filter.count})
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HandbookFilter;
