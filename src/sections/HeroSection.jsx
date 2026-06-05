import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-screen flex items-center bg-black overflow-hidden font-sans">
      
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/homehero.png')" }}
      >
        {/* Dark overlay to match the moody, high-contrast look of image_4c06dc.png */}
        <div className="absolute inset-0 bg-black/55 backdrop-brightness-[0.75]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-0">
        <div className="max-w-3xl">
          
          

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Precision Orthotic Engineering.{' '}
            <span className="text-[#00a3e0] block sm:inline">
              Patient-First Solutions.
            </span>
          </h1>

          {/* Subheading / Description Paragraph */}
          <p className="text-base sm:text-lg text-gray-300 font-medium max-w-xl leading-relaxed mb-10">
            Your partner in high-performance spinal, carbon fiber, and 3D printed orthotics. 
            Engineering movement for a better quality of life.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button 
              className="bg-[#00a3e0] hover:bg-[#008cc1] text-white font-bold px-8 py-3.5 rounded shadow-lg shadow-black/30 transition-all duration-200 text-center cursor-pointer"
            >
              Get Started Today
            </button>
            
            <button 
              className="bg-[#e2e5e9] hover:bg-white text-[#2d3139] font-semibold px-6 py-3.5 rounded shadow-md transition-all duration-200 flex items-center justify-center space-x-2 group cursor-pointer"
            >
              <span>View Capabilities</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;