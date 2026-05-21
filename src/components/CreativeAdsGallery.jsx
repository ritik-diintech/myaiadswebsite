import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './CreativeAdsGallery.css';

// Import all showcase images
import img1 from '../assets/creativeAds/showCase/Whisk_35888f9cb0251c9942c4902032927c12dr.png';
import img2 from '../assets/creativeAds/showCase/Whisk_4baf50aee03a1849a06427403a3e0c71dr.png';
import img3 from '../assets/creativeAds/showCase/Whisk_6hdiydid7ah.png';
import img4 from '../assets/creativeAds/showCase/Whisk_95cf1ec214c4d5e9ba34324ef8e0d91fdr.png';
import img5 from '../assets/creativeAds/showCase/Whisk_d2323ce854b1586bd9d4efc831ec42dfdr (1).png';
import img6 from '../assets/creativeAds/showCase/Whisk_d334581732d4c19898046a977493b4f3dr.png';
import img7 from '../assets/creativeAds/showCase/Whisk_e217e8ea62619158bb343db6638e9d94dr.png';
import img8 from '../assets/creativeAds/showCase/Whisk_f72736da9df4de6af2d44252697808eadr.png';

const images = [
  { src: img1, type: 'portrait' },
  { src: img2, type: 'portrait' },
  { src: img3, type: 'square' },
  { src: img4, type: 'portrait' },
  { src: img5, type: 'square' },
  { src: img6, type: 'portrait' },
  { src: img7, type: 'landscape' },
  { src: img8, type: 'square' }
];

const CreativeAdsGallery = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "200px 0px" });

  return (
    <section className="cag-section scattered-theme" ref={sectionRef}>
      {isInView && (
        <div className="cag-container">
          <div className="cag-header">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }}
            >
              Creative <span className="text-accent">Showcase</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Explore our collection of AI-generated masterpieces that drive real results.
            </motion.p>
          </div>

          <div className="cag-scattered-area">
            {images.map((img, idx) => (
              <motion.div 
                key={idx}
                className={`cag-scattered-card card-${idx + 1} ${img.type}`}
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  transition: { delay: idx * 0.1, duration: 0.8 }
                }}
              >
                <motion.div 
                  className="cag-card-inner"
                  animate={{
                    y: [0, idx % 2 === 0 ? -20 : 20, 0],
                    rotate: [0, idx % 2 === 0 ? 2 : -2, 0]
                  }}
                  transition={{
                    duration: 4 + (idx % 3),
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <img src={img.src} alt={`Showcase Ad ${idx + 1}`} loading="lazy" />
                  <div className="cag-card-shadow"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
      
      {/* Background depth glows */}
      <div className="cag-bg-glow pink"></div>
      <div className="cag-bg-glow blue"></div>
    </section>
  );
};

export default CreativeAdsGallery;
