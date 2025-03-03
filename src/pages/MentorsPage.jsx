import React from 'react';
import Header from '../components/Header';
import FilterSidebar from '../components/FilterSidebar';
import MentorCard from '../components/MentorCard';
import { Star } from 'lucide-react';

const MentorsPage = () => {
  const mentors = [
    {
      id: '🇺🇸',
      name: 'Alex Bricks',
      title: 'Backend developer',
      company: 'Apple',
      imageSrc: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      rating: 4.9,
      experience: '2 years',
      country: '🇺🇸',
      isAvailableASAP: true,
      isTopContributor: true
    },
    {
      id: '🇬🇧',
      name: 'Danny Blue',
      title: 'Frontend developer',
      company: 'Samsung',
      imageSrc: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      rating: 4.8,
      experience: '2 years',
      country: '🇬🇧',
      isAvailableASAP: true
    },
    {
      id: '🇨🇦',
      name: 'Sarah White',
      title: 'Data Scientist',
      company: 'Google',
      imageSrc: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      rating: 4.7,
      experience: '3 years',
      country: '🇨🇦',
      isAvailableASAP: false
    },
    {
      id: '🇦🇺',
      name: 'Michael Green',
      title: 'DevOps Engineer',
      company: 'Amazon',
      imageSrc: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      rating: 4.6,
      experience: '4 years',
      country: '🇦🇺',
      isAvailableASAP: true,
      isTopContributor: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#F2F3F5] flex flex-col">
      <Header />
      
      <div className="flex flex-1">
        <FilterSidebar />
        
        <div className="flex-1 p-8 mt-20">
          <h1 className="text-6xl font-bold text-[#2D488F] mb-4">Mentors</h1>
          
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              <span className="text-2xl font-normal text-[#2D488E]">4.8</span>
              <Star size={24} fill="#ECC026" stroke="none" className="ml-2" />
            </div>
            <span className="text-sm font-bold text-[#2D488E] ml-4">1245 results</span>
          </div>
          
          <div className="flex gap-4 mb-8">
            <button className="border border-[#2D488E] text-[#2D488E] font-bold px-6 py-3 rounded-2xl">
              Filter
            </button>
            <button className="border border-[#2D488E] text-[#2D488E] font-bold px-6 py-3 rounded-2xl">
              Rating
            </button>
            <button className="border border-[#2D488E] text-[#2D488E] font-bold px-6 py-3 rounded-2xl">
              Industry Experience
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map(mentor => (
              <MentorCard 
                key={mentor.id}
                {...mentor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorsPage;