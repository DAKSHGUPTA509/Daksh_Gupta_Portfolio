import React from 'react';
import { portfolioData } from '../mock/portfolioData';
import { GraduationCap, Calendar, Award, BadgeCheck } from 'lucide-react';

const About = () => {
  const { education, achievements, certifications } = portfolioData;

  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-r from-gray-900 to-black flex items-center overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        
        {/* Enhanced Section Header */}
        <div className="text-center mb-[95.2px] relative">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-[#38FF62] rounded-full opacity-20 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
            
          </div>
          <div className="flex items-center justify-center mb-6 relative z-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#38FF62]" />
            {/* You can import and use any icon, e.g., Award or GraduationCap, or use Zap for consistency */}
            <Award size={24} className="mx-6 text-[#38FF62] animate-pulse" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#38FF62]" />
          </div>
          
          <h2 
            className="font-normal text-white uppercase leading-none relative animate-fadeInUp z-10"
            style={{ 
              fontFamily: 'ui-sans-serif, system-ui, sans-serif',
              fontSize: 'clamp(40px, 8vw, 150px)'
            }}
          >
            About Me
           <div className="block h-4 sm:h-6 md:h-8"></div>
          {/* Glowing accent line below the name, centered relative to its parent */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1 bg-gradient-to-r from-[#38FF62] via-transparent to-[#38FF62] opacity-10 animate-pulse" />
          
          </h2>
          
          <div 
            className="font-mono text-[12px] md:text-[18px] font-normal text-white uppercase tracking-[0.1em] mt-6 animate-fadeInUp z-10"
            style={{ fontFamily: 'ui-monospace, monospace', animationDelay: '0.2s' }}
          >
            EDUCATION, ACHIEVEMENTS & CERTIFICATIONS
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-[auto] lg:gap-[60px]">
          
          {/* Education Section */}
          <div className="space-y-8 md:space-y-12 lg:space-y-[47.6px]">
            <div className="bg-black border border-[#38FF62] p-6 shadow-xl shadow-[#38FF62]/10 rounded-lg transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[#38FF62]/45">
              <div className="flex items-center mb-6">
                <GraduationCap size={24} className="text-[#38FF62] mr-4" />
                <h3 
                  className="font-mono text-[14px] font-normal text-white uppercase tracking-[0.05em]"
                  style={{ fontFamily: 'ui-monospace, monospace' }}
                >
                  EDUCATION
                </h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-[#38FF62] pl-6">
                    <div className="flex items-center mb-2">
                      <Calendar size={16} className="text-white mr-2" />
                      <span 
                        className="font-mono text-[10px] font-normal text-white uppercase tracking-[0.05em]"
                        style={{ fontFamily: 'ui-monospace, monospace' }}
                      >
                        {edu.period}
                      </span>
                      {edu.status === 'current' && (
                        <span className="bg-[#38FF62] text-[#232323] px-2 py-1 ml-2 font-mono text-[10px] uppercase">
                          CURRENT
                        </span>
                      )}
                    </div>
                    
                    <h4 
                      className="font-normal text-white mb-2"
                      style={{ 
                        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                        fontSize: 'clamp(16px, 2.5vw, 24px)'
                      }}
                    >
                      {edu.degree}
                    </h4>
                    
                    <p 
                      className="font-normal text-white mb-1"
                      style={{ 
                        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                        fontSize: 'clamp(14px, 1.8vw, 16px)'
                      }}
                    >
                      {edu.institution}
                    </p>
                    
                    {edu.grade && (
                      <p 
                        className="font-mono text-[12px] text-white uppercase tracking-[0.05em]"
                        style={{ fontFamily: 'ui-monospace, monospace' }}
                      >
                        {edu.grade}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-black border border-[#38FF62] p-6 shadow-xl shadow-[#38FF62]/10 rounded-lg transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[#38FF62]/45">
              <div className="flex items-center mb-6">
                <Award size={24} className="text-[#38FF62] mr-4" />
                <h3 
                  className="font-mono text-[14px] font-normal text-white uppercase tracking-[0.05em]"
                  style={{ fontFamily: 'ui-monospace, monospace' }}
                >
                  KEY ACHIEVEMENTS
                </h3>
              </div>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#38FF62] mt-2 mr-4 flex-shrink-0"></div>
                    <p 
                      className="font-normal text-white leading-[1.33]"
                      style={{ 
                        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                        fontSize: 'clamp(14px, 1.8vw, 16px)'
                      }}
                    >
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-8 md:mt-12 lg:mt-[47.6px]">
            <div className="bg-black border border-[#38FF62] p-6 shadow-xl shadow-[#38FF62]/10 rounded-lg transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[#38FF62]/45">
              <h3 
                className="font-mono text-[14px] font-normal text-white uppercase mb-6 tracking-[0.05em] flex items-center"
                style={{ fontFamily: 'ui-monospace, monospace' }}
              >
                <BadgeCheck size={20} className="text-[#38FF62] mr-2" />
                CERTIFICATIONS
              </h3>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="relative pb-4 last:pb-0">
                    <h4 
                      className="font-normal text-white mb-2 text-left"
                      style={{ 
                        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                        fontSize: 'clamp(16px, 2.5vw, 20px)'
                      }}
                    >
                      {cert.name}
                    </h4>
                    
                    <div className="flex justify-between items-center text-left">
                      <p 
                        className="font-normal text-[14px] text-white mb-1"
                        style={{ 
                          fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                          fontSize: 'clamp(14px, 1.8vw, 16px)'
                        }}
                      >
                        {cert.issuer}
                      </p>
                      
                      <span 
                        className="font-mono text-[14px] font-normal text-white uppercase tracking-[0.1em]"
                        style={{ fontFamily: 'ui-monospace, monospace' }}
                      >
                        {cert.year}
                      </span>
                    </div>
                    {/* Glowing accent lines below each certification except the last, both left and right */}
                    {index !== certifications.length - 1 && (
                      <>
                        <div className="absolute bottom-0 left-0 w-1/2 sm:w-2/3 h-1 bg-gradient-to-r from-[#38FF62] via-transparent to-transparent opacity-50 animate-pulse" />
                        <div className="absolute bottom-0 right-0 w-1/2 sm:w-2/3 h-1 bg-gradient-to-l from-[#38FF62] via-transparent to-transparent opacity-50 animate-pulse" />
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;