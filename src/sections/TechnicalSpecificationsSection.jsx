import React from 'react';

const TechnicalSpecificationsSection = () => {
  const specsData = [
    {
      specification: 'Fiber Orientation',
      medicalStandard: 'Bi-Axial & Uni-Directional Hybrid',
      clinicalBenefit: 'Torsional stability with flex control',
    },
    {
      specification: 'Thickness Profile',
      medicalStandard: '1.5mm to 4.0mm Gradient',
      clinicalBenefit: 'Lower profile for footwear fitting',
    },
    {
      specification: 'Resin Matrix',
      medicalStandard: 'Bio-Compatible Epoxy Resin',
      clinicalBenefit: 'Skin-safe, no outgassing properties',
    },
    {
      specification: 'Heat Tolerance',
      medicalStandard: 'Up to 250°F (Post-Cure)',
      clinicalBenefit: 'Resists deformation in varied climates',
    },
  ];

  return (
    <section className="w-full bg-white py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-[#1e293b] text-3xl font-bold tracking-tight">
            Technical Specifications
          </h2>
          <p className="text-[#64748b] text-sm mt-2">
            A breakdown of our manufacturing standards for practitioners.
          </p>
        </div>

        {/* High-Contrast Specifications Table Container */}
        <div className="w-full overflow-x-auto border border-slate-200">
          <table className="w-full min-w-[600px] text-left border-collapse">
            <thead>
              <tr className="bg-[#f8fafc] border-b border-slate-200">
                <th className="p-4 text-slate-500 text-[11px] font-bold uppercase tracking-wider w-1/4">
                  Specification
                </th>
                <th className="p-4 text-slate-500 text-[11px] font-bold uppercase tracking-wider w-3/8">
                  Medical Grade Standard
                </th>
                <th className="p-4 text-slate-500 text-[11px] font-bold uppercase tracking-wider w-3/8">
                  Clinical Benefit
                </th>
              </tr>
            </thead>
            <tbody>
              {specsData.map((row, index) => (
                <tr 
                  key={index} 
                  className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50/50 transition-colors duration-150"
                >
                  <td className="p-4 text-[#1e293b] text-sm font-bold">
                    {row.specification}
                  </td>
                  <td className="p-4 text-[#475569] text-sm font-medium">
                    {row.medicalStandard}
                  </td>
                  <td className="p-4 text-[#475569] text-sm font-medium">
                    {row.clinicalBenefit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default TechnicalSpecificationsSection;