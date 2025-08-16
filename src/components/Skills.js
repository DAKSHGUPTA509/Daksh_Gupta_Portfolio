import React, { useState, useEffect } from 'react';
import { portfolioData } from '../mock/portfolioData';
import { Code, Database, BarChart3, Wrench, Brain, Users, Zap, Award, TrendingUp } from 'lucide-react';
import SkillChart from './SkillChart';

const Skills = () => {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: "PROGRAMMING LANGUAGES",
      icon: Code,
      skills: skills.languages,
      color: "#38FF62",
      gradient: "from-[#38FF62] to-[#2AE052]",
      description: "Core programming languages for ML & Data Science"
    },
    {
      title: "LIBRARIES & FRAMEWORKS",
      icon: Database,
      skills: skills.libraries,
      color: "#4ECDC4",
      gradient: "from-[#4ECDC4] to-[#44B3B9]",
      description: "Essential libraries for data manipulation and ML"
    },
    {
      title: "VISUALIZATION TOOLS",
      icon: BarChart3,
      skills: skills.visualization,
      color: "#FFA726",
      gradient: "from-[#FFA726] to-[#FF9800]",
      description: "Tools for creating compelling data visualizations"
    },
    {
      title: "TOOLS & PLATFORMS",
      icon: Wrench,
      skills: skills.tools,
      color: "#45B7D1",
      gradient: "from-[#45B7D1] to-[#3A9BC1]",
      description: "Development tools and cloud platforms"
    },
    {
      title: "CORE COMPETENCIES",
      icon: Brain,
      skills: skills.core,
      color: "#AB47BC",
      gradient: "from-[#AB47BC] to-[#9C27B0]",
      description: "Specialized skills in machine learning and data science"
    },
    {
      title: "SOFT SKILLS",
      icon: Users,
      skills: skills.soft,
      color: "#FF6B6B",
      gradient: "from-[#FF6B6B] to-[#FF5252]",
      description: "Interpersonal and communication skills"
    }
  ];

  // Auto-rotate active category
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveCategory(prev => (prev + 1) % skillCategories.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isVisible, skillCategories.length]);

  return (
    <section id="skills" className="relative py-[95.2px] bg-gradient-to-r from-gray-900 to-black flex items-center overflow-hidden">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
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

      <div className="relative max-w-[1920px] mx-auto px-6 md:px-12 z-10">
        
        {/* Enhanced Section Header */}
        <div className="text-center mb-[95.2px]">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#38FF62]" />
            <Zap size={24} className="mx-6 text-[#38FF62] animate-pulse" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#38FF62]" />
          </div>
          
          <h2 
            className="font-normal text-white uppercase leading-none relative animate-fadeInUp"
            style={{ 
              fontFamily: 'ui-sans-serif, system-ui, sans-serif',
              fontSize: 'clamp(40px, 8vw, 150px)'
            }}
          >
            TECHNICAL SKILLS
            <div className="block h-4 sm:h-6 md:h-8"></div>
            {/* Glowing underline effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1 bg-gradient-to-r from-[#38FF62] via-transparent to-[#38FF62] opacity-10 animate-pulse"></div>
          </h2>
          
          <div 
            className="font-mono text-[12px] md:text-[18px] font-normal text-white uppercase tracking-[0.2em] mt-6 animate-fadeInUp"
            style={{ fontFamily: 'ui-monospace, monospace', animationDelay: '0.2s' }}
          >
            EXPERTISE & COMPETENCIES
          </div>
        </div>

        {/* Interactive Skills Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[47.6px] mb-[95.2px]">
          
          {/* Category Navigation */}
          <div className="lg:col-span-4 space-y-4">
            <h3 
              className="font-mono text-[18px] font-normal text-white uppercase tracking-[0.05em] mb-6 flex items-center"
              style={{ fontFamily: 'ui-monospace, monospace' }}
            >
              <Award size={20} className="mr-2 text-white" />
              SKILL CATEGORIES
            </h3>
            
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              const isActive = index === activeCategory;
              
              return (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`
                    w-full text-left p-4 border transition-all duration-500 group relative overflow-hidden
                    ${isActive 
                      ? 'border-[#38FF62] bg-gradient-to-r from-[rgba(56,255,98,0.1)] to-transparent scale-105' 
                      : 'border-white hover:border-[rgba(56,255,98,0.5)] hover:bg-[rgba(56,255,98,0.05)]'
                    }
                  `}
                >
                  {/* Animated background */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 transition-opacity duration-500 ${isActive ? 'opacity-5' : 'group-hover:opacity-5'}`} 
                  />
                  
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div 
                        className={`p-2 transition-all duration-500 ${
                          isActive 
                            ? 'scale-110 rotate-12' 
                            : 'group-hover:scale-110 group-hover:rotate-6'
                        }`}
                        style={{ backgroundColor: `${category.color}20` }}
                      >
                        <IconComponent 
                          size={20} 
                          style={{ color: category.color }}
                          className={isActive ? 'animate-pulse' : ''}
                        />
                      </div>
                      
                      <div>
                        <h4 
                          className={`font-mono text-[12px] font-normal uppercase tracking-[0.05em] transition-colors duration-300 ${
                            isActive ? 'text-[#38FF62]' : 'text-white group-hover:text-[#38FF62]'
                          }`}
                          style={{ fontFamily: 'ui-monospace, monospace' }}
                        >
                          {category.title}
                        </h4>
                        <p 
                          className="font-normal text-white text-[12px] mt-1"
                          style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
                        >
                          {category.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Skill count badge */}
                    <div 
                      className={`px-2 py-1 font-mono text-[10px] text-white font-normal uppercase tracking-[0.05em] border transition-all duration-300 ${
                        isActive 
                          ? 'bg-[#38FF62] text-black border-[#38FF62]' 
                          : 'bg-[rgba(35,35,35,0.05)] text-[rgba(35,35,35,0.7)] border-[rgba(248, 245, 245, 1)] group-hover:border-[#38FF62]'
                      }`}
                      style={{ fontFamily: 'ui-monospace, monospace' }}
                    >
                      {category.skills.length.toString().padStart(2, '0')}
                    </div>
                  </div>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#38FF62] animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Category Skills Display */}
          <div className="lg:col-span-8">
            <div className="bg-black border border-[#38FF62] p-8 transition-all duration-1500 hover:shadow-[0_8px_32px_rgba(35,35,35,0.1)] relative overflow-hidden">
              
              {/* Animated background pattern */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${skillCategories[activeCategory].gradient} opacity-5 transition-opacity duration-500`}
              />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div 
                      className="p-3 bg-gradient-to-br transition-all duration-500"
                      style={{ background: `linear-gradient(135deg, ${skillCategories[activeCategory].color}20, ${skillCategories[activeCategory].color}10)` }}
                    >
                      {React.createElement(skillCategories[activeCategory].icon, {
                        size: 20,
                        style: { color: skillCategories[activeCategory].color }
                      })}
                    </div>
                    <div>
                      <h3 
                        className="font-mono text-[13px] font-normal text-white uppercase tracking-[0.05em]"
                        style={{ fontFamily: 'ui-monospace, monospace' }}
                      >
                        {skillCategories[activeCategory].title}
                      </h3>
                      <p 
                        className="font-normal text-[rgba(250, 246, 246, 0.96)] text-[14px] mt-1"
                        style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
                      >
                        {skillCategories[activeCategory].description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <TrendingUp size={16} className="text-[#38FF62] animate-pulse" />
                    <span 
                      className="font-mono text-[13px] font-normal text-white uppercase tracking-[0.05em]"
                      style={{ fontFamily: 'ui-monospace, monospace' }}
                    >
                      {skillCategories[activeCategory].skills.length} SKILLS
                    </span>
                  </div>
                </div>

                {/* Enhanced Skill Chart */}
                <SkillChart 
                  key={activeCategory}
                  skills={skillCategories[activeCategory].skills}
                  title={skillCategories[activeCategory].title}
                  color={skillCategories[activeCategory].color}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[47.6px]">
          {[
            { 
              label: "PROGRAMMING LANGUAGES", 
              value: skills.languages.length, 
              suffix: "+", 
              icon: Code,
              color: "#06f83bff",
              gradient: "from-[#38FF62] to-[#2AE052]"
            },
            { 
              label: "ML LIBRARIES", 
              value: skills.libraries.length, 
              suffix: "+", 
              icon: Database,
              color: "#4ECDC4",
              gradient: "from-[#4ECDC4] to-[#44B3B9]"
            },
            { 
              label: "VISUALIZATION TOOLS", 
              value: skills.visualization.length, 
              suffix: "", 
              icon: BarChart3,
              color: "#FFA726",
              gradient: "from-[#FFA726] to-[#FF9800]"
            },
            { 
              label: "YEARS OF CODING", 
              value: "4", 
              suffix: "+", 
              icon: Zap,
              color: "#AB47BC",
              gradient: "from-[#AB47BC] to-[#9C27B0]"
            }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            
            return (
              <div 
                key={index} 
                className="group relative text-center bg-black border border-[#38FF62] p-6 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-[0_8px_32px_rgba(35,35,35,0.1)] overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative z-10 flex justify-center mb-4">
                  <div 
                    className="p-3 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                    style={{ backgroundColor: `${stat.color}60` }}
                  >
                    <IconComponent 
                      size={24} 
                      style={{ color: stat.color }}
                      // className="group-hover:animate-pulse"
                    />
                  </div>
                </div>
                
                {/* Value */}
                <div 
                  className="relative z-10 font-normal text-white leading-none mb-2 group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                    fontSize: 'clamp(32px, 6vw, 64px)'
                  }}
                >
                  {stat.value}{stat.suffix}
                </div>
                
                {/* Label */}
                <div 
                  className="relative z-10 font-mono text-[12px] md:text-[12px] font-normal text-white uppercase tracking-[0.05em] group-hover:text-[#38FF62] opacity-100 transition duration-500"
                  style={{ fontFamily: 'ui-monospace, monospace' }}
                >
                  {stat.label}
                </div>
                
                {/* Glowing border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#38FF62] to white rounded-lg blur-xl opacity-30 group-hover:opacity-50 transition duration-1500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;