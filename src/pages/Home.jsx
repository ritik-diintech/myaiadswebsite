import React, { useEffect } from 'react';
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
  useEffect(() => {
    document.title = "myAiAds | Premium AI Video Ad Generator & Digital Creative Suite";
    
    // Update canonical link
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://myaiads.diintech.com/');
    }

    // Update primary meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Generate high-converting, professional AI video ads, cinematic real estate tours, e-commerce product showcases, and premium outdoor marketing campaigns with virtual avatars and automated AI tools.');
    }

    // Update Open Graph (Facebook) and Twitter URLs
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', 'https://myaiads.diintech.com/');
    
    const twUrl = document.querySelector('meta[property="twitter:url"]');
    if (twUrl) twUrl.setAttribute('content', 'https://myaiads.diintech.com/');

    // Update titles and descriptions
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', 'myAiAds | Premium AI Video Ad Generator & Digital Creative Suite');

    const twTitle = document.querySelector('meta[property="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', 'myAiAds | Premium AI Video Ad Generator & Digital Creative Suite');

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', 'Generate high-converting, professional AI video ads, cinematic real estate tours, e-commerce product showcases, and premium outdoor marketing campaigns with virtual avatars and automated AI tools.');

    const twDesc = document.querySelector('meta[property="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', 'Generate high-converting, professional AI video ads, cinematic real estate tours, e-commerce product showcases, and premium outdoor marketing campaigns with virtual avatars and automated AI tools.');
  }, []);

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
