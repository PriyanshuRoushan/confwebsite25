
import React from 'react'
import './aboutrit.css'

import galleryImage from '../assets/images/gallery.jpg';

const AboutRit = () => {
  return (
    <div className="about-container" id="about-rit">
      {/* ICETAPCI Section */}
      <section className="about-card">
        <div className="about-content">
          <div className="about-text">
            <h3 className="badge">About ICETAPCI - 2025</h3>
            <h2 className="section-title">Welcome to ICETAPCI-2025</h2>
            <p className="section-description">
              Welcome to the "International Conference on Emerging Technologies in Applied Engineering and Computational Intelligence (ICETAPCI-2025)".
              This global conference connects researchers worldwide, fostering collaboration, knowledge sharing, and innovation across multiple disciplines.
              ICETAPCI-2025 provides a platform to discuss research findings, validate hypotheses with experts, and explore joint ventures like special issues, edited books, and research grants.
              Participants gain exposure to cutting-edge trends in intelligent computing and networking while expanding their academic footprint.
            </p>
          </div>
        </div>
      </section>

      {/* RIT Section */}
      <section className="about-card reverse">
        <div className="about-content">
          <div className="about-text">
            <h3 className="badge">About RIT</h3>
            <h2 className="section-title">Roorkee Institute of Technology</h2>
            <p className="section-description">
              Founded in 2005, RIT Roorkee stands as a premier engineering institution in Uttarakhand. Known for its quality education, advanced infrastructure, and skilled faculty, RIT emphasizes academic rigor, ethics, and innovation. Its placement cell collaborates with leading industries to ensure top-tier opportunities for students.
              The institute is committed to nurturing future-ready professionals equipped with global perspectives and technical excellence.
            </p>
            <a href="https://ritroorkee.com/" className="web-btn">
            Visit RIT Website <span className="arrow">→</span>
            </a>

          </div>
          <div className="about-image">
            <img src={galleryImage} alt="RIT Campus" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutRit;
