const ThreeDPrintedProductSection = () => {
  return (
    <section className="bg-[#f8fafc] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Product Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left Brochure */}
          <div>
            <img
              src="/hercules.webp"
              alt="Hercules Product Brochure"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center">

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-10 w-full">
              <a
                href="/order-form.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00a3e0] hover:bg-[#0089bc] text-white px-8 py-3 text-sm font-semibold rounded-lg transition-all duration-300"
              >
                ORDER FORM
              </a>

              <a
                href="/white-paper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#008cc1] hover:bg-[#0075a3] text-white px-8 py-3 text-sm font-semibold rounded-lg transition-all duration-300"
              >
                WHITE PAPER
              </a>
            </div>

            {/* Product Render */}
            <img
              src="/3pp1.webp"
              alt="Hercules KAFO"
              className="w-full max-w-md object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ThreeDPrintedProductSection;