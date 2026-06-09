import React, { useState } from 'react';
import { ChevronDown, FileText } from 'lucide-react';

const OrderFormsSection = () => {
  // 1. Manage Active Tab
  const [activeTab, setActiveTab] = useState('ABOVE KNEE');
  
  // 2. Manage Accordion Open/Closed States
  const [openAccordions, setOpenAccordions] = useState({});

  const tabs = ['ABOVE KNEE', 'BELOW KNEE', 'SPECIALIZED', 'UPPER EXTREMITY'];

  // Mock data mapping images and specific forms to each category
  const categoryData = {
    'ABOVE KNEE': {
      image: '/above-knee.webp',
      forms: [
        { id: 'ak-definitive', title: 'Definitive Socket Order Form', link: '#download-ak-definitive' },
        { id: 'ak-test', title: 'Test Socket Order Form', link: '#download-ak-test' },
      ]
    },
    'BELOW KNEE': {
      image: '/CubBelowKnee.webp', // Replace with your actual assets when ready
      forms: [
        { id: 'bk-definitive', title: 'Transtibial Definitive Socket Form', link: '#' },
        { id: 'bk-test', title: 'Transtibial Test Socket Form', link: '#' },
        { id: 'bk-evaluation', title: 'Patient Evaluation Work Sheet', link: '#' },
      ]
    },
    'SPECIALIZED': {
      image: '/SPECIAL.webp',
      forms: [
        { id: 'spec-hip', title: 'Hip Disarticulation Fabrication Form', link: '#' },
      ]
    },
    'UPPER EXTREMITY': {
      image: '/UP.webp',
      forms: [
        { id: 'ue-transradial', title: 'Transradial Socket Configuration Form', link: '#' },
        { id: 'ue-transhumeral', title: 'Transhumeral Layout Blueprint', link: '#' },
      ]
    }
  };

  const toggleAccordion = (id) => {
    setOpenAccordions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const currentCategory = categoryData[activeTab];

  return (
    <section className="w-full bg-[#f8fafc] py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Tab Navigation Header --- */}
        <div className="border-b border-slate-200 mb-12 overflow-x-auto scrollbar-none">
          <div className="flex space-x-1 min-w-max">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3.5 text-xs font-bold uppercase tracking-wider border-t border-x rounded-t-lg transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#00a3e0] border-slate-200 border-b-white translate-y-[1px] relative z-10'
                      : 'bg-[#f1f5f9] text-[#1e293b]/70 border-transparent hover:bg-slate-100 hover:text-[#1e293b]'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* --- Content Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[400px]">
          
          {/* Left Column: Product Image Asset */}
          <div className="md:col-span-4 flex justify-center items-center bg-white p-6 rounded-xl border border-slate-100 shadow-sm h-full max-h-[450px]">
            <img
              src={currentCategory.image}
              alt={`${activeTab} Fabrication Display`}
              className="max-h-full object-contain mix-blend-multiply transition-transform duration-300 hover:scale-102"
            />
          </div>

          {/* Right Column: Dynamic Document Accordions */}
          <div className="md:col-span-8 flex flex-col justify-start h-full pt-4">
            <div className="border-t border-slate-300">
              {currentCategory.forms.map((form) => {
                const isOpen = !!openAccordions[form.id];
                return (
                  <div key={form.id} className="border-b border-slate-300 transition-colors duration-150">
                    
                    {/* Accordion Row Trigger */}
                    <button
                      onClick={() => toggleAccordion(form.id)}
                      className="w-full flex items-center justify-between py-5 text-left text-[#1e293b] hover:text-[#00a3e0] font-bold text-base transition-colors duration-200 group cursor-pointer"
                    >
                      <span>{form.title}</span>
                      <ChevronDown 
                        className={`w-5 h-5 text-slate-400 group-hover:text-[#00a3e0] transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-[#00a3e0]' : ''
                        }`} 
                      />
                    </button>

                    {/* Accordion Smooth Slide Content */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="p-4 bg-white rounded-lg border border-slate-100 shadow-inner flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="text-sm text-slate-600 flex items-center gap-2">
                          <FileText className="w-4 h-4 text-[#00a3e0]" />
                          <span>Complete digital configuration model or download PDF markup file.</span>
                        </div>
                        <a
                          href={form.link}
                          className="inline-flex items-center justify-center bg-[#00a3e0] hover:bg-[#008cc1] text-white text-xs font-bold tracking-wide uppercase px-4 py-2 rounded transition-colors duration-200 text-center"
                        >
                          Access Digital Form
                        </a>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OrderFormsSection;