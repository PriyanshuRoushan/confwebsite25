import React, { useRef } from 'react';
import Facultiesdata from "./facultiesdata";
import "./faculties.css";

const Faculties = () => {
  const scrollRef = useRef(null);

  const row1 = Facultiesdata.slice(0, 4);
  const row2 = Facultiesdata.slice(4, 8);
  const row3 = Facultiesdata.slice(8, 12);
  const remaining = Facultiesdata.slice(12); // All others in horizontal scroll

  return (
    <div className="product-carousel">
      <section className="faculties-section">
        <h2 className="faculties-heading">Organizing Committee</h2><br />

        {/* Row 1 */}
        <div className="faculties-row">
          {row1.map((faculty, index) => (
            <div className="faculties-card" key={index}>
              <img src={faculty.image} alt={faculty.name} className="faculties-image" />
              <h3 className="faculties-name">{faculty.name}</h3>
              <p className="faculties-position">{faculty.title}</p>
            </div>
          ))}
        </div>
        <div className="animated-line" />

        {/* Row 2 */}
        <div className="faculties-row">
          {row2.map((faculty, index) => (
            <div className="faculties-card" key={index + 4}>
              <img src={faculty.image} alt={faculty.name} className="faculties-image" />
              <h3 className="faculties-name">{faculty.name}</h3>
              <p className="faculties-position">{faculty.title}</p>
            </div>
          ))}
        </div>
        <div className="animated-line" />

        {/* Row 3 */}
        <div className="faculties-row">
          {row3.map((faculty, index) => (
            <div className="faculties-card" key={index + 7}>
              <img src={faculty.image} alt={faculty.name} className="faculties-image" />
              <h3 className="faculties-name">{faculty.name}</h3>
              <p className="faculties-position">{faculty.title}</p>
            </div>
          ))}
        </div>
        <div className="animated-line" />

        {/* Remaining in scrollable row */}
        {remaining.length > 0 && (
          <>
            <div className="faculties-slider-wrapper" ref={scrollRef}>
              <div className="faculties-grid">
                {remaining.map((faculty, index) => (
                  <div className="faculties-card" key={index + 9}>
                    <img src={faculty.image} alt={faculty.name} className="faculties-image" />
                    <h3 className="faculties-name">{faculty.name}</h3>
                    <p className="faculties-position">{faculty.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="animated-line" />
          </>
        )}
      </section>
    </div>
  );
};

export default Faculties;
