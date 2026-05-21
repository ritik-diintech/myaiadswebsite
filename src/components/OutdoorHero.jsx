import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BarChart3, Cpu, MousePointer2, Zap, Target } from 'lucide-react';
import './OutdoorHero.css';

// Importing images from assets
import img1 from '../assets/outdoorADsImages/busAD2.jpeg';
import img2 from '../assets/outdoorADsImages/streetPoll1.jpeg';
import img3 from '../assets/outdoorADsImages/roadSideboard.jpeg';
import img4 from '../assets/outdoorADsImages/roadAboveAd2.jpeg';

const images = [img1, img2, img3, img4];

const OutdoorHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="outdoor-hero" id="outdoor-ads">
      {/* Dynamic Background - Cinematic Blurred Layer */}
      <div className="outdoor-bg-wrap">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="bg-layer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <img src={images[currentIndex]} alt="bg" />
            <div className="bg-vignette" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="outdoor-main-container">
        <div className="content-grid">
          
          {/* Left Side: Editorial Typography */}
          <div className="text-section">
            <motion.div 
              className="ai-chip"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Cpu size={14} />
              <span>Next-Gen Advertising</span>
            </motion.div>

            <div className="headline-wrap">
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="outline-text">GROW YOUR</span> <br />
                <span className="gradient-title">REACH WITH</span> <br />
                <span className="solid-title">OUTDOOR ADS</span>
              </motion.h1>
              
              <motion.div 
                className="powered-by-ai"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
              >
                <Zap size={16} /> Powered By Ai
              </motion.div>
            </div>

            <motion.p 
              className="editorial-desc"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Place your advertisements on buses, vans, and rickshaws with 
              real-time tracking. Simple, effective, and smart.
            </motion.p>

            <motion.div 
              className="cta-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <a href="tel:+918147540362" className="premium-btn" style={{ textDecoration: 'none' }}>
                <span>Start Campaign</span>
                <ArrowRight size={20} />
              </a>
              <button className="ghost-btn">
                <BarChart3 size={18} />
                <span>View Insights</span>
              </button>
            </motion.div>
          </div>

          {/* Right Side: Floating Billboard Canvas */}
          <div className="visual-section">
            <div className="canvas-wrapper">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className="main-image-canvas"
                  initial={{ opacity: 0, scale: 0.9, x: 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 1.1, x: -50 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <img src={images[currentIndex]} alt="Outdoor Ad" />
                  
                  {/* Dynamic Tech Labels */}
                  <div className="floating-label l1">
                    <Zap size={12} /> 
                    {currentIndex === 0 && "Bus Ads"}
                    {currentIndex === 1 && "Street Poll Ads"}
                    {currentIndex === 2 && "Board Ads"}
                    {currentIndex === 3 && "Billboard Ads"}
                  </div>
                  <div className="floating-label l2">
                    <BarChart3 size={12} /> Live Analysis
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Decorative Elements */}
              <div className="canvas-shadow" />
              <div className="canvas-border-glow" />
            </div>
            
            {/* Progress Indicators */}
            <div className="slider-progress">
              {images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`progress-bar ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                >
                  <div className="bar-fill" />
                  <span className="bar-label">0{idx + 1}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Floating Bottom Navigation Bar */}
      <motion.div 
        className="floating-info-bar"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="info-item">
          <Zap size={18} />
          <span>Instant Tracking</span>
        </div>
        <div className="info-sep" />
        <div className="info-item">
          <MousePointer2 size={18} />
          <span>Live Analysis</span>
        </div>
        <div className="info-sep" />
        <div className="info-item">
          <Target size={18} />
          <span>Smart Targeted Reach</span>
        </div>
      </motion.div>
    </section>
  );
};

export default OutdoorHero;
