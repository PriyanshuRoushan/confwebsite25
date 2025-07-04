import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsMobileMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-waiver-banner">
          icetapci.2025@ritroorkee.com
          <a href="/register" className="waiver-link">Submit Your Application Today!</a>
        </div>

        <div className="navbar-main">
          {/* Hamburger Icon */}
          <div className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          {/* Navigation Menu */}
          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li className={`nav-item ${activeLink === 'Home' ? 'active' : ''}`}>
              <a href="/" onClick={() => handleLinkClick('Home')}>Home</a>
            </li>
            <li className={`nav-item ${activeLink === 'About' ? 'active' : ''}`}>
              <a href="#about-rit" onClick={() => handleLinkClick('About')}>About</a>
            </li>
            <li className={`nav-item ${activeLink === 'Call' ? 'active' : ''}`}>
              <a href="#call-for-paper" onClick={() => handleLinkClick('Call')}>Call for Paper</a>
            </li>
            <li className={`nav-item ${activeLink === 'Speakers' ? 'active' : ''}`}>
            <a
              href="#" onClick={(e) => {document.getElementById('speakers')?.scrollIntoView({ behavior: 'smooth' });
                handleLinkClick('Speakers'); 
              }}>Speakers
            </a>
            </li>
            <li className={`nav-item ${activeLink === 'Schedule' ? 'active' : ''}`}>
              <a href="#schedule" onClick={() => handleLinkClick('Schedule')}>Schedule</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
