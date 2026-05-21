import React from 'react';
import { motion } from 'framer-motion';
import { Type, Layers, Download, Sparkles } from 'lucide-react';
import flowImg from '../assets/fetureImages/flow-removebg.png';
import './Flow.css';

const Flow = () => {
    const steps = [
        {
            number: "01",
            icon: <Type size={32} />,
            title: "Input Your Prompt or Image",
            description: "Tell us about your business or service. Begin by entering a text prompt or uploading an image to serve as the foundation for your ad.",
            color: "var(--accent)"
        },
        {
            number: "02",
            icon: <Layers size={32} />,
            title: "Select Template",
            description: "Pick from a range of specialized AI models like Google Veo 3.1 or Kling 2.0 to tailor the visual style to your brand.",
            color: "#000"
        },
        {
            number: "03",
            icon: <Download size={32} />,
            title: "Generate and Save",
            description: "Once you're satisfied with the preview, download your studio-grade AI-generated video in high resolution instantly.",
            color: "var(--accent)"
        }
    ];

    return (
        <section className="flow-section" id="how-it-works">
            <div className="flow-wrapper">
                <div className="flow-header">
                    <motion.span
                        className="flow-tag"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Success Roadmap
                    </motion.span>
                    <motion.h2
                        className="flow-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        How to <span>Create?</span>
                    </motion.h2>
                </div>

                <div className="flow-main-visual">
                    <motion.div
                        className="flow-image-container-v"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="flow-img-glow-v"></div>
                        <img src={flowImg} alt="AI Flow Illustration" className="flow-visual-img-v" />
                    </motion.div>
                </div>

                <div className="flow-steps-container">
                    <div className="flow-svg-container">
                        <svg width="100%" height="300" viewBox="0 -50 800 350" fill="none" preserveAspectRatio="none">
                            <defs>
                                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                    <feGaussianBlur stdDeviation="4" result="blur" />
                                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                </filter>
                                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
                                    <stop offset="50%" stopColor="var(--accent)" stopOpacity="1" />
                                    <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                                </linearGradient>
                            </defs>

                            {/* Base Track */}
                            <motion.path
                                d="M 120 80 Q 250 20 380 160 Q 510 100 640 240"
                                stroke="var(--accent-soft)"
                                strokeWidth="2"
                                strokeDasharray="10, 10"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 0.3 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                            />

                            {/* Animated Traveling Light */}
                            <motion.path
                                d="M 120 80 Q 250 20 380 160 Q 510 100 640 240"
                                stroke="var(--accent)"
                                strokeWidth="4"
                                strokeLinecap="round"
                                filter="url(#glow)"
                                initial={{ pathOffset: 0, pathLength: 0.1, opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                animate={{ pathOffset: [0, 1] }}
                                transition={{
                                    opacity: { duration: 0.5 },
                                    pathOffset: { duration: 4, repeat: Infinity, ease: "linear" }
                                }}
                            />

                            {/* Connection Nodes */}
                            {[
                                { x: 120, y: 80 },
                                { x: 380, y: 160 },
                                { x: 640, y: 240 }
                            ].map((node, i) => (
                                <motion.circle
                                    key={i}
                                    cx={node.x}
                                    cy={node.y}
                                    r="6"
                                    fill="var(--accent)"
                                    filter="url(#glow)"
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                                    transition={{
                                        delay: i * 0.5,
                                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                                        opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                />
                            ))}
                        </svg>
                    </div>

                    <div className="flow-steps-grid-v">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="flow-step-v"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="flow-step-v-card">
                                    <div className="card-top-glow" style={{ background: index === 1 ? '#000' : '#fff' }}></div>
                                    <div className="flow-step-v-num">{step.number}</div>
                                    <div className="flow-step-v-icon">
                                        {step.icon}
                                    </div>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                    <div className="card-deco-sparkle">
                                        <Sparkles size={14} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Decorative Decoration */}
            <div className="flow-bg-blur"></div>
        </section>
    );
};

export default Flow;
