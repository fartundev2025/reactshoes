import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">© 2025 FilsanShoes. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-orange-400 transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-teal-400 transition-colors duration-300">Terms of Service</a>
          <a href="#" className="hover:text-red-400 transition-colors duration-300">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;