import React from 'react';
import { FaRegHeart } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


const CircleCard = ({ card }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden  border border-4 border-[#2D488F]">
      <img src={`http://localhost:5000/uploads/${card.bannerImageUrl}`} alt={card.title} className="w-full h-[250px] object-cover" />
      <div className="p-4">
        <p className="text-sm bg-[#D7DDED] text-[#2D488F] size-fit p-1 rounded-lg font-bold mb-2">{card.category}</p>
        <h2 className="font-bold text-[#2D488F] text-md mb-2">{card.title}</h2>
        <p className='mb-4 text-xs' >{card.description}</p>
        <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
          <p>{card.membersCount} members</p>
          <p className="flex items-center gap-1"><FaRegHeart className="text-blue-900" /> {card.likes}</p>
        </div>
        <button className="w-full py-2 bg-blue-900 text-white rounded-md"
          onClick={() => navigate(`/circle/${card._id}`)}
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default CircleCard;