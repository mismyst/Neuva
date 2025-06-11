'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 text-white w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-gray-800/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-4 relative">
        {/* Logo */}
        <div className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-200">
          <div className="w-8 h-8 bg-gradient-to-br from-white to-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200 animate-pulse">
            <span className="text-black font-bold text-sm">.N</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { name: 'About Us', href: '/About', delay: '0ms' },
            { name: 'Why Us', href: '/WhyUs', delay: '100ms' },
            { name: 'Our Products', href: '/Products', delay: '200ms' },
            { name: 'Our Expertise', href: '/Expertize', delay: '300ms' },
            { name: 'Contacts', href: '/Contact', delay: '400ms' },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-gray-300 hover:text-white transition-all duration-300 group animate-fadeInDown"
              style={{ animationDelay: item.delay }}
            >
              <span className="relative z-10">{item.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-blue-400/20 to-purple-500/20 blur-sm transition-opacity duration-300 rounded"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 animate-pulse">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className="block w-full h-0.5 bg-white transform transition-transform duration-200 hover:rotate-45"></span>
              <span className="block w-full h-0.5 bg-white transition-opacity duration-200 hover:opacity-0"></span>
              <span className="block w-full h-0.5 bg-white transform transition-transform duration-200 hover:-rotate-45"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-blue-400/30 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400/30 rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute bottom-1/2 right-1/4 w-1 h-1 bg-pink-400/30 rounded-full animate-ping animation-delay-2000"></div>
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.6s ease-out forwards;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
