import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, Play, Zap, Star, Target, Layers, Mic, Film } from 'lucide-react';
import './AIAdvantage.css';

/* ── Animated Counter ── */
const Counter = ({ end, suffix = '' }) => {
    const [val, setVal] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    useEffect(() => {
        if (!inView) return;
        let n = 0;
        const step = end / 60;
        const id = setInterval(() => {
            n += step;
            if (n >= end) { setVal(end); clearInterval(id); }
            else setVal(Math.floor(n));
        }, 16);
        return () => clearInterval(id);
    }, [inView, end]);

    return <span ref={ref}>{val}{suffix}</span>;
};

const AIAdvantage = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    });

    const floatY1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
    const floatY2 = useTransform(scrollYProgress, [0, 1], [-40, 80]);
    const rotateBlob = useTransform(scrollYProgress, [0, 1], [0, 120]);

    return (
        <section className="adv-section" ref={sectionRef} id="advantage">

            {/* ═══ BACKGROUND CANVAS ═══ */}
            <div className="adv-bg-canvas">
                {/* Base gradient — white to warm orange */}
                <div className="adv-bg-base"></div>

                {/* Morphing blobs */}
                <motion.div className="adv-blob adv-blob-1" style={{ rotate: rotateBlob }} />
                <motion.div className="adv-blob adv-blob-2" style={{ y: floatY1 }} />
                <motion.div className="adv-blob adv-blob-3" style={{ y: floatY2 }} />

                {/* Dot matrix texture */}
                <div className="adv-dot-matrix"></div>

                {/* Accent streak lines */}
                <div className="adv-streak adv-streak-1"></div>
                <div className="adv-streak adv-streak-2"></div>
            </div>

            <div className="adv-wrapper">

                {/* ═══ HERO HEADLINE BLOCK ═══ */}
                <div className="adv-hero-block">
                    <motion.div
                        className="adv-pill-tag"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Star size={13} /> Why Brands Choose Us
                    </motion.div>

                    <motion.h2
                        className="adv-headline"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                    >
                        Not Just <span className="adv-highlight">Another AI Tool</span>
                        <br />
                        <span className="adv-thin">It's Your Creative Partner</span>
                    </motion.h2>

                    <motion.p
                        className="adv-lead"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        MyAiAds transforms your ideas into cinematic video ads that captivate
                        audiences and drive real business growth — all within minutes.
                    </motion.p>
                </div>

                {/* ═══ FEATURE STRIPS — Horizontal Editorial Layout ═══ */}
                <div className="adv-strips">

                    {/* Strip 1 */}
                    <motion.div
                        className="adv-strip"
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                    >
                        <div className="adv-strip-num">01</div>
                        <div className="adv-strip-visual">
                            <div className="adv-icon-sphere">
                                <Film size={28} />
                            </div>
                            <div className="adv-strip-ring"></div>
                        </div>
                        <div className="adv-strip-content">
                            <h3>Cinematic Studio Quality</h3>
                            <p>Produce video ads that look like they came from a premium production house. 4K ultra-HD output with cinematic color grading — zero camera crew needed.</p>
                        </div>
                        <div className="adv-strip-metric">
                            <span className="adv-big-num"><Counter end={4} suffix="K" /></span>
                            <span className="adv-metric-tag">Ultra HD</span>
                        </div>
                    </motion.div>

                    {/* Strip 2 */}
                    <motion.div
                        className="adv-strip adv-strip-alt"
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                    >
                        <div className="adv-strip-num">02</div>
                        <div className="adv-strip-visual">
                            <div className="adv-icon-sphere sphere-blue">
                                <Mic size={28} />
                            </div>
                            <div className="adv-strip-ring ring-blue"></div>
                        </div>
                        <div className="adv-strip-content">
                            <h3>100+ Hyper-Realistic AI Voices</h3>
                            <p>Choose from over a hundred AI voices that sound perfectly human. Match your brand's tone — authoritative, friendly, energetic, or sophisticated.</p>
                        </div>
                        <div className="adv-strip-metric">
                            <span className="adv-big-num"><Counter end={100} suffix="+" /></span>
                            <span className="adv-metric-tag">AI Voices</span>
                        </div>
                    </motion.div>

                    {/* Strip 3 */}
                    <motion.div
                        className="adv-strip"
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                    >
                        <div className="adv-strip-num">03</div>
                        <div className="adv-strip-visual">
                            <div className="adv-icon-sphere sphere-gold">
                                <Zap size={28} />
                            </div>
                            <div className="adv-strip-ring ring-gold"></div>
                        </div>
                        <div className="adv-strip-content">
                            <h3>Lightning-Fast Generation</h3>
                            <p>What used to take days with a production team now takes seconds. Enter your prompt, select a model like Google Veo or Kling 2.0, and watch magic happen.</p>
                        </div>
                        <div className="adv-strip-metric">
                            <span className="adv-big-num"><Counter end={10} suffix="x" /></span>
                            <span className="adv-metric-tag">Faster</span>
                        </div>
                    </motion.div>

                    {/* Strip 4 */}
                    <motion.div
                        className="adv-strip adv-strip-alt"
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                    >
                        <div className="adv-strip-num">04</div>
                        <div className="adv-strip-visual">
                            <div className="adv-icon-sphere sphere-emerald">
                                <Target size={28} />
                            </div>
                            <div className="adv-strip-ring ring-emerald"></div>
                        </div>
                        <div className="adv-strip-content">
                            <h3>Every Platform, Every Format</h3>
                            <p>Instagram Reels, YouTube Shorts, TikTok, Facebook — export in any aspect ratio. One prompt, ads optimized for every social media platform.</p>
                        </div>
                        <div className="adv-strip-metric">
                            <span className="adv-big-num"><Counter end={5} suffix="+" /></span>
                            <span className="adv-metric-tag">Platforms</span>
                        </div>
                    </motion.div>
                </div>

                {/* ═══ FLOATING ACCENT BADGES ═══ */}
                <motion.div
                    className="adv-floating-badge adv-fb-1"
                    style={{ y: floatY1 }}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <Sparkles size={16} /> AI Powered
                </motion.div>

                <motion.div
                    className="adv-floating-badge adv-fb-2"
                    style={{ y: floatY2 }}
                    animate={{ rotate: [0, -3, 3, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <Play size={14} /> Cinematic Output
                </motion.div>

                {/* ═══ BOTTOM CTA & TRUST BAR ═══ */}
                <motion.div
                    className="adv-bottom-block"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="adv-trust-pills">
                        <div className="adv-trust-pill">
                            <div className="adv-trust-dot"></div>
                            <span>No Camera Crew</span>
                        </div>
                        <div className="adv-trust-pill">
                            <div className="adv-trust-dot"></div>
                            <span>No Editing Skills</span>
                        </div>
                        <div className="adv-trust-pill">
                            <div className="adv-trust-dot"></div>
                            <span>No Expensive Software</span>
                        </div>
                    </div>

                    <motion.button
                        className="adv-main-cta"
                        whileHover={{ scale: 1.06, y: -4 }}
                        whileTap={{ scale: 0.96 }}
                    >
                        <span>Experience the Difference</span>
                        <ArrowRight size={20} />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default AIAdvantage;
