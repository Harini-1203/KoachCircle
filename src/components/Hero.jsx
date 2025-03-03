import React from 'react';
import {  Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative w-full bg-[#050A30] text-white py-16 mt-14">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-2">Join the conversation.</h1>
        <h1 className="text-5xl font-bold mb-6">Stay in the know.</h1>
        
        <p className="text-2xl text-[#F5E649] mb-8 flex items-center justify-center">
          <span className="mr-2">Where proven expertise and potential intersect to unlock peak performance.</span>
        </p>
        
        <div className="relative max-w-lg mx-auto">
          <input 
            type="text" 
            placeholder="Search mentors" 
            className="w-full py-2 px-4 rounded-md border border-[#49515B] text-[#B8BCC2] pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B8BCC2]" size={18} />
        </div>
      </div>
    </div>
  );
};

export default Hero;