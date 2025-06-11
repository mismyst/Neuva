
"use client";
import Navbar from "../components/Navbar/Navbar";
import React, { useState, useEffect, useRef } from 'react';
 

const WhyUsPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Fixed particle positions to avoid hydration mismatch
  const particlePositions = [
    { left: 23, top: 45, delay: 0.5, duration: 3 },
    { left: 67, top: 12, delay: 1.2, duration: 4 },
    { left: 45, top: 78, delay: 2.1, duration: 2.5 },
    { left: 89, top: 34, delay: 0.8, duration: 3.5 },
    { left: 12, top: 67, delay: 1.8, duration: 4.2 },
    { left: 78, top: 23, delay: 0.3, duration: 3.8 },
    { left: 34, top: 89, delay: 2.5, duration: 2.8 },
    { left: 56, top: 45, delay: 1.5, duration: 4.5 },
    { left: 90, top: 78, delay: 0.7, duration: 3.2 },
    { left: 25, top: 12, delay: 2.2, duration: 3.7 },
    { left: 67, top: 56, delay: 1.1, duration: 4.1 },
    { left: 43, top: 34, delay: 0.9, duration: 2.9 },
    { left: 78, top: 67, delay: 1.7, duration: 3.3 },
    { left: 12, top: 89, delay: 2.3, duration: 4.3 },
    { left: 89, top: 23, delay: 0.4, duration: 3.6 },
    { left: 34, top: 56, delay: 1.9, duration: 2.7 },
    { left: 56, top: 12, delay: 2.7, duration: 4.7 },
    { left: 23, top: 78, delay: 0.6, duration: 3.1 },
    { left: 67, top: 34, delay: 1.3, duration: 3.9 },
    { left: 45, top: 89, delay: 2.4, duration: 2.6 },
    { left: 89, top: 45, delay: 0.2, duration: 4.4 },
    { left: 12, top: 23, delay: 1.6, duration: 3.4 },
    { left: 78, top: 56, delay: 2.8, duration: 2.3 },
    { left: 34, top: 67, delay: 1.4, duration: 4.6 },
    { left: 56, top: 34, delay: 0.1, duration: 3.5 },
    { left: 23, top: 12, delay: 2.6, duration: 4.8 },
    { left: 67, top: 78, delay: 1.0, duration: 2.4 },
    { left: 45, top: 23, delay: 2.0, duration: 3.7 },
    { left: 89, top: 67, delay: 0.5, duration: 4.0 },
    { left: 12, top: 45, delay: 1.8, duration: 3.2 }
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Auto-slide workflow cards every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % workflowSteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Try to play video when component mounts
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playVideo = async () => {
        try {
          await video.play();
          console.log('Video started playing');
        } catch (error) {
          console.error('Error playing video:', error);
          setVideoError(true);
        }
      };
      
      // Wait a bit for the video to load
      setTimeout(() => {
        if (video.readyState >= 2) {
          playVideo();
        }
      }, 1000);
    }
  }, []);

  const workflowSteps = [
    {
      id: 1,
      title: "Discovery & Ideation",
      subtitle: "Understanding your vision",
      description: "Understanding your vision, requirements, and business objectives through collaborative brainstorming sessions.",
      team: "Workforce Team",
      duration: "1-2 weeks",
      icon: "🔍",
      features: [
        "Requirement Analysis",
        "Market Research",
        "Competitive Analysis", 
        "Project Roadmap",
        "Technology Stack Planning",
        "Budget Estimation"
      ],
      color: "from-blue-500 to-purple-600",
      keyPhase: false
    },
    {
      id: 2,
      title: "Strategic Research",
      subtitle: "Data-driven insights",
      description: "Market analysis, competitor research, and technical feasibility assessment to inform strategic decisions.",
      team: "Research Team",
      duration: "2-3 weeks",
      icon: "📊",
      features: [
        "Market Analysis",
        "User Research",
        "Technical Feasibility",
        "Risk Assessment",
        "Strategy Documentation",
        "Implementation Plan"
      ],
      color: "from-green-500 to-teal-600",
      keyPhase: true
    },
    {
      id: 3,
      title: "System Architecture",
      subtitle: "Scalable foundation",
      description: "Designing scalable, robust system architecture and technology stack selection for optimal performance.",
      team: "Architecture Team",
      duration: "2-4 weeks",
      icon: "🏗️",
      features: [
        "System Design",
        "Database Architecture",
        "API Design",
        "Security Planning",
        "Performance Optimization",
        "Scalability Framework"
      ],
      color: "from-purple-500 to-pink-600",
      keyPhase: false
    },
    {
      id: 4,
      title: "UI/UX Design",
      subtitle: "Intuitive experiences",
      description: "Crafting intuitive user experiences with wireframes, prototypes, and pixel-perfect interface design.",
      team: "Design Team",
      duration: "3-5 weeks",
      icon: "🎨",
      features: [
        "User Interface Design",
        "User Experience Research",
        "Wireframing & Prototyping",
        "Design Systems",
        "Responsive Design",
        "Accessibility Standards"
      ],
      color: "from-orange-500 to-red-600",
      keyPhase: false
    },
    {
      id: 5,
      title: "Development & Testing",
      subtitle: "Quality code delivery",
      description: "Full-stack development with React, Node.js, and rigorous testing to ensure quality and performance.",
      team: "Development Team",
      duration: "6-12 weeks",
      icon: "💻",
      features: [
        "Frontend Development",
        "Backend Development",
        "Database Implementation",
        "API Integration",
        "Quality Assurance",
        "Performance Testing"
      ],
      color: "from-cyan-500 to-blue-600",
      keyPhase: true
    },
    {
      id: 6,
      title: "Launch & Optimization",
      subtitle: "Go live with confidence",
      description: "Deployment with Kubernetes, performance optimization, and ongoing support for continued success.",
      team: "DevOps Team",
      duration: "2-3 weeks",
      icon: "🚀",
      features: [
        "Cloud Deployment",
        "Performance Monitoring",
        "Security Implementation",
        "Backup & Recovery",
        "Ongoing Support",
        "Maintenance Plan"
      ],
      color: "from-indigo-500 to-purple-600",
      keyPhase: false
    }
  ];

  const advantages = [
    { title: "Startup-Friendly", description: "Flexible pricing and packages designed for growing businesses", icon: "🌱" },
    { title: "End-to-End Solutions", description: "Complete project lifecycle from ideation to deployment", icon: "🔄" },
    { title: "Proven Track Record", description: "60k+ active users and 99.9% uptime guarantee", icon: "📈" },
    { title: "Expert Team", description: "Experienced developers and designers dedicated to your success", icon: "👥" }
  ];

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % workflowSteps.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + workflowSteps.length) % workflowSteps.length);
  };

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Video Background with better error handling */}
      <div className="fixed inset-0 z-0">
        {!videoError && isClient ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-30' : 'opacity-0'
            }`}
            onLoadedData={() => {
              console.log('Video loaded successfully');
              setVideoLoaded(true);
            }}
            onError={(e) => {
              console.error('Video failed to load:', e);
              console.error('Video error code:', e.currentTarget.error?.code);
              console.error('Video error message:', e.currentTarget.error?.message);
              setVideoError(true);
            }}
            onCanPlay={() => {
              console.log('Video can play');
              if (videoRef.current) {
                videoRef.current.play().catch(err => {
                  console.error('Play failed:', err);
                  setVideoError(true);
                });
              }
            }}
          >
            {/* Multiple video format sources */}
            <source src="/product.mp4" type="video/mp4" />
            <source src="./product.mp4" type="video/mp4" />
            <source src="product.mp4" type="video/mp4" />
          </video>
        ) : null}
        
        {/* Animated fallback background when video fails or is loading */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${
          videoLoaded && !videoError ? 'opacity-0' : 'opacity-100'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
          {/* Animated elements */}
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Video overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        {/* Debug info - remove in production */}
        {isClient && (
          <div className="absolute top-4 right-4 z-20 text-white text-sm bg-black/50 p-2 rounded">
            Video Status: {videoError ? 'Error - Check console for details' : videoLoaded ? 'Loaded ✓' : 'Loading...'}
          </div>
        )}
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-1">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        
        {/* Animated particles - only render on client to avoid hydration issues */}
        {isClient && particlePositions.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-7xl md:text-9xl font-black leading-none mb-8">
              <span className="block text-white/10 absolute transform -translate-y-2">WHY</span>
              <span className="block text-white relative z-10">WHY</span>
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-300">
              Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600">NEUVA Forge</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-12 max-w-4xl mx-auto">
              Where collaboration meets innovation, transforming your vision into reality through our proven methodology
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl">
                Start Your Project
              </button>
              <button className="px-10 py-4 border-2 border-gray-700 rounded-xl font-semibold text-lg hover:border-blue-500 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

     // Replace the WORKFLOW SLIDING CARDS SECTION in your WhyUsPage with this:

{/* PRICING CARDS SECTION - STATIC */}
<section className="py-32 relative z-10">
  <div className="max-w-screen-xl mx-auto px-6">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Pricing</span>
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Transparent pricing for every stage of your business journey. From startups to enterprise, we have the perfect plan for you.
      </p>
    </div>

    {/* Pricing Cards Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
      
      {/* Starter Plan */}
      <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 shadow-2xl">
        {/* Plan Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-2xl mb-6 shadow-xl">
            🌱
          </div>
          <h3 className="text-3xl font-bold text-white mb-2">Starter</h3>
          <p className="text-lg text-gray-300 mb-6">Perfect for startups and small businesses</p>
          <div className="mb-6">
            <span className="text-5xl font-bold text-white">$33K</span>
            <span className="text-gray-400 text-lg"> - $54K</span>
          </div>
          <p className="text-sm text-gray-400">Complete project cost</p>
        </div>

        {/* Features List */}
        <ul className="space-y-4 mb-8">
          <li className="flex items-center gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
              <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-300">Basic discovery & research</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
              <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-300">Standard architecture design</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
              <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-300">Basic UI/UX design</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
              <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-300">Full-stack development</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
              <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-300">Basic cloud deployment</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
              <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-300">3-month support</span>
          </li>
        </ul>

        {/* CTA Button */}
        <button className="w-full py-4 px-6 border-2 border-gray-600 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:bg-blue-500/10 text-white">
          Get Started
        </button>

        {/* Timeline */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-400">Timeline: 8-12 weeks</p>
        </div>
      </div>

      {/* Professional Plan - Featured */}
      <div className="relative bg-gradient-to-br from-blue-900/90 to-purple-900/90 backdrop-blur-xl rounded-3xl p-8 border-2 border-blue-500/50 transition-all duration-500 transform hover:scale-105 shadow-2xl scale-105">
        {/* Popular Badge */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            Most Popular
          </span>
        </div>

        {/* Plan Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-2xl mb-6 shadow-xl">
            🚀
          </div>
          <h3 className="text-3xl font-bold text-white mb-2">Professional</h3>
          <p className="text-lg text-gray-300 mb-6">Ideal for growing companies</p>
          <div className="mb-6">
            <span className="text-5xl font-bold text-white">$54K</span>
            <span className="text-gray-400 text-lg"> - $100K</span>
          </div>
          <p className="text-sm text-gray-400">Complete project cost</p>
        </div>

        {/* Features List */}
        <ul className="space-y-4 mb-8">
          <li className="flex items-center gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
              <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-300">Comprehensive research & analysis</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
              <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-300">Custom architecture design</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
              <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-300">Custom design system</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
              <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-300">Advanced features & integrations</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
              <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-300">Advanced deployment & monitoring</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
              <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-300">6-month support</span>
          </li>
        </ul>

        {/* CTA Button */}
        <button className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg text-white">
          Choose Professional
        </button>

        {/* Timeline */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-400">Timeline: 12-16 weeks</p>
        </div>
      </div>

      {/* Enterprise Plan */}
      <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 shadow-2xl">
        {/* Plan Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 text-2xl mb-6 shadow-xl">
            🏢
          </div>
          <h3 className="text-3xl font-bold text-white mb-2">Enterprise</h3>
          <p className="text-lg text-gray-300 mb-6">Comprehensive solution for large organizations</p>
          <div className="mb-6">
            <span className="text-5xl font-bold text-white">$100K</span>
            <span className="text-gray-400 text-lg"> - $185K</span>
          </div>
          <p className="text-sm text-gray-400">Complete project cost</p>
        </div>

        {/* Features List */}
        <ul className="space-y-4 mb-8">
          <li className="flex items-center gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
              <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-300">Executive-level strategy sessions</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
              <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-300">Enterprise-grade architecture</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
              <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-300">Premium design experience</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
              <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-300">Complex enterprise integrations</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
              <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-300">Enterprise infrastructure & 24/7 monitoring</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
              <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-300">12-month support</span>
          </li>
        </ul>

        {/* CTA Button */}
        <button className="w-full py-4 px-6 border-2 border-purple-600 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:bg-purple-600/10 text-white">
          Contact Sales
        </button>

        {/* Timeline */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-400">Timeline: 16-24 weeks</p>
        </div>
      </div>
    </div>

    {/* Payment Options */}
    <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 mb-12">
      <h3 className="text-3xl font-bold text-white text-center mb-8">Flexible Payment Options</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Milestone Based */}
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📊</span>
          </div>
          <h4 className="text-xl font-bold text-white mb-4">Milestone-Based</h4>
          <p className="text-gray-300 mb-4">Pay as we complete each phase</p>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>Discovery & Research: 20%</li>
            <li>Architecture & Design: 25%</li>
            <li>Development: 40%</li>
            <li>Launch & Optimization: 15%</li>
          </ul>
        </div>

        {/* Monthly Retainer */}
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">💳</span>
          </div>
          <h4 className="text-xl font-bold text-white mb-4">Monthly Retainer</h4>
          <p className="text-gray-300 mb-4">Spread payments over project duration</p>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>Better cash flow management</li>
            <li>Flexible scope adjustments</li>
            <li>Ongoing partnership approach</li>
          </ul>
        </div>

        {/* Hybrid Model */}
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🔄</span>
          </div>
          <h4 className="text-xl font-bold text-white mb-4">Hybrid Model</h4>
          <p className="text-gray-300 mb-4">Combination of upfront and milestone payments</p>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>Initial deposit: 25%</li>
            <li>Development milestones: 60%</li>
            <li>Final delivery: 15%</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Call to Action */}
    <div className="text-center">
      <h3 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h3>
      <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
        Let's discuss your project and create a customized solution that fits your specific needs and budget.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl text-white">
          Get Free Consultation
        </button>
        <button className="px-8 py-4 border-2 border-gray-600 rounded-xl font-bold text-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300 text-white">
          View Portfolio
        </button>
      </div>
    </div>
  </div>
</section>

      {/* Tech Arsenal - Horizontal Sliding Cards */}
      <section className="py-20 relative z-10 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Tech Arsenal</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cutting-edge technologies that power your digital transformation
            </p>
          </div>

          {/* Horizontal Scrolling Cards */}
          <div className="relative">
            <div className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory px-4">
              
              {/* Frontend Card */}
              <div className="min-w-[400px] bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 snap-center shadow-2xl">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl mr-4 shadow-lg">
                    💻
                  </div>
                  <h3 className="text-3xl font-bold text-white">Frontend</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  {/* React */}
                  <div className="flex flex-col items-center p-6 bg-gray-800/50 rounded-2xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group">
                    <div className="w-20 h-20 mb-4 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-16 h-16 text-cyan-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor">
                        <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95z"/>
                      </svg>
                    </div>
                    <span className="text-gray-300 font-semibold text-lg">React</span>
                  </div>

                  {/* Next.js */}
                  <div className="flex flex-col items-center p-6 bg-gray-800/50 rounded-2xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group">
                    <div className="w-20 h-20 mb-4 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor">
                        <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.5429.0445h-.4570l-.0739-.0633c-.0237-.0194-.0637-.0497-.0887-.0740-.0387-.0374-.0516-.0633-.0516-.1364 0-.0496.0094-.0867.0516-.1497.0328-.0497.8946-1.3323 1.9169-2.8489l1.8572-2.7574.0829-.0497c.0375-.0235.0953-.0374.1297-.0374.0531.0013.0938.0187.2624.1364.1078.0748 2.0544 1.2158 4.33 2.5359 2.2757 1.32 4.1493 2.4138 4.1493 2.4285 0 .0188-.8607 1.3323-1.9137 2.9173l-1.9124 2.9029-.0829.0497c-.0375.0235-.0953.0374-.1297.0374-.0344 0-.0922-.0139-.1297-.0374l-.0829-.0497L11.858 18.4285c-1.0548-1.5776-1.9137-2.9027-1.9137-2.9232 0-.0375.094-.0749.2063-.0969.075-.0142.1408-.0142.2157 0 .1078.0142.1548.0375.2624.1176.075.0564 1.8572 1.0782 3.967 2.2757 2.1098 1.1975 3.8405 2.1924 3.8405 2.2077 0 .0235-.9421 1.4161-2.094 3.0936l-2.0927 3.0936-.0829.0497c-.0375.0235-.0953.0374-.1297.0374s-.0922-.0139-.1297-.0374l-.0829-.0497L8.4044 21.9548c-.8795-1.3136-1.5991-2.3957-1.5991-2.4044 0-.0094.0188-.0187.0375-.0234.0188-.0047.5429-.3143 1.1661-.6886 1.1286-.6789 1.1474-.6886 1.2552-.6886s.1266.0097 1.2552.6886c.6232.3743 1.1474.6839 1.1661.6886.0187.0047.0375.014.0375.0234s-.7196 1.0908-1.5991 2.4044L8.4044 21.9548l-.0829.0497c-.0375.0235-.0953.0374-.1297.0374s-.0922-.0139-.1297-.0374l-.0829-.0497L5.9423 19.1736c-1.1519-1.7266-2.094-3.1401-2.094-3.1401s1.7307-.9951 3.8405-2.2077c2.1098-1.1975 3.892-2.2193 3.967-2.2757.1076-.0801.1546-.1034.2624-.1176.075-.0142.1408-.0142.2157 0 .1123.0220.2063.0594.2063.0969 0 .0205-.8589 1.3456-1.9137 2.9232L11.858 18.4285l-.0829.0497c-.0375.0235-.0953.0374-.1297.0374-.0344 0-.0922-.0139-.1297-.0374l-.0829-.0497-1.9124-2.9029c-1.0530-1.5850-1.9137-2.8985-1.9137-2.9173 0-.0147 1.8736-1.1085 4.1493-2.4285 2.2756-1.3201 4.2225-2.4611 4.33-2.5359.1686-.1177.2093-.1351.2624-.1364.0344 0 .0922.0139.1297.0374l.0829.0497 1.8572 2.7574c1.0223 1.5166 1.8841 2.7992 1.9169 2.8489.0422.0630.0516.1001.0516.1497 0 .0731-.0129.0990-.0516.1364-.0250.0243-.0650.0546-.0887.0740l-.0739.0633h-.4570c-.4021 0-.4678-.0071-.5429-.0445-.096-.0516-.1454-.0984-.2064-.2134-.0423-.0798-.0449-.2158-.0516-.596-.0048-1.9303-.0141-3.5116-.0235-3.509-.0094 0-1.098 1.5996-2.4211 3.556l-2.4047 3.5583-1.919 2.592c-1.0556 1.4262-1.9355 2.6061-1.9543 2.62-.0281.0236.0118.0517.2183.1573 1.3465.6873 2.712 1.0860 4.3237 1.2643.3636.04 1.9354.04 2.299 0 .9337-.1032 1.7548-.2744 2.5337-.5255 4.3496-1.4026 7.5567-5.1885 8.2087-9.6945.096-.6592.108-1.0884.108-1.7476s-.012-1.0884-.108-1.7474C23.2608 5.9347 20.9756 3.7542 18.2672 1.9269 16.8883.8313 15.2569.2048 13.4983.0726 13.0147.0267 12.1188-.0013 11.5725 0z"/>
                      </svg>
                    </div>
                    <span className="text-gray-300 font-semibold text-lg">Next.js</span>
                  </div>

                  {/* TypeScript */}
                  <div className="flex flex-col items-center p-6 bg-gray-800/50 rounded-2xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group">
                    <div className="w-20 h-20 mb-4 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-16 h-16 text-blue-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor">
                        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                      </svg>
                    </div>
                    <span className="text-gray-300 font-semibold text-lg">TypeScript</span>
                  </div>

                  {/* Tailwind */}
                  <div className="flex flex-col items-center p-6 bg-gray-800/50 rounded-2xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group">
                    <div className="w-20 h-20 mb-4 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-16 h-16 text-cyan-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor">
                        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                      </svg>
                    </div>
                    <span className="text-gray-300 font-semibold text-lg">Tailwind</span>
                  </div>
                </div>
              </div>

              {/* Backend Card */}
              <div className="min-w-[400px] bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 hover:scale-105 snap-center shadow-2xl">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center text-3xl mr-4 shadow-lg">
                    ⚙️
                  </div>
                  <h3 className="text-3xl font-bold text-white">Backend</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  {/* Node.js */}
                  <div className="flex flex-col items-center p-6 bg-gray-800/50 rounded-2xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group">
                    <div className="w-20 h-20 mb-4 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-16 h-16 text-green-500 group-hover:scale-110 transition-transform duration-300" fill="currentColor">
                        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.275-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z"/>
                      </svg>
                    </div>
                    <span className="text-gray-300 font-semibold text-lg">Node.js</span>
                  </div>

                  {/* Java */}
                  <div className="flex flex-col items-center p-6 bg-gray-800/50 rounded-2xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group">
                    <div className="w-20 h-20 mb-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-16 h-16 group-hover:scale-110 transition-transform duration-300">
                        <path fill="#F44336" d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"/>
                        <path fill="#F44336" d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"/>
                        <path fill="#1565C0" d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"/>
                        <path fill="#1565C0" d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"/>
                        <path fill="#1565C0" d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"/>
                        <path fill="#1565C0" d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"/>
                        <path fill="#1565C0" d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"/>
                      </svg>
                    </div>
                    <span className="text-gray-300 font-semibold text-lg">Java</span>
                  </div>

                  {/* Python */}
                  <div className="flex flex-col items-center p-6 bg-gray-800/50 rounded-2xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group">
                    <div className="w-20 h-20 mb-4 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-16 h-16 text-yellow-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor">
                        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
                      </svg>
                    </div>
                    <span className="text-gray-300 font-semibold text-lg">Python</span>
                  </div>

                  {/* Express */}
                  <div className="flex flex-col items-center p-6 bg-gray-800/50 rounded-2xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group">
                    <div className="w-20 h-20 mb-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor">
                        <path d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"/>
                      </svg>
                    </div>
                    <span className="text-gray-300 font-semibold text-lg">Express</span>
                  </div>
                </div>
              </div>

              {/* Database Card */}
              <div className="min-w-[400px] bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 snap-center shadow-2xl">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center text-3xl mr-4 shadow-lg">
                    🗄️
                  </div>
                  <h3 className="text-3xl font-bold text-white">Database</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  {/* PostgreSQL */}
                  <div className="flex flex-col items-center p-6 bg-gray-800/50 rounded-2xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group">
                    <div className="w-20 h-20 mb-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-16 h-16 group-hover:scale-110 transition-transform duration-300">
                        <path fill="#fff" d="M44.083,29.79c-0.183-0.829-0.935-1.796-2.452-1.796c-0.31,0-0.649,0.039-1.035,0.119c-0.708,0.146-1.311,0.217-1.842,0.241c4.133-7.04,6.816-16.819,4.159-20.214c-3.501-4.473-8.214-5.141-10.711-5.141L31.967,3c-0.929,0.015-1.893,0.129-2.863,0.339l-3.583,0.774C25.033,4.052,24.536,4.009,24.018,4l-0.03,0l-0.016,0l-0.152-0.001c-1.593,0-3.046,0.338-4.341,0.973l-1.251-0.493c-1.72-0.678-4.308-1.485-6.868-1.485c-0.144,0-0.287,0.003-0.431,0.008C8.407,3.093,6.241,4.05,4.664,5.769C2.696,7.915,1.8,11.054,2.003,15.1C2.013,15.309,4.461,36,11.4,36h0.025l0.064-0.001c0.901-0.022,1.76-0.384,2.563-1.077c0.613,0.46,1.406,0.732,2.145,0.84c0.488,0.115,1.366,0.278,2.418,0.278c1.284,0,2.442-0.263,3.44-0.738c-0.001,0.88-0.006,1.994-0.016,3.418l-0.001,0.075l0.005,0.075c0.097,1.419,0.342,2.698,0.711,3.701c1.051,2.859,2.866,4.434,5.111,4.434c0.093,0,0.188-0.003,0.284-0.009c1.846-0.114,3.717-1.151,5.004-2.772c1.393-1.755,1.715-3.607,1.839-5.026L35,39.111v-0.088v-4.079l0.103,0.01l0.436,0.038l0.042,0.004l0.042,0.002c0.124,0.006,0.252,0.008,0.381,0.008c1.507,0,3.362-0.391,4.616-0.974C41.819,33.476,44.559,31.948,44.083,29.79z"/>
                        <path fill="#0277bd" d="M33,34c0-0.205,0.012-0.376,0.018-0.565C33.008,33.184,33,33,33,33s0.012-0.009,0.032-0.022c0.149-2.673,0.886-3.703,1.675-4.29c-0.11-0.153-0.237-0.318-0.356-0.475c-0.333-0.437-0.748-0.979-1.192-1.674l-0.082-0.158c-0.067-0.164-0.229-0.447-0.435-0.819c-1.183-2.14-3.645-6.592-1.96-9.404c0.738-1.232,2.122-1.942,4.121-2.117C33.986,11.718,30.925,6.115,23.985,6c-0.002,0-0.004,0-0.006,0c-6.041-0.098-8.026,5.392-8.672,8.672c0.89-0.377,1.906-0.606,2.836-0.606c0.014,0,0.029,0,0.043,0c2.29,0.017,3.865,1.239,4.323,3.354c0.335,1.552,0.496,2.91,0.492,4.153c-0.01,2.719-0.558,4.149-1.042,5.411l-0.154,0.408c-0.124,0.334-0.255,0.645-0.379,0.937c-0.126,0.298-0.237,0.563-0.318,0.802c0.484,0.11,0.864,0.265,1.125,0.38l0.151,0.066c0.047,0.02,0.094,0.043,0.137,0.069c0.848,0.516,1.376,1.309,1.489,2.233c0.061,0.498,0.051,3.893,0.03,6.855c0.087,1.285,0.305,2.364,0.593,3.146c0.409,1.114,1.431,3.241,3.394,3.119c1.37-0.085,2.687-0.919,3.561-2.019c0.938-1.181,1.284-2.487,1.414-3.958V34z"/>
                        <path fill="#0277bd" d="M15.114 28.917c-1.613-1.683-2.399-3.947-2.104-6.056.285-2.035.124-4.027.037-5.098-.029-.357-.048-.623-.047-.77 0-.008.002-.015.003-.023 0-.004-.002-.007-.002-.011.121-3.021 1.286-7.787 4.493-10.62C15.932 5.724 13.388 4.913 11 5 7.258 5.136 3.636 7.724 4 15c.137 2.73 3.222 19.103 7.44 19 .603-.015 1.229-.402 1.872-1.176 1.017-1.223 2.005-2.332 2.708-3.104C15.705 29.481 15.401 29.217 15.114 28.917zM37.023 14.731c.015.154.002.286-.022.408.031.92-.068 1.813-.169 2.677-.074.636-.15 1.293-.171 1.952-.021.645.07 1.282.166 1.956.225 1.578.459 3.359-.765 5.437.225.296.423.571.581.837 4.61-7.475 6.468-16.361 4.695-18.626C38.655 5.944 34.941 4.952 31.999 5c-.921.015-1.758.139-2.473.294C34.602 7.754 36.863 13.026 37.023 14.731zM41 30.071c-2.665.55-3.947.257-4.569-.126-.1.072-.2.133-.293.19-.372.225-.961.583-1.105 2.782.083.016.156.025.246.044L35.714 33c1.32.06 3.049-.31 4.063-.781C41.962 31.205 43.153 29.627 41 30.071zM22.023 32.119c-.037-.298-.198-.539-.492-.732l-.108-.047C21.062 31.181 20.653 31 20 31h-.004c-.127.01-.253.019-.38.019-.052 0-.103-.007-.155-.009-.474.365-1.148.647-2.816.99-2.98.759-1.221 1.655-.078 1.794 1.106.277 3.735.614 5.481-.809C22.043 32.537 22.035 32.229 22.023 32.119z"/>
                        <path fill="#0277bd" d="M20.681 18.501c-.292.302-.753.566-1.262.484-.828-.134-1.463-1.133-1.417-1.508h0c.044-.374.751-.569 1.578-.435.287.047.548.128.768.228-.32-.688-.899-1.085-1.782-1.182-1.565-.174-3.226.644-3.56 1.097.007.11.02.251.033.417.093 1.147.265 3.284-.05 5.537-.208 1.485.393 3.169 1.567 4.395.757.79 1.641 1.29 2.513 1.438.111-.478.309-.944.513-1.425.113-.265.233-.547.346-.852l.162-.427c.443-1.155.9-2.35.909-4.703C21.003 20.66 20.892 19.627 20.681 18.501zM34.847 22.007c-.104-.729-.211-1.484-.185-2.303.023-.742.105-1.442.184-2.119.062-.533.11-1.045.138-1.55-1.289.107-2.145.479-2.551 1.108.168-.057.358-.102.568-.129.892-.116 1.543.141 1.618.637.055.363-.253.705-.388.836-.277.269-.626.442-.981.488-.064.008-.129.012-.192.012-.353 0-.69-.121-.949-.3.112 1.973 1.567 4.612 2.283 5.907.153.277.271.498.369.688C35.154 24.163 35.009 23.143 34.847 22.007z"/>
                      </svg>
                    </div>
                    <span className="text-gray-300 font-semibold text-lg">PostgreSQL</span>
                  </div>

                  {/* MongoDB */}
                  <div className="flex flex-col items-center p-6 bg-gray-800/50 rounded-2xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group">
                    <div className="w-20 h-20 mb-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-16 h-16 group-hover:scale-110 transition-transform duration-300">
                        <path fill="#5d4037" d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"/>
                        <path fill="#4caf50" d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"/>
                        <path fill="#dcedc8" d="M23 28H25V36H23z"/>
                        <path fill="#4caf50" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"/>
                        <path fill="#81c784" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"/>
                      </svg>
                    </div>
                    <span className="text-gray-300 font-semibold text-lg">MongoDB</span>
                  </div>

                  {/* Redis */}
                  <div className="flex flex-col items-center p-6 bg-gray-800/50 rounded-2xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group">
                    <div className="w-20 h-20 mb-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-16 h-16 group-hover:scale-110 transition-transform duration-300">
                        <path fill="#fff" d="M46.008,31.885c0-0.653-1.727-1.183-3.861-1.183c-1.856,0-3.401,0.401-3.773,0.934 c-3.674-1.737-7.349-3.475-11.023-5.213c-1.279-0.605-2.739-0.599-4.014,0.014c-3.912,1.884-7.823,3.768-11.735,5.652 c-0.885-0.129-1.954-0.206-3.106-0.206c-3.05,0.001-5.492,0.526-5.492,1.18c0,0-0.012,3.301,0,3.7 c-0.009,0.809,0.092,1.187,0.685,1.467c5.779,2.733,11.558,5.466,17.337,8.199c1.467,0.747,3.143,0.743,4.606-0.016 c6.6-3.179,13.2-6.358,19.801-9.537c0.496-0.239,0.598-0.657,0.563-1.336C45.996,34.285,46.008,31.885,46.008,31.885z"/>
                        <path d="M25.359,27.974c0.392,0,0.774,0.087,1.136,0.258l8.159,3.859l2.865,1.355l1.529,0.723l0.807-1.158 c0.326-0.125,1.126-0.307,2.293-0.307c0.805,0,1.436,0.087,1.857,0.181c-0.003,0.741-0.007,1.741-0.007,2.464l-6.256,3.013 l-12.976,6.25l-0.027,0.013l-0.026,0.014c-0.445,0.231-0.915,0.348-1.396,0.348c-0.475,0-0.94-0.114-1.382-0.339l-0.026-0.013 l-0.026-0.012l-8.893-4.206l-7.987-3.777C4.997,36.333,4.997,35.31,5,34.19c0.697-0.15,1.885-0.306,3.495-0.306 c1.013,0,1.988,0.064,2.818,0.185l0.605,0.088l0.551-0.266l9.552-4.601l2.182-1.051C24.57,28.063,24.96,27.974,25.359,27.974 M25.359,25.974c-0.69,0-1.38,0.155-2.023,0.464c-3.912,1.884-7.823,3.768-11.735,5.652c-0.885-0.129-1.954-0.206-3.106-0.206 c-3.05,0.001-5.492,0.526-5.492,1.18c0,0-0.012,3.301,0,3.7c-0.009,0.809,0.092,1.187,0.685,1.467 c5.779,2.733,11.558,5.466,17.337,8.199c0.729,0.371,1.509,0.557,2.289,0.557c0.791,0,1.581-0.191,2.317-0.573 c6.6-3.179,13.2-6.358,19.801-9.537c0.496-0.239,0.598-0.657,0.563-1.336c0-1.254,0.012-3.654,0.012-3.654 c0-0.653-1.727-1.183-3.861-1.183c-1.856,0-3.401,0.401-3.773,0.934c-3.674-1.737-7.349-3.475-11.023-5.213 C26.716,26.123,26.038,25.974,25.359,25.974L25.359,25.974z"/>
                        <path fill="#DC382D" d="M21.038,41.976c-5.771-2.58-11.541-5.16-17.313-7.741c-0.963-0.431-0.968-1.796-0.008-2.233 c6.545-2.98,13.088-5.96,19.633-8.941c1.281-0.583,2.75-0.588,4.035-0.014c6.017,2.691,12.035,5.381,18.052,8.072 c0.79,0.353,0.794,1.474,0.006,1.832c-6.594,3.003-13.187,6.006-19.782,9.008C24.194,42.628,22.51,42.634,21.038,41.976z"/>
                        <path fill="#A41E22" d="M45.996,23.023c0-0.653-1.692-1.252-3.825-1.252c-1.855,0-3.4,0.401-3.771,0.934 c-3.672-1.737-7.345-3.475-11.017-5.213c-1.278-0.605-2.737-0.599-4.012,0.014c-3.909,1.884-7.819,3.768-11.728,5.652 c-0.885-0.129-1.953-0.206-3.105-0.206c-3.048,0.001-5.527,0.598-5.527,1.251c0,0,0,3.234-0.009,3.551 c0.009,0.712,0.139,1.266,0.732,1.546c5.776,2.733,11.551,5.466,17.327,8.199c1.466,0.694,3.142,0.688,4.604-0.016 c6.596-3.179,13.193-6.358,19.79-9.537c0.496-0.239,0.559-0.714,0.54-1.278C45.963,25.685,45.996,23.023,45.996,23.023z"/>
                        <path fill="#DC382D" d="M21.069,33.051c-5.789-2.592-11.577-5.185-17.366-7.777c-0.936-0.419-0.941-1.746-0.007-2.172 c6.561-2.993,13.121-5.985,19.683-8.978c1.27-0.579,2.727-0.584,4.001-0.014c6.035,2.703,12.07,5.405,18.105,8.108 c0.763,0.342,0.767,1.424,0.006,1.771c-6.61,3.015-13.22,6.031-19.831,9.045C24.201,33.7,22.529,33.705,21.069,33.051z"/>
                        <path fill="#A41E22" d="M46.008,14.07c0-0.653-1.719-1.297-3.852-1.297c-1.855,0-3.4,0.401-3.771,0.934 c-3.672-1.737-7.345-3.475-11.017-5.213c-1.278-0.605-2.737-0.599-4.012,0.014c-3.909,1.884-7.819,3.768-11.728,5.652 c-0.885-0.129-1.953-0.206-3.105-0.206c-3.048,0.001-5.514,0.53-5.514,1.184c0,0-0.027,3.627-0.015,3.66 c-0.026,0.606,0.132,1.223,0.725,1.503c5.776,2.733,11.551,5.466,17.327,8.199c1.466,0.694,3.142,0.688,4.604-0.016 c6.596-3.179,13.193-6.358,19.79-9.537c0.496-0.239,0.576-0.728,0.558-1.264C45.99,17.006,46.008,14.07,46.008,14.07z"/>
                        <path fill="#DC382D" d="M21.073,24.049c-5.779-2.584-11.556-5.167-17.335-7.751c-0.956-0.427-0.96-1.782-0.008-2.216 c6.552-2.984,13.103-5.967,19.656-8.951c1.278-0.582,2.745-0.587,4.027-0.014c6.025,2.694,12.05,5.387,18.075,8.082 c0.783,0.35,0.787,1.46,0.006,1.816c-6.601,3.007-13.202,6.013-19.805,9.018C24.224,24.7,22.542,24.706,21.073,24.049z"/>
                      </svg>
                    </div>
                    <span className="text-gray-300 font-semibold text-lg">Redis</span>
                  </div>

                  {/* Firebase */}
                  <div className="flex flex-col items-center p-6 bg-gray-800/50 rounded-2xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group">
                    <div className="w-20 h-20 mb-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-16 h-16 group-hover:scale-110 transition-transform duration-300">
                        <path fill="#FF9800" d="M8.4,19.5l6.8-12.1c0.4-0.7,1.4-0.7,1.8,0L24,19.5L8.4,19.5z"/>
                        <path fill="#FFC107" d="M8.4,19.5l6.8,12.1c0.4,0.7,1.4,0.7,1.8,0L24,19.5L8.4,19.5z"/>
                        <path fill="#FF5722" d="M24,19.5L17.2,7.4c-0.4-0.7-1.4-0.7-1.8,0L8.6,19.5L24,19.5z"/>
                        <path fill="#FF6F00" d="M39.1,13.5L24,19.5l4.9,8.7c0.4,0.7,1.4,0.7,1.8,0L39.1,13.5z"/>
                        <path fill="#FF3D00" d="M24,19.5l15.1-6l-8.4-6.1c-0.7-0.5-1.7-0.1-1.7,0.7V19.5z"/>
                        <path fill="#DD2C00" d="M24,19.5v11.2c0,0.8,1,1.2,1.7,0.7l8.4-6.1L24,19.5z"/>
                      </svg>
                    </div>
                    <span className="text-gray-300 font-semibold text-lg">Firebase</span>
                  </div>
                </div>
              </div>

              {/* DevOps Card */}
              <div className="min-w-[400px] bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 snap-center shadow-2xl">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-3xl mr-4 shadow-lg">
                    🚀
                  </div>
                  <h3 className="text-3xl font-bold text-white">DevOps</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  {/* Docker */}
                  <div className="flex flex-col items-center p-6 bg-gray-800/50 rounded-2xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group">
                    <div className="w-20 h-20 mb-4 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-16 h-16 text-blue-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor">
                        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983 0 1.97-.084 2.943-.25 1.5-.25 2.91-.7 4.19-1.393 1.141-.616 2.169-1.464 3.058-2.52 1.213-1.438 1.927-2.856 2.174-4.32h.05c1.25 0 2.019-.593 2.301-.92.363-.4.622-.849.759-1.31l.105-.365z"/>
                      </svg>
                    </div>
                    <span className="text-gray-300 font-semibold text-lg">Docker</span>
                  </div>

                  {/* Kubernetes */}
                  <div className="flex flex-col items-center p-6 bg-gray-800/50 rounded-2xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group">
                    <div className="w-20 h-20 mb-4 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        K8s
                      </div>
                    </div>
                    <span className="text-gray-300 font-semibold text-lg">Kubernetes</span>
                  </div>

                  {/* AWS */}
                  <div className="flex flex-col items-center p-6 bg-gray-800/50 rounded-2xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group">
                    <div className="w-20 h-20 mb-4 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        AWS
                      </div>
                    </div>
                    <span className="text-gray-300 font-semibold text-lg">AWS</span>
                  </div>

                  {/* CI/CD */}
                  <div className="flex flex-col items-center p-6 bg-gray-800/50 rounded-2xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group">
                    <div className="w-20 h-20 mb-4 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        CI/CD
                      </div>
                    </div>
                    <span className="text-gray-300 font-semibold text-lg">CI/CD</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
              <button className="w-12 h-12 bg-gray-800/80 hover:bg-gray-700/80 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
              <button className="w-12 h-12 bg-gray-800/80 hover:bg-gray-700/80 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                </button>
            </div>

            {/* Scroll Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>

      {/* Advantages */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">NEUVA</span> Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={advantage.title} className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-6">{advantage.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{advantage.title}</h3>
                <p className="text-gray-400 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-900/20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">50+</div>
              <div className="text-xl text-gray-300">Projects Delivered</div>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">60k+</div>
              <div className="text-xl text-gray-300">Active Users</div>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">99.9%</div>
              <div className="text-xl text-gray-300">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Transform?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Join the revolution of startups and enterprises who chose NEUVA Forge for their digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl">
              Start Your Project
            </button>
            <button className="px-12 py-4 border-2 border-gray-700 rounded-xl font-bold text-xl hover:border-blue-500 transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUsPage;