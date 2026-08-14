import { useState, useEffect, useRef } from 'react';
import './Welcome.css';

export default function Welcome({ onEnter }) {
  const [leaving, setLeaving] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const particlesRef = useRef(null);

  useEffect(() => {
    // Reset scroll instantly on load so they start at Home
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = '';

    // Trigger entrance animation
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Floating particles
  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    const count = 40;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'welcome__particle';
      p.style.left = `${Math.random() * 100}%`;
      p.style.animationDelay = `${Math.random() * 12}s`;
      p.style.animationDuration = `${10 + Math.random() * 20}s`;
      const size = 1 + Math.random() * 2;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.opacity = `${0.15 + Math.random() * 0.35}`;
      container.appendChild(p);
    }

    return () => {
      while (container.firstChild) container.removeChild(container.firstChild);
    };
  }, []);

  const handleEnter = () => {
    setLeaving(true);
    setTimeout(() => onEnter(), 900);
  };

  return (
    <div className={`welcome ${loaded ? 'welcome--loaded' : ''} ${leaving ? 'welcome--leaving' : ''}`}>
      {/* Background image */}
      <div className="welcome__bg">
        <img
          src={`${import.meta.env.BASE_URL}landing%20page.jpeg`}
          alt=""
          className="welcome__bg-image"
        />
      </div>

      {/* Fog layers */}
      <div className="welcome__fog welcome__fog--1"></div>
      <div className="welcome__fog welcome__fog--2"></div>

      {/* Particles */}
      <div className="welcome__particles" ref={particlesRef}></div>

      {/* Dark overlay */}
      <div className="welcome__overlay"></div>

      {/* Glass card */}
      <div className="welcome__card">




        {/* Title */}
        <span className="welcome__label">WELCOME TO</span>
        <h1 className="welcome__title">
          THE NORTHERN<br/>KNIGHT
        </h1>



        {/* Subtitle */}
        <p className="welcome__subtitle">
          A quiet blade in the frozen north, protecting those who have no sword of their own.
        </p>

        <button className="welcome__enter-btn" onClick={handleEnter}>
          <span className="welcome__enter-text">Read the Story</span>
        </button>




      </div>
    </div>
  );
}
