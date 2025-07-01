import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-waiver-banner">
          icetapci.2025@ritroorkee.com <a href="/register" className="waiver-link">Submit Your Application Today!</a>
        </div>
        <div className="navbar-main">
          <ul className="nav-menu">
            <li className="nav-item active"><a href="/">Home</a></li>
            <li className="nav-item"><a href="#about-rit">About</a></li>
            <li className="nav-item"><a href="">Call for Paper</a></li>
            <li className="nav-item"><a href="/speakers">Speakers</a></li>
            <li className="nav-item"><a href="/schedule">Schedule</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;