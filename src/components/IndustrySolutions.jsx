import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, PlusCircle, ListTodo, Coins, Sparkles, Cloud, ShieldCheck, ArrowUpRight, Target, Smartphone } from 'lucide-react';
import './IndustrySolutions.css';

// Import Renamed Mobile Mockup Images
import mob1 from '../assets/mobileShowcase/app_screen_1.jpg';
import mob2 from '../assets/mobileShowcase/app_screen_2.jpg';
import mob3 from '../assets/mobileShowcase/app_screen_3.jpg';
import mob4 from '../assets/mobileShowcase/app_screen_4.jpg';
import mob5 from '../assets/mobileShowcase/app_screen_5.jpg';

const IndustrySolutions = () => {
    const [currentImg, setCurrentImg] = useState(0);
    const previewImages = [mob1, mob2, mob3, mob4, mob5];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImg((prev) => (prev + 1) % previewImages.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(timer);
    }, [previewImages.length]);

    const floatingFeatures = [
        {
            icon: <Image size={24} />,
            title: "AI Ads Gallery",
            pos: { top: '15%', left: '8%' },
            delay: 0
        },
        {
            icon: <PlusCircle size={24} />,
            title: "Custom Ad Request",
            pos: { top: '25%', right: '10%' },
            delay: 0.5
        },
        {
            icon: <ListTodo size={24} />,
            title: "Project Management",
            pos: { bottom: '20%', left: '12%' },
            delay: 1
        },
        {
            icon: <Coins size={24} />,
            title: "Manage Credits",
            pos: { bottom: '25%', right: '8%' },
            delay: 1.5
        }
    ];

    return (
        <section className="ee-section" id="solutions">
            <div className="ee-ambient-light"></div>

            <motion.div
                className="ee-bg-text"
                animate={{ x: [-200, 200] }}
                transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            >
                AI POWERED ADVERTISING • AI POWERED ADVERTISING •
            </motion.div>

            <div className="ee-container">
                <div className="ee-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Your Complete <span>AI Ads Solution</span>
                    </motion.h2>
                </div>

                <div className="ee-stage">
                    {/* Floating Orbs & Icons */}
                    {floatingFeatures.map((feat, i) => (
                        <motion.div
                            key={i}
                            className="ee-float-item"
                            style={feat.pos}
                            animate={{
                                y: [0, -25, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                delay: feat.delay,
                                ease: "easeInOut"
                            }}
                        >
                            <div className="ee-float-icon">{feat.icon}</div>
                            <div className="ee-float-text">
                                <h4>{feat.title}</h4>
                                <div className="ee-float-line"></div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Central Device Mockup */}
                    <div className="ee-device-wrapper">
                        <motion.div
                            className="ee-phone"
                            initial={{ y: 80, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, type: "spring" }}
                        >
                            <div className="ee-phone-inner">
                                <div className="ee-app-screen">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentImg}
                                            className="ee-full-screenshot"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 1, ease: "easeInOut" }}
                                        >
                                            <img src={previewImages[currentImg]} alt="App Screen" />
                                        </motion.div>
                                    </AnimatePresence>

                                    <div className="ee-app-overlay">
                                        <div className="ee-app-header-glass">
                                            <Sparkles size={16} color="#fff" /> myAiAds
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ee-phone-glow"></div>
                        </motion.div>
                    </div>

                    {/* APP SPECIFIC INFO PANELS */}
                    <div className="ee-info-strip">
                        <motion.div
                            className="ee-info-item"
                            whileHover={{ y: -5 }}
                        >
                            <div className="ee-info-icon"><Sparkles size={20} /></div>
                            <div className="ee-info-content">
                                <h3>AI Powered Creation</h3>
                                <p>Generate high-impact video ads from simple text scripts instantly.</p>
                            </div>
                            <ArrowUpRight className="ee-info-arrow" size={20} />
                        </motion.div>
                        <motion.div
                            className="ee-info-item"
                            whileHover={{ y: -5 }}
                        >
                            <div className="ee-info-icon"><Target size={20} /></div>
                            <div className="ee-info-content">
                                <h3>Industry Specialized</h3>
                                <p>Tailored templates for Real Estate, Products, and Social growth.</p>
                            </div>
                            <ArrowUpRight className="ee-info-arrow" size={20} />
                        </motion.div>
                    </div>

                </div>

                <motion.div
                    className="ee-download-area"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <button className="ee-download-btn">
                        <Smartphone size={20} /> Download App Now
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default IndustrySolutions;
