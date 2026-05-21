import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Mic, PlayCircle, ChevronLeft, ChevronRight, Play, Sparkles, Wand2, Zap } from 'lucide-react';
import './Showcase.css';

// Import Videos
import vid4 from '../assets/videosFromApp/consumer4.mp4';
import vid6 from '../assets/videosFromApp/real_state5.mp4';
import vid5 from '../assets/adsVideo/Create_an_ultra-short_202604151453.mp4';
import vid2 from '../assets/adsVideo/Aitota1.mp4';
import vid1 from '../assets/videosFromApp/real_state2.mp4';
import vid3 from '../assets/adsVideo/Aitota4.mp4';

const videoData = [
  {
    id: 1,
    src: vid1,
    title: "Real Estate Luxury",
    label: "Property Tour"
  },
  {
    id: 2,
    src: vid2,
    title: "Presentation",
    label: "Services"

  },
  {
    id: 3,
    src: vid3,
    title: "SaaS Promotion",
    label: "Explainer"
  },
  {
    id: 4,
    src: vid4,
    title: "Premium Estates",
    label: "Property Hub"
  },
  {
    id: 5,
    src: vid5,
    title: "Direct Ad Campaign",
    label: "Social Reels"
  },
  {
    id: 6,
    src: vid6,
    title: "Dynamic Product",
    label: "Cinematic"
  }
];

const Showcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videoData.length);
    setIsPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videoData.length) % videoData.length);
    setIsPlaying(false);
  };

  return (
    <section className="sc-section" id="showcase">
      <div className="sc-main-wrapper">
        <div className="sc-container">

          {/* Left Column: Feature Highlights */}
          <div className="sc-content-left">
            <div className="sc-header-inline">
              <motion.span 
                className="sc-tag-premium"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                Curated Gallery
              </motion.span>
              <motion.h2 
                className="sc-title-premium"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Results that <br /><span>Speak Volumes</span>
              </motion.h2>
            </div>

            <div className="sc-features-list">
              <motion.div
                className="sc-feature-item"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="sc-icon-wrapper orange">
                  <Zap size={28} />
                </div>
                <div className="sc-info">
                  <h3>AI-Powered Scripting</h3>
                  <p>Our engine generates high-converting ad scripts optimized for retention and sales in seconds.</p>
                </div>
              </motion.div>

              <motion.div
                className="sc-feature-item"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="sc-icon-wrapper orange">
                  <Mic size={28} />
                </div>
                <div className="sc-info">
                  <h3>Hyper-Realistic Voices</h3>
                  <p>Choose from over 100+ AI voices that sound perfectly human, matching your brand's unique tone.</p>
                </div>
              </motion.div>

              <motion.div
                className="sc-feature-item"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="sc-icon-wrapper orange">
                  <Sparkles size={28} />
                </div>
                <div className="sc-info">
                  <h3>Cinematic visual Quality</h3>
                  <p>Produce studio-grade video advertisements without the need for expensive cameras or crews.</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Luxury Glow Orbs */}
          <div className="sc-glow-orb top-left"></div>
          <div className="sc-glow-orb bottom-right"></div>

          {/* Right Column: Peeking Vertical Carousel */}
          <div className="sc-content-right">
            <div className="sc-peek-carousel-container">

              <div className="sc-carousel-track-wrapper">
                <motion.div
                  className="sc-carousel-track"
                  animate={{ x: `calc(-${currentIndex * 100}% - ${currentIndex * 20}px)` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {videoData.map((video, index) => (
                    <div
                      key={video.id}
                      className={`sc-carousel-item ${index === currentIndex ? 'active' : ''}`}
                    >
                      <div className="sc-video-player-box-v">
                        {(!isPlaying || index !== currentIndex) ? (
                          <div className="sc-video-thumb-v" onClick={() => {
                            if (index === currentIndex) setIsPlaying(true);
                            else setCurrentIndex(index);
                          }}>
                            <video src={video.src} preload="metadata" />
                            {index === currentIndex && (
                              <div className="sc-play-btn-v">
                                <Play size={24} fill="white" />
                              </div>
                            )}
                            <div className="sc-v-info-tag">
                              <span>{video.label}</span>
                              <h4>{video.title}</h4>
                            </div>
                          </div>
                        ) : (
                          <video
                            src={video.src}
                            controls
                            autoPlay
                            className="sc-actual-video-v"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Overlapping Buttons relative to the container */}
              <button className="sc-btn-nav-overlap prev" onClick={prevSlide}>
                <ChevronLeft size={24} />
              </button>
              <button className="sc-btn-nav-overlap next" onClick={nextSlide}>
                <ChevronRight size={24} />
              </button>

              <div className="sc-pagination-simple">
                {videoData.map((_, i) => (
                  <div key={i} className={`sc-mini-dot ${i === currentIndex ? 'active' : ''}`} onClick={() => {
                    setCurrentIndex(i);
                    setIsPlaying(false);
                  }} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Showcase;
