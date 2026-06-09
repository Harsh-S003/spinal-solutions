import ReusableHero from "../components/ReusableHero";
import OrderFormsSection from "../sections/OrderFormsSection";
const Prosthetics = () => {
  return (
    <>
    <ReusableHero
      backgroundImage="/prosthetics.webp"
      headlineMain="Advanced Prosthetic Solutions"
      headlineAccent="Restoring Mobility and Confidence"
      description="Innovative prosthetic devices designed to enhance your quality of life and restore your independence."
      primaryBtnText="Learn More"
      primaryBtnHref="/prosthetics"
      secondaryBtnText="View Products"
      secondaryBtnHref="/prosthetics/products"
    />
    <OrderFormsSection />
    </>
  )
}

export default Prosthetics