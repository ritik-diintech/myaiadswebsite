import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight } from 'lucide-react';
import './Footer.css';

const SocialIcons = {
  Instagram: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
  ),
  Twitter: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
  ),
  Linkedin: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
  )
};

const Footer = () => {
  return (
    <footer className="footer-futuristic">
      <div className="footer-marquee">
        <div className="marquee-content">
          <span>CREATE THE FUTURE • STUDIO GRADE AI • SCALE YOUR ADS • TRANSFORM REALITY • </span>
          <span>CREATE THE FUTURE • STUDIO GRADE AI • SCALE YOUR ADS • TRANSFORM REALITY • </span>
        </div>
      </div>

      <div className="footer-content-wrapper">
        <div className="footer-bento-grid">
          
          {/* Main Brand Card */}
          <motion.div 
            className="bento-item brand-card"
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.4 }}
          >
            <img src="/app_logo.jpeg" alt="Logo" className="bento-logo" />
            <h2 className="bento-title">myAi<span>Ads</span></h2>
            <p className="bento-text">Crafting the next generation of visual success stories with high-precision AI technology.</p>
            <div className="bento-socials">
              <a href="#" className="bento-social-link"><SocialIcons.Instagram /></a>
              <a href="#" className="bento-social-link"><SocialIcons.Twitter /></a>
              <a href="#" className="bento-social-link"><SocialIcons.Linkedin /></a>
            </div>
          </motion.div>

          {/* Contact Quick Bento */}
          <div className="bento-item contact-card">
            <h4 className="bento-subheading">Drop us a line</h4>
            <a href="mailto:contact@diintech.com" className="bento-link-big">contact@diintech.com</a>
            <div className="bento-divider"></div>
            <p className="bento-address">C-116, Sector-2, Noida, UP, India</p>
          </div>

          {/* Navigation Bento */}
          <div className="bento-item nav-card">
            <div className="nav-col">
              <h4 className="bento-mini-title">Explore</h4>
              <a href="#home">Home</a>
              <a href="#features">Features</a>
              <a href="#gallery">Ads Gallery</a>
            </div>
            <div className="nav-col">
              <h4 className="bento-mini-title">Company</h4>
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Terms</a>
            </div>
          </div>

          {/* Action Card */}
          <motion.div 
            className="bento-item action-card"
            whileHover={{ y: -5 }}
          >
            <div className="action-top">
                <Send size={24} className="action-icon" />
                <span>Ready to start?</span>
            </div>
            <h3 className="action-title">Let's build your <br /> vision together.</h3>
            <ArrowRight className="action-arrow" size={32} />
          </motion.div>

        </div>

        <div className="footer-bottom-minimal">
          <p>© 2026 myAiAds. Designed for the elite.</p>
          <div className="bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>

      {/* Extreme Visual Backdrops */}
      <div className="footer-noise-overlay"></div>
      <div className="footer-glow-bottom"></div>
    </footer>
  );
};

export default Footer;
