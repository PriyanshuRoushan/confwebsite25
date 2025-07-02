import React from 'react';
import Facultiesdata from "./facultiesdata";
import "./faculties.css";

const Faculties = () => {
  // Duplicate array to create loop illusion
  const loopedData = [...Facultiesdata, ...Facultiesdata];

  return (
    <section className="faculties-section">
      <h2 className="faculties-heading">Organizing Committee</h2>

      <div className="faculties-slider-wrapper">
        <div className="faculties-grid">
          {loopedData.map((faculty, index) => (
            <div className="faculties-card" key={index}>
              <img
                src={faculty.image}
                alt={faculty.name}
                className="faculties-image"
              />
              <h3 className="faculties-name">{faculty.name}</h3>
              <p className="faculties-position">{faculty.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculties;
