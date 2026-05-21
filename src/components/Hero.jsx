import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Plus, Settings, Video, Clock, Send } from 'lucide-react';
import './Hero.css';

// Importing new videos
import video1 from '../assets/videosFromApp/real_state5.mp4';
import video2 from '../assets/videosFromApp/real_state1.mp4';
import video3 from '../assets/adsVideo/Aitota1.mp4';
import video4 from '../assets/adsVideo/A_cinematic_restaurant_202604161756.mp4';

const Hero = () => {
  const videoRefs = [useRef(), useRef(), useRef(), useRef()];
  const [placeholder, setPlaceholder] = React.useState('');
  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);

  const words = [
    "Create marketing videos from text input effortlessly...",
    "Real Estate: Cinematic property tours in Mumbai...",
    "Professional Service ads for your business...",
    "Education: Turning scripts into learning modules...",
    "Fitness & Gym ads: Boost your club's membership...",
    "Retail & Fashion: Studio-quality lookbook videos...",
    "Social Media: Viral reels that convert viewers into customers..."
  ];

  useEffect(() => {
    if (subIndex === words[index].length + 1) {
      const nextTimeout = setTimeout(() => {
        setSubIndex(0);
        setIndex((prev) => (prev + 1) % words.length);
      }, 1500); // Pause before next word
      return () => clearTimeout(nextTimeout);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + 1);
    }, 40); // Much faster speed

    setPlaceholder(words[index].substring(0, subIndex) + "|");

    return () => clearTimeout(timeout);
  }, [subIndex, index]);

  useEffect(() => {
    // Progressive loading optimization
    // We can delay the start slightly to prioritize critical assets
    const timer = setTimeout(() => {
      videoRefs.forEach(ref => {
        if (ref.current) {
          ref.current.play().catch(err => console.log("Autoplay prevented:", err));
        }
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section" id="home">
      {/* Background Video Grid */}
      <div className="video-background-grid">
        <video
          ref={videoRefs[0]}
          src={video1}
          loop muted playsInline
          preload="metadata" // Only loads metadata initially, not full length
          className="hero-video"
        />
        <video
          ref={videoRefs[1]}
          src={video2}
          loop muted playsInline
          preload="metadata"
          className="hero-video"
        />
        <video
          ref={videoRefs[2]}
          src={video3}
          loop muted playsInline
          preload="metadata"
          className="hero-video"
        />
        <video
          ref={videoRefs[3]}
          src={video4}
          loop muted playsInline
          preload="metadata"
          className="hero-video"
        />
      </div>

      {/* Luxury Overlay */}
      <div className="hero-overlay"></div>

      {/* Main Content */}
      <div className="hero-content">
        <motion.div
          className="text-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="hero-title">
            Grow Your <span className="accent-text">Business</span> <br />
            with MyAiAds
          </h1>
          <p className="hero-subtitle">
            Create high-converting video ads in seconds.
          </p>
        </motion.div>

        {/* Video Generator Chatbox UI */}
        <motion.div
          className="chatbox-container"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="chatbox-inner">
            <div className="chatbox-toolbar">
              <button className="toolbar-btn">
                <Plus size={20} />
              </button>
              <button className="toolbar-btn">
                <Settings size={18} />
              </button>
              <div className="chatbox-tag">
                <Video size={14} />
                <span>video</span>
                <button className="tag-close">×</button>
              </div>
            </div>

            <div className="chatbox-input-wrapper">
              <div className="chatbox-input-mimic">
                {placeholder}
              </div>
              <div className="chatbox-actions">
                <div className="duration-selector">
                  <Clock size={14} />
                  <span>15s</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
                <button className="generate-btn">
                  <span>Generate Ads</span>
                  <Send size={14} />
                </button>
              </div>
            </div>
          </div>
          {/* Decorative Glow */}
          <div className="chatbox-glow"></div>
        </motion.div>
      </div>

      {/* Premium Bottom Fade */}
      <div className="hero-bottom-fade"></div>
    </section>
  );
};

export default Hero;
