import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CircleCard from '../components/CircleCard';
import Footer from '../components/Footer';
import circle1 from '../assets/circle1.png';
import circle2 from '../assets/circle2.png';
import circle3 from '../assets/circle3.png';
import circle4 from '../assets/circle4.png';
import circle5 from '../assets/circle5.png';
import circle6 from '../assets/circle6.png';
import circle7 from '../assets/circle7.png';
import circle8 from '../assets/circle8.png';
import circle9 from '../assets/circle9.png';

const CirclesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      <main className="w-full">
        <div className="container mx-auto px-6 py-16">
          <h2 className="text-4xl font-semibold text-center mb-16">
            Stop seeking career advice from Google, TikTok, Quora, & Reddit Searches
          </h2>
        </div>
        
        {/* First row of circles */}
        <div className="relative py-1 mb-32">
          <div className="absolute inset-0 w-full bg-[#050A30] h-[221px] top-[70px]"></div>
          <div className="absolute left-0 top-[70px] h-[221px] flex items-center ml-10">
            <div className="bg-yellow-400 px-6 py-2 rounded-md">
              <span className="font-bold text-black">JOIN</span>
            </div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  justify-items-end">
              <CircleCard 
                color="lightBlue" 
                title="FINANCE" 
                imageSrc={circle1} 
              />
              <CircleCard 
                color="blue" 
                title="EDUCATION" 
                imageSrc={circle2}
              />
              <CircleCard 
                color="lightBlue" 
                title="INNOVATION" 
                imageSrc={circle3}
              />
              
            </div>
          </div>
        </div>
        
        {/* Second row of circles */}
        <div className="relative mb-32">
          <div className="absolute inset-0 w-full bg-[#050A30] h-[221px] top-[70px]"></div>
          <div className="absolute right-0 top-[70px] h-[221px] flex items-center mr-10">
            <div className="bg-yellow-400 px-6 py-2 rounded-md">
              <span className="font-bold text-black">JOIN</span>
            </div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  justify-items-start">
              <CircleCard 
                color="lightBlue" 
                title="STARTUP" 
                imageSrc={circle4} 
              />
              <CircleCard 
                color="blue" 
                title="UNIVERSITY ADMISSION" 
                imageSrc={circle5} 
              />
              <CircleCard 
                color="lightBlue" 
                title="DESIGN & CREATIVE" 
                imageSrc={circle6} 
              />
            </div>
          </div>
        </div>
        
        {/* Third row of circles */}
        <div className="relative mb-32">
          <div className="absolute inset-0 w-full bg-[#050A30] h-[221px] top-[70px]"></div>
          <div className="absolute left-0 top-[70px] h-[221px] flex items-center ml-10">
            <div className="bg-yellow-400 px-6 py-2 rounded-md">
              <span className="font-bold text-black">JOIN</span>
            </div>
          </div>
         
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  justify-items-end">
              <CircleCard 
                color="blue" 
                title="BITCOIN & WEB 3" 
                imageSrc={circle7} 
              />
              <CircleCard 
                color="lightBlue" 
                title="TECH" 
                imageSrc={circle8} 
              />
              <CircleCard 
                color="blue" 
                title="CREATORS" 
                imageSrc={circle9} 
              />
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold mb-8">
              Don't see a circle for you?...we can make it for you.
            </h2>
            <button className="bg-[#2D488F] text-white text-xl font-bold px-8 py-4 rounded-md">
              Propose a new circle
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CirclesPage;