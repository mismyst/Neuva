'use client'
import React, { useEffect, useState } from 'react';
import { ExternalLink, TrendingUp, Users, Zap, Globe, Star, Code } from 'lucide-react';

const ProductsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('products-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      id="products-section" 
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-900 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-16 h-16 bg-indigo-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-violet-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-indigo-600/10 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Slide Container */}
      <div className="relative h-screen overflow-hidden">
        {/* Mobile App Slide */}
        <div 
          className={`absolute inset-0 transition-all duration-1000 ${
            currentSlide === 0 
              ? 'opacity-100 transform translate-x-0' 
              : 'opacity-0 transform -translate-x-full'
          }`}
        >
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="relative w-full max-w-7xl mx-auto">
              
              {/* Center Phone Mockup - Modern iPhone 15 Pro Style */}
              <div className="flex justify-center relative z-20">
                <div 
                  className={`relative transition-all duration-1000 ${
                    isVisible ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-0 transform translate-y-20 scale-95'
                  }`}
                  style={{ transitionDelay: '0.3s' }}
                >
                  {/* Ultra-Modern Phone Frame - iPhone 15 Pro Style */}
                  <div className="relative">
                    {/* Titanium-like outer frame */}
                    <div className="w-96 h-[800px] bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-[3.5rem] p-0.5 shadow-2xl relative border border-slate-600/30">
                      {/* Inner titanium bezel */}
                      <div className="w-full h-full bg-gradient-to-br from-slate-900 via-black to-slate-900 rounded-[3.3rem] p-1.5 relative">
                        {/* OLED Display */}
                        <div className="w-full h-full bg-black rounded-[3rem] overflow-hidden relative">
                          {/* Screen content with vibrant OLED colors */}
                          <div className="p-8 h-full flex flex-col relative z-10">
                            {/* Modern Status Bar */}
                            <div className="flex justify-between items-center mb-8">
                              <div className="flex items-center space-x-1">
                                <span className="text-base text-white font-semibold">9:41</span>
                              </div>
                              <div className="flex items-center space-x-3">
                                {/* 5G indicator */}
                                <span className="text-xs text-white font-bold">5G</span>
                                {/* Signal bars - modern style */}
                                <div className="flex space-x-0.5">
                                  <div className="w-1 h-4 bg-white rounded-full"></div>
                                  <div className="w-1 h-5 bg-white rounded-full"></div>
                                  <div className="w-1 h-3 bg-white/70 rounded-full"></div>
                                  <div className="w-1 h-2 bg-white/40 rounded-full"></div>
                                </div>
                                {/* WiFi - modern curved style */}
                                <div className="w-4 h-4 relative">
                                  <div className="absolute inset-0">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                                      <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-2.84 3.5-8.82 3.5s-8.23-2.28-8.82-3.5C4.83 8.13 8.21 6 12 6z"/>
                                    </svg>
                                  </div>
                                </div>
                                {/* Battery - modern pill shape */}
                                <div className="flex items-center space-x-1">
                                  <div className="w-7 h-4 border-2 border-white/80 rounded-md relative">
                                    <div className="w-5 h-2 bg-green-400 rounded-sm absolute inset-1"></div>
                                  </div>
                                  <div className="w-1 h-2 bg-white/80 rounded-full"></div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Dynamic Island - Modern pill shape */}
                            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black rounded-full border-2 border-slate-800 shadow-inner"></div>
                            
                            {/* App Content Area - Modern UI */}
                            <div className="flex-1 bg-gradient-to-br from-slate-900/40 via-gray-900/60 to-black/80 backdrop-blur-xl rounded-[2.5rem] overflow-hidden relative border border-white/10 shadow-2xl">
                              <img 
                                src="/images/phone.png" 
                                alt="Modern Mobile App Interface"
                                className="w-full h-full object-cover"
                              />
                              {/* Modern screen overlay with vibrant colors */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10"></div>
                              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/15 via-transparent to-violet-500/10"></div>
                              {/* Subtle inner glow */}
                              <div className="absolute inset-0 rounded-[2.5rem] shadow-inner shadow-white/5"></div>
                            </div>
                            
                            {/* Modern Home Indicator */}
                            <div className="mt-6 flex justify-center">
                              <div className="w-36 h-1.5 bg-white/60 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Modern titanium highlights */}
                    <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/8 via-white/3 to-transparent rounded-t-[3.5rem] pointer-events-none"></div>
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent rounded-b-[3.5rem] pointer-events-none"></div>
                    
                    {/* Modern button styling - Action Button and Volume */}
                    <div className="absolute left-0 top-40 w-1.5 h-16 bg-gradient-to-b from-slate-600 via-slate-700 to-slate-800 rounded-r-lg shadow-lg"></div>
                    <div className="absolute left-0 top-60 w-1.5 h-12 bg-gradient-to-b from-slate-600 via-slate-700 to-slate-800 rounded-r-lg shadow-lg"></div>
                    <div className="absolute left-0 top-76 w-1.5 h-12 bg-gradient-to-b from-slate-600 via-slate-700 to-slate-800 rounded-r-lg shadow-lg"></div>
                    {/* Power button */}
                    <div className="absolute right-0 top-48 w-1.5 h-20 bg-gradient-to-b from-slate-600 via-slate-700 to-slate-800 rounded-l-lg shadow-lg"></div>
                    
                    {/* Camera bump simulation */}
                    <div className="absolute top-12 left-6 w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl border border-slate-600/50 shadow-lg"></div>
                  </div>
                  
                  {/* Enhanced Modern Phone Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-violet-400/20 rounded-[3.5rem] blur-3xl -z-10 scale-110"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-[3.5rem] blur-2xl -z-10 scale-105"></div>
                </div>
              </div>

              {/* Enhanced Floating Cards with Bold Text */}
              {/* Top Left */}
              <div 
                className={`absolute top-8 left-2 lg:left-8 transition-all duration-800 z-30 ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'
                }`}
                style={{ transitionDelay: '0.1s' }}
              >
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 max-w-sm shadow-2xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <TrendingUp className="text-indigo-400" size={28} />
                    <span className="text-white font-black text-lg">BOOSTED USER ENGAGEMENT</span>
                  </div>
                  <div className="text-white">
                    <span className="text-xl font-bold">by </span>
                    <span className="text-6xl font-black bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">50%</span>
                  </div>
                </div>
              </div>

              {/* Top Right */}
              <div 
                className={`absolute top-12 right-2 lg:right-8 transition-all duration-800 z-30 ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'
                }`}
                style={{ transitionDelay: '0.3s' }}
              >
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 max-w-md shadow-2xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <Star className="text-indigo-400" size={24} />
                    <span className="text-white font-black text-lg">TRUST & TECHNOLOGY</span>
                  </div>
                  <p className="text-white text-base leading-relaxed font-bold">
                    We create trust as well as technology. Our collaborative approach to every project is based on cooperation, openness, and exceptional outcomes.
                  </p>
                </div>
              </div>

              {/* Left Side */}
              <div 
                className={`absolute top-1/2 -translate-y-1/2 -left-6 lg:-left-2 transition-all duration-800 z-30 ${
                  isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-20'
                }`}
                style={{ transitionDelay: '0.5s' }}
              >
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 max-w-md shadow-2xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <Zap className="text-indigo-400" size={24} />
                    <span className="text-white font-black text-lg">OUR VISION</span>
                  </div>
                  <p className="text-white text-base leading-relaxed font-bold">
                    Our goal is straightforward: to provide individuals and companies with innovative solutions that promote efficiency, development, and long-lasting effects.
                  </p>
                </div>
              </div>

              {/* Right Side */}
              <div 
                className={`absolute top-1/2 -translate-y-1/2 -right-6 lg:-right-2 transition-all duration-800 z-30 ${
                  isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-20'
                }`}
                style={{ transitionDelay: '0.4s' }}
              >
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 shadow-2xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <Users className="text-violet-400" size={28} />
                    <span className="text-white font-black text-lg">ACTIVE USERS</span>
                  </div>
                  <div className="text-white">
                    <span className="text-6xl font-black bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">60k</span>
                    <p className="text-white text-base mt-2 font-bold">customers using our apps</p>
                  </div>
                </div>
              </div>

              {/* Bottom Left */}
              <div 
                className={`absolute bottom-20 left-2 lg:left-12 transition-all duration-800 z-30 ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'
                }`}
                style={{ transitionDelay: '0.6s' }}
              >
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-[1.5rem] border border-white/20 shadow-2xl">
                  <div className="flex items-center space-x-3">
                    <ExternalLink className="text-indigo-400" size={20} />
                    <span className="text-white font-black text-base">DOWNLOAD APP</span>
                  </div>
                  <p className="text-white text-sm mt-2 font-bold">@ZApp delivery</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* MacBook Pro Slide - Ultra Modern */}
        <div 
          className={`absolute inset-0 transition-all duration-1000 ${
            currentSlide === 1 
              ? 'opacity-100 transform translate-x-0' 
              : 'opacity-0 transform translate-x-full'
          }`}
        >
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="relative w-full max-w-7xl mx-auto">
              
              {/* Center MacBook Pro Mockup - M3 Pro Style */}
              <div className="flex justify-center relative z-20">
                <div 
                  className={`relative transition-all duration-1000 ${
                    isVisible ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-0 transform translate-y-20 scale-95'
                  }`}
                  style={{ transitionDelay: '0.3s' }}
                >
                  {/* Ultra-Modern MacBook Pro with Liquid Retina XDR Display */}
                  <div className="relative">
                    {/* MacBook Screen - Ultra-thin bezels like M3 MacBook Pro */}
                    <div className="w-[1000px] h-[600px] bg-gradient-to-br from-slate-800/20 via-slate-900/40 to-black/60 backdrop-blur-sm rounded-t-[1.8rem] p-0.5 shadow-2xl border border-white/5 relative">
                      {/* Liquid Retina XDR Display */}
                      <div className="w-full h-full bg-black rounded-t-[1.7rem] overflow-hidden relative">
                        {/* HDR screen reflection */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent pointer-events-none"></div>
                        
                        <div className="p-4 h-full flex flex-col relative z-10">
                          {/* Modern macOS Sonoma Style Browser */}
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex space-x-2">
                              <div className="w-3.5 h-3.5 bg-gradient-to-br from-red-400 to-red-600 rounded-full shadow-lg border border-red-700/20 hover:brightness-110 transition-all"></div>
                              <div className="w-3.5 h-3.5 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg border border-yellow-700/20 hover:brightness-110 transition-all"></div>
                              <div className="w-3.5 h-3.5 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-lg border border-green-700/20 hover:brightness-110 transition-all"></div>
                            </div>
                            <div className="bg-gradient-to-r from-slate-800/80 via-slate-700/80 to-slate-800/80 backdrop-blur-xl px-6 py-2 rounded-xl text-sm text-gray-100 font-medium border border-slate-600/30 min-w-0 flex-1 mx-8 max-w-lg shadow-lg">
                              <div className="flex items-center space-x-3">
                                <div className="w-4 h-4 text-green-400 flex items-center justify-center">
                                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                  </svg>
                                </div>
                               
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-7 h-7 bg-gradient-to-br from-slate-700/60 to-slate-800/80 rounded-lg border border-slate-600/40 backdrop-blur-sm hover:bg-slate-600/60 transition-all"></div>
                              <div className="w-7 h-7 bg-gradient-to-br from-slate-700/60 to-slate-800/80 rounded-lg border border-slate-600/40 backdrop-blur-sm hover:bg-slate-600/60 transition-all"></div>
                            </div>
                          </div>
                          
                          {/* Web App Content */}
                          <div className="flex-1 bg-gradient-to-br from-slate-900/30 via-gray-900/50 to-black/70 backdrop-blur-xl rounded-[1.5rem] overflow-hidden relative border border-white/10 shadow-2xl">
                            <img 
                              src="/images/laptop.png" 
                              alt="Modern Collabd Web Interface"
                              className="w-full h-full object-cover"
                            />
                            {/* Modern HDR screen overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/8"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/12 via-transparent to-violet-500/8"></div>
                            {/* Subtle inner glow for premium feel */}
                            <div className="absolute inset-0 rounded-[1.5rem] shadow-inner shadow-white/10"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Modern MacBook Base - Space Black Aluminum */}
                    <div className="w-[1020px] h-[25px] bg-gradient-to-b from-slate-700/40 via-slate-800/70 to-slate-900/90 backdrop-blur-sm rounded-b-[1.8rem] -mt-0.5 mx-auto relative border-x border-b border-white/5 shadow-2xl">
                      {/* Aluminum texture */}
                      <div className="absolute inset-0 bg-gradient-to-b from-slate-600/15 to-transparent rounded-b-[1.8rem]"></div>
                      
                      {/* Modern Force Touch Trackpad */}
                      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-32 h-5 bg-gradient-to-br from-slate-800/60 via-slate-900/80 to-black/90 backdrop-blur-sm rounded-lg shadow-inner border border-slate-700/40">
                        <div className="absolute inset-0.5 bg-gradient-to-b from-slate-700/20 to-slate-900/40 rounded-md"></div>
                      </div>
                      
                      {/* Subtle hinge detail */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-0.5 bg-gradient-to-r from-transparent via-slate-500/30 to-transparent"></div>
                    </div>
                    
                    {/* Modern lighting and shadows */}
                    <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/6 via-white/2 to-transparent rounded-t-[1.8rem] pointer-events-none"></div>
                    <div className="absolute inset-x-0 bottom-6 h-1/3 bg-gradient-to-t from-black/20 to-transparent rounded-b-[1.8rem] pointer-events-none"></div>
                    
                    {/* Modern rubber feet */}
                    <div className="absolute bottom-0 left-24 w-6 h-1 bg-slate-800/70 rounded-full shadow-sm"></div>
                    <div className="absolute bottom-0 right-24 w-6 h-1 bg-slate-800/70 rounded-full shadow-sm"></div>
                  </div>
                  
                  {/* Enhanced Modern MacBook Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/25 to-violet-400/25 rounded-[2.5rem] blur-3xl -z-10 scale-115"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/15 to-blue-400/15 rounded-[2.5rem] blur-2xl -z-10 scale-110"></div>
                </div>
              </div>

              {/* Enhanced Floating Cards for Web with Bold Text */}
              {/* Top Left */}
              <div 
                className={`absolute top-6 left-2 lg:left-6 transition-all duration-800 z-30 ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'
                }`}
                style={{ transitionDelay: '0.1s' }}
              >
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 max-w-sm shadow-2xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <Globe className="text-indigo-400" size={28} />
                    <span className="text-white font-black text-lg">GLOBAL REACH</span>
                  </div>
                  <div className="text-white">
                    <span className="text-6xl font-black bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">180+</span>
                    <p className="text-white text-base mt-2 font-bold">countries served</p>
                  </div>
                </div>
              </div>

              {/* Top Right */}
              <div 
                className={`absolute top-6 right-2 lg:right-6 transition-all duration-800 z-30 ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'
                }`}
                style={{ transitionDelay: '0.3s' }}
              >
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 max-w-md shadow-2xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <Code className="text-indigo-400" size={24} />
                    <span className="text-white font-black text-lg">ENTERPRISE SOLUTIONS</span>
                  </div>
                  <p className="text-white text-base leading-relaxed font-bold">
                    Scalable web applications built with cutting-edge technology. Designed for performance, security, and seamless collaboration.
                  </p>
                </div>
              </div>

              {/* Left Side */}
              <div 
                className={`absolute top-1/2 -translate-y-1/2 -left-10 lg:-left-6 transition-all duration-800 z-30 ${
                  isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-20'
                }`}
                style={{ transitionDelay: '0.5s' }}
              >
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 max-w-sm shadow-2xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <TrendingUp className="text-violet-400" size={24} />
                    <span className="text-white font-black text-lg">PERFORMANCE</span>
                  </div>
                  <div className="text-white">
                    <span className="text-6xl font-black bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">99.9%</span>
                    <p className="text-white text-base mt-2 font-bold">uptime guarantee</p>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div 
                className={`absolute top-1/2 -translate-y-1/2 -right-10 lg:-right-6 transition-all duration-800 z-30 ${
                  isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-20'
                }`}
                style={{ transitionDelay: '0.4s' }}
              >
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 shadow-2xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <Users className="text-indigo-400" size={28} />
                    <span className="text-white font-black text-lg">TEAM COLLABORATION</span>
                  </div>
                  <div className="text-white">
                    <span className="text-6xl font-black bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">50k+</span>
                    <p className="text-white text-base mt-2 font-bold">teams collaborating daily</p>
                  </div>
                </div>
              </div>

              {/* Bottom Center */}
              <div 
                className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-800 z-30 ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'
                }`}
                style={{ transitionDelay: '0.6s' }}
              >
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-[1.5rem] border border-white/20 shadow-2xl">
                  <div className="flex items-center space-x-3">
                    <ExternalLink className="text-indigo-400" size={20} />
                    <span className="text-white font-black text-base">VISIT PLATFORM</span>
                  </div>
                  <p className="text-white text-sm mt-2 font-bold">collabd.app</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      

      {/* Progress Bar */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40">
        <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-indigo-400 to-violet-500 rounded-full transition-all duration-1000"
            style={{ 
              width: currentSlide === 0 ? '50%' : '100%',
              transform: currentSlide === 0 ? 'translateX(0%)' : 'translateX(0%)'
            }}
          />
        </div>
      </div>

      
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-violet-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
    </div>
  );
};

export default ProductsSection;