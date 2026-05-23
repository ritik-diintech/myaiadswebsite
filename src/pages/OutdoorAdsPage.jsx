import React, { useEffect } from 'react';
import OutdoorHero from '../components/OutdoorHero';
import OutdoorAIFeatures from '../components/OutdoorAIFeatures';
import OutdoorComparison from '../components/OutdoorComparison';
import OutdoorServices from '../components/OutdoorServices';
import OutdoorWorkflow from '../components/OutdoorWorkflow';
// You can add more sections here later specifically for outdoor ads
import Contact from '../components/Contact';
import CTA from '../components/CTA';

const OutdoorAdsPage = () => {
  useEffect(() => {
    document.title = "Outdoor Media Specialists | myAiAds High-Impact Campaigns";

    // Update canonical link
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://myaiads.diintech.com/outdoor-ads');
    }

    // Update primary meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Scale your business with high-impact outdoor ads. From mobile van branding and Look Walkers to transit media, street light kiosks, and pole branding across major cities.');
    }

    // Update Open Graph (Facebook) and Twitter URLs
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', 'https://myaiads.diintech.com/outdoor-ads');

    const twUrl = document.querySelector('meta[property="twitter:url"]');
    if (twUrl) twUrl.setAttribute('content', 'https://myaiads.diintech.com/outdoor-ads');

    // Update titles and descriptions
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', 'Outdoor Media Specialists | myAiAds High-Impact Campaigns');

    const twTitle = document.querySelector('meta[property="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', 'Outdoor Media Specialists | myAiAds High-Impact Campaigns');

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', 'Scale your business with high-impact outdoor marketing. From mobile van branding and Look Walkers to transit media, street light kiosks, and pole branding across major cities.');

    const twDesc = document.querySelector('meta[property="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', 'Scale your business with high-impact outdoor marketing. From mobile van branding and Look Walkers to transit media, street light kiosks, and pole branding across major cities.');
  }, []);

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
