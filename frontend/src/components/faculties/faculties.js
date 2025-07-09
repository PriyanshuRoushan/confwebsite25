import React, { useRef } from 'react';
import Facultiesdata from "./facultiesdata";
import "./faculties.css";

const Faculties = () => {
  const scrollRef = useRef(null);

  const btnpressprev = () => {
    const box = scrollRef.current;
    const width = box.clientWidth;
    box.scrollLeft -= width;
  };

  const btnpressnext = () => {
    const box = scrollRef.current;
    const width = box.clientWidth;
    box.scrollLeft += width;
  };

  return (
    <div className="product-carousel">
      <button className="pre-btn" onClick={btnpressprev}>
        <p>&lt;</p>
      </button>
      <button className="next-btn" onClick={btnpressnext}>
        <p>&gt;</p>
      </button>

      <section className="faculties-section">
        <h2 className="faculties-heading">Organizing Committee</h2><br></br>
        
        <div className="faculties-slider-wrapper" ref={scrollRef}>
          <div className="faculties-grid">
            {Facultiesdata.map((faculty, index) => (
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
    </div>
  );
};

export default Faculties;
