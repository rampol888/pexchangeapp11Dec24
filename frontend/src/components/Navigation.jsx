import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import pexioaceLogo from "../assets/go-pexi-logo-with-tagline.png";

export function Navigation() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown when route changes
  useEffect(() => {
    setIsServicesOpen(false);
  }, [location]);

  // Updated services with more detailed grouping
  const services = {
    exchange: [
      {
        title: 'Currency Exchange',
        description: 'Real-time rates and instant exchanges',
        icon: '💱',
        path: '/dashboard/exchange'
      }
    ],
    payments: [
      {
        title: 'Digital Wallet',
        description: 'Secure multi-currency wallet',
        icon: '👝',
        path: '/wallet'
      },
      {
        title: 'Prepaid Cards',
        description: 'Virtual and physical cards',
        icon: '💳',
        path: '/card'
      }
    ],
    features: [
      {
        title: 'Instant Transfers',
        description: 'Quick cross-border payments',
        icon: '⚡',
        path: '/transfers'
      },
      {
        title: 'Security Features',
        description: 'Advanced account protection',
        icon: '🔒',
        path: '/security'
      }
    ]
  };

  // Updated mega dropdown
  const megaMenu = (
    <AnimatePresence>
      {isServicesOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 w-full pt-4 z-50"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
              <div className="p-8">
                <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                  {/* Exchange Services */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                      <span className="text-[#FF6B2B]">
                        <svg 
                          className="w-5 h-5" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                          />
                        </svg>
                      </span>
                      <span>Exchange Services</span>
                    </h3>
                    <div className="space-y-4">
                      <Link 
                        to="/dashboard/exchange"
                        className="group block p-4 rounded-xl hover:bg-gray-50 transition-all duration-200"
                      >
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                              <span className="text-2xl">💱</span>
                            </div>
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900 group-hover:text-[#FF6B2B]">
                              Currency Exchange
                            </p>
                            <p className="text-sm text-gray-500 group-hover:text-gray-600">
                              Convert currencies instantly
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Payment Solutions */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                      <span className="text-[#FF6B2B]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      </span>
                      <span>Payment Solutions</span>
                    </h3>
                    <div className="space-y-4">
                      <Link 
                        to="/wallet"
                        className="group block p-4 rounded-xl hover:bg-gray-50 transition-all duration-200"
                      >
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                              <span className="text-2xl">👝</span>
                            </div>
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900 group-hover:text-[#FF6B2B]">
                              Digital Wallet
                            </p>
                            <p className="text-sm text-gray-500 group-hover:text-gray-600">
                              Secure multi-currency wallet
                            </p>
                          </div>
                        </div>
                      </Link>

                      <Link 
                        to="/card"
                        className="group block p-4 rounded-xl hover:bg-gray-50 transition-all duration-200"
                      >
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                              <span className="text-2xl">💳</span>
                            </div>
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900 group-hover:text-[#FF6B2B]">
                              Prepaid Cards
                            </p>
                            <p className="text-sm text-gray-500 group-hover:text-gray-600">
                              Virtual and physical cards
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Navigation Background - Updated with vibrant blue */}
      <div className="h-[60px] bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img 
                  src={pexioaceLogo} 
                  alt="Pexioace" 
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            {/* Navigation Links - Updated for better contrast */}
            <div className="flex items-center space-x-1">
              <NavLink to="/" exact>
                Home
              </NavLink>

              {/* Services Dropdown Trigger - Updated hover state */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 
                             ${isServicesOpen 
                               ? 'bg-white/20 text-white' 
                               : 'text-white hover:bg-white/10'}`}
                >
                  <span>Services</span>
                  <svg
                    className={`ml-2 w-4 h-4 transition-transform duration-200 
                              ${isServicesOpen ? 'transform rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <NavLink to="/about">
                About
              </NavLink>

              <NavLink to="/contact">
                Contact
              </NavLink>
            </div>

            {/* Auth Buttons - Updated for better contrast */}
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="px-4 py-2 text-white hover:text-white/80 transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-[#FF6B2B] text-white rounded-lg hover:bg-[#e55a1f] 
                         transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Mega Dropdown */}
      {megaMenu}
    </nav>
  );
}

// Update NavLink Component with new hover states for vibrant theme
function NavLink({ to, children, exact }) {
  const location = useLocation();
  const isActive = exact ? location.pathname === to : location.pathname.startsWith(to);

  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-lg transition-colors duration-200
                ${isActive 
                  ? 'bg-white/20 text-white' 
                  : 'text-white hover:bg-white/10'}`}
    >
      {children}
    </Link>
  );
}

// Add these styles for better hover effects
const styles = `
  /* Glowing effect for buttons */
  .nav-button-glow:hover {
    box-shadow: 0 0 20px rgba(255, 107, 43, 0.4);
  }

  /* Smooth hover transitions */
  .nav-link-hover {
    transition: all 0.2s ease-in-out;
  }

  /* Active link indicator */
  .nav-link-active::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #FF6B2B;
    border-radius: 2px;
  }
`;
