import React, { useState, useEffect } from 'react';
import '../Assets/Styles/Header.css';
import { Outlet, NavLink } from 'react-router-dom';

const GalleryHeader = () => {
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    const targetDate = new Date('October 12, 2024 00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeRemaining('Event Started');
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div>
      <nav>
        <div className="logo">Logo</div>
        <div className="nav-items">
          <div className="gallery navBtn">
            <NavLink to="/">Home</NavLink>
          </div>
          <div className="registry navBtn">Wedding Registry</div>
          <div className="timeCounter navBtn">{timeRemaining}</div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default GalleryHeader;
