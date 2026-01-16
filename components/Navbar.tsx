'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, Lock, Calendar } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-navy text-white text-sm py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p className="hidden sm:block text-gray-300 text-xs">
            A Registered Investment Advisory — Serving Clients Nationwide
          </p>
          <div className="flex items-center space-x-6 ml-auto">
            <a href="tel:5082249646" className="flex items-center hover:text-gold transition-colors">
              <Phone className="w-3.5 h-3.5 mr-2" />
              (508) 224-9646
            </a>
            <Link href="/client-login" className="flex items-center hover:text-gold transition-colors">
              <Lock className="w-3.5 h-3.5 mr-2" />
              Client Login
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-navy group-hover:text-gold transition-colors">
                TGA Capital
              </span>
              <span className="text-xs text-gray-500 tracking-widest uppercase">Management</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-navy font-medium transition-colors relative group py-2">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-navy font-medium transition-colors relative group py-2">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/our-managed-accounts" className="text-gray-600 hover:text-navy font-medium transition-colors relative group py-2">
              Managed Accounts
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/our-research" className="text-gray-600 hover:text-navy font-medium transition-colors relative group py-2">
              Research
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/resources" className="text-gray-600 hover:text-navy font-medium transition-colors relative group py-2">
              Resources
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-navy font-medium transition-colors relative group py-2">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
            </Link>
            <a 
              href="https://calendly.com/mgreen-5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-navy px-6 py-3 rounded font-bold transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Schedule a Call
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-navy hover:text-gold focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="px-4 py-4 space-y-1">
          <Link 
            href="/" 
            className="block px-4 py-3 rounded-lg text-gray-700 hover:text-navy hover:bg-gray-50 font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="block px-4 py-3 rounded-lg text-gray-700 hover:text-navy hover:bg-gray-50 font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/our-managed-accounts" 
            className="block px-4 py-3 rounded-lg text-gray-700 hover:text-navy hover:bg-gray-50 font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Managed Accounts
          </Link>
          <Link 
            href="/our-research" 
            className="block px-4 py-3 rounded-lg text-gray-700 hover:text-navy hover:bg-gray-50 font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Research
          </Link>
          <Link 
            href="/resources" 
            className="block px-4 py-3 rounded-lg text-gray-700 hover:text-navy hover:bg-gray-50 font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Resources
          </Link>
          <Link 
            href="/contact" 
            className="block px-4 py-3 rounded-lg text-gray-700 hover:text-navy hover:bg-gray-50 font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <a 
            href="https://calendly.com/mgreen-5" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block px-4 py-3 mt-4 bg-gold text-navy text-center font-bold rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            Schedule a Call
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
