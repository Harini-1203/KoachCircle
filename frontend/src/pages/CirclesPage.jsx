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
import CircleDashboard from '../components/CircleDashboard';

const CirclesPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#ECF0F6]">
      <Header />
      <Hero />
      <CircleDashboard />
      <Footer />
    </div>
  );
};

export default CirclesPage;