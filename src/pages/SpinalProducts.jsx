import React from 'react'
import ReusableHero from '../components/ReusableHero';
import ProductCatalog from '../sections/ProductCatalog';
const SpinalProducts = () => {
  return (
    <div>
      <ReusableHero
        backgroundImage="/Spine.webp"
        headlineMain="Spinal Products"
        headlineAccent="Engineered for Clinical Precision"
        description="Explore our custom spinal orthotic systems designed for support, comfort, and long-term patient success."
        primaryBtnText="Order Now"
        primaryBtnHref="/customers/submit-order-form"
        secondaryBtnText="Contact Sales"
        secondaryBtnHref="/contact"
      />
      <ProductCatalog />
    </div>
  )
}

export default SpinalProducts