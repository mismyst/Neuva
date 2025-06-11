'use client';
import React from "react";
import CardSwap, { Card } from '../components/CardSwap/CardSwap';
import Navbar from "../components/Navbar/Navbar";

const CardSwapPage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D1521]">
      <Navbar />

      {/* Background Image Layer */}
      <img
        src="/images/back.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
      />

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 backdrop-blur-md z-10" />

      {/* Main Content Container */}
      <div className="relative z-20 flex max-w-[1600px] w-full px-2 md:px-8 lg:px-12 gap-24">
        
        {/* Left content - moved left & wider */}
        <div className="w-[55%] flex flex-col justify-center text-white">
          <h1 className="text-6xl font-extrabold mb-6 leading-tight">Get to<br />Know Us!</h1>
          
          <p className="text-2xl leading-relaxed mb-6">
            At <span className="font-semibold">Neuva</span>, we get it—your online presence is your brand's first impression.
            That’s why we mix thoughtful design with rock-solid code to craft websites and apps that don’t just look good but work like a charm.
          </p>

          <p className="text-xl opacity-85">
            Think of us as your go-to squad for full-stack magic. Let’s make your digital dreams go viral (in the best way possible)!
          </p>
        </div>

        {/* Right card section */}
        <div className="flex-1 flex justify-center items-center">
          <CardSwap
            width={800}
            height={660}
            cardDistance={60}
            verticalDistance={80}
            delay={5000}
            pauseOnHover={true}
            skewAmount={6}
            easing="elastic"
          >
            <Card />
            <Card />
            <Card />
          </CardSwap>
        </div>
      </div>
    </div>
  );
};

export default CardSwapPage;
