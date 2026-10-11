import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { profile } from '../data/profile.js';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 pt-16 transition-colors duration-300">
      <div className="container-max text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
            Rithvik Panchumarthi
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
            {profile.headline}
          </p>
          
          {/* Description */}
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.4s'}}>
            Designing scalable data solutions and transforming complex datasets into actionable business insights. 
            Expertise spans the full data lifecycle from <span className="text-primary-600 dark:text-primary-400 font-semibold">ETL pipelines</span> and 
            <span className="text-primary-600 dark:text-primary-400 font-semibold"> cloud architecture</span> to 
            <span className="text-primary-600 dark:text-primary-400 font-semibold"> analytics</span> and 
            <span className="text-primary-600 dark:text-primary-400 font-semibold"> visualization</span>.
          </p>
          
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 animate-slide-up" style={{animationDelay: '0.6s'}}>
            {['Snowflake', 'Azure', 'Python', 'SQL', 'Power BI', 'Tableau'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full shadow-md text-sm font-medium hover:shadow-lg transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{animationDelay: '0.8s'}}>
            <button
              onClick={scrollToProjects}
              className="btn-primary inline-flex items-center gap-2"
            >
              View My Work
              <ArrowDown size={20} />
            </button>
            
            <a
              href="https://linktr.ee/rithvikpanchumarthi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Download size={20} />
              Resume & Links
            </a>
          </div>
          
          {/* Location */}
          <p className="text-gray-500 dark:text-gray-400 animate-slide-up" style={{animationDelay: '1s'}}>
            📍 Minneapolis, MN, USA (Open to Relocation)
          </p>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToProjects}
          className="text-gray-400 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
