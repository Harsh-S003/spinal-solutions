import React from 'react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

const FabricationPortfolio = () => {
  const portfolios = [
    {
      title: 'Carbon Fiber',
      image: '/carbonfiber.png',
      link: '#carbon-fiber',
      gridClass: 'md:col-span-2 h-[280px] md:h-[340px]',
    },
    {
      title: '3D Printed',
      image: '/3dprint.png',
      link: '#3d-printed',
      gridClass: 'md:col-span-1 h-[280px] md:h-[340px]',
    },
    {
      title: 'Lower Extremity',
      image: '/lowerextremity.png',
      link: '#lower-extremity',
      gridClass: 'md:col-span-1 h-[280px] md:h-[340px]',
    },
    {
      title: 'Prosthetics',
      image: '/prosthetics.png',
      link: '#prosthetics',
      gridClass: 'md:col-span-2 h-[280px] md:h-[340px]',
    },
  ];

  return (
    <section className="w-full bg-[#f8fafc] py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-4">
          <div>
            <span className="text-[#00a3e0] text-xs font-bold uppercase tracking-wider block mb-2">
              Technical Capabilities
            </span>
            <h2 className="text-[#1e293b] text-3xl font-bold tracking-tight">
              Specialized Fabrication Portfolios
            </h2>
          </div>
          
          <a 
            href="#all-products" 
            className="inline-flex items-center text-[#00a3e0] hover:text-[#008cc1] text-sm font-bold transition-colors duration-200 group self-start sm:self-auto"
          >
            <span>View All Products</span>
            <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolios.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden shadow-sm border border-slate-100 group ${item.gridClass}`}
            >
              {/* Card Image Asset */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Dark Overlay (Stronger at bottom for label legibility) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />

              {/* Text Layer Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                <h3 className="text-white text-base font-bold tracking-wide mb-1">
                  {item.title}
                </h3>
                <a
                  href={item.link}
                  className="inline-flex items-center text-[#71a82b] hover:text-[#82be32] text-xs font-bold tracking-wide uppercase transition-colors duration-200"
                >
                  <span>Explore Category</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 flex-shrink-0" strokeWidth={2.5} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FabricationPortfolio;