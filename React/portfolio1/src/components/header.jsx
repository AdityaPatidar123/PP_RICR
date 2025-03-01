import React from 'react';

const Header = () => {
  return (
    <>
    <header className="bg-blue-600 text-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-semibold">
          <span className="text-white">My Portfolio</span>
        </div>
        <nav>
          <ul className="flex space-x-8">
            <li><a href="#home" className="text-white hover:text-blue-200">Home</a></li>
            <li><a href="#about" className="text-white hover:text-blue-200">About</a></li>
            <li><a href="#skills" className="text-white hover:text-blue-200">Skills</a></li>
            <li><a href="#projects" className="text-white hover:text-blue-200">Projects</a></li>
            <li><a href="#contact" className="text-white hover:text-blue-200">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
    </>
  );
};

export default Header;
