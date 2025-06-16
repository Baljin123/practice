import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import "../../css/loginnavbar.css"

const Login_navbar = () => {
     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

 return(
    <>
  <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 link_div">
            <a href="/" className="text-2xl font-bold text-blue-600">BrandName</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 link_div">
            {/* <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">About</a> */}
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Login</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Signup</a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md link_div">
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Login</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Signup</a>
          {/* <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Services</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</a> */}
        </div>
      )}
    </nav>
    </>
 )
}

export default Login_navbar
