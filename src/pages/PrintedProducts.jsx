import React from 'react'
import ReusableHero from '../components/ReusableHero';
import ThreeDPrintedProductSection from '../sections/ThreeDPrintedProductSection';
const PrintedProducts = () => {
  return (
    <div>
      <ReusableHero
        backgroundImage="/3Dhero.jpg"
        headlineMain="3D Printed Products"
        headlineAccent="Precision-Engineered for Every Patient"
        description="Discover our advanced 3D printed orthotic solutions designed for light weight, superior fit, and fast delivery."
        primaryBtnText="Explore Products"
        primaryBtnHref="/products"
        secondaryBtnText="Contact Sales"
        secondaryBtnHref="/contact"
      />
        <ThreeDPrintedProductSection />
    </div>
  )
}

export default PrintedProducts