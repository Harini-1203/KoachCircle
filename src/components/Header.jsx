import React from 'react';
import { MessageCircle, Bell, Moon, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Koach" className="h-9 w-auto" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex mr-40 pr-40 space-x-24 text-xl">
            <a href="/about" className="text-[#2D488F] hover:text-blue-700">About</a>
            <a href="#" className="text-[#2D488F] hover:text-blue-700">Connect</a>
            <a href="#" className="text-[#2D488F] hover:text-blue-700">Resources</a>
            <a href="/circle" className="text-[#2D488F] hover:text-blue-700">Circles</a>
          </div>

          {/* Icons & Profile Section */}
          <div className="flex items-center space-x-4">
            <Moon className="w-6 h-6 text-[#0047AB]" />
            
            {/* Chat Icon */}
            <div className="relative bg-[#D7DDED] rounded-full p-2">
              <MessageCircle className="w-6 h-6 text-[#0047AB]" />
            </div>

            {/* Notification Icon */}
            <div className="relative bg-[#D7DDED] rounded-full p-2">
              <Bell className="w-6 h-6 text-[#0047AB]" />
            </div>

            {/* Profile Section */}
            <div className="flex items-center space-x-1">
              <div className="w-10 h-10 rounded-full bg-[#0047AB] p-0.5">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                    alt="Profile" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>

              {/* Dropdown Arrow */}
              <ChevronDown className="w-5 h-5 text-[#0047AB]" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
