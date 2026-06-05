import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="w-full bg-[#f8fafc] py-16 md:py-20 lg:py-24 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <span className="text-[#00a3e0] text-xs font-bold uppercase tracking-wider block mb-2">
          Get In Touch
        </span>
        <h1 className="text-[#1e293b] text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Contact Us
        </h1>
        <div className="w-12 h-1 bg-[#00a3e0] rounded mb-8" />
        <p className="text-[#475569] text-sm sm:text-base leading-relaxed font-medium max-w-md mb-12">
          Our team is available around the clock to support your clinical needs.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Phone & Fax */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-md p-8 space-y-5">
            <p className="text-slate-400 text-xs font-bold tracking-wider uppercase flex items-center gap-3 after:flex-1 after:h-px after:bg-slate-100">
              Phone & Fax
            </p>
            {[
              { label: 'Toll-Free Voice', value: '800-922-5155', href: 'tel:8009225155' },
              { label: 'Local Voice',     value: '770-922-2434', href: 'tel:7709222434' },
              { label: 'Toll-Free Fax',  value: '800-813-8139' },
              { label: 'Local Fax',      value: '770-922-2076' },
            ].map(({ label, value, href }) => (
              <div key={label} className="flex items-start gap-3 py-3 border-b border-slate-100 last:border-0 last:pb-0 first:pt-0">
                <div className="w-9 h-9 rounded-xl bg-[#e0f2fe] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-[#00a3e0]" />
                </div>
                <div>
                  <p className="text-[#1e293b] text-sm font-extrabold">{label}</p>
                  {href
                    ? <a href={href} className="text-[#475569] text-xs font-medium hover:text-[#00a3e0]">{value}</a>
                    : <span className="text-[#475569] text-xs font-medium">{value}</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Email & Address */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-md p-8 space-y-5">
            <p className="text-slate-400 text-xs font-bold tracking-wider uppercase flex items-center gap-3 after:flex-1 after:h-px after:bg-slate-100">
              Email & Address
            </p>
            <div className="flex items-start gap-3 py-3 border-b border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-[#e0f2fe] flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-[#00a3e0]" />
              </div>
              <div>
                <p className="text-[#1e293b] text-sm font-extrabold">Email</p>
                <a href="mailto:accounts@oandp.solutions" className="text-[#475569] text-xs font-medium hover:text-[#00a3e0]">
                  accounts@oandp.solutions
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3 py-3">
              <div className="w-9 h-9 rounded-xl bg-[#e0f2fe] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-[#00a3e0]" />
              </div>
              <div>
                <p className="text-[#1e293b] text-sm font-extrabold">Office Address</p>
                <span className="text-[#475569] text-xs font-medium block">2300 West Park Place, Suite 158</span>
                <span className="text-[#475569] text-xs font-medium block">Stone Mountain, GA 30087</span>
              </div>
            </div>
          </div>

        </div>

        {/* CTA Strip */}
        <div className="mt-10 bg-[#1e293b] rounded-3xl px-8 py-7 flex items-center justify-between gap-6 flex-wrap">
          <div>
            <p className="text-white text-base font-bold mb-1">Need Immediate Assistance?</p>
            <p className="text-slate-400 text-sm">Custom Spinal orders accepted 24/7/365 for emergency clinical needs.</p>
          </div>
          <a href="tel:8009225155"
            className="bg-[#00a3e0] text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-[#0284c7] transition-colors whitespace-nowrap">
            Call Toll-Free Now
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;