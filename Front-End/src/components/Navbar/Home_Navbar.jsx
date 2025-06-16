import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import "../../css/navbar.css";


export default function Home_Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-blue-600">BrandName</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">About</a>

            {/* Dropdown Parent */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center text-gray-700 hover:text-blue-600 transition focus:outline-none"
              >
                Services <ChevronDown size={18} className="ml-1" />
              </button>
              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute top-8 left-0 mt-2 w-40 bg-white shadow-lg rounded-md z-10">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile Edit</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About Us</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact Us</a>
                   <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
                </div>
              )}
            </div>

            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-700 focus:outline-none">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About</a>

          {/* Dropdown-like appearance for mobile */}
          <details className="group">
            <summary className="px-4 py-2 cursor-pointer text-gray-700 hover:bg-gray-100 flex justify-between items-center">
              Services
              <ChevronDown size={18} className="ml-1 group-open:rotate-180 transition-transform" />
            </summary>
       
            <div className="pl-6 pb-2">
              <a href="#" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">Profile Edit</a>
                <a href="#" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">About Us</a>
              <a href="#" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">Contact Us</a>
              <a href="#" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
            </div>
          </details>

          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</a>
        </div>
      )}
    </nav>
  )
}