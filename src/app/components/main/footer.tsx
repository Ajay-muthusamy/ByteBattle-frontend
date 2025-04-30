import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <h1 className="text-sm">&copy; 2025 ByteBattle. All rights reserved.</h1>
        </div>
        <div className="mt-4 md:mt-0 flex gap-4 text-sm">
          <a href="#" className="hover:text-purple-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-purple-400 transition">Terms</a>
          <a href="#" className="hover:text-purple-400 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
