import React, { useState, useEffect } from 'react';
import './CountdownTimer.css'; // Make sure to create this CSS file for styling

const CountdownTimer = () => {
  const eventDate = new Date('2024-12-26T00:00:00');
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(eventDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(eventDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  function calculateTimeRemaining(targetDate) {
    const now = new Date();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, distance };
  }

  return (
    <div className="countdown-section">
      <h1 className='countdown-section-h1'>Time & Location</h1>
      <p className='countdown-section-p'>Join us as we celebrate Prince Chiwuoke's special day!  Here are all the details you need to be part of this joyous occasion.</p>
      <div className="countdown-timer">
        <div className="time-unit">
          <span>{timeRemaining.days}</span>
          <span>Days</span>
        </div>
        <div className="time-unit">
          <span>{timeRemaining.hours}</span>
          <span>Hours</span>
        </div>
        <div className="time-unit">
          <span>{timeRemaining.minutes}</span>
          <span>Minutes</span>
        </div>
        <div className="time-unit">
          <span>{timeRemaining.seconds}</span>
          <span>Seconds</span>
        </div>
      </div>
      <div className="details">
        <p>May your life be filled with love, laughter, and endless joy 💕💕💕</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
