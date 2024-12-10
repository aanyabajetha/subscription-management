import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 w-full bottom-0 left-0 right-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start">
          {/* Logo and description */}
          <div className="flex flex-col items-start">
            <img src="https://via.placeholder.com/120" alt="Logo" className="mb-4" />
            <p className="text-sm">
              SmartSubs is your go-to solution for managing and tracking subscriptions effortlessly. Stay informed and in control!
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Features</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-400 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-blue-300 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-pink-500 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-blue-600 hover:text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm">
            &copy; 2024 SmartSubs. All rights reserved. | <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
