import React, { useState,useEffect } from 'react';
import axios from 'axios';
import CircleCard from './CircleCard';
import { IoMdSearch } from "react-icons/io";


const categories = [
  'All', 'Finance', 'Education', 'Innovation', 'Startup', 'University Admission',
  'Design & Creative', 'Tech', 'Creators', 'Bitcoin & Web 3', 'Marketing'
];

const trendingFilters = ['Most Active', 'Recently Added', 'Hot Trending'];

const CircleDashboard = () => {

  const [circles, setCircles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/circles')
      .then(res => setCircles(res.data))
      .catch(err => console.error(err));
  }, []);


  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTrending, setActiveTrending] = useState('');

  const filteredCards = circles.filter(card => {
    const matchCategory = activeCategory === 'All' || card.category === activeCategory;
    const matchSearch = card.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchTrending = !activeTrending || card.trending === activeTrending;
    return  matchCategory && matchSearch && matchTrending;
  });

  return (
    <div className="max-w-screen  py-6">
      {/* Search Bar */}
      <div className="flex justify-center mx-10 mb-4">
        <div className='p-2 w-full flex  items-center bg-white max-w-md rounded-full border border-gray-300'>
            <IoMdSearch className='text-3xl text-gray-500 mx-2' />
            <input
            type="text"
            placeholder="Search"
            className="w-full text-md text-gray-500 focus:outline-none focus:ring-0 rounded-full "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
      </div>

      {/* Trending Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {trendingFilters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveTrending(filter === activeTrending ? '' : filter)}
            className={`border px-3 py-1 rounded-full text-md text-[#001F54] font-bold shadow-sm ${
              activeTrending === filter ? 'bg-blue-900 text-white' : 'bg-white hover:bg-blue-100'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1 text-[#001F54]  rounded-full text-sm font-bold border shadow-sm ${
              activeCategory === cat ? 'bg-blue-900 text-white' : 'bg-white hover:bg-blue-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center lg:px-20 lg:gap-20 px-10 gap-10  ">
        {filteredCards.map(card => (
          <CircleCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default CircleDashboard;