import React, { useEffect, useState } from 'react';
import './countdown.css'; // Optional: for styling the box

const CountdownDaysOnly = ({ deadline }) => {
  const calculateDaysLeft = () => {
    const today = new Date();
    const endDate = new Date(deadline);
    const diffTime = endDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const [daysLeft, setDaysLeft] = useState(calculateDaysLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setDaysLeft(calculateDaysLeft());
    }, 60 * 60 * 1000); // update every hour

    return () => clearInterval(timer);
  }, [deadline]);

  return (
    <div className="countdown-box">
      {daysLeft > 0 ? (
        <p>📅 <strong>{daysLeft}</strong> day{daysLeft !== 1 ? 's' : ''} left to fill the form.</p>
      ) : (
        <p>⚠️ Form submission has closed.</p>
      )}
    </div>
  );
};

export default CountdownDaysOnly;
