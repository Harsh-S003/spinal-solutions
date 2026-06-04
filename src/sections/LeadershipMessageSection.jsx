import React from 'react';

const LeadershipMessageSection = () => {
  return (
    <section className="bg-[#111111] text-gray-300 font-sans py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className="flex flex-col space-y-12">
            <div>
              <p className="text-[#64aa27] text-sm font-semibold uppercase tracking-widest mb-4">
                Leadership Statement
              </p>
              <h1 className="text-white text-5xl md:text-6xl font-extrabold tracking-tighter leading-tight">
                A Message from the Owner
              </h1>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-gray-100 font-normal">
              <p>
                Why should you choose Spinal Solutions as your Orthotic Central Fab?
                Because I have built my company around people. Good people that
                care about their work, about the practitioner, and especially about the
                patient. We go to great lengths to insure that everyone is 100%
                satisfied. In fact, we won't rest until that happens.
              </p>
              <p>
                Quality is important to us because it is a reflection of our own
                personalities and of our daily commitment to excellence. As business
                owners, we understand that we must take ownership in every orthotic
                that we fit to the patient. With ownership comes responsibility.
              </p>
              <p>
                Know that your can always reach me when you need me. Anytime of
                the day or night, weekends or holidays. Spinal Solutions will become
                and extension of your facility. We stand ready to serve as needed.
              </p>
            </div>

            <div className="flex items-center space-x-4 pt-10">
              <div className="h-[3px] w-20 bg-[#64aa27] rounded-full"></div>
              <h2 className="text-white text-xl font-bold tracking-tight uppercase">
                Mark Dentler
              </h2>
            </div>
          </div>

          {/* Right Column - Image & Quote */}
          <div className="relative group">
            <div className="aspect-[4/5] md:aspect-[1/1.2] rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-300 group-hover:scale-[1.01]">
              <img
                src="/homehero.png"
                alt="Craftsmanship"
                className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-[0.8] transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/90 group-hover:to-black/95 transition-all duration-300"></div>
            </div>

            {/* Overlaid Quote Block */}
            <div className="absolute bottom-10 left-10 right-10 flex flex-col items-center bg-black/60 backdrop-blur-md p-10 rounded-2xl border border-white/5 shadow-2xl space-y-4">
              <p className="text-[#64aa27] text-lg font-semibold tracking-widest uppercase">
                Since 2024
              </p>
              <blockquote className="text-center">
                <p className="text-white text-3xl font-extrabold leading-snug tracking-tight">
                  "Engineering movement for a better quality of life."
                </p>
              </blockquote>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default LeadershipMessageSection;