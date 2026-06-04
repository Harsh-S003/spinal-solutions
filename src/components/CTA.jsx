import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#f4f4f4] py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-[#0A1128] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Left: Text Content */}
          <div className="flex flex-col gap-4 max-w-xl">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#00a3e0]">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-white uppercase leading-[0.95]">
              Ready to Experience Precision?
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed font-medium">
              Download our carbon fiber order forms or submit via our online portal. We offer same-day processing for standard custom spinal orders.
            </p>
          </div>

          {/* Right: Buttons */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => navigate('/order-forms')}
              className="bg-[#00a3e0] hover:bg-[#0091c7] text-white text-xs font-black uppercase tracking-widest px-10 py-4 transition-colors duration-150 cursor-pointer whitespace-nowrap"
            >
              Submit Order Form
            </button>
            <button
              className="bg-transparent hover:bg-white/10 text-white text-xs font-black uppercase tracking-widest px-10 py-4 border border-white/30 hover:border-white/60 transition-colors duration-150 cursor-pointer whitespace-nowrap"
            >
              Download PDF Form
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;