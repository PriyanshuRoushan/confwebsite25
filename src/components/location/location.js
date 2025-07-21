import React from "react";
import "./location.css";

const Location = ({ compact = false }) => {
  return (
    <div className={compact ? "footer-location" : "location-left"}>
      {compact && <p className="footer-location-title">📍 RIT Roorkee</p>}
      <div className="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13840.559713938065!2d77.8657393!3d29.887387!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390efb3e3f654af1%3A0xa5b2edb5f40f0a2!2sWR4P%2B8X%20Puhana%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1720500000000!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          title="RIT Roorkee Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
