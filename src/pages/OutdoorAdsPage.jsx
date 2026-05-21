import React from 'react';
import OutdoorHero from '../components/OutdoorHero';
import OutdoorAIFeatures from '../components/OutdoorAIFeatures';
import OutdoorComparison from '../components/OutdoorComparison';
import OutdoorServices from '../components/OutdoorServices';
import OutdoorWorkflow from '../components/OutdoorWorkflow';
// You can add more sections here later specifically for outdoor ads
import Contact from '../components/Contact';
import CTA from '../components/CTA';

const OutdoorAdsPage = () => {
  return (
    <>
      <OutdoorHero />
      <OutdoorAIFeatures />
      <OutdoorServices />
      <OutdoorWorkflow />
      <OutdoorComparison />

      {/* We can add specialized outdoor ad sections here */}
      <CTA />
      <Contact />
    </>
  );
};

export default OutdoorAdsPage;
