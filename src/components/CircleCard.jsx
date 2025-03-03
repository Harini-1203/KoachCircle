import React from 'react';

const CircleCard = ({ color, title, imageSrc, peopleCount = "150+ People" }) => {
  const bgColor = {
    blue: 'bg-[#2E488F]',
    lightBlue: 'bg-[#7DC8E3]',
    yellow: 'bg-[#F5E649]'
  }[color] || 'bg-[#7DC8E3]';

  const textColor = color === 'yellow' ? 'text-[#050A30]' : 'text-white';

  return (
    <div className={`relative w-full max-w-[326px] h-[443px] ${bgColor} rounded-[30px] shadow-[15px_22px_4px_rgba(0,0,0,0.25)]`}>
      {peopleCount && (
        <div className="absolute top-3 right-3 bg-white rounded-md px-3 py-1 text-sm">
          {peopleCount}
        </div>
      )}
      
      <div className="flex flex-col items-center justify-center h-full">
        <img src={imageSrc} alt={title} className="w-[250px] h-[250px] object-contain mb-6" />
        
        <div className="bg-white rounded-md px-4 py-2 text-center">
          <h3 className="font-bold text-xl text-[#050A30]">{title}</h3>
        </div>
        
       
      </div>
    </div>
  );
};

export default CircleCard;