'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Smartphone, Monitor, Palette, ArrowRight, Check, Users, Download, Globe, Star } from 'lucide-react';

const TechProductShowcase = () => {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
        setScrollY(scrollProgress);
        
        // Track visibility for each section
        const sections = containerRef.current.querySelectorAll('[data-section]');
        const newVisibility = {};
        
        sections.forEach((section, index) => {
          const sectionRect = section.getBoundingClientRect();
          newVisibility[index] = sectionRect.top < window.innerHeight * 0.8 && sectionRect.bottom > window.innerHeight * 0.2;
        });
        
        setIsVisible(newVisibility);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      id: 1,
      name: "Zapp",
      category: "Mobile Application",
      description: "Next-generation mobile experience with lightning-fast performance and intuitive user interface designed for modern users.",
      deviceType: "mobile",
      imagePlaceholder: "/images/zapp-screen.jpg", // You'll replace this
      features: [
        "Cross-platform compatibility",
        "Real-time synchronization",
        "Offline functionality",
        "Push notifications"
      ],
      stats: [
        { label: "Active Users", value: "50K+", icon: <Users className="w-4 h-4" /> },
        { label: "App Rating", value: "4.9", icon: <Star className="w-4 h-4" /> },
        { label: "Downloads", value: "100K+", icon: <Download className="w-4 h-4" /> }
      ],
      steps: [
        { title: "Download & Install", description: "Get the app from your preferred app store", icon: "1" },
        { title: "Create Profile", description: "Set up your personalized user profile", icon: "2" },
        { title: "Start Exploring", description: "Discover features and enjoy the experience", icon: "3" }
      ]
    },
    {
      id: 2,
      name: "Collabd",
      category: "Web Platform",
      description: "Revolutionary collaboration platform that transforms how teams work together, featuring advanced project management and real-time communication tools.",
      deviceType: "desktop",
      imagePlaceholder: "/images/collabd-screen.jpg", // You'll replace this
      features: [
        "Team collaboration tools",
        "Project management suite",
        "Real-time chat & video",
        "Advanced analytics"
      ],
      stats: [
        { label: "Active Projects", value: "1.2K+", icon: <Globe className="w-4 h-4" /> },
        { label: "Team Members", value: "5K+", icon: <Users className="w-4 h-4" /> },
        { label: "Uptime", value: "99.9%", icon: <Check className="w-4 h-4" /> }
      ],
      steps: [
        { title: "Sign Up & Setup", description: "Create your team workspace", icon: "1" },
        { title: "Invite Team Members", description: "Add colleagues to your projects", icon: "2" },
        { title: "Collaborate & Deliver", description: "Work together and achieve goals", icon: "3" }
      ]
    },
    {
      id: 3,
      name: "UI/UX Design",
      category: "Design Services",
      description: "Comprehensive design solutions that merge aesthetics with functionality, creating exceptional user experiences across all digital platforms.",
      deviceType: "tablet",
      imagePlaceholder: "/images/design-screen.jpg", // You'll replace this
      features: [
        "User research & testing",
        "Wireframing & prototyping",
        "Visual design systems",
        "Accessibility compliance"
      ],
      stats: [
        { label: "Projects Completed", value: "200+", icon: <Palette className="w-4 h-4" /> },
        { label: "Client Satisfaction", value: "98%", icon: <Star className="w-4 h-4" /> },
        { label: "Design Systems", value: "50+", icon: <Check className="w-4 h-4" /> }
      ],
      steps: [
        { title: "Consultation & Research", description: "Understanding your vision and users", icon: "1" },
        { title: "Design & Prototype", description: "Creating beautiful, functional designs", icon: "2" },
        { title: "Test & Refine", description: "Perfecting the user experience", icon: "3" }
      ]
    }
  ];

  const MobileDevice = ({ imageSrc, isVisible }) => (
    <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      {/* iPhone Frame */}
      <div className="relative w-[280px] h-[560px] bg-[#333446] rounded-[2.5rem] p-[8px] shadow-2xl">
        {/* Notch */}
        <div className="absolute top-[20px] left-1/2 transform -translate-x-1/2 w-[120px] h-[25px] bg-black rounded-full z-20"></div>
        
        {/* Screen */}
        <div className="w-full h-full bg-black rounded-[2.2rem] overflow-hidden relative">
          <img 
            src={imageSrc} 
            alt="App Screen"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = '/images/moockup.jpg';
            }}
          />
        </div>
        
        {/* Reflection */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[2.5rem] pointer-events-none"></div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[#006BB4]/20 rounded-[2.5rem] blur-xl scale-110 -z-10"></div>
    </div>
  );

  const DesktopDevice = ({ imageSrc, isVisible }) => (
    <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      {/* Monitor */}
      <div className="relative">
        {/* Screen */}
        <div className="w-[400px] h-[250px] bg-[#333446] rounded-t-lg p-[6px] shadow-2xl">
          <div className="w-full h-full bg-black rounded-t-md overflow-hidden">
            <img 
              src={imageSrc} 
              alt="Website Screen"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = '/images/laptop.png';
              }}
            />
          </div>
        </div>
        
        {/* Stand */}
        <div className="w-[400px] h-[15px] bg-[#333446] rounded-b-lg"></div>
        <div className="w-[80px] h-[60px] bg-[#333446] mx-auto rounded-b-lg"></div>
        <div className="w-[120px] h-[8px] bg-[#333446] mx-auto rounded-full"></div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute top-0 left-0 w-[400px] h-[250px] bg-[#006BB4]/20 rounded-lg blur-xl scale-110 -z-10"></div>
    </div>
  );

  const TabletDevice = ({ imageSrc, isVisible }) => (
    <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      {/* iPad Frame */}
      <div className="relative w-[320px] h-[420px] bg-[#333446] rounded-[1.5rem] p-[12px] shadow-2xl">
        {/* Screen */}
        <div className="w-full h-full bg-black rounded-[1.2rem] overflow-hidden relative">
          <img 
            src={imageSrc} 
            alt="Design Screen"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = '/images/Screenshot.png';
            }}
          />
        </div>
        
        {/* Home indicator */}
        <div className="absolute bottom-[6px] left-1/2 transform -translate-x-1/2 w-[60px] h-[4px] bg-white/30 rounded-full"></div>
        
        {/* Reflection */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[1.5rem] pointer-events-none"></div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[#006BB4]/20 rounded-[1.5rem] blur-xl scale-110 -z-10"></div>
    </div>
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, #333446 0%, transparent 70%)',
            transform: `translate(${scrollY * 100}px, ${scrollY * 50}px) scale(${0.8 + scrollY * 0.4})`,
            left: '-200px',
            top: '10%',
            opacity: 0.3
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, #006BB4 0%, transparent 70%)',
            transform: `translate(${-scrollY * 80}px, ${scrollY * 70}px) scale(${0.6 + scrollY * 0.3})`,
            right: '-150px',
            top: '30%',
            opacity: 0.2
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, #162325 0%, transparent 70%)',
            transform: `translate(${scrollY * 60}px, ${-scrollY * 40}px) scale(${0.9 + scrollY * 0.2})`,
            left: '60%',
            bottom: '20%',
            opacity: 0.4
          }}
        />
      </div>

      {/* Header */}
      <div className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center" data-section>
          <div 
            className="transform transition-all duration-1000"
            style={{
              transform: `translateY(${isVisible[0] ? 0 : 50}px)`,
              opacity: isVisible[0] ? 1 : 0
            }}
          >
            <div className="inline-block px-4 py-2 bg-[#333446]/80 border border-[#333446] rounded-full text-white text-sm font-bold mb-6 backdrop-blur-sm tracking-wide">
              Our Products
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
              Innovative Solutions
              <br />
              <span className="text-[#006BB4] font-black">Built for Tomorrow</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
              Discover our cutting-edge products designed to transform your digital experience
            </p>
          </div>
        </div>
      </div>

      {/* Products Sections */}
      {products.map((product, index) => (
        <div key={product.id} className="relative z-10 py-24" data-section>
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              
              {/* Device Mockup */}
              <div 
                className={`flex justify-center ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                style={{
                  transform: `translateX(${isVisible[index + 1] ? 0 : (index % 2 === 0 ? -100 : 100)}px)`,
                  transition: 'all 1s ease-out'
                }}
              >
                {product.deviceType === 'mobile' && (
                  <MobileDevice imageSrc={product.imagePlaceholder} isVisible={isVisible[index + 1]} />
                )}
                {product.deviceType === 'desktop' && (
                  <DesktopDevice imageSrc={product.imagePlaceholder} isVisible={isVisible[index + 1]} />
                )}
                {product.deviceType === 'tablet' && (
                  <TabletDevice imageSrc={product.imagePlaceholder} isVisible={isVisible[index + 1]} />
                )}
              </div>

              {/* Content */}
              <div 
                className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                style={{
                  transform: `translateX(${isVisible[index + 1] ? 0 : (index % 2 === 0 ? 100 : -100)}px)`,
                  opacity: isVisible[index + 1] ? 1 : 0,
                  transition: 'all 1s ease-out 0.2s'
                }}
              >
                <div>
                  <div className="inline-block px-4 py-2 bg-[#333446]/80 text-white text-sm font-bold rounded-full mb-6 tracking-wide">
                    {product.category}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">{product.name}</h2>
                  <p className="text-lg text-gray-300 leading-relaxed mb-8 font-medium">
                    {product.description}
                  </p>
                </div>

                {/* How it Works Steps */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-black text-white mb-6 tracking-tight">How it Works</h3>
                  <div className="space-y-6">
                    {product.steps.map((step, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start space-x-4"
                        style={{
                          opacity: isVisible[index + 1] ? 1 : 0,
                          transform: `translateY(${isVisible[index + 1] ? 0 : 20}px)`,
                          transition: `all 0.6s ease-out ${0.4 + idx * 0.1}s`
                        }}
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-[#006BB4] rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white font-black text-lg">{step.icon}</span>
                        </div>
                        <div className="flex-1 pt-1">
                          <h4 className="text-lg font-bold text-white mb-2 tracking-wide">{step.title}</h4>
                          <p className="text-gray-300 leading-relaxed font-medium">{step.description}</p>
                        </div>
                        {idx < product.steps.length - 1 && (
                          <div className="absolute left-[23px] mt-12 w-0.5 h-8 bg-[#333446]" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-white mb-4 tracking-tight">Key Features</h3>
                  {product.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center space-x-3"
                      style={{
                        opacity: isVisible[index + 1] ? 1 : 0,
                        transform: `translateY(${isVisible[index + 1] ? 0 : 20}px)`,
                        transition: `all 0.6s ease-out ${0.6 + idx * 0.1}s`
                      }}
                    >
                      <div className="w-5 h-5 bg-[#006BB4] rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-200 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  {product.stats.map((stat, idx) => (
                    <div 
                      key={idx}
                      className="text-center p-4 bg-[#333446]/50 border border-[#333446] rounded-xl backdrop-blur-sm hover:bg-[#333446]/70 transition-all duration-300"
                      style={{
                        opacity: isVisible[index + 1] ? 1 : 0,
                        transform: `translateY(${isVisible[index + 1] ? 0 : 30}px)`,
                        transition: `all 0.8s ease-out ${0.8 + idx * 0.1}s`
                      }}
                    >
                      <div className="flex justify-center mb-2 text-[#006BB4]">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div 
                  style={{
                    opacity: isVisible[index + 1] ? 1 : 0,
                    transform: `translateY(${isVisible[index + 1] ? 0 : 30}px)`,
                    transition: 'all 0.8s ease-out 1s'
                  }}
                >
                  <button className="group px-8 py-4 bg-[#006BB4] hover:bg-[#005299] text-white font-black rounded-xl transition-all duration-300 flex items-center space-x-2 hover:shadow-xl hover:scale-105 tracking-wide">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Bottom CTA */}
      <div className="relative z-10 py-24" data-section>
        <div className="max-w-4xl mx-auto text-center px-6">
          <div 
            style={{
              opacity: isVisible[products.length + 1] ? 1 : 0,
              transform: `translateY(${isVisible[products.length + 1] ? 0 : 50}px)`,
              transition: 'all 1s ease-out'
            }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-medium">
              Join thousands of satisfied customers who trust our innovative solutions
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-[#006BB4] to-[#333446] text-white font-black rounded-xl hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-[#006BB4]/25 tracking-wide"
            onClick={() => window.location.href = './Contact'}>
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechProductShowcase;