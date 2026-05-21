import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, Zap } from 'lucide-react';
import './OutdoorComparison.css';

const OutdoorComparison = () => {
  const comparisonData = [
    {
      feature: "Tracking & Visibility",
      old: "Blind campaigns. Once the ad is up, you never know where it goes.",
      new: "Live GPS Tracking. See exactly where your ad is moving right now."
    },
    {
      feature: "Audience Measurement",
      old: "Rough estimates based on general city population data.",
      new: "AI Cameras safely count exactly how many cars and people passed by."
    },
    {
      feature: "Performance Reports",
      old: "Manual, delayed reports at the end of the month (if any).",
      new: "Live digital dashboard with daily updates and hot-zone heatmaps."
    },
    {
      feature: "Pricing & Transparency",
      old: "Hidden costs, middlemen margins, and confusing contracts.",
      new: "100% transparent pricing. You only pay for what you actually get."
    },
    {
      feature: "Campaign Control",
      old: "Zero control. You have to call the agency for every small update.",
      new: "Full App Control. Manage, pause, or scale your campaigns from your phone."
    }
  ];

  return (
    <section className="outdoor-compare-section">
      <div className="compare-container">
        
        <div className="compare-header">
          <motion.span 
            className="compare-badge"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            THE MYAIADS ADVANTAGE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Traditional vs <span className="text-accent">MyAiAds</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Why settle for outdated methods when you can have the power of digital marketing in the physical world?
          </motion.p>
        </div>

        <div className="compare-grid-wrapper">
          {/* Column Headers */}
          <div className="compare-col-headers">
            <div className="col-head old-way">
              <h3>Traditional Agencies</h3>
              <span>The Old Way</span>
            </div>
            <div className="col-head new-way">
              <div className="new-way-glow" />
              <h3>MyAiAds</h3>
              <span>The Smart Way <Zap size={14} /></span>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="compare-rows">
            {comparisonData.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="compare-row-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
              >
                <div className="feature-label">{item.feature}</div>
                
                <div className="row-content">
                  <div className="compare-box old-box">
                    <XCircle size={24} className="icon-red" />
                    <div className="box-text-content">
                      <span className="mobile-box-label">Traditional Agency</span>
                      <p>{item.old}</p>
                    </div>
                  </div>
                  
                  <div className="compare-box new-box">
                    <CheckCircle2 size={24} className="icon-green" />
                    <div className="box-text-content">
                      <span className="mobile-box-label new-label">MyAiAds</span>
                      <p>{item.new}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OutdoorComparison;
