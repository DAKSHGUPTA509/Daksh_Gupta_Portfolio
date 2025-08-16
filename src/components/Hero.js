import React, { useState, useEffect } from 'react';
import { portfolioData } from '../mock/portfolioData'; // Assumed external data source
import { Button } from './ui/button'; // Assumed external UI component
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone, Download, Sparkles } from 'lucide-react'; // Icon library
import TypingAnimation from './TypingAnimation'; // Assumed external animation component

const Hero = () => {
  const { personal, objective } = portfolioData;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Effect to handle mouse movement and scroll position for interactive background elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  // Function to smoothly scroll to a section by its ID
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-r from-gray-900 to-black flex items-center overflow-hidden">
      
      {/* Interactive background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating data points: 20 small, animated circles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#38FF62] rounded-full animate-pulse opacity-30"
            style={{
              left: `${Math.random() * 100}%`, // Random horizontal position
              top: `${Math.random() * 100}%`,  // Random vertical position
              animationDelay: `${Math.random() * 2}s`, // Random animation start delay
              animationDuration: `${2 + Math.random() * 3}s` // Random animation duration
            }}
          />
        ))}

        {/* Mouse follower effect: A glowing circle that follows the cursor */}
        <div
          className="absolute w-100 h-100 bg-gradient-radial from-[#38FF62]/10 to-transparent rounded-full pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 64, // Center the circle on the cursor's X
            top: mousePosition.y - 64,  // Center the circle on the cursor's Y
            transform: `translate(0, ${scrollY * 0.1}px)` // Parallax effect with scroll
          }}
        />
      </div>

      {/* Main content container with responsive padding */}
      <div className="relative max-w-[1920px] mx-auto px-6 md:px-12 py-[120.2px] z-10">
        
        {/* Animated label with sparkle icon - Placed at the top */}
        <div className="flex items-center space-x-4">
          <Sparkles size={20} className="text-[#38FF62] animate-pulse" />
          <div 
  className="font-mono text-[12px] md:text-[18px] font-normal text-white uppercase tracking-[0.05em] animate-fadeInUp"
  style={{ fontFamily: 'ui-monospace, monospace' }}
>
            {/* Typing animation for professional titles */}
            <TypingAnimation texts={["MACHINE LEARNING ENGINEER", "DATA ANALYST", "AI RESEARCHER", "SPORTS ANALYST"]} />
          </div>
        </div>

        {/* Enhanced Hero Title with gradient - Placed directly below the animated label */}
        <div className="relative text-center mt-[47.6px]"> 
          <h1 
            className="font-normal text-white uppercase leading-none animate-fadeInUp relative z-10"
            style={{ 
              fontFamily: 'ui-sans-serif, system-ui, sans-serif',
              fontSize: 'clamp(40px, 10vw, 280px)', // Responsive font size
              animationDelay: '0.5s',
              textShadow: '0 0 10px rgba(56, 255, 99, 0.85)' // Subtle text shadow
            }}
          >
            {personal.name}
          </h1>
                      <div className="block h-4 sm:h-6 md:h-8"></div>
          {/* Glowing accent line below the name, centered relative to its parent */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1 bg-gradient-to-r from-[#38FF62] via-transparent to-[#38FF62] opacity-10 animate-pulse" />
          
          {/* 3D text shadow effect for depth */}
          {/* <div 
            className="absolute inset-0 font-normal text-[rgba(246, 243, 243, 1)] uppercase leading-none -z-10"
            style={{ 
              fontFamily: 'ui-sans-serif, system-ui, sans-serif',
              fontSize: 'clamp(40px, 10vw, 280px)',
              transform: 'translate(100px, 100px)' // Offset for shadow effect
            }}
          >
            {personal.name}
          </div> */}
        </div>

        {/* New grid for the content: Main content (left) and Contact Info (right) */}
        {/* This grid ensures the contact info is to the right of the subtitle, description, and CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[47.6px] items-start mt-[47.6px]"> 
          
          {/* Left Column - Main Content (subtitle, description, CTA buttons) */}
          <div className="lg:col-span-8 space-y-[47.6px]">
            
            {/* Enhanced subtitle with gradient text and typing effect */}
            <div className="relative">
              <p 
                className="font-normal text-white leading-[1.07] max-w-4xl animate-fadeInUp text-center"
                style={{ 
                  fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                  fontSize: 'clamp(32px, 6vw, 84px)',
                  animationDelay: '0.4s'
                }}
              >
                Transforming{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-[#38FF62] to-[#2AE052] bg-clip-text text-transparent">
                    Data
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#38FF62] to-[#2AE052] opacity-10  blur-md">
                    Data
                  </span>
                </span>
                {' '}into actionable insights.
              </p>
            </div>

            {/* Enhanced description with a subtle ping animation */}
            <p 
              className="font-normal text-white leading-[1.33] max-w-3xl animate-fadeInUp relative text-center"
              style={{ 
                fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                fontSize: 'clamp(14px, 1.8vw, 22px)',
                animationDelay: '0.6s'
              }}
            >
              {objective}
              <span className="absolute -right-4 top-0 w-2 h-2 bg-[#38FF62] rounded-full animate-ping" />
            </p>

            {/* Enhanced CTA Buttons with various hover effects */}
            <div className="flex flex-col sm:flex-row gap-6 pt-[23.8px] animate-fadeInUp justify-center sm:justify-start" style={{ animationDelay: '0.8s' }}> 
              {/* View Projects Button */}
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative overflow-hidden bg-[#38FF62] border-none px-8 py-4 font-mono text-[15px] font-normal text-[#232323] uppercase cursor-pointer transition-all duration-300 min-h-[52px] flex items-center justify-center tracking-[0.05em] hover:scale-[1.05] hover:shadow-[0_10px_30px_rgba(56,255,98,0.4)]"
                style={{ fontFamily: 'ui-monospace, monospace' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#2AE052] to-[#38FF62] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <Sparkles size={16} className="mr-2 z-10 group-hover:rotate-180 transition-transform duration-300" />
                <span className="z-10">VIEW PROJECTS</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -translate-x-full group-hover:translate-x-full transition-all duration-700" />
              </button>
              
              {/* Get In Touch Button */}
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative overflow-hidden bg-transparent border-2 border-white px-8 py-4 font-mono text-[15px] font-normal text-white uppercase cursor-pointer transition-all duration-300 min-h-[52px] flex items-center justify-center tracking-[0.05em] hover:border-[#38FF62] hover:text-[#38FF62] hover:scale-[1.05] hover:shadow-[0_10px_30px_rgba(56,255,98,0.2)]"
                style={{ fontFamily: 'ui-monospace, monospace' }}
              >
                <Mail size={16} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span>GET IN TOUCH</span>
              </button>

              {/* Download Resume Button */}
              <button
                className="group relative overflow-hidden bg-transparent border-2 border-white px-6 py-3 font-mono text-[15px] font-normal text-white uppercase cursor-pointer transition-all duration-300 min-h-[44px] flex items-center justify-center tracking-[0.05em] hover:border-[#38FF62] hover:text-[#38FF62] hover:text-[#38FF62] hover:scale-[1.05] hover:shadow-[0_10px_30px_rgba(56,255,98,0.2)]"
                style={{ fontFamily: 'ui-monospace, monospace' }}
              >
                <Download size={14} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span>DOWNLOAD RESUME</span>
              </button>
            </div>
          </div>

          {/* Right Column - Enhanced Contact Info */}
          <div className="lg:col-span-4 space-y-[47.6px]">
            
            {/* Enhanced Contact Card with glowing border on hover */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#38FF62] to-[#2AE052] rounded-lg blur-xl opacity-30 group-hover:opacity-50 transition duration-1500"></div>

<div className="relative bg-black border border-[rgba(65, 61, 61, 0.1)] p-6 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(35,35,35,0.15)]">
  {/* Your card content goes here */}
                
                <div className="flex items-center justify-between mb-6">
                  <h3 
                    className="font-mono text-[20px] font-normal text-white uppercase tracking-[0.05em]"
                    style={{ fontFamily: 'ui-monospace, monospace' }}
                  >
                    CONTACT INFO
                  </h3>
                  <div className="w-2 h-2 bg-[#38FF62] rounded-full opacity-10 animate-pulse" />
                </div>
                
                <div className="space-y-4">
                  {[
                    { 
                      icon: Mail, 
                      text: personal.email, 
                      href: `mailto:${personal.email}`,
                      color: '#38FF62'
                    },
                    { 
                      icon: Phone, 
                      text: personal.phone, 
                      href: `tel:${personal.phone}`,
                      color: '#4ECDC4'
                    },
                    { 
                      icon: MapPin, 
                      text: personal.location, 
                      href: 'https://www.google.com/maps/place/Noida,+Uttar+Pradesh/@28.5221024,77.2370147,11z/data=!3m1!4b1!4m6!3m5!1s0x390ce5a43173357b:0x37ffce30c87cc03f!8m2!3d28.5355161!4d77.3910265!16zL20vMDN3dHow?entry=ttu&g_ep=EgoyMDI1MDgwNS4wIKXMDSoASAFQAw%3D%3D',
                      color: '#FFA726'
                    },
                    { 
                      icon: Linkedin, 
                      text: 'LinkedIn Profile', 
                      href: `${personal.linkedin}`,
                      color: '#45B7D1'
                    },
                    { 
                      icon: Github, 
                      text: 'GitHub Profile', 
                      href: `${personal.github}`,
                      color: '#c71fe4ff'
                    }
                  ].map(({ icon: Icon, text, href, color }, index) => (
                    <div key={index} className="group/item flex items-center space-x-3 p-2 hover:bg-[rgba(255, 255, 255, 1)] transition-all duration-300 cursor-pointer">
                      <div 
                        className="p-2 transition-all duration-300 group-hover/item:scale-110"
                        style={{ backgroundColor: `${color}20` }}
                      >
                        <Icon size={16} style={{ color }} />
                      </div>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-normal text-white hover:text-[#38FF62] transition-colors duration-300 flex-1  focus:outline-none"
                          style={{ 
                            fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                            fontSize: 'clamp(14px, 1.8vw, 16px)'
                          }}
                        >
                          {text}
                        </a>
                      ) : (
                        <span
                          className="font-normal text-[#232323] flex-1"
                          style={{ 
                            fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                            fontSize: 'clamp(14px, 1.8vw, 16px)'
                          }}
                        >
                          {text}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Status indicator for availability */}
                <div className="mt-6 pt-4 border-t border-[#38FF62]">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#38FF62] rounded-full animate-pulse" />
                    <span 
                      className="font-mono text-[12px] font-normal text-white uppercase tracking-[0.10em]"
                      style={{ fontFamily: 'ui-monospace, monospace' }}
                    >
                      AVAILABLE FOR OPPORTUNITIES
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        
      </div>
    </section>
  );
};

export default Hero;
