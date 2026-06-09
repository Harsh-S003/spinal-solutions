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

  // const navLinks = [
  //   { label: "Home", path: "/" },
  //   { label: "Products", path: "/products" },
  //   { label: "Prosthetics", path: "/prosthetics" },
  //   { label: "Order Forms", path: "/order-forms" },
  //   { label: "Contact", path: "/contact" },
  // ];
  const navLinks = [
    { label: "Home", path: "/" },
    {
      label: "Products",
      subLinks: [
        { label: "Carbon Fiber", path: "/carbon-fiber" },
        { label: "Spinal Products", path: "/products/spinal" },
        { label: "3D Printed Products", path: "/products/3d-printed" },
        { label: "Distributed Products", path: "/products/distributed" },
        { label: "Lower Extremity", path: "/products/lower-extremity" },
        { label: "Insoles", path: "/products/insoles" },
      ],
    },
    { label: "Prosthetics", path: "/prosthetics" },
    { label: "Order Forms", path: "/order-forms" },
    { label: "Contact", path: "/contact" },
    {
      label: "Customers",
      subLinks: [
        { label: "Submit Order Form", path: "/customers/submit-order-form" },
        { label: "O&P Scanning App", path: "/customers/o-p-scanning-app" },
      ],
    },
  ];

    // <nav
    //   className={`w-full sticky top-0 z-50 border-t-4 border-[#635bff] font-sans transition-all duration-300 ${
    //     scrolled ? "bg-[#f4f4f4]/80 backdrop-blur-md shadow-sm" : "bg-[#f4f4f4]"
    //   }`}
    // >
    return (
    <nav
      className={`w-full sticky top-0 z-50 font-sans transition-all duration-300 ${
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
            {/* <div className="hidden md:flex items-center space-x-6">
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
                 
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#008cc1] rounded-full" />
                    )}
                  </button>
                );
              })}
            </div> */}
            {/* Main Nav Links with Hover Dropdown */}
            <div className="hidden md:flex items-center space-x-6 h-20">
              {navLinks.map((link) => {
                const isActive =
                  (link.path && location.pathname === link.path) ||
                  (link.subLinks && link.subLinks.some((sub) => location.pathname.startsWith(sub.path)));
                const hasDropdown = !!link.subLinks;

                return (
                  <div
                    key={link.label}
                    className={`relative flex items-center h-full ${hasDropdown ? "group" : ""}`}
                  >
                    <button
                      type="button"
                      onClick={link.path ? () => navigate(link.path) : undefined}
                      className={`relative py-2 text-[15px] font-medium transition-colors duration-200 cursor-pointer ${
                        isActive
                          ? "text-[#008cc1] font-semibold"
                          : "text-[#4a4a4a] hover:text-[#008cc1]"
                      }`}
                      aria-haspopup={hasDropdown ? "menu" : undefined}
                      aria-expanded={hasDropdown ? isActive : undefined}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#008cc1] rounded-full z-20" />
                      )}
                    </button>

                    {/* Floating Dropdown Panel */}
                    {hasDropdown && (
                      <div className="absolute top-full left-0 w-64 bg-white shadow-xl border border-slate-100 rounded-b-md opacity-0 pointer-events-none translate-y-2 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition-all duration-200 z-50 py-3">
                        {link.subLinks.map((subItem) => {
                          const isSubActive = location.pathname === subItem.path;
                          return (
                            <button
                              key={subItem.label}
                              onClick={() => navigate(subItem.path)}
                              className={`w-full text-left px-6 py-2.5 text-[13px] font-bold tracking-wider block transition-colors duration-150 cursor-pointer ${
                                isSubActive
                                  ? "text-[#008cc1] bg-slate-50"
                                  : "text-gray-400 hover:text-[#008cc1] hover:bg-slate-50/80"
                              }`}
                            >
                              {subItem.label}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Secondary Contact & Action Button */}
          <div className="hidden md:flex items-center space-x-6">
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
