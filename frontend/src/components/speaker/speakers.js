import React from 'react';
import speakerData from './speakerdata';
import './speaker.css';

const Speakers = () => {
  return (
    <section className="speakers-section">
      <h2 className="speakers-heading">Our Speakers</h2>

      <div className="speaker-grid">
        {speakerData.map((speaker, index) => (
          <div className="speaker-card" key={index}>
            <img
              src={speaker.image}
              alt={speaker.name}
              className="speaker-image"
            />
            <h3 className="speaker-name">{speaker.name}</h3>
            <p className="speaker-position">{speaker.title}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Speakers;
