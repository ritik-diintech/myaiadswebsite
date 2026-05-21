import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Showcase from '../components/Showcase';
import CreativeHub from '../components/CreativeHub';
import CreativeAdsShowcase from '../components/CreativeAdsShowcase';
import CreativeAdsGallery from '../components/CreativeAdsGallery';
import HomeOutdoorPromo from '../components/HomeOutdoorPromo';
import Flow from '../components/Flow';
import IndustrySolutions from '../components/IndustrySolutions';
import StudioShowcase from '../components/StudioShowcase';
import AIAdvantage from '../components/AIAdvantage';
import Testimonials from '../components/Testimonials';
import BrandLogos from '../components/BrandLogos';
import Contact from '../components/Contact';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Showcase />
      <CreativeHub />

      <Flow />
      <IndustrySolutions />
      <StudioShowcase />
      <AIAdvantage />
      <CreativeAdsShowcase />
      <CreativeAdsGallery />
      <HomeOutdoorPromo />
      <Testimonials />
      <BrandLogos />
      <Contact />
      <CTA />
    </>
  );
};

export default Home;
