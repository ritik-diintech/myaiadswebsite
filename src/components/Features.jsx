import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, ShoppingBag, Briefcase, GraduationCap, X, PlayCircle, Plus } from 'lucide-react';
import './Features.css';

// Import Images
import ecomersImg from '../assets/fetureImages/ecomers.jpeg';
import eduationImg from '../assets/fetureImages/eduation.jpeg';
import moreImg from '../assets/fetureImages/moreImage.jpeg';
import realStateImg from '../assets/fetureImages/realSTate.jpeg';
import servicesImg from '../assets/fetureImages/servicesImage.jpeg';

// Import Video Paths (lazy loading logic)
import educationVid from '../assets/adsVideo/A_motivational_and_202604151638.mp4';
import ecommerceVid from '../assets/adsVideo/A_stylish_and_202604151648.mp4';
import servicesVid from '../assets/adsVideo/aitota2.mp4';
import realStateVid from '../assets/videosFromApp/real_state2.mp4';
import moreVid from '../assets/videosFromApp/consumer1.mp4';

const featureData = [
  {
    id: 'real-estate',
    title: 'Real Estate',
    desc: 'Cinematic property tours and 3D walkthroughs.',
    icon: <Building2 />,
    img: realStateImg,
    video: realStateVid,
    className: 'horizontal'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    desc: 'Viral product ads for social media scaling.',
    icon: <ShoppingBag />,
    img: ecomersImg,
    video: ecommerceVid,
    className: 'square'
  },
  {
    id: 'education',
    title: 'Education',
    desc: 'Dynamic tutorials and learning modules.',
    icon: <GraduationCap />,
    img: eduationImg,
    video: educationVid,
    className: 'square'
  },
  {
    id: 'services',
    title: 'Services',
    desc: 'Professional stories for high-end agencies.',
    icon: <Briefcase />,
    img: servicesImg,
    video: servicesVid,
    className: 'square'
  },
  {
    id: 'more',
    title: 'And More...',
    desc: 'Custom solutions for any niche or industry.',
    icon: <Plus />,
    img: moreImg,
    video: moreVid,
    className: 'square'
  }
];

const Features = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [cardsInRow, setCardsInRow] = useState(2);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRowRef = useRef(null);
  const isTransitioning = useRef(false);

  // Detect scroll direction — add cards on scroll right, reset on scroll back to start
  const handleRowScroll = useCallback(() => {
    if (isTransitioning.current) return;
    if (window.innerWidth > 768) return;

    const el = scrollRowRef.current;
    if (!el) return;

    const distanceFromEnd = el.scrollWidth - el.scrollLeft - el.clientWidth;
    const maxScroll = el.scrollWidth - el.clientWidth;

    // Update scroll progress for the indicator
    if (maxScroll > 0) {
      setScrollProgress(el.scrollLeft / maxScroll);
    }

    // Scrolled near the RIGHT end → pull next card up from stack
    if (distanceFromEnd < 80 && cardsInRow < featureData.length) {
      isTransitioning.current = true;
      setCardsInRow(prev => prev + 1);
      setTimeout(() => {
        isTransitioning.current = false;
      }, 700);
    }

    // Scrolled back LEFT → remove last card if it's no longer visible
    if (cardsInRow > 2) {
      const cardWidth = el.clientWidth * 0.82; // 82vw
      const gap = 15;
      const lastCardStart = (cardsInRow - 1) * (cardWidth + gap);

      // If user scrolled back far enough that the last added card is off-screen
      if (el.scrollLeft + el.clientWidth < lastCardStart + 40) {
        isTransitioning.current = true;
        setCardsInRow(prev => prev - 1);
        setTimeout(() => {
          isTransitioning.current = false;
        }, 500);
      }
    }
  }, [cardsInRow]);

  const openVideo = (video) => {
    setActiveVideo(video);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  // Split cards between row and stack
  const rowItems = featureData.slice(0, cardsInRow);
  const stackedItems = featureData.slice(cardsInRow);

  // Card content renderer (shared between row and stack)
  const cardContent = (item) => (
    <>
      <div className="card-bg">
        <img src={item.img} alt={item.title} loading="lazy" />
        <div className="card-overlay"></div>
      </div>
      <div className="card-content-alt">
        <div className="card-header-alt">
          <div className="card-icon-alt">{item.icon}</div>
          <h3>{item.title}</h3>
        </div>
        <p>{item.desc}</p>
        <button className="watch-demo-btn" onClick={() => openVideo(item.video)}>
          <PlayCircle size={18} />
          <span>Watch Demo</span>
        </button>
      </div>
    </>
  );

  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">Industries &amp; Solutions</span>
          <h2 className="section-title">One AI Engine, <span className="thin">Any Industry</span></h2>
          <p className="section-subtitle">Premium video production without the premium cost.</p>
        </motion.div>

        <div className="features-bento-alt">
          {/* Scroll Progress Indicator — mobile only, above scroll row */}
          <div className="scroll-indicator-wrapper">
            <div className="scroll-indicator-track">
              <motion.div
                className="scroll-indicator-thumb"
                style={{ width: `${Math.max(20, scrollProgress * 100)}%` }}
                layout
                transition={{ duration: 0.15, ease: "easeOut" }}
              />
            </div>
            <div className="scroll-indicator-dots">
              {featureData.map((item, i) => (
                <div
                  key={item.id}
                  className={`scroll-dot ${
                    i < cardsInRow ? 'scroll-dot-active' : ''
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Horizontal scroll row */}
          <div
            className="mobile-scroll-row"
            ref={scrollRowRef}
            onScroll={handleRowScroll}
          >
            {rowItems.map((item, index) => (
              <motion.div
                key={item.id}
                className={`bento-card-alt ${item.className}`}
                whileHover={{ y: -8 }}
                initial={index >= 2
                  ? { y: 120, opacity: 0, scale: 0.95 }
                  : { opacity: 0, scale: 0.95 }
                }
                animate={index >= 2
                  ? { y: 0, opacity: 1, scale: 1 }
                  : undefined
                }
                whileInView={index < 2
                  ? { opacity: 1, scale: 1 }
                  : undefined
                }
                viewport={index < 2 ? { once: true } : undefined}
                transition={index >= 2
                  ? {
                      duration: 0.65,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }
                  : { duration: 0.6 }
                }
              >
                {cardContent(item)}
              </motion.div>
            ))}
          </div>

          {/* Stacked cards below — return here when user scrolls back */}
          <div className="mobile-stacked-cards">
            <AnimatePresence mode="popLayout">
              {stackedItems.map((item) => (
                <motion.div
                  key={item.id}
                  className={`bento-card-alt ${item.className}`}
                  layout
                  initial={{ opacity: 0, y: -40, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ y: -60, opacity: 0, scale: 0.97 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  whileHover={{ y: -8 }}
                >
                  {cardContent(item)}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Video Modal - Only loads when active */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="video-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideo}
          >
            <motion.div
              className="video-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-video-btn" onClick={closeVideo}>
                <X size={24} />
              </button>
              <video
                src={activeVideo}
                autoPlay
                controls
                className="modal-video"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Features;
