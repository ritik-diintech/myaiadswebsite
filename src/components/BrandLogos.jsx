import React from 'react';
import './BrandLogos.css';

// Importing logos
import adidas from '../assets/brandLogo/adidas-logo-png_seeklogo-168370.png';
import allen from '../assets/brandLogo/allen-solly-logo-png_seeklogo-441414.png';
import amul from '../assets/brandLogo/amul-seeklogo.png';
import loreal from '../assets/brandLogo/loreal-logo-png_seeklogo-81118.png';
import myntra from '../assets/brandLogo/myntra-seeklogo.png';
import nike from '../assets/brandLogo/nike-logo-png_seeklogo-99482.png';
import shopify from '../assets/brandLogo/shopify-logo-png_seeklogo-267188.png';

const BrandLogos = () => {
  const logoData = [
    { src: adidas, name: "Adidas" },
    { src: nike, name: "Nike" },
    { src: shopify, name: "Shopify" },
    { src: amul, name: "Amul" },
    { src: myntra, name: "Myntra" },
    { src: loreal, name: "L'Oreal" },
    { src: allen, name: "Allen Solly" },
  ];

  return (
    <section className="brand-section">
      <div className="section-mesh"></div>
      <div className="brand-header">
        <span className="brand-tag">Our Partners</span>
        <h2 className="brand-main-title">Trusted by Global <b>Industry Leaders</b></h2>
      </div>

      <div className="brand-marquee-container">
        <div className="brand-marquee-track">
          {[...logoData, ...logoData, ...logoData].map((logo, index) => (
            <div key={index} className="brand-logo-wrapper">
              <img src={logo.src} alt={logo.name} className="brand-logo-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
