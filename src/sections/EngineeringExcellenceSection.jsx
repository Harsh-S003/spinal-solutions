import React from 'react';
import { Scale, Activity, Compass, ShieldCheck, CheckCircle2 } from 'lucide-react';

const EngineeringExcellenceSection = () => {
  return (
    <section className="w-full bg-[#f8fafc] py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-[#1e293b] text-2xl sm:text-3xl font-extrabold tracking-tight">
            Precision Engineering Excellence
          </h2>
          <div className="h-[3px] w-12 bg-[#71a82b] rounded-full mt-3" />
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Ultra-Lightweight */}
          <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm flex flex-col space-y-4">
            <div className="text-[#00a3e0]">
              <Scale className="w-6 h-6" strokeWidth={2.5} />
            </div>
            <h3 className="text-[#1e293b] text-lg font-bold tracking-tight">
              Ultra-Lightweight
            </h3>
            <p className="text-[#475569] text-[13px] sm:text-sm leading-relaxed font-medium">
              Our carbon fiber components reduce total orthotic weight by up to 60% 
              compared to traditional thermoplastics, drastically reducing patient fatigue 
              during extended wear.
            </p>
          </div>

          {/* Card 2: Structural Integrity */}
          <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm flex flex-col space-y-4">
            <div className="text-[#00a3e0]">
              <Activity className="w-6 h-6" strokeWidth={2.5} />
            </div>
            <h3 className="text-[#1e293b] text-lg font-bold tracking-tight">
              Structural Integrity
            </h3>
            <p className="text-[#475569] text-[13px] sm:text-sm leading-relaxed font-medium">
              Engineered with a high strength-to-weight ratio, ensuring maximum 
              support and stability for complex spinal and lower extremity pathologies 
              without the bulk.
            </p>
          </div>

          {/* Card 3: Custom-Contoured */}
          <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm flex flex-col space-y-4">
            <div className="text-[#00a3e0]">
              <Compass className="w-6 h-6" strokeWidth={2.5} />
            </div>
            <h3 className="text-[#1e293b] text-lg font-bold tracking-tight">
              Custom-Contoured
            </h3>
            <p className="text-[#475569] text-[13px] sm:text-sm leading-relaxed font-medium">
              Using advanced vacuum infusion and 3D modeling, we match the patient's 
              unique anatomy with surgical precision, providing a perfect fit every time.
            </p>
          </div>

          {/* Card 4: Optimized Energy Return (Large Dark Card spanning 2 columns) */}
          <div className="bg-[#111214] rounded-2xl p-8 md:col-span-2 flex flex-col justify-between space-y-6">
            <div className="flex flex-col space-y-3">
              <span className="text-[#71a82b] text-[11px] font-bold uppercase tracking-wider">
                Clinical Advantage
              </span>
              <h3 className="text-white text-2xl font-bold tracking-tight">
                Optimized Energy Return
              </h3>
              <p className="text-gray-400 text-[13px] sm:text-sm leading-relaxed font-medium max-w-xl">
                The inherent spring-like properties of our carbon layouts provide dynamic energy 
                storage and return, assisting gait mechanics and promoting a more natural 
                physiological movement pattern.
              </p>
            </div>

            {/* Checklists */}
            <div className="flex flex-col space-y-2.5 pt-2">
              <div className="flex items-center space-x-2.5 text-gray-200 text-[13px] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#71a82b] flex-shrink-0" strokeWidth={2.5} />
                <span>Optimized ply-layering for specific rigidity</span>
              </div>
              <div className="flex items-center space-x-2.5 text-gray-200 text-[13px] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#71a82b] flex-shrink-0" strokeWidth={2.5} />
                <span>Heat-resistant curing processes</span>
              </div>
            </div>
          </div>

          {/* Card 5: Built for Longevity */}
          <div className="bg-[#e5e7eb]/60 rounded-2xl p-8 flex flex-col justify-between space-y-6">
            <div className="flex flex-col space-y-4">
              <h3 className="text-[#1e293b] text-lg font-bold tracking-tight">
                Built for Longevity
              </h3>
              <p className="text-[#475569] text-[13px] sm:text-sm leading-relaxed font-medium">
                Unlike standard plastics that creep and deform over time, our carbon solutions 
                maintain their shape and corrective properties for the entire lifecycle of the device.
              </p>
            </div>

            {/* Bottom Accent Link */}
            <div className="flex items-center space-x-2 text-[#00a3e0] text-[13px] font-bold tracking-tight pt-2">
              <span>Lifetime Structural Warranty</span>
              <ShieldCheck className="w-4 h-4" strokeWidth={2.5} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EngineeringExcellenceSection;