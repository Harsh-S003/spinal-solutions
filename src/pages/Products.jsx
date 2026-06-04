import React from 'react'
import ProductsHeroSection from '../sections/ProductsHeroSection';
import EngineeringExcellenceSection from '../sections/EngineeringExcellenceSection';
import TechnicalSpecificationsSection from '../sections/TechnicalSpecificationsSection';
import CTA from '../components/CTA';
const Products = () => {
  return (
    <div>
        <ProductsHeroSection />
        <EngineeringExcellenceSection />
        <TechnicalSpecificationsSection />
        <CTA />
    </div>
  )
}

export default Products