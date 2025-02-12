import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-800 text-white py-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">FilsanShoes</div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-orange-400 transition-colors duration-300">Home</a>
          <a href="#about" className="hover:text-teal-400 transition-colors duration-300">About</a>
          <a href="#services" className="hover:text-red-400 transition-colors duration-300">Services</a>
          <a href="#contact" className="hover:text-gray-400 transition-colors duration-300">Contact</a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden md:hidden bg-blue-700 text-white px-6 transition-max-height duration-500 ease-in-out ${
          isOpen ? 'max-h-40 py-4' : 'max-h-0'
        }`}
      >
        <a href="#home" className="block py-2 hover:text-orange-400 transition-colors duration-300">Home</a>
        <a href="#about" className="block py-2 hover:text-teal-400 transition-colors duration-300">About</a>
        <a href="#services" className="block py-2 hover:text-red-400 transition-colors duration-300">Services</a>
        <a href="#contact" className="block py-2 hover:text-gray-400 transition-colors duration-300">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;