import React from 'react';
// Importing closely matching icons from lucide-react
import { Award, UserCheck, ShieldCheck } from 'lucide-react';

const BannerStrip = () => {
  const features = [
    {
      title: 'Quality Excellence',
      description: 'ISO-standard manufacturing precision.',
      icon: Award,
      iconColor: 'text-[#008cc1]',
      bgColor: 'bg-[#dbeafe]', // Light blue box background
    },
    {
      title: 'Patient-First',
      description: 'Tailored solutions for clinical success.',
      icon: UserCheck,
      iconColor: 'text-[#2d5a1e]',
      bgColor: 'bg-[#bbf7d0]', // Soft green box background
    },
    {
      title: 'Expert Engineering',
      description: 'Led by specialists in advanced orthotics.',
      icon: ShieldCheck,
      iconColor: 'text-[#4b5563]',
      bgColor: 'bg-[#e5e7eb]', // Subtle gray box background
    },
  ];

  return (
    <section className="w-full bg-[#f4f6f8] py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive grid: 1 column on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center">
          
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="flex items-start space-x-4 p-2 transition-all duration-200"
              >
                {/* Icon Container with custom background color */}
                <div className={`p-3 rounded-xl flex-shrink-0 flex items-center justify-center ${feature.bgColor}`}>
                  <IconComponent className={`w-6 h-6 ${feature.iconColor}`} strokeWidth={2.2} />
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col space-y-1">
                  <h3 className="text-[#1f2937] text-base font-semibold tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-[#4b5563] text-[13px] leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default BannerStrip;