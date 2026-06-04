import React from 'react';
import { CalendarDays, Clock, Plane, Calendar, Truck } from 'lucide-react';

const OrderingLogisticsSection = () => {
  return (
    <section className="w-full bg-[#f8fafc] py-16 md:py-20 lg:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Title & Copy (Takes up 5 cols on large screens) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            <div>
              <span className="text-[#00a3e0] text-xs font-bold uppercase tracking-wider block mb-2">
                Operations
              </span>
              <h2 className="text-[#1e293b] text-4xl sm:text-5xl font-bold tracking-tight">
                Ordering & Logistics
              </h2>
            </div>
            
            <p className="text-[#475569] text-sm sm:text-base leading-relaxed font-medium">
              We offer unmatched availability and rapid turnaround times to support your clinical needs. 
              Rest assured that our staff will be there when you need us.
            </p>

            {/* 24/7 Availability Highlight Box */}
            <div className="bg-[#e0f2fe] border border-[#00a3e0]/30 rounded-xl p-5 flex items-start space-x-4 max-w-md">
              <div className="p-2 bg-white rounded-lg shadow-sm text-[#00a3e0] flex-shrink-0">
                <CalendarDays className="w-6 h-6" strokeWidth={2} />
              </div>
              <div className="flex flex-col space-y-1">
                <h4 className="text-[#0369a1] text-sm font-bold">
                  24/7 Availability
                </h4>
                <p className="text-[#0369a1] text-[13px] leading-relaxed font-medium">
                  Custom Spinal orders are accepted 24/7/365 to accommodate emergency clinical needs.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Schedule Card (Takes up 7 cols on large screens) */}
          <div className="lg:col-span-7 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden w-full h-full min-h-[520px]">
            
            {/* Card Header */}
            <div className="bg-[#f1f5f9] px-6 py-5 flex items-center justify-between border-b border-slate-200">
              <h3 className="text-[#1e293b] text-ef-base font-bold">
                Fabrication Cutoff Times
              </h3>
              <span className="bg-[#e2f1dd] text-[#4d7c0f] text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full">
                Live Schedule
              </span>
            </div>

            {/* Card Body Grid */}
            <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-8 h-full">
              
              {/* Grid Column 1: Mon - Fri Deliveries */}
              <div className="flex flex-col space-y-5">
                <h4 className="text-slate-400 text-xs font-bold tracking-wider uppercase mb-1">
                  Mon - Fri Deliveries
                </h4>
                
                {/* 4:00 PM Cutoff */}
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-[#00a3e0] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-800 text-sm font-extrabold">4:00 PM Cutoff</p>
                    <p className="text-slate-400 text-xs font-medium">Standard Ground Delivery</p>
                  </div>
                </div>

                {/* 6:30 PM Cutoff */}
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-[#00a3e0] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-800 text-sm font-extrabold">6:30 PM Cutoff</p>
                    <p className="text-slate-400 text-xs font-medium">Overnight Express Delivery</p>
                  </div>
                </div>

                {/* After 6:30 PM */}
                <div className="flex items-start space-x-3">
                  <Plane className="w-5 h-5 text-[#00a3e0] mt-0.5 flex-shrink-0 rotate-45" />
                  <div>
                    <p className="text-slate-800 text-sm font-extrabold">After 6:30 PM</p>
                    <p className="text-slate-400 text-xs font-medium">Delta Dash (Airport Pickup Only)</p>
                  </div>
                </div>
              </div>

              {/* Grid Column 2: Weekend Service & Local Delivery */}
              <div className="flex flex-col space-y-5">
                <h4 className="text-slate-400 text-xs font-bold tracking-wider uppercase mb-1">
                  Weekend Service
                </h4>

                {/* 1:00 PM Saturday */}
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-[#00a3e0] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-800 text-sm font-extrabold">1:00 PM Saturday</p>
                    <p className="text-slate-400 text-xs font-medium">Next Business Day Delivery</p>
                  </div>
                </div>

                {/* Sunday Orders */}
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-[#00a3e0] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-800 text-sm font-extrabold">Sunday Orders</p>
                    <p className="text-slate-400 text-xs font-medium">Exclusively via Delta Dash</p>
                  </div>
                </div>

                {/* Local Delivery Callout Sub-card */}
                <div className="bg-[#f8fafc] border border-slate-100 rounded-xl p-4 flex items-start space-x-3 mt-2">
                  <Truck className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-800 text-xs font-extrabold">
                      Local Delivery (75mi radius)
                    </p>
                    <p className="text-slate-400 text-[11px] leading-relaxed mt-1 font-medium">
                      Available same day. Please allow 3 hours for fabrication time for delivery or pick-up.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OrderingLogisticsSection;