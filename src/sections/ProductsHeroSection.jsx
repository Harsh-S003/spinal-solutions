import React from 'react';
import { ArrowRight, BadgeCheck } from 'lucide-react';

const ProductsHeroSection = () => {
  return (
    <section className="w-full bg-[#f8fafc] py-16 md:py-24 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Layout: Balanced Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Content Block (Spans 5 Columns) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Context Badge */}
            <div>
              <span className="bg-[#e0f2fe] text-[#00a3e0] text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md inline-block mb-2">
                Advanced Orthotic Materials
              </span>
              
              {/* Main Headline */}
              <h1 className="text-[#1e293b] text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1]">
                Carbon Fiber Solutions:{' '}
                <span className="text-[#00a3e0] block sm:inline">
                  Strength Meets Precision.
                </span>
              </h1>
            </div>

            {/* Paragraph / Description */}
            <p className="text-[#475569] text-sm sm:text-base leading-relaxed font-medium">
              Spinal Solutions leverages high-performance carbon composites to create orthotics 
              that bridge the gap between featherlight mobility and structural integrity. 
              Engineered for the most demanding clinical applications.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button 
                className="bg-[#18191b] hover:bg-black text-white text-xs font-bold uppercase tracking-wider px-6 py-4 rounded shadow-md flex items-center justify-center space-x-2 transition-all duration-200 cursor-pointer"
              >
                <span>Submit Order Form</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
              
              <button 
                className="border-2 border-[#00a3e0] hover:bg-[#00a3e0]/5 text-[#00a3e0] text-xs font-bold uppercase tracking-wider px-6 py-[14px] rounded transition-all duration-200 text-center cursor-pointer"
              >
                View Technical Specs
              </button>
            </div>
          </div>

          {/* Right Side: Media Block (Spans 7 Columns) */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end w-full">
            
            {/* Main Image Wrapper */}
            <div className="relative w-full max-w-xl lg:max-w-none aspect-[1.2/1] rounded-2xl shadow-xl shadow-slate-200/80 overflow-hidden border border-slate-100">
              <img
                src="/carbonfiber.png"
                alt="Working with Carbon Fiber material"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Status Badge (Bottom Left Overlay on the Image block) */}
            <div className="absolute -bottom-5 left-4 sm:left-8 bg-white rounded-xl shadow-xl border border-slate-100 p-4 flex items-center space-x-3 max-w-[240px] animate-fade-in">
              <div className="p-2 bg-[#e2f1dd] rounded-lg text-[#4d7c0f] flex-shrink-0">
                <BadgeCheck className="w-5 h-5" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                  Material Status
                </span>
                <span className="text-slate-800 text-sm font-extrabold tracking-tight">
                  Grade-A Certified
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductsHeroSection;