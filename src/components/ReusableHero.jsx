import React from "react";
import { ArrowRight } from "lucide-react";

const ReusableHero = ({
  backgroundImage,
  headlineMain,
  headlineAccent,
  description,
  primaryBtnText,
  primaryBtnOnClick,
  primaryBtnHref,
  secondaryBtnText,
  secondaryBtnOnClick,
  secondaryBtnHref,
}) => {
  // Helper to determine if an action button is a link or raw action button
  const renderButton = (text, onClick, href, isPrimary) => {
    if (!text) return null;

    const baseClasses = isPrimary
      ? "bg-[#00a3e0] hover:bg-[#008cc1] text-white font-bold px-8 py-3.5 rounded shadow-lg shadow-black/30 transition-all duration-200 text-center cursor-pointer"
      : "bg-[#e2e5e9] hover:bg-white text-[#2d3139] font-semibold px-6 py-3.5 rounded shadow-md transition-all duration-200 flex items-center justify-center space-x-2 group cursor-pointer";

    if (href) {
      return (
        <a href={href} className={baseClasses}>
          <span>{text}</span>
          {!isPrimary && (
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          )}
        </a>
      );
    }

    return (
      <button onClick={onClick} className={baseClasses}>
        <span>{text}</span>
        {!isPrimary && (
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        )}
      </button>
    );
  };

  return (
    <section className="relative w-full min-h-[600px] md:min-h-screen flex items-center bg-black overflow-hidden font-sans">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        {/* Dark overlay to match your exact moody, high-contrast look */}
        <div className="absolute inset-0 bg-black/55 backdrop-brightness-[0.75]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-0">
        <div className="max-w-3xl">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            {headlineMain}{" "}
            {headlineAccent && (
              <span className="text-[#00a3e0] block sm:inline">
                {headlineAccent}
              </span>
            )}
          </h1>

          {/* Subheading / Description Paragraph */}
          {description && (
            <p className="text-base sm:text-lg text-gray-300 font-medium max-w-xl leading-relaxed mb-10">
              {description}
            </p>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {renderButton(
              primaryBtnText,
              primaryBtnOnClick,
              primaryBtnHref,
              true,
            )}
            {renderButton(
              secondaryBtnText,
              secondaryBtnOnClick,
              secondaryBtnHref,
              false,
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReusableHero;
