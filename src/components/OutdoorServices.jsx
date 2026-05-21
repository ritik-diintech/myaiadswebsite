import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './OutdoorServices.css';

// --- IMAGE IMPORTS ---
import bus1 from '../assets/outdoorADsImages/bus10.jpeg';
import bus2 from '../assets/outdoorADsImages/bus7.jpeg';
import bus3 from '../assets/outdoorADsImages/bus8.jpeg';
import bus4 from '../assets/outdoorADsImages/busad4.jpeg';

import van1 from '../assets/outdoorADsImages/mobieVanAd.png';
import van2 from '../assets/outdoorADsImages/mobileVanAd2.png';
import van3 from '../assets/outdoorADsImages/mobileVan3.png';
import van4 from '../assets/outdoorADsImages/mobileVan4.png';
import van5 from '../assets/outdoorADsImages/mobileVan5.jpeg';

import rik1 from '../assets/outdoorADsImages/rikhsa6.jpeg';
import rik2 from '../assets/outdoorADsImages/riksha3.jpeg';
import rik3 from '../assets/outdoorADsImages/riksha4.jpeg';
import rik4 from '../assets/outdoorADsImages/risksha5.jpeg';

import board1 from '../assets/outdoorADsImages/roadAboveAd.jpeg';
import board2 from '../assets/outdoorADsImages/roadAboveAd2.jpeg';
import board3 from '../assets/outdoorADsImages/roadSideboard.jpeg';
import board4 from '../assets/outdoorADsImages/roadSideboard2.jpeg';
import board5 from '../assets/outdoorADsImages/roadSideboard3.jpeg';

import poll1 from '../assets/outdoorADsImages/streetPoll1.jpeg';
import poll2 from '../assets/outdoorADsImages/streetPoll2.jpeg';
import poll3 from '../assets/outdoorADsImages/streetpol3.jpeg';


// --- LAZY LOADING WRAPPER ---
const LazySection = ({ children, minHeight = "800px" }) => {
  const ref = useRef(null);
  // Trigger rendering 300px before the user scrolls to it
  const isInView = useInView(ref, { once: true, margin: "300px 0px" });

  return (
    <div ref={ref} style={{ minHeight: isInView ? 'auto' : minHeight, width: '100%' }}>
      {isInView ? children : null}
    </div>
  );
};

// --- DESIGN 1: BUS ADS (Premium Bento Grid) ---
const BusSection = () => (
  <section className="service-bus-unique">
    <div className="bus-container">
      <div className="bus-text-wrapper">
        <motion.div className="bus-badge" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>CITY-WIDE COVERAGE</motion.div>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Bus Advertising
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          Transform city buses into massive moving billboards. Guarantee high visibility across major transit routes with our AI-tracked fleets.
        </motion.p>
      </div>

      <div className="bus-bento-grid">
        <motion.div className="bus-bento-item bento-img-1" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
          <img src={bus1} alt="Bus Ad 1" loading="lazy" />
          <div className="bento-overlay">Premium Routes</div>
        </motion.div>

        <motion.div className="bus-bento-item bento-img-2" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <img src={bus2} alt="Bus Ad 2" loading="lazy" />
        </motion.div>

        <motion.div className="bus-bento-item bento-img-3" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <img src={bus3} alt="Bus Ad 3" loading="lazy" />
        </motion.div>

        <motion.div className="bus-bento-item bento-img-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          <img src={bus4} alt="Bus Ad 4" loading="lazy" />
        </motion.div>

        <motion.div className="bus-bento-item bento-stats" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
          <div className="stat-box">
            <h4>50+</h4>
            <span>Active Buses</span>
          </div>
          <div className="stat-box">
            <h4>Live</h4>
            <span>Tracking</span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);


// --- DESIGN 2: VAN ADS (Vibrant Accent & Split Stack) ---
const VanSection = () => (
  <section className="service-van-unique">
    <div className="van-container">
      <motion.div className="van-text" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <h2>Mobile Van Ads</h2>
        <p>Take your brand exactly where your customers are. Park near malls, events, or drive through busy local markets.</p>
        <button className="van-btn">Explore Van Ads <ArrowRight size={18} /></button>
      </motion.div>
      <div className="van-stack">
        {[van1, van2, van3, van4, van5].map((img, idx) => (
          <motion.div
            key={idx}
            className="van-img-wrap"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.15 }}
          >
            <img src={img} alt={`Van Ad ${idx + 1}`} loading="lazy" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);


// --- DESIGN 3: RICKSHAW ADS (White Clean Checkerboard) ---
const RickshawSection = () => (
  <section className="service-rickshaw-unique">
    <div className="rickshaw-container">
      <div className="rickshaw-header">
        <h2>Rickshaw Branding</h2>
        <p>Local marketing made easy. Perfect for reaching people inside narrow streets and busy residential areas.</p>
      </div>

      <div className="rickshaw-checkerboard">
        {/* Row 1 */}
        <motion.div className="r-checker-item" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <img src={rik1} alt="Rickshaw 1" loading="lazy" />
        </motion.div>
        <motion.div className="r-checker-item text-item" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3>High Visibility</h3>
          <p>Bright and colorful ads on the back of rickshaws easily catch the eye of drivers and pedestrians behind them.</p>
        </motion.div>

        {/* Row 2 */}
        <motion.div className="r-checker-item text-item" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3>Budget Friendly</h3>
          <p>Get your brand on hundreds of rickshaws without breaking the bank. A highly cost-effective daily medium.</p>
        </motion.div>
        <motion.div className="r-checker-item" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <img src={rik2} alt="Rickshaw 2" loading="lazy" />
        </motion.div>

        {/* Row 3 */}
        <motion.div className="r-checker-item" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <img src={rik3} alt="Rickshaw 3" loading="lazy" />
        </motion.div>
        <motion.div className="r-checker-item" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <img src={rik4} alt="Rickshaw 4" loading="lazy" />
        </motion.div>
      </div>
    </div>
  </section>
);


// --- DESIGN 4: BILLBOARDS (Cinematic Pure Black) ---
const BillboardSection = () => (
  <section className="service-billboard-unique">
    <div className="billboard-container">
      <motion.div className="billboard-header" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <h2>BILLBOARDS</h2>
        <p>Massive size. Massive impact. Own the highways and main road junctions.</p>
      </motion.div>

      <motion.div className="billboard-hero-img" initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}>
        <img src={board1} alt="Billboard Hero" loading="lazy" />
      </motion.div>

      <div className="billboard-row">
        {[board2, board3, board4, board5].map((img, idx) => (
          <motion.div
            key={idx}
            className="billboard-small-img"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <img src={img} alt={`Billboard ${idx + 2}`} loading="lazy" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);


// --- DESIGN 5: STREET POLLS (Charcoal Marquee) ---
const PollSection = () => (
  <section className="service-poll-unique">
    <div className="poll-container">
      <div className="poll-text">
        <h2>Street Pole Ads</h2>
        <p>Repeat your brand message on every pole. Creates a strong memory in the minds of daily commuters.</p>
      </div>

      {/* Simple Flex Row for Polls to keep 16:9 large */}
      <div className="poll-gallery">
        {[poll1, poll2, poll3].map((img, idx) => (
          <motion.div
            key={idx}
            className="poll-img-box"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
          >
            <img src={img} alt={`Poll Ad ${idx + 1}`} loading="lazy" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);


const OutdoorServices = () => {
  return (
    <div className="outdoor-services-wrapper">
      <LazySection minHeight="800px">
        <BusSection />
      </LazySection>
      
      <LazySection minHeight="800px">
        <VanSection />
      </LazySection>
      
      <LazySection minHeight="800px">
        <RickshawSection />
      </LazySection>
      
      <LazySection minHeight="800px">
        <BillboardSection />
      </LazySection>
      
      <LazySection minHeight="500px">
        <PollSection />
      </LazySection>
    </div>
  );
};

export default OutdoorServices;
