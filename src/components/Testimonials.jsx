import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Star } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Arjun Malhotra",
    role: "Marketing Director @ TechVeda",
    content: "myAiAds transformed how we handle our ad production. The speed and quality are unprecedented.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
    stars: 5
  },
  {
    name: "Priyanka Sharma",
    role: "Founder, Bloom Digital",
    content: "The cinematic quality of the AI-generated ads is mind-blowing. Our ROAS increased by 40% in just one month.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
    stars: 5
  },
  {
    name: "Vikram Singh",
    role: "Creative Lead, Media360",
    content: "Finally, an AI tool that understands the nuances of visual storytelling. It's like having a 24/7 production studio.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&h=200&auto=format&fit=crop",
    stars: 5
  },
  {
    name: "Ananya Iyer",
    role: "E-commerce Specialist",
    content: "Easy, fast, and high-end results. myAiAds is a must-have for any D2C brand looking to scale.",
    image: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=200&h=200&auto=format&fit=crop",
    stars: 5
  },
  {
    name: "Rohan Gupta",
    role: "CMO, FinTrend",
    content: "The level of control and the aesthetic output matches our luxury positioning perfectly. Truly elite software.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&auto=format&fit=crop",
    stars: 5
  },
  {
    name: "Ishani Verma",
    role: "Content Creator",
    content: "I save hours of work every day. The ads look like they were made by a top-tier agency.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop",
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-header">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-tag"
        >
          Voices of Impact
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="testimonials-title"
        >
          Crafting success stories <br /> <span className="gradient-text">for the digital elite.</span>
        </motion.h2>
      </div>

      <div className="marquee-container">
        {/* Row 1 - Auto Scroll Left */}
        <div className="marquee-wrapper">
          <div className="marquee-inner marquee-inner-left">
            {[...testimonials, ...testimonials].map((item, index) => (
              <TestimonialCard key={`row1-${index}`} {...item} />
            ))}
          </div>
        </div>

        {/* Row 2 - Auto Scroll Right */}
        <div className="marquee-wrapper">
          <div className="marquee-inner marquee-inner-right">
            {[...testimonials, ...testimonials].map((item, index) => (
              <TestimonialCard key={`row2-${index}`} {...item} />
            ))}
          </div>
        </div>
      </div>

      <div className="luxury-glow-bottom"></div>
    </section>
  );
};

const TestimonialCard = ({ name, role, content, image, stars }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ 
        y: -25, 
        scale: 1.05, 
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      className="testimonial-card"
    >
      <div className="card-shimmer"></div>
      <div className="card-glow-inner"></div>
      <div className="card-top">
        <div className="quote-icon">
          <Quote size={20} fill="#ffffff" stroke="none" />
        </div>
        <div className="stars">
          {[...Array(stars)].map((_, i) => (
            <Star key={i} size={14} fill="#ffffff" stroke="none" />
          ))}
        </div>
      </div>
      
      <p className="testimonial-content">"{content}"</p>
      
      <div className="testimonial-footer">
        <img src={image} alt={name} className="user-avatar" />
        <div className="user-info">
          <h4 className="user-name">{name}</h4>
          <p className="user-role">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
