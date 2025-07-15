import React, { useRef } from 'react';
import Facultiesdata from "./facultiesdata";
import "./faculties.css";

const Faculties = () => {
  const scrollRef = useRef(null);

  // Row slices
  const row1 = Facultiesdata.slice(0, 2);
  const row2 = Facultiesdata.slice(2, 4);
  const row3 = Facultiesdata.slice(4, 5);
  const row4 = Facultiesdata.slice(5, 7);
  const row5 = Facultiesdata.slice(7, 9);
  const row6 = Facultiesdata.slice(9, 11);
  const row7 = Facultiesdata.slice(11, 15);
  const row8 = Facultiesdata.slice(15); // Remaining scrollable

  const renderRow = (rowData, keyOffset = 0) => (
    <div className="faculties-row">
      {rowData.map((faculty, index) => (
        <div className="faculties-card" key={index + keyOffset}>
          <img src={faculty.image} alt={faculty.name} className="faculties-image" />
          <h3 className="faculties-name">{faculty.name}</h3>
          <p className="faculties-position">{faculty.title}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="product-carousel">
      <section className="faculties-section">
        <h2 className="faculties-heading">Organizing Committee</h2><br />

        {renderRow(row1, 0)}
        <div className="animated-line" />

        {renderRow(row2, 2)}
        <div className="animated-line" />

        {renderRow(row3, 4)}
        <div className="animated-line" />

        {renderRow(row4, 5)}
        <div className="animated-line" />

        {renderRow(row5, 7)}
        <div className="animated-line" />

        {renderRow(row6, 9)}
        <div className="animated-line" />

        {renderRow(row7, 11)}
        <div className="animated-line" />

        {row8.length > 0 && (
          <>
            <div className="faculties-slider-wrapper" ref={scrollRef}>
              <div className="faculties-grid">
                {row8.map((faculty, index) => (
                  <div className="faculties-card" key={index + 15}>
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
