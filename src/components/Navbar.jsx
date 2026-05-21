import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown, LayoutGrid, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  const mainLinks = [
    { name: 'Home', href: '/', isHash: false },
    { name: 'Creative Ads', href: '/#creative-ads', isHash: true },
    { name: 'Advertisement', href: '/outdoor-ads', isHash: false },
    { name: 'Ads-Gallery', href: '/#gallery', isHash: true },
    { name: 'Contact', href: '/#contact', isHash: true },
  ];

  const moreLinks = [
    { name: 'Features', href: '/#features', icon: <LayoutGrid size={18} /> },
    { name: 'Process', href: '/#how-it-works', icon: <Zap size={18} /> },
    { name: 'Solutions', href: '/#solutions', icon: <LayoutGrid size={18} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsMoreOpen(false);
  };

  const isActive = (href) => {
    const path = href.split('#')[0] || '/';
    const hash = href.split('#')[1];

    if (hash) {
      return location.pathname === path && location.hash === `#${hash}`;
    }
    return location.pathname === path && !location.hash;
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={handleLinkClick}>
          <img src="/app_logo.jpeg" alt="myAiAds Logo" className="logo-img" />
          <span className="logo-text">MyAiAds</span>
        </Link>

        <div className="navbar-right-group">
          {/* Desktop Links */}
          <div className="navbar-links">
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            ))}

            {/* "More" Mega Menu / Dropdown */}
            <div
              className="more-dropdown-container"
              onMouseEnter={() => setIsMoreOpen(true)}
              onMouseLeave={() => setIsMoreOpen(false)}
            >
              <button className={`nav-link more-btn ${isMoreOpen ? 'active' : ''}`}>
                More <ChevronDown size={16} className={`chevron ${isMoreOpen ? 'rotated' : ''}`} />
              </button>

              <AnimatePresence>
                {isMoreOpen && (
                  <motion.div
                    className="more-dropdown"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {moreLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="dropdown-item"
                        onClick={() => handleLinkClick(link.href, true)}
                      >
                        <span className="item-icon">{link.icon}</span>
                        <div className="item-content">
                          <span className="item-title">{link.name}</span>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Global Actions */}
          <div className="navbar-actions">
            <button className="get-started-btn nav-download-btn">
              <span className="btn-text">Download App</span>
              <ArrowRight size={16} />
            </button>

            <div className="mobile-menu-btn" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-links">
              {mainLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`mobile-link ${isActive(link.href) ? 'active' : ''}`}
                  onClick={handleLinkClick}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mobile-divider"></div>
              {moreLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`mobile-link secondary ${isActive(link.href) ? 'active' : ''}`}
                  onClick={handleLinkClick}
                >
                  {link.icon} {link.name}
                </Link>
              ))}

              <button className="mobile-get-started">
                Download App
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
