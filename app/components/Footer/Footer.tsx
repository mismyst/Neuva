'use client'
import React from 'react';
import { ArrowRight, Mail, MessageCircle, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const handleLetsTalkClick = () => {
    window.location.href = '/Contact';
  };

  return (
    <footer className="relative z-10 w-full bg-black">
      {/* Main Footer Content */}
      <div className="w-full bg-gradient-to-br from-slate-900 via-blue-950 to-gray-900 px-6 py-32 md:py-40">
        <div className="max-w-7xl mx-auto">
          {/* Header Text */}
          <p className="text-gray-300 text-2xl md:text-3xl lg:text-4xl mb-16 md:mb-20 font-light tracking-wide leading-relaxed">
            Got a project in mind?
          </p>
          
          {/* Main CTA */}
          <div 
            className="flex items-center group cursor-pointer mb-20 md:mb-24" 
            onClick={handleLetsTalkClick}
          >
            <h2 className="text-7xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-bold text-white mr-12 group-hover:text-gray-200 transition-all duration-500 tracking-tight leading-none">
              LET'S TALK
            </h2>
            <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center bg-white rounded-full group-hover:bg-gray-200 group-hover:scale-110 transition-all duration-500 shadow-lg">
              <ArrowRight className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 text-black group-hover:translate-x-1 group-hover:scale-110 transition-all duration-500" />
            </div>
          </div>
          
          {/* Divider Line */}
          <div className="w-full h-px bg-gradient-to-r from-white via-gray-400/60 to-transparent mb-16 md:mb-20"></div>
          
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-12 md:space-y-0">
            {/* Brand */}
            <div className="flex items-center space-x-4">
              <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                .Neuva
              </span>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-8">
              <span className="text-gray-300 text-xl md:text-2xl lg:text-2xl font-medium">
                Meet us at
              </span>
              <div className="flex items-center space-x-6">
                {/* Email */}
                <div 
                  className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-white rounded-xl flex items-center justify-center hover:bg-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer group shadow-lg"
                  onClick={() => window.location.href = 'mailto:neuvatechno@gmail.com'}
                >
                  <Mail className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-black group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                {/* Instagram */}
                <div 
                  className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-white rounded-xl flex items-center justify-center hover:bg-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer group shadow-lg"
                  onClick={() => window.open('https://www.instagram.com/neuva.forge?igsh=eGdiN3pvbXRuaGRm', '_blank')}
                >
                  <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 border-2 border-black rounded-lg relative group-hover:scale-110 transition-transform duration-300">
                    <div className="w-2 h-2 bg-black rounded-full absolute top-0.5 right-0.5"></div>
                    <div className="w-2.5 h-2.5 border border-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links & Info Section */}
      <div className="bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
            
            {/* Company Info */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6">About Neuva</h3>
              <p className="text-gray-300 leading-relaxed text-xl">
                We're a creative tech studio crafting digital experiences that blend innovation with artistry. 
                Every project is a journey toward perfection.
              </p>
              <div className="flex items-center space-x-4 text-gray-400">
                <MapPin className="w-6 h-6" />
                <span className="text-lg">Chennai, Tamil Nadu, India</span>
              </div>
            </div>

            
            {/* Quick Links */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="/" className="text-gray-300 hover:text-white transition-colors duration-300 text-xl">Home</a></li>
                <li><a href="/About" className="text-gray-300 hover:text-white transition-colors duration-300 text-xl">About Us</a></li>
                <li><a href="/Products" className="text-gray-300 hover:text-white transition-colors duration-300 text-xl">Portfolio</a></li>
              
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-gray-400 mt-1" />
                  <div>
                    <p className="text-gray-300 text-xl">neuvatechno@gmail.com</p>
                    <p className="text-gray-400 text-base">General inquiries</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-gray-400 mt-1" />
                  <div>
                    <p className="text-gray-300 text-xl">+91 96771 06493</p>
                    <p className="text-gray-400 text-base">Business hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-gray-400 mt-1" />
                  <div>
                    <p className="text-gray-300 text-xl">Mon - Fri, 9 AM - 6 PM</p>
                    <p className="text-gray-400 text-base">Indian Standard Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-950">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-blue-200 text-lg">
              © 2024 Neuva Studio. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-8">
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 text-lg">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 text-lg">
                Terms of Service
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 text-lg">
                Cookies
              </a>
            </div>

            {/* Made with love */}
            <div className="text-blue-200 text-lg">
              Made with ❤️ in Chennai
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;