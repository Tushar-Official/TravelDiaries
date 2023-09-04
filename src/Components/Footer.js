import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">Travel Diaries</p>
        <p className="text-sm mt-2">Your source of inspiration for travel adventures</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            About Us
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            Contact Us
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            Terms of Service
          </a>
        </div>
        <p className="text-xs mt-6">&copy; {new Date().getFullYear()} Travel Diaries. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
