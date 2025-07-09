import React from "react";
import "./location.css";

const Location = () => {
  return (
    <section id="location">
      <div className="location-left">
        <h2>📍 Conference Location</h2>
        <p>
          Join us at the prestigious conference at <strong>Rit Roorkee</strong>,
          located at <strong>WR4P+8X Puhana, Uttarakhand</strong>. It's easily accessible by public
          transport and has ample parking space.
        </p>

        <p className="join-text">🎉 Join this conference with us!</p>

        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13840.559713938065!2d77.8657393!3d29.887387!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390efb3e3f654af1%3A0xa5b2edb5f40f0a2!2sWR4P%2B8X%20Puhana%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1720500000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Conference Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
