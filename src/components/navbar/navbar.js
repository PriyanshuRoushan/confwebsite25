/* eslint-disable */
import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-main">
          <ul className="nav-menu">
            <li className={`nav-item ${activeLink === 'Home' ? 'active' : ''}`}>
              <a href="#hero" onClick={(e) => {
                e.preventDefault();
                document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
                handleLinkClick('Home');
              }}>Home</a>
            </li>

            <li className={`nav-item ${activeLink === 'About' ? 'active' : ''}`}>
              <a href="#about-rit" onClick={(e) => {
                e.preventDefault();
                document.getElementById('about-rit')?.scrollIntoView({ behavior: 'smooth' });
                handleLinkClick('About');
              }}>About</a>
            </li>

            <li className={`nav-item ${activeLink === 'Speakers' ? 'active' : ''}`}>
              <a href="#speakers" onClick={(e) => {
                e.preventDefault();
                document.getElementById('speakers')?.scrollIntoView({ behavior: 'smooth' });
                handleLinkClick('Speakers');
              }}>Speakers</a>
            </li>

            <li className={`nav-item ${activeLink === 'Tracks' ? 'active' : ''}`}>
              <a href="#main-tracks" onClick={(e) => {
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
              <a href="#main-registration" onClick={(e) => {
                e.preventDefault();
                document.getElementById('main-registration')?.scrollIntoView({ behavior: 'smooth' });
                handleLinkClick('Registration');
              }}>Registration</a>
            </li>

            <li className={`nav-item ${activeLink === 'Committee' ? 'active' : ''}`}>
              <a href="#committee" onClick={(e) => {
                e.preventDefault();
                document.getElementById('committee')?.scrollIntoView({ behavior: 'smooth', block: "start" });
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
