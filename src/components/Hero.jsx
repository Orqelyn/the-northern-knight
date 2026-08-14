import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const particlesRef = useRef(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'hero__particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 15}s`;
      particle.style.animationDuration = `${12 + Math.random() * 18}s`;
      particle.style.width = `${1 + Math.random() * 2.5}px`;
      particle.style.height = particle.style.width;
      particle.style.opacity = `${0.2 + Math.random() * 0.4}`;
      container.appendChild(particle);
    }

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <section className="hero" id="home">
      {/* Background Image */}
      <div className="hero__bg">
        <img
          src="/images/hero-bg.png"
          alt=""
          className="hero__bg-image"
          loading="eager"
        />
      </div>

      {/* Fog Layers */}
      <div className="hero__fog hero__fog--1"></div>
      <div className="hero__fog hero__fog--2"></div>
      <div className="hero__fog hero__fog--3"></div>

      {/* Particles */}
      <div className="hero__particles" ref={particlesRef}></div>

      {/* Gradient Overlays */}
      <div className="hero__overlay"></div>
      <div className="hero__overlay-bottom"></div>

      {/* Content */}
      <div className="hero__content">
        <h1 className="hero__title" data-reveal="up">
          THE NORTHERN<br />KNIGHT
        </h1>

        <p className="hero__subtitle" data-reveal="up" data-reveal-delay="150">
          Far to the north of Eldoria, beyond the three mountain ranges that the people of the south called the Veyr Mountains, lay a land almost perpetually shrouded in mist. Its name was Avarenne.
        </p>

        <div className="hero__actions" data-reveal="up" data-reveal-delay="300">
          <a href="https://discordapp.com/users/1440387975056855051" target="_blank" rel="noreferrer" className="hero__btn hero__btn--secondary" style={{textTransform: 'none'}}>
            Add Discord
          </a>
        </div>
      </div>

    </section>
  );
}
