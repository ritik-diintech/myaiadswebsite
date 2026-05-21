import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, Trophy, Rocket } from 'lucide-react';
import './CTA.css';

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="cta-bg-elements">
                <div className="cta-orb orb-1"></div>
                <div className="cta-orb orb-2"></div>
                <div className="cta-mesh"></div>
            </div>

            <div className="cta-container">
                <motion.div
                    className="cta-glass-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="cta-content">
                        <motion.div
                            className="cta-icon-badge"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                        >
                            <Sparkles size={24} color="#fff" />
                        </motion.div>

                        <h2 className="cta-title">
                            Ready to revolutionize <br />
                            <span>your marketing?</span>
                        </h2>

                        <p className="cta-description">
                            Join thousands of elite businesses using myAiAds to outpace <br className="desktop-br" />
                            their competition and scale with studio-grade AI content.
                        </p>

                        <div className="cta-actions">
                            <motion.button
                                className="cta-btn-primary"
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>Download App Now</span>
                                <ArrowRight size={20} />
                            </motion.button>

                            <div className="cta-stats">
                                <div className="stat-item">
                                    <Zap size={16} />
                                    <span>Cinematic Ads</span>
                                </div>
                                <div className="stat-item">
                                    <Trophy size={16} />
                                    <span>#1 AI Ad Tech</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Floating Icons */}
                    <motion.div
                        className="floating-deco deco-1"
                        animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    >
                        <Rocket size={32} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
