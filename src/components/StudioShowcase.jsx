import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './StudioShowcase.css';

// Importing all videos from studioAds
import s1 from '../assets/studioAds/bright_ad.mp4';
import s2 from '../assets/studioAds/beauty_ad.mp4';
import s3 from '../assets/studioAds/cinematic_ad.mp4';
import s4 from '../assets/studioAds/gym_ad.mp4';
import s5 from '../assets/studioAds/realstate_ad_1.mp4';
import s6 from '../assets/studioAds/realstate_ad_2.mp4';
import s7 from '../assets/studioAds/tech_ad.mp4';
import s8 from '../assets/studioAds/motivation_ad.mp4';
import s9 from '../assets/studioAds/car_ad.mp4';
import s10 from '../assets/studioAds/healthcare_ad.mp4';
import s11 from '../assets/studioAds/stylish_ad.mp4';

const VideoItem = ({ src, index }) => {
    const videoRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (videoRef.current) {
                    if (entry.isIntersecting) {
                        // Play when in view
                        videoRef.current.play().catch(err => {
                            // Only log if it's not a deliberate abort
                            if (err.name !== 'AbortError') {
                                console.log("Autoplay issue:", err);
                            }
                        });
                    } else {
                        // Pause when out of view to save resources
                        videoRef.current.pause();
                    }
                }
            },
            { threshold: 0, rootMargin: '100px' } // Start playing slightly before it enters view
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) observer.unobserve(videoRef.current);
        };
    }, []);

    return (
        <motion.div
            className="ss-video-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <video
                ref={videoRef}
                src={src}
                loop
                muted
                playsInline
                preload="auto"
                className={`ss-actual-video ${isLoaded ? 'loaded' : ''}`}
                onLoadedData={() => setIsLoaded(true)}
            />
            <div className="ss-video-overlay"></div>
        </motion.div>
    );
};

const StudioShowcase = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // All available videos from studioAds
    const allVideos = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11];

    // Repeat less for better performance while keeping density
    const repeatedVideos = [...allVideos, ...allVideos, ...allVideos];

    // Distribute videos across 4 columns instead of 5 (better balance)
    const col1 = repeatedVideos.slice(0, 8);
    const col2 = repeatedVideos.slice(8, 16);
    const col3 = repeatedVideos.slice(16, 24);
    const col4 = repeatedVideos.slice(24, 32);

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -250]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, 200]);

    return (
        <section className="ss-section" ref={sectionRef} id="gallery">
            {/* Background Video Wall */}
            <div className="ss-video-wall-container">
                <div className="ss-video-wall">
                    <motion.div className="ss-column" style={{ y: y1 }}>
                        {col1.map((v, i) => <VideoItem key={`col1-${i}`} src={v} />)}
                    </motion.div>
                    <motion.div className="ss-column ss-middle" style={{ y: y2 }}>
                        {col2.map((v, i) => <VideoItem key={`col2-${i}`} src={v} />)}
                    </motion.div>
                    <motion.div className="ss-column" style={{ y: y3 }}>
                        {col3.map((v, i) => <VideoItem key={`col3-${i}`} src={v} />)}
                    </motion.div>
                    <motion.div className="ss-column ss-middle" style={{ y: y4 }}>
                        {col4.map((v, i) => <VideoItem key={`col4-${i}`} src={v} />)}
                    </motion.div>
                </div>
                {/* Heavy Cinematic Overlay */}
                <div className="ss-heavy-overlay"></div>
            </div>

            {/* Centered Content Overlay */}
            <div className="ss-content-overlay">
                <motion.div
                    className="ss-text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <motion.h1
                        className="ss-main-title"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <span className="ss-accent-brand">MyAiAds</span> Studio
                    </motion.h1>
                    <motion.p
                        className="ss-sub-glow"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Transforming your vision into studio-grade video ads.
                    </motion.p>

                    <motion.div
                        className="ss-action-box"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <button className="ss-glass-btn">
                            Create with MyAiAds
                        </button>

                    </motion.div>
                </motion.div>


            </div>

            {/* Glass Background Elements */}
            <div className="ss-bg-blur top"></div>
            <div className="ss-bg-blur bottom"></div>
        </section>
    );
};

export default StudioShowcase;
