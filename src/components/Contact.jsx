import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, UserCheck, Globe } from 'lucide-react';
import founderImg from '../assets/founder/founderImg.png';
import './Contact.css';

const ArrowRightIcon = () => (
  <svg className="method-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.001c6.551 0 11.888-5.335 11.891-11.89a11.78 11.78 0 00-3.455-8.411z" />
  </svg>
);

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-blur-glow"></div>

      <div className="contact-container">
        <div className="contact-grid">

          {/* Left Side: Founder Profile */}
          <motion.div
            className="founder-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="founder-img-wrapper">
              <div className="founder-glow"></div>
              <img src={founderImg} alt="Vijay Kumar Singh" className="founder-img" />
              <div className="founder-badge">Founder</div>
            </div>
            <div className="founder-info">
              <h2 className="founder-name">Vijay Kumar <span>Singh</span></h2>
              <p className="founder-title">Visionary at Diin-Technologies</p>
              <div className="founder-socials">
                <a href="#" className="social-icon"><UserCheck size={20} /></a>
                <a href="#" className="social-icon"><Send size={20} /></a>
                <a href="#" className="social-icon"><Globe size={20} /></a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Information */}
          <div className="contact-content">
            <motion.div
              className="contact-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="contact-tag">Get In Touch</span>
              <h2 className="contact-title">Let's craft your <br /><span>next success story.</span></h2>
              <p className="contact-subtitle">Have a project in mind? Reach out to us and let's build something extraordinary together.</p>
            </motion.div>

            <div className="contact-methods">
              <motion.a
                href="mailto:contact@diintech.com"
                className="contact-method-card"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="method-icon"><Mail size={24} /></div>
                <div className="method-info">
                  <label>Email Us</label>
                  <span>contact@diintech.com</span>
                </div>
                <ArrowRightIcon />
              </motion.a>

              <motion.a
                href="tel:+918147540362"
                className="contact-method-card"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="method-icon"><Phone size={24} /></div>
                <div className="method-info">
                  <label>Call Us</label>
                  <span>+91 81475 40362</span>
                </div>
                <ArrowRightIcon />
              </motion.a>

              <motion.div
                className="contact-method-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="method-icon"><MapPin size={24} /></div>
                <div className="method-info">
                  <label>Our Office</label>
                  <span>C-116, Sector-2, Noida, UP, India</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="quick-action"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="https://wa.me/918147540362"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-cta"
                style={{ textDecoration: 'none' }}
              >
                <WhatsAppIcon />
                <span>Start a Conversation</span>
                <Send size={16} className="send-icon" />
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
