import React from 'react'
import ReusableHero from '../components/ReusableHero';
import Form from '../sections/Form';
const SubmitOrderForm = () => {
  return (
    <>
     <ReusableHero
      backgroundImage="/prosthetics.webp"
      headlineMain="Submit Your Order"
      headlineAccent="Streamlined Process for Your Convenience"
      description="Easily submit your order and experience a seamless process from start to finish."
      primaryBtnText="Learn More"
      primaryBtnHref="/prosthetics"
      secondaryBtnText="View Products"
      secondaryBtnHref="/prosthetics/products"
    />
    <Form />
    </>
  )
}

export default SubmitOrderForm