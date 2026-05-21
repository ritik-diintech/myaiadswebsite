import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Layout, Video, Sparkles, Wand2 } from 'lucide-react';
import './CreativeHub.css';

// Import Avatars
import av1 from '../assets/avatars/Whisk_0c24ca24cac307681ca42ebd3c2ff7b4dr.jpeg';
import av2 from '../assets/avatars/Whisk_149a376b579ee31b2fc4e26b4d7da73cdr.jpeg';
import av3 from '../assets/avatars/Whisk_8b560f8fe44af56bbd24437db6e4f62ddr.jpeg';
import av4 from '../assets/avatars/Whisk_cf761b52eaab189856742ec7f62d263ddr.jpeg';
import av5 from '../assets/avatars/Whisk_1af94d342a11ca68d784abc1bdee7281dr.jpeg';
import av6 from '../assets/avatars/Whisk_5b76f10510bf9f8b2d741023866a38c4dr.jpeg';

// Import Videos
import vidBeauty from '../assets/templats/A_glamorous_beauty_202604161624.mp4';
import vidCinematic from '../assets/templats/A_high-energy_cinematic_202604161618.mp4';
import vidLuxury from '../assets/templats/A_luxury_real_202604161617.mp4';

const CreativeHub = () => {
  const avatars = [
    { img: av1, name: "Rohit", role: "Corporate Expert" },
    { img: av2, name: "Arjun", role: "Tech Evangelist" },
    { img: av3, name: "Priya", role: "Lifestyle Influencer" },
    { img: av4, name: "Neha", role: "Sales Specialist" },
    { img: av5, name: "Jyoti", role: "Fashion Model", desktopOnly: true },
    { img: av6, name: "Ayush", role: "Executive", desktopOnly: true }
  ];

  const templates = [
    { src: vidBeauty, label: "Glamorous Beauty" },
    { src: vidCinematic, label: "High-Energy Cinematic" },
    { src: vidLuxury, label: "Luxury Real Estate" }
  ];

  return (
    <section className="ch-section">
      <div className="ch-wrapper">
        <div className="ch-header">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="ch-tag"
          >
            <Sparkles size={16} /> Creator Hub
          </motion.div>
          <motion.h2
            className="ch-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            The Ultimate <span>Creative Toolkit</span>
          </motion.h2>
          <motion.p
            className="ch-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Combine realistic AI characters with high-converting templates to build world-class advertisements in record time.
          </motion.p>
        </div>

        <div className="ch-grid">
          {/* Avatar Showcase */}
          <div className="ch-card ch-avatar-area">
            <div className="ch-card-header">
              <div className="ch-icon-box">
                <UserCheck size={28} />
              </div>
              <div className="ch-card-text">
                <h3>Vibrant <span>AI Avatars</span></h3>
                <p>Human-like presenters with perfect lip-syncing and tone for every niche.</p>
              </div>
            </div>

            <div className="ch-avatar-gallery">
              {avatars.map((avatar, i) => (
                <motion.div
                  key={i}
                  className={`ch-avatar-item ${avatar.desktopOnly ? 'ch-desktop-only' : ''}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img src={avatar.img} alt={avatar.name} />
                  <div className="ch-av-overlay">
                    <span className="ch-av-name">{avatar.name}</span>
                    <span className="ch-av-role">{avatar.role}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Templates Showcase */}
          <div className="ch-card ch-template-area">
            <div className="ch-card-header">
              <div className="ch-icon-box">
                <Layout size={28} />
              </div>
              <div className="ch-card-text">
                <h3>Viral <span>Templates</span></h3>
                <p>Pre-designed layouts optimized for Reels, TikTok, and YouTube Shorts.</p>
              </div>
            </div>

            <div className="ch-template-scroll">
              {templates.map((temp, i) => (
                <motion.div
                  key={i}
                  className="ch-template-item"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="ch-video-frame">
                    <video src={temp.src} autoPlay loop muted playsInline preload="metadata" />
                    <div className="ch-temp-badge">{temp.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Banner */}
        <div className="ch-footer-banner">
          <div className="ch-banner-item">
            <div className="ch-dot"></div>
            <span>100+ Custom Voices</span>
          </div>
          <div className="ch-banner-item">
            <div className="ch-dot"></div>
            <span>Universal Aspect Ratios</span>
          </div>
          <div className="ch-banner-item">
            <div className="ch-dot"></div>
            <span>4K Studio Output</span>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="ch-bg-decoration">
        <div className="ch-blob cb-1"></div>
        <div className="ch-blob cb-2"></div>
      </div>
    </section>
  );
};

export default CreativeHub;
