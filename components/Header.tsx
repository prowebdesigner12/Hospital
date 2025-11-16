import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Main Navigation */}
      <nav className="bg-white">
        <div className="container mx-auto px-4 flex justify-between items-center py-3">
          <a href="#home" className="flex items-center">
            <img src="https://www.maxhealthcare.in/static/images/logo.png" alt="Max Healthcare Logo" className="h-10 sm:h-12"/>
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-semibold transition duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
             <div className="relative hidden sm:block">
              <input type="text" placeholder="Search..." className="border rounded-full py-1.5 px-4 text-sm w-48" />
              <i className="fas fa-search absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div>
            <a
              href="#appointment"
              className="bg-blue-600 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300 text-sm hidden sm:block"
            >
              Book an Appointment
            </a>
            <button
              className="lg:hidden text-gray-700 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-semibold text-center py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
             <a
              href="#appointment"
              className="bg-blue-600 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300 text-sm text-center"
            >
              Book an Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;