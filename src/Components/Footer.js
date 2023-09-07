import React from 'react';
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto flex flex-col justify-center items-center text-center">
        <p className="text-lg font-semibold">Travel Diaries</p>
        <p className="text-sm mt-2">Your source of inspiration for travel adventures</p>
        <div className="flex justify-center mt-4 space-x-4">
        <Link to="/"  className="text-gray-400 hover:text-white transition duration-300">
            About Us
          </Link>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            Contact Us
          </a>
          <Link to="/privacypolicy" className="text-gray-400 hover:text-white transition duration-300">
            Privacy Policy
          </Link>
          <Link to="/termsofservice" className="text-gray-400 hover:text-white transition duration-300">
            Terms of Service
          </Link>
        </div>
        <p className="text-xs mt-6">&copy; {new Date().getFullYear()} Travel Diaries. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;