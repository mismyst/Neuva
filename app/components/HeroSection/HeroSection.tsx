'use client'
import React from 'react';
import { Download, Star, ShoppingBag, CreditCard, Users } from 'lucide-react';
import Balatro from './Balatro';

const FlashHeroSection = () => {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Balatro Background */}
      <div className="absolute inset-0 z-0">
        <Balatro
          isRotate={false}
          mouseInteraction={true}
          pixelFilter={700}
        />
      </div>
      

      {/* Hero Content */}
      <div className="relative flex items-center justify-center min-h-[calc(100vh-80px)] px-6">
        
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          {/* Floating Icons */}
          <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center animate-pulse">
            <ShoppingBag size={24} className="text-gray-400" />
          </div>
          <div className="absolute top-1/3 right-1/4 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center animate-pulse delay-1000">
            <Star size={20} className="text-gray-400" />
          </div>
          <div className="absolute bottom-1/3 left-1/6 w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center animate-pulse delay-500">
            <CreditCard size={28} className="text-gray-400" />
          </div>
          <div className="absolute bottom-1/4 right-1/6 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center animate-pulse delay-1500">
            <Users size={16} className="text-gray-400" />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-7xl w-full relative z-10">
          
          {/* Left Side Text */}
          <div className="lg:col-span-1 text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
               style={{ fontFamily: 'Rhythmic Regal, serif' }}>
                Welcome
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400"
                style={{ 
        fontFamily: 'Push Wide, Arial Black, sans-serif',
        fontStretch: 'extra-expanded',
        letterSpacing: '0.1em'
      }}>
                  To .Neuva
                </span>
              </h1>
            </div>
          </div>
{/* Modern Mobile Frame (Samsung-like) */}
<div className="lg:col-span-1 flex justify-center relative">
  <div className="relative scale-95">
    
    {/* Phone outer shell */}
    <div className="w-[350px] h-[720px] bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-[2.2rem] shadow-2xl border border-gray-700 p-[6px] relative">
      
      {/* Inner screen frame */}
      <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
        
        {/* Camera Punch Hole */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-600 rounded-full z-10 shadow-inner"></div>

        {/* App UI image placeholder */}
        <img 
          src="/images/hero.jpg" 
          alt="App UI"
          className="w-full h-full object-cover"
        />
        
        {/* Optional screen gradient for glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
    </div>

    {/* Glow & depth like your screenshot */}
    <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-purple-500/20 to-indigo-500/20 blur-[60px] -z-10 scale-110"></div>
  </div>
</div>



          {/* Right Side Text */}
          <div className="lg:col-span-1 text-center lg:text-right space-y-6">
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-300 leading-relaxed">
                We Forge 
                <br />
                <span className="text-white font-semibold">What You Imagine</span>
              </p>
              
              <p className="text-base md:text-lg text-gray-400 max-w-xs mx-auto lg:mx-0 lg:ml-auto">
                Get flash deals from your favorite brands using
                our app in just three taps
              </p>
            </div>
          </div>
        </div>

    
      </div>

     
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50 pointer-events-none"></div>
    </div>
  );
};

export default FlashHeroSection;