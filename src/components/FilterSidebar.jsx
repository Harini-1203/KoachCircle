import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
const FilterSidebar = () => {
  const [availableASAP, setAvailableASAP] = useState(false);
  const [openFilters, setOpenFilters] = useState({});

  const toggleFilter = (filter) => {
    setOpenFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  return (
    <div className="w-full max-w-[383px] bg-[#050A30] text-white min-h-screen p-6 mt-16 ">
      <div className="mb-8 ml-4">
        <h3 className="text-lg font-semibold mb-2">Availability</h3>
        <p className="text-base mb-4">Select date</p>
        
        <div className="flex gap-4 mb-6">
          <button className="bg-white text-[#2F74DB] font-bold px-4 py-2 rounded-md text-sm w-[130px]">
            From
          </button>
          <button className="bg-white text-[#2F74DB] font-bold px-4 py-2 rounded-md text-sm w-[130px]">
            To
          </button>
        </div>
      </div>
      
      <div className=" flex justify-between items-center ml-4">
        <h3 className="text-xl font-semibold">Sort by</h3>
        <span>Show all</span>
      </div>
      <div className="border-t border-[#D7DDED] my-2 ml-4"></div>
      
      <div className="mb-6 flex items-center justify-between ml-4 ">
        <h3 className="text-lg font-semibold mt-4">Available ASAP</h3>
        <div 
          className={`w-12 h-6 rounded-full p-1 cursor-pointer mt-4 ${availableASAP ? 'bg-[#2D488E]' : 'bg-gray-300'}`}
          onClick={() => setAvailableASAP(!availableASAP)}
        >
          <div 
            className={`bg-black w-4 h-4 rounded-full transform transition-transform ${availableASAP ? 'translate-x-6' : 'translate-x-0'}`} 
          />
        </div>
      </div>
      
      {["Hourly charges", "Ratings", "Years of experience", "Service category", "Industry", "Location", "Language", "Skill-set"].map((filter, index) => (
        <div key={index} className="mb-6 ml-4">
          <div className="flex justify-between items-center mb-2 cursor-pointer" onClick={() => toggleFilter(filter)}>
            <h3 className="text-lg font-semibold">{filter}</h3>
            <span className="text-white text-xl">{openFilters[filter] ? <ChevronDown /> : <ChevronRight />}</span>
          </div>
          <div className="border-t border-[#D7DDED] my-2"></div>
        </div>
      ))}
      
      <button className=" ml-4 w-[300px] bg-[#F5E649] text-black font-bold py-3 rounded-md mt-4">
        Show results
      </button>
    </div>
  );
};

export default FilterSidebar;