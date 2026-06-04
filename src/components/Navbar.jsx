import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  // Keeps track of the active tab to replicate the underlined active state
  // const [activeTab, setActiveTab] = useState('Home');
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const navLinks = ['Home', 'Products', 'Prosthetics', 'Order Forms', 'Contact', 'Customers'];
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Prosthetics", path: "/prosthetics" },
    { label: "Order Forms", path: "/order-forms" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`w-full sticky top-0 z-50 border-t-4 border-[#635bff] font-sans transition-all duration-300 ${
        scrolled ? "bg-[#f4f4f4]/80 backdrop-blur-md shadow-sm" : "bg-[#f4f4f4]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Side: Logo & Main Navigation */}
          <div className="flex items-center space-x-12">
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer">
              <img
                src="/logo.png"
                alt="O&P Solutions Logo"
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Main Nav Links (Hidden on mobile, adjust breakpoint as needed) */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <button
                    key={link.label}
                    onClick={() => navigate(link.path)}
                    className={`relative py-2 text-[15px] font-medium transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? "text-[#008cc1] font-semibold"
                        : "text-[#4a4a4a] hover:text-[#008cc1]"
                    }`}
                  >
                    {link.label}
                    {/* Underline for the active tab */}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#008cc1] rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side: Secondary Contact & Action Button */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#contact"
              className="text-[#008cc1] font-medium text-[15px] hover:underline cursor-pointer"
            >
              Contact
            </a>
            <button className="bg-[#00a3e0] cursor-pointer text-white font-bold py-2.5 px-6 rounded transition-all duration-200">
              Order Now
            </button>
          </div>

          {/* Simple Mobile Menu Toggle Button (Optional but good practice) */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
