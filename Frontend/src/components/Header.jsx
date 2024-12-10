import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';  
import { FaBars, FaTimes, FaMoon, FaSun, FaUser } from 'react-icons/fa'; // Import icons
// import { useAuth } from '../context/AuthContext.jsx';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // State for theme mode
  const navRef = useRef(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  // const { user, logout } = useAuth();
  const navigate = useNavigate();
  const profileMenuRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleNav = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout();
    setShowProfileMenu(false);
    navigate('/login');
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav 
      className={`bg-${isDarkMode ? 'gray-900' : 'white'} shadow-md fixed top-0 left-0 w-full z-50 transition-colors duration-300`} 
      ref={navRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 space-x-6"> 
          <div className={`flex items-center gap-4 flex-shrink-0 ${isMobile ? 'mx-auto' : ''}`}>
            <img className="h-14 w-auto" src="/images/ba28c46c-7d9d-41d9-babe-6ad8edf0862b.jpg" alt="Logo" /> 
            <h1 className={`text-${isDarkMode ? 'white' : 'black'} font-bold text-2xl`}>OTT SAMADHAN</h1>
          </div>

          {!isMobile && (
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6"> 
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`text-${isDarkMode ? 'white' : 'gray-600'} hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition duration-300`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center space-x-4"> 
            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              {isDarkMode ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
            </button>

            {!isMobile && (
              <>
                  
                  <>
                    <Link to="/login">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition duration-300">
                        Signin
                      </button>
                    </Link>
                    <Link to="/signup">
                      <button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition duration-300">
                        Signup
                      </button>
                    </Link>
                  </>
                
              </>
            )}

            {isMobile && (
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={toggleNav}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? <FaTimes className="block h-6 w-6" /> : <FaBars className="block h-6 w-6" />}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {isMobile && (
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-${isDarkMode ? 'white' : 'gray-600'} hover:bg-gray-200 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition duration-300`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex flex-col items-center px-5 space-y-4">
              <Link to="/signin">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition duration-300 w-full">
                  Signin
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition duration-300 w-full">
                  Signup
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
