import React from 'react';
import { Link } from 'react-router-dom';
// Importing the icons from lucide-react
import { MapPin, Phone, Mail, Printer } from 'lucide-react';

const Footer = () => {
  return (
    // <footer className="w-full bg-[#18191b] text-[#9ca3af] font-sans pt-12 pb-8 border-b-4 border-[#635bff]">
    <footer className="w-full bg-[#18191b] text-[#9ca3af] font-sans pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top/Main Row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-10">
          
          {/* Left Column: Company Name & Contact Info */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-white text-xl font-bold tracking-wide">
              Spinal Solutions
            </h2>
            
            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-[13px] text-gray-300">
              
              {/* Address */}
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p>2300 West Park Place, Suite 158</p>
                  <p>Stone Mountain, Ga 30087</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <p>800-922-5155 (Toll-Free)</p>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <a href="mailto:spinalsolution@mindspring.com" className="hover:underline hover:text-white">
                  spinalsolution@mindspring.com
                </a>
              </div>

              {/* Fax */}
              <div className="flex items-center space-x-2.5">
                <Printer className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <p>800-813-8139 (Fax)</p>
              </div>
              
            </div>
          </div>

          {/* Right Column: Navigation Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 md:pt-0">
            <Link
              to="/privacy-policy"
              className="text-[13px] font-medium text-gray-300 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-[13px] font-medium text-gray-300 hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>

        </div>

        {/* Bottom Row: Copyright */}
        <div className="pt-4 text-[13px] text-[#71a82b] font-medium">
          © 2026 Spinal Solutions. Precision Orthotic Engineering.
        </div>

      </div>
    </footer>
  );
};

export default Footer;