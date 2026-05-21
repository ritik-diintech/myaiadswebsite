import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, MonitorPlay, Zap, BarChart3 } from 'lucide-react';
import './OutdoorWorkflow.css';

const OutdoorWorkflow = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    {
      icon: <Target size={32} />,
      title: "Target & Plan",
      desc: "We analyze your audience and select the perfect routes, whether it's city buses or highway billboards. Precision targeting from day one.",
      num: "01",
      align: "left"
    },
    {
      icon: <MonitorPlay size={32} />,
      title: "Deploy & Connect",
      desc: "Your physical ads go live equipped with our secure AI edge cameras. The bridge between the real world and digital data is built.",
      num: "02",
      align: "right"
    },
    {
      icon: <Zap size={32} />,
      title: "Live Neural Feed",
      desc: "Watch the dashboard light up. See live vehicle counts, pedestrian density, and heatmaps as people interact with your brand.",
      num: "03",
      align: "left"
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Analyze & Scale",
      desc: "Get actionable daily reports. Know your exact Cost-Per-View (CPV) and use hard data to optimize your next massive campaign.",
      num: "04",
      align: "right"
    }
  ];

  return (
    <section className="dynamic-workflow" ref={containerRef}>
      <div className="dw-header">
        <motion.div 
          className="dw-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          THE MASTER PLAN
        </motion.div>
        <h2>From Streets to <span className="text-accent">Screens</span></h2>
        <p>A seamless journey bringing digital intelligence to your physical campaigns.</p>
      </div>

      <div className="dw-timeline-container">
        {/* The glowing central line */}
        <div className="dw-line-bg" />
        <motion.div className="dw-line-active" style={{ height: lineHeight }} />

        {steps.map((step, idx) => (
          <div key={idx} className={`dw-step-row ${step.align}`}>
            
            {/* The Node on the line */}
            <div className="dw-node-wrapper">
              <motion.div 
                className="dw-node"
                initial={{ scale: 0, backgroundColor: "#333" }}
                whileInView={{ scale: 1, backgroundColor: "var(--accent)" }}
                viewport={{ margin: "-50% 0px -50% 0px" }}
                transition={{ duration: 0.4 }}
              />
              <motion.div 
                className="dw-node-pulse"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 2 }}
                viewport={{ margin: "-50% 0px -50% 0px" }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              />
            </div>

            {/* The Content Card */}
            <motion.div 
              className="dw-card"
              initial={{ opacity: 0, x: step.align === 'left' ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            >
              <div className="dw-card-inner">
                <div className="dw-huge-num">{step.num}</div>
                <div className="dw-icon-box">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default OutdoorWorkflow;
