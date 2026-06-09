import React from 'react'
import ReusableHero from '../components/ReusableHero';
import DistributedProductsSection from '../sections/DistributedProductsSection';
const DistributedProducts = () => {
  return (
    <div>
      <ReusableHero
        backgroundImage="/ProstheticHomeHero.webp"
        headlineMain="Distributed Products"
        headlineAccent="Wide Range of Orthotic Solutions"
        description="Explore our extensive range of distributed orthotic products, designed to meet the diverse needs of patients and healthcare providers."
        primaryBtnText="Explore Products"
        primaryBtnHref="/products"
        secondaryBtnText="Contact Sales"
        secondaryBtnHref="/contact"
      />
        <DistributedProductsSection />
    </div>
  )
}

export default DistributedProducts