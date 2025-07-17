/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsMobileMenuOpen(false); // Close menu after clicking
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    // Add when mounted
    document.addEventListener('mousedown', handleClickOutside);
    // For touch devices
    document.addEventListener('touchstart', handleClickOutside);

    // Return cleanup function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-container">
        <div className="navbar-waiver-banner">
          icetapci.2025@ritroorkee.com
          <a href="/register" className="waiver-link">Submit Your Application Today!</a>
        </div>

        <div className="navbar-main">
          {/* Mobile Menu Icon */}
          <div className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <span className="close-icon">✖</span>
            ) : (
              <>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </>
            )}
          </div>

          {/* Navigation Menu */}
          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li className={`nav-item ${activeLink === 'Home' ? 'active' : ''}`}>
              <a href="#hero" onClick={(e) => {
                e.preventDefault();
                document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
                handleLinkClick('Home');
              }}>Home</a>
            </li>

            <li className={`nav-item ${activeLink === 'About' ? 'active' : ''}`}>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                document.getElementById('about-rit')?.scrollIntoView({ behavior: 'smooth' });
                handleLinkClick('About');
              }}>About</a>
            </li>
            <li className={`nav-item ${activeLink === 'Speakers' ? 'active' : ''}`}>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                document.getElementById('speakers')?.scrollIntoView({ behavior: 'smooth' });
                handleLinkClick('Speakers');
              }}>Speakers</a>
            </li>
            <li className={`nav-item ${activeLink === 'Tracks' ? 'active' : ''}`}>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                document.getElementById('main-tracks')?.scrollIntoView({ behavior: 'smooth' });
                handleLinkClick('Tracks');
              }}>Tracks</a>
            </li>
            <li className={`nav-item ${activeLink === 'Call' ? 'active' : ''}`}>
              <a href="#callforpaper" onClick={(e) => {
                e.preventDefault();
                document.getElementById('callforpaper')?.scrollIntoView({ behavior: 'smooth' });
                handleLinkClick('Call');
              }}>Call for Paper</a>
            </li>
            <li className={`nav-item ${activeLink === 'Registration' ? 'active' : ''}`}>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                document.getElementById('main-registration')?.scrollIntoView({ behavior: 'smooth' });
                handleLinkClick('Registration');
              }}>Registration</a>
            </li>

            <li className={`nav-item ${activeLink === 'Committee' ? 'active' : ''}`}>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                document.getElementById('committee')?.scrollIntoView({
                  behavior: 'smooth',
                  block: "start"
                });
                handleLinkClick('Committee');
              }}>Committee</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;