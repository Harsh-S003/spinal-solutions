import React from 'react';
import { ArrowRight, Smartphone, QrCode, ClipboardCheck } from 'lucide-react';

const ScanningAppBody = () => {
  return (
    <div className="w-full font-sans antialiased text-[#1e293b]">
      
      {/* =========================================================================
          SECTION 1: STEPS 1 - 3 (White Background Grid Layout)
          ========================================================================= */}
      <section className="bg-white py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Area: Steps 1-3 */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-6">
                
                {/* Step 1 Card */}
                <div className="flex gap-4">
                 
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed pt-0.5">
                    <span className="font-bold text-[#1e293b]">STEP 1</span> - Before downloading the app, please confirm that you have the correct iPhone to support 3D scanning. iPhone X, XS or later.
                  </p>
                </div>

                {/* Step 2 Card */}
                <div className="flex gap-4">
                 
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed pt-0.5">
                    <span className="font-bold text-[#1e293b]">STEP 2</span> - If you are reading this on iPhone, click on the O&P Solutions to go to the App Store for download. If you are reading this on your computer, open your native camera app and point your camera at the QR code to go to the App Store for download.
                  </p>
                </div>

                {/* Step 3 Card */}
                <div className="flex gap-4">
                
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed pt-0.5">
                    <span className="font-bold text-[#1e293b]">STEP 3</span> - Select "GET" to download the O&P Solutions Scanning App
                  </p>
                </div>

              </div>
            </div>

            {/* Right Action Area: App Click Target & Scan QR Box */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center justify-center text-center">
              
              {/* App Store Redirect Target Box */}
              <div className="flex flex-col items-center justify-center group">
                <a 
                  href="#app-store-link" 
                  className="w-48 h-48 bg-white border border-slate-200 hover:border-[#00a3e0] transition-all duration-300 rounded-[2.2rem] shadow-sm flex items-center justify-center p-6 mb-4 group-hover:shadow-md"
                >
                  <img 
                    src="/logo.png" 
                    alt="O&P Solutions App Store Icon" 
                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-102"
                  />
                </a>
                <a 
                  href="#app-store-link"
                  className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#00a3e0] transition-colors duration-200 border-b border-transparent group-hover:border-[#00a3e0]"
                >
                  CLICK HERE
                </a>
              </div>

              {/* QR Scanner Node Display Box */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-48 h-48 bg-white border border-slate-200 rounded-[2.2rem] shadow-sm flex items-center justify-center p-8 mb-4">
                  <img
                    src="/qr-code.webp"
                    alt="QR code"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  SCAN QR
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: STEPS 4 - 8 & FINALIZE (Dark Charcoal Background Section)
          ========================================================================= */}
      <section className="bg-[#1e293b] text-white py-16 md:py-24 relative overflow-hidden">
        {/* Subtle geometric angle line split element on top border to match design template styles */}
        <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Area: Step Configuration Lists */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 4 */}
              <div className="flex gap-4">
               
                <p className="text-sm md:text-base text-slate-300 leading-relaxed pt-0.5">
                  <span className="font-bold text-white">STEP 4</span> - You were given an access code from O&P Solutions via email, please have that handy when opening the app for the first time.
                </p>
              </div>

              {/* Step 5 */}
              <div className="flex gap-4">
                
                <p className="text-sm md:text-base text-slate-300 leading-relaxed pt-0.5">
                  <span className="font-bold text-white">STEP 5</span> - Once the app has downloaded to your device, open it by tapping the white O&P Solutions icon on the homepage of your device.
                </p>
              </div>

              {/* Step 6 */}
              <div className="flex gap-4">
                
                <p className="text-sm md:text-base text-slate-300 leading-relaxed pt-0.5">
                  <span className="font-bold text-white">STEP 6</span> - Enter your access from the email referenced in Step 4, Click "Continue".
                </p>
              </div>

              {/* Step 7 */}
              <div className="flex gap-4">
               
                <p className="text-sm md:text-base text-slate-300 leading-relaxed pt-0.5">
                  <span className="font-bold text-white">STEP 7</span> - Once you have authorized your device, please create an account.
                </p>
              </div>

              {/* Step 8 */}
              <div className="flex gap-4 pb-4">
              
                <p className="text-sm md:text-base text-slate-300 leading-relaxed pt-0.5">
                  <span className="font-bold text-white">STEP 8</span> - There are built-in slides in the app to provide educational content and scanning best practices. Please review these carefully. For more information, please review the document titled: <span className="text-[#00a3e0] font-medium underline cursor-pointer hover:text-white transition-colors duration-150">Scanning Best Practices</span>.
                </p>
              </div>

              {/* Final Bottom Execution Prompt */}
              <div className="pt-6 border-t border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-bold tracking-tight text-white uppercase">
                    BEGIN SCANNING
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Ready to map digital clinical configuration models.
                  </p>
                </div>
               
              </div>

            </div>

            {/* Right Content Area: Float-rendered Device Graphic Layout */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative bg-slate-800/60 p-6 rounded-[2.5rem] border border-slate-700/60 shadow-xl max-w-[280px] w-full backdrop-blur-sm transition-transform duration-300 hover:scale-[1.02]">
                
                {/* Simulated Notch Frame */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-slate-900 w-24 h-4 rounded-full z-20" />
                
                {/* Nested Application Surface Panel */}
                <div className="relative bg-white aspect-[9/19] rounded-[2rem] overflow-hidden flex flex-col justify-between p-6 items-center border-4 border-slate-900 z-10 shadow-inner">
                  <div className="w-full flex justify-center items-center flex-grow">
                    <img 
                      src="/logo.png" 
                      alt="O&P Active Application Screen Mock" 
                      className="w-4/5 h-auto object-contain"
                    />
                  </div>
                  
                  {/* Lower Partner Architecture Labels */}
                  <div className="w-full text-center border-t border-slate-100 pt-3">
                   
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ScanningAppBody;