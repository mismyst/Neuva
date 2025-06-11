'use client'
import React from "react";

export default function AboutUs() {
  const handleNavigateToAbout = () => {
    window.location.href = '/About';
  };

  return (
    <section className="relative w-full min-h-screen bg-[#2A3B4C] flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#3A5D7A] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#1E2A35] rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Glass Bubbles with Enhanced Animation */}
      <div className="absolute top-[10%] left-[15%] w-8 h-8 bg-gradient-to-br from-[#4A6F8C]/30 to-white/20 rounded-full backdrop-blur-sm animate-bounce" />
      <div className="absolute bottom-[15%] left-[10%] w-6 h-6 bg-gradient-to-br from-[#5A7D9A]/40 to-white/20 rounded-full backdrop-blur-sm animate-bounce delay-500" />
      <div className="absolute top-[30%] right-[25%] w-7 h-7 bg-gradient-to-br from-[#4A6F8C]/25 to-white/20 rounded-full backdrop-blur-sm animate-bounce delay-700" />
      <div className="absolute top-[60%] left-[80%] w-5 h-5 bg-gradient-to-br from-[#3A5D7A]/30 to-white/20 rounded-full backdrop-blur-sm animate-bounce delay-1000" />
      <div className="absolute bottom-[40%] right-[15%] w-9 h-9 bg-gradient-to-br from-[#5A7D9A]/20 to-white/15 rounded-full backdrop-blur-sm animate-bounce delay-300" />

      {/* Main Content Container */}
      <div className="relative z-10 flex items-center gap-8">
        {/* Main Card with Enhanced Design */}
        <div className="relative w-[800px] h-[450px] bg-gradient-to-br from-white/12 to-white/4 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/8 p-12 group hover:scale-105 transition-all duration-500">
          {/* Decorative Corner Element */}
          <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-[#4A6F8C] to-[#3A5D7A] rounded-full opacity-80 animate-spin-slow" />
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-6xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                About Us
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#4A6F8C] to-[#5A7D9A] rounded-full" />
            </div>
            
            <p className="text-white/90 text-2xl leading-relaxed font-light tracking-wide">
              We are a creative tech studio blending aesthetics and engineering to
              build stunning experiences. From pixel to product, our mission is to
              make technology feel like magic.
            </p>
            
            {/* Feature Points */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-[#4A6F8C] rounded-full animate-pulse" />
                <span className="text-white/80 text-lg font-medium">Creative Design</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-[#5A7D9A] rounded-full animate-pulse delay-200" />
                <span className="text-white/80 text-lg font-medium">Tech Innovation</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-[#4A6F8C] rounded-full animate-pulse delay-400" />
                <span className="text-white/80 text-lg font-medium">User Experience</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-[#5A7D9A] rounded-full animate-pulse delay-600" />
                <span className="text-white/80 text-lg font-medium">Future-Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Side Decorative Elements */}
        <div className="relative">
          {/* Vertical Card */}
          <div className="w-[180px] h-[280px] bg-gradient-to-b from-[#4A6F8C]/20 to-[#3A5D7A]/15 rounded-[2rem] backdrop-blur-lg shadow-xl border border-white/5 animate-float" />
          
          {/* Horizontal Card */}
          <div className="absolute -bottom-8 -left-16 w-[320px] h-[80px] bg-gradient-to-r from-[#3A5D7A]/20 to-[#4A6F8C]/15 rounded-[1.5rem] backdrop-blur-lg shadow-xl border border-white/5 animate-float delay-150" />
          
          {/* Small Accent Cards */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#4A6F8C]/30 to-[#3A5D7A]/20 rounded-xl backdrop-blur-md animate-float delay-300" />
          <div className="absolute bottom-16 -left-8 w-12 h-12 bg-gradient-to-br from-[#5A7D9A]/30 to-[#4A6F8C]/20 rounded-lg backdrop-blur-md animate-float delay-500" />
        </div>
      </div>

      {/* Enhanced Arrow Button */}
      <button 
        onClick={handleNavigateToAbout}
        className="absolute bottom-8 right-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4A6F8C] to-[#3A5D7A] text-white text-2xl shadow-lg flex items-center justify-center hover:scale-115 hover:rotate-12 transition-all duration-300 border border-white/20 group"
      >
        <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
      </button>

      {/* Floating Numbers/Stats */}
      <div className="absolute top-20 left-20 text-[#4A6F8C]/40 text-6xl font-bold animate-float">01</div>
      <div className="absolute bottom-32 right-32 text-[#5A7D9A]/40 text-6xl font-bold animate-float delay-700">02</div>

      {/* Enhanced Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(1deg);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
}