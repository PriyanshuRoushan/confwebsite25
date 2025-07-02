import React from 'react';
import './hero.css';
import bgImage from '../assets/images/bf.png';
import CountdownDaysOnly from '../countdown/CountdownDaysOnly';


const Hero = () => {
  const heroStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '80px 0',
    color: 'white'
  };

  return (
    <>
    <section className="hero" style={heroStyle}>
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-title">International Conference on Emerging Technologies in Applied Engineering and Computational Intelligence <br />(ICETAPCI-2025)</h1>
          <h2 className="hero-subtitle">2nd International Conference</h2>
          
          <CountdownDaysOnly deadline="2025-08-30" />
        
        </div>
        <div className="hero-right">
          <div className="hero-cta">
            <a href="/submit-abstract" className="cta-button">
              SUBMIT YOUR ABSTRACT <span className="arrow">→</span>
            </a>
            <a href="/register" className="cta-button">
              REGISTER NOW <span className="arrow">→</span>
            </a>
          </div>
          <p className="registration-note">Registrations open till August 30, 2025</p>
          <div className="event-details-bottom">
            <br /><br />
            <p className="date">xx-xx-2025</p>
            <p className="location">Auditorium, Roorkee Institute of Technology</p>
            <p className="location">Roorkee, Uttarakhand, India - 247667</p>
          </div>
        </div>
      </div>
    </section>
      <div class="custom-line"></div>
      <div class="custom-line2"></div>
      </>
  );
};

export default Hero;