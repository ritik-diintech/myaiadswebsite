import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Target, BarChart3, Database, Globe, Layers, Navigation } from 'lucide-react';
import './OutdoorFeatures.css';

const OutdoorFeatures = () => {
  const dataNodes = [
    { icon: <Database size={24} />, title: "Vehicles Active", label: "500+" },
    { icon: <Globe size={24} />, title: "Cities Covered", label: "25+" },
    { icon: <Layers size={24} />, title: "Monthly Reach", label: "10M+" }
  ];

  return (
    <section className="outdoor-intelligence">
      {/* Abstract Animated Background */}
      <div className="intelligence-bg">
        <div className="grid-pattern" />
        {[...Array(5)].map((_, i) => (
          <motion.div 
            key={i}
            className="data-stream"
            initial={{ x: "-100%", top: `${i * 20 + 10}%` }}
            animate={{ x: "200%" }}
            transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      <div className="intelligence-container">
        
        <div className="intelligence-header">
          <motion.div 
            className="nexus-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Cpu size={16} />
            <span>AI CORE v2.0</span>
          </motion.div>
          <motion.h2 
            className="nexus-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            The Intelligence <span className="text-stroke">Nexus</span>
          </motion.h2>
          <p className="nexus-subtitle">
            We don't just track ads. We decode urban movement patterns using 
            advanced neural networks to optimize your outdoor presence.
          </p>
        </div>

        <div className="nexus-grid">
          {/* Main Large Card: Live Neural Map */}
          <motion.div 
            className="nexus-card large-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="card-header">
              <div className="live-tag">LIVE NEURAL FEED</div>
              <BarChart3 size={20} className="text-white" />
            </div>
            
            <div className="visual-core">
              <div className="core-rings">
                <div className="ring r1" />
                <div className="ring r2" />
                <div className="ring r3" />
                <div className="core-icon-wrap">
                  <Zap size={36} className="core-icon" />
                  <div className="core-scan-glow" />
                </div>
              </div>
              <div className="data-points">
                {[...Array(12)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="dot"
                    style={{
                      left: `${50 + Math.cos(i * 30 * Math.PI / 180) * 120}%`,
                      top: `${50 + Math.sin(i * 30 * Math.PI / 180) * 120}%`
                    }}
                    animate={{ 
                      scale: [1, 1.5, 1], 
                      opacity: [0.2, 0.8, 0.2],
                      boxShadow: ["0 0 0px var(--accent)", "0 0 10px var(--accent)", "0 0 0px var(--accent)"]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </div>

            <div className="card-footer-stats">
              <div className="f-stat">
                <span className="f-val">99.9%</span>
                <span className="f-lab">Uptime</span>
              </div>
              <div className="f-stat">
                <span className="f-val">2.4ms</span>
                <span className="f-lab">Latency</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Small Feature Cards */}
          <div className="nexus-side-grid">
            {[
              { icon: <Target />, title: "Precision Target", desc: "Location-based audience filters" },
              { icon: <Navigation />, title: "Route Mapping", desc: "Optimized travel path visibility" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className="nexus-card small-card"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              >
                <div className="small-card-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}

            <motion.div 
              className="nexus-card wide-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="node-container">
                {dataNodes.map((node, i) => (
                  <div key={i} className="data-node">
                    <div className="node-icon">{node.icon}</div>
                    <div className="node-info">
                      <span className="node-label">{node.label}</span>
                      <span className="node-title">{node.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutdoorFeatures;
