import React, { useRef } from 'react';
import Faculties from './faculties';

const FacultiesWithArrows = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.querySelector('.faculties-slider-wrapper')
      .scrollBy({ left: -220, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.querySelector('.faculties-slider-wrapper')
      .scrollBy({ left: 220, behavior: 'smooth' });
  };

  return (
    <div ref={scrollRef} style={{ position: 'relative' }}>
      {/* Arrow Buttons */}
      <button className="scroll-btn left" onClick={scrollLeft}>&lt;</button>
      <button className="scroll-btn right" onClick={scrollRight}>&gt;</button>

      {/* Your unchanged Faculties component */}
      <Faculties />
    </div>
  );
};

export default FacultiesWithArrows;
