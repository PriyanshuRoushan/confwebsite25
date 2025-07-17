import React, { useEffect, useRef } from 'react';
import './TimelineComponent.css';

const TimelineComponent = () => {
  const timelineLineRef = useRef(null);
  const progressDotRef = useRef(null);

  const timelineData = [
    { label: 'Call for Papers', date: '16th August', iso: '2025-08-16' },
    { label: 'Last date of Submission', date: '10th September', iso: '2025-09-10' },
    { label: 'Acceptance Notification', date: '30th September', iso: '2025-09-30' },
    { label: 'Final Camera-Ready Paper', date: '10th October', iso: '2025-10-10' },
    { label: 'Registration Deadline', date: '20th November', iso: '2025-11-20' }
  ];

  useEffect(() => {
    const progressDot = progressDotRef.current;
    const line = timelineLineRef.current;
    
    if (progressDot && line) {
      const today = new Date();
      const start = new Date(timelineData[0].iso);
      const end = new Date(timelineData[timelineData.length - 1].iso);
      const totalDuration = end - start;
      const elapsed = today - start;
      let percent = Math.max(0, Math.min(1, elapsed / totalDuration));

      // Ensure this executes after layout
      setTimeout(() => {
        const lineWidth = line.offsetWidth;
        const dotLeft = percent * lineWidth;
        progressDot.style.left = `${dotLeft}px`;
      }, 100);
    }
  }, );

  return (
    <div className="timeline-container">
      <div className="timeline-line" ref={timelineLineRef}>
        {timelineData.map((milestone, index) => (
          <div key={index} className="wrapper">
            <div className="timeline-label">{milestone.label}</div>
            <div className="timeline-point"></div>
            <div className="timeline-date">{milestone.date}</div>
          </div>
        ))}
      </div>
      <div className="progress-dot" ref={progressDotRef}></div>
    </div>
  );
};

export default TimelineComponent;