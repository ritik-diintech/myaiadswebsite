import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Map, Activity, ShieldCheck, PieChart } from 'lucide-react';
import './OutdoorAIFeatures.css';

const OutdoorAIFeatures = () => {
  const features = [
    {
      icon: <Target size={24} />,
      title: "Precision Targeting",
      desc: "Our AI cameras identify the density of your audience in real-time."
    },
    {
      icon: <Map size={24} />,
      title: "Live GPS Heatmaps",
      desc: "Watch your campaigns move and track high-performing locations instantly."
    },
    {
      icon: <PieChart size={24} />,
      title: "Actionable Insights",
      desc: "Get digital-style ROI reports for physical ads without the guesswork."
    }
  ];

  return (
    <section className="vibrant-ai-section">
      <div className="vai-container">
        
        {/* TEXT SIDE */}
        <div className="vai-text-side">
          <motion.div 
            className="vai-badge"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Activity size={16} /> AI TRACKING TECHNOLOGY
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Don't guess. <br />
            <span>Know your impact.</span>
          </motion.h2>

          <motion.p
            className="vai-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We bring the accuracy of digital marketing to the physical world. 
            Track exactly who sees your outdoor ads with our smart edge-AI technology.
          </motion.p>

          <div className="vai-feature-list">
            {features.map((feat, idx) => (
              <motion.div 
                key={idx} 
                className="vai-feat-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
              >
                <div className="vai-feat-icon">{feat.icon}</div>
                <div className="vai-feat-text">
                  <h3>{feat.title}</h3>
                  <p>{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* VISUAL COMPOSITION SIDE */}
        <div className="vai-visual-side">
          
          <div className="floating-composition">
            
            {/* Card 1: Live Map Pulse */}
            <motion.div 
              className="glass-card card-top-left"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="gc-header">Live Location Focus</div>
              <div className="gc-radar">
                <div className="radar-circle rc1"></div>
                <div className="radar-circle rc2"></div>
                <div className="radar-circle rc3"></div>
                <Map size={24} className="radar-icon" />
              </div>
              <div className="gc-footer">Connaught Place</div>
            </motion.div>

            {/* Card 2: Massive Counter */}
            <motion.div 
              className="glass-card card-center-right"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="gc-header"><Users size={16} /> Total Impressions</div>
              <div className="gc-massive-number">124k+</div>
              <div className="gc-trend">↑ 14% vs yesterday</div>
              
              <div className="gc-bar-chart">
                <div className="gbar" style={{ height: '40%' }}></div>
                <div className="gbar" style={{ height: '60%' }}></div>
                <div className="gbar" style={{ height: '45%' }}></div>
                <div className="gbar" style={{ height: '80%' }}></div>
                <div className="gbar" style={{ height: '100%' }}></div>
              </div>
            </motion.div>

            {/* Card 3: Status Badge */}
            <motion.div 
              className="glass-card card-bottom-left"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="gc-icon-row">
                <ShieldCheck size={32} />
                <div className="gc-status-text">
                  <strong>Secure Vision AI</strong>
                  <span>Privacy Compliant Counting</span>
                </div>
              </div>
            </motion.div>

          </div>
          
          {/* Decorative background element for depth */}
          <div className="vai-bg-circle"></div>

        </div>

      </div>
    </section>
  );
};

export default OutdoorAIFeatures;
