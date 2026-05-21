import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Target, BarChart3 } from 'lucide-react';
import './HomeOutdoorPromo.css';

// Import the user's specific images
import adImage1 from '../assets/outdoorADsImages/Whisk_6efc550891d02d29b354b43d82a961d1dr.jpeg';
import adImage2 from '../assets/outdoorADsImages/Whisk_d7a66efa03ea7b38f134a51fcfa2040bdr.jpeg';

const HomeOutdoorPromo = () => {
  return (
    <section className="hop-section">
      <div className="hop-container">
        
        {/* Left Side: Images */}
        <div className="hop-visual">
          <div className="hop-images-wrapper">
            <motion.div 
              className="hop-img-main"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img src={adImage1} alt="Outdoor Advertisement 1" />
              <div className="hop-glass-overlay">
                <Target size={20} />
                <span>Precision Targeting</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="hop-img-secondary"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <img src={adImage2} alt="Outdoor Advertisement 2" />
              <div className="hop-glass-overlay bottom-right">
                <BarChart3 size={20} />
                <span>Live Analytics</span>
              </div>
            </motion.div>
          </div>
          
          <div className="hop-bg-glow"></div>
        </div>

        {/* Right Side: Content */}
        <div className="hop-content">
          <motion.div 
            className="hop-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            OUTDOOR ADVERTISEMENT
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Take over the physical world with <span className="hop-accent">Digital Intelligence</span>.
          </motion.h2>
          
          <motion.p
            className="hop-desc"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Step outside the screen. Our AI-driven outdoor advertising network turns everyday buses, billboards, and mobile vans into smart, trackable marketing engines. Know exactly who saw your ad and optimize your reach in real-time.
          </motion.p>
          
          <motion.div 
            className="hop-action"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/outdoor-ads" className="hop-btn">
              Explore Outdoor Ads
              <div className="hop-btn-icon">
                <ArrowUpRight size={20} />
              </div>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HomeOutdoorPromo;
