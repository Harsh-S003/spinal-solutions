import React from "react";
import ReusableHero from "../components/ReusableHero";
import ScanningAppBody from "../sections/ScanningAppBody";
const ScanningApp = () => {
  return (
    <>
      <ReusableHero
        backgroundImage="/prosthetics.webp" 
        headlineMain="O&P Scanning App"
        headlineAccent="3D Mobile Scanning Made Simple."
        description="Transform your iPhone into a high-precision clinical scanner. Capture accurate digital models for custom spinal and extremity orthotics instantly."
        primaryBtnText="Download App"
        primaryBtnHref="#download-section"
        secondaryBtnText="Scanning Guide"
        secondaryBtnHref="#steps-section"
      />
        <ScanningAppBody />
    </>
  );
};

export default ScanningApp;
