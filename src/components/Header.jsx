import React, { useState } from 'react';
import logo from '../assets/logo.png';
import Dark from '../assets/icons/Dark';
import Mesg from '../assets/icons/Mesg';
import Bell from '../assets/icons/Bell';
import DropDown from '../assets/icons/DropDown';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-3">
      <div className="flex justify-between items-center px-4 md:px-10">
        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-6">
          <img src={logo} alt="Logo" className="md:h-8 md:w-full w-2/3 h-2/3" />
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-blue-900 hover:underline">About</a>
            <a href="#" className="text-blue-900 hover:underline">Circles</a>
            <a href="#" className="text-blue-900 hover:underline">Resources</a>
            <a href="#" className="text-blue-900 hover:underline">Contact</a>
          </nav>
        </div>

        {/* Right: Icons + Profile */}
        <div className="flex items-center gap-4">
          <button>
            <Dark />
          </button>

          <button className="bg-blue-100 p-2 rounded-full">
            <Mesg />
          </button>

          <div className="relative bg-blue-100 p-2 rounded-full">
            <Bell />
            <span className="absolute top-0 right-0 w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full flex items-center justify-center">2</span>
          </div>

          <div className="flex items-center space-x-1">
            <img src="/path/to/profile.jpg" alt="Profile" className="h-8 w-8 rounded-full border-2 border-blue-900" />
            <DropDown />
          </div>

          {/* Mobile Hamburger */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="h-6 w-6 text-blue-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden mt-2 space-y-2 px-4">
          <a href="#" className="block text-blue-900 hover:underline">About</a>
          <a href="#" className="block text-blue-900 hover:underline">Circles</a>
          <a href="#" className="block text-blue-900 hover:underline">Resources</a>
          <a href="#" className="block text-blue-900 hover:underline">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
