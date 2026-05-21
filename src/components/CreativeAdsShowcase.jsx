import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Wand2, Package, Box, MousePointer2 } from 'lucide-react';
import './CreativeAdsShowcase.css';

// Importing assets
import prodCreame from '../assets/creativeAds/ImagesWithAds/creameProduct.webp';
import creame1 from '../assets/creativeAds/ImagesWithAds/creame1.png';
import creame2 from '../assets/creativeAds/ImagesWithAds/creame2.png';
import creame3 from '../assets/creativeAds/ImagesWithAds/creame3.png';

import prodShooes from '../assets/creativeAds/ImagesWithAds/productShooes.jpg';
import shooes1 from '../assets/creativeAds/ImagesWithAds/shooesDeisng1.png';
import shooes2 from '../assets/creativeAds/ImagesWithAds/shooesDesing2.png';
import shooes3 from '../assets/creativeAds/ImagesWithAds/shooesDesing3.png';

import prodCoke from '../assets/creativeAds/ImagesWithAds/cokeProduct.jpg';
import coke1 from '../assets/creativeAds/ImagesWithAds/coke1.png';
import coke2 from '../assets/creativeAds/ImagesWithAds/coke2.png';
import coke3 from '../assets/creativeAds/ImagesWithAds/coke3.png';

const datasets = [
  {
    id: 'cosmetics',
    name: 'Skincare',
    input: prodCreame,
    outputs: [
      { img: creame1, score: '98', style: 'Nature / Fresh' },
      { img: creame2, score: '95', style: 'Minimal / Studio' },
      { img: creame3, score: '92', style: 'Floral / Spring' }
    ]
  },
  {
    id: 'shoes',
    name: 'Footwear',
    input: prodShooes,
    outputs: [
      { img: shooes1, score: '97', style: 'Urban / Street' },
      { img: shooes2, score: '94', style: 'Neon / Night' },
      { img: shooes3, score: '96', style: 'Action / Dynamic' }
    ]
  },
  {
    id: 'coke',
    name: 'Beverage',
    input: prodCoke,
    outputs: [
      { img: coke1, score: '99', style: 'Ice / Refreshing' },
      { img: coke2, score: '93', style: 'Summer / Beach' },
      { img: coke3, score: '96', style: 'Party / Vibrant' }
    ]
  }
];

const CreativeAdsShowcase = () => {
  const [activeSet, setActiveSet] = useState(0);
  const [step, setStep] = useState('input'); // 'input', 'generating', 'generated'

  const data = datasets[activeSet];

  useEffect(() => {
    let t1, t2, t3;
    setStep('input');

    // 1.5s: Mouse moves and clicks generate
    t1 = setTimeout(() => setStep('generating'), 1500);

    // 3s: Generation finishes, images appear
    t2 = setTimeout(() => setStep('generated'), 3000);

    // 8s: Move to next product automatically
    t3 = setTimeout(() => {
      setActiveSet((prev) => (prev + 1) % datasets.length);
    }, 8000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [activeSet]);

  return (
    <section id="creative-ads" className="cas-section light-pink-theme">
      <div className="cas-container">

        <div className="cas-header">
          <motion.div className="cas-badge" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Sparkles size={16} /> AI CREATIVE STUDIO
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            Turn Products into <span className="text-accent">Masterpieces</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            Watch our AI transform simple product photos into high-converting advertisements automatically.
          </motion.p>
        </div>

        {/* Product Selector */}
        <div className="cas-selector">
          {datasets.map((set, idx) => (
            <button
              key={set.id}
              className={`cas-tab ${activeSet === idx ? 'active' : ''}`}
              onClick={() => setActiveSet(idx)}
            >
              {set.name}
            </button>
          ))}
        </div>

        <div className="cas-flow-wrapper">

          {/* Top Row: Inputs & AI */}
          <div className="cas-top-row">

            <motion.div className="cas-input-node cas-node-left cas-simple-node" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
              <div className="cas-pill-icon"><Package size={18} color="#ec4899" /></div>
              <h4>Your Product</h4>
              <div className="cas-line-out right"></div>
            </motion.div>

            <motion.div
              className="cas-center-product"
              key={data.id + "-input"}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.4 }}
            >
              <div className="cas-check-pattern"></div>
              <img src={data.input} alt="Product Input" />
              <div className="cas-line-out bottom"></div>
            </motion.div>

            <motion.div className="cas-input-node cas-node-right cas-simple-node" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
              <h4> MyAiAds</h4>
              <img src="/app_logo.jpeg" alt="MyAiAds Logo" className="cas-ai-logo" />
              <div className="cas-line-out left"></div>
            </motion.div>

          </div>

          {/* Middle Row: Action Button */}
          <div className="cas-middle-row">
            <div className={`cas-line-vertical ${step !== 'input' ? 'glow' : ''}`}></div>

            <div className="cas-btn-container">
              <motion.button
                className={`cas-generate-btn ${step === 'generating' ? 'processing' : ''}`}
                animate={step === 'generating' ? { scale: 0.95 } : { scale: 1 }}
              >
                {step === 'generating' ? 'Generating...' : 'Generate Assets'}
                <Sparkles size={20} className={step === 'generating' ? 'cas-spin' : ''} />
              </motion.button>

              {/* Simulated Mouse Pointer */}
              <motion.div
                className="cas-fake-cursor"
                initial={{ opacity: 0, x: 100, y: 100 }}
                animate={
                  step === 'input' ? { opacity: 1, x: 50, y: 50 } :
                    step === 'generating' ? { opacity: 1, x: 0, y: 0, scale: 0.9 } :
                      { opacity: 0, x: -50, y: 50 }
                }
                transition={{ duration: 0.5 }}
              >
                <MousePointer2 size={32} color="#ec4899" fill="white" />
              </motion.div>
            </div>

            <div className={`cas-tree-branches ${step === 'generated' ? 'glow' : ''}`}>
              <div className="branch-line left"></div>
              <div className="branch-line center"></div>
              <div className="branch-line right"></div>
            </div>
          </div>

          {/* Bottom Row: Generated Ads */}
          <div className="cas-bottom-row">
            <h3 className="cas-assets-title">AI Generated Assets</h3>

            <div className="cas-assets-grid">
              {data.outputs.map((out, idx) => (
                <div
                  className={`cas-asset-card ${step === 'generated' ? 'is-generated' : 'is-loading'}`}
                  key={data.id + "-out-" + idx}
                >
                  {step === 'generated' ? (
                    <div className="cas-card-content">
                      <div className="cas-score-bar">
                        <span className="cas-score-label"><Box size={14} /> {out.style}</span>
                        <span className="cas-score-value">{out.score}/100</span>
                      </div>
                      <div className="cas-asset-img-wrap">
                        <img src={out.img} alt={`Generated Ad ${idx + 1}`} loading="lazy" />
                      </div>
                    </div>
                  ) : (
                    <div className="cas-card-placeholder">
                      <div className="cas-skeleton-bar"></div>
                      <div className="cas-skeleton-img"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CreativeAdsShowcase;
