import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar__brand">
        <svg className="navbar__logo-icon" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2L2 9v10l12 7 12-7V9L14 2z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M14 6l-7 4v8l7 4 7-4v-8l-7-4z" stroke="currentColor" strokeWidth="1" fill="rgba(255,255,255,0.08)"/>
          <path d="M14 10v8M10 12l4 2 4-2M10 16l4 2 4-2" stroke="currentColor" strokeWidth="0.8"/>
        </svg>
      </div>

      <div className="navbar__links">
        <a href="#home" className="navbar__link">Home</a>
        <a href="#songs" className="navbar__link">Songs</a>
        <a href="#about" className="navbar__link">About</a>
        <a href="#purpose" className="navbar__link">Story</a>
        <a href="#contact" className="navbar__link">Contact</a>
      </div>

      <button
        className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={mobileOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${mobileOpen ? 'navbar__mobile--open' : ''}`}>
        <div className="navbar__mobile-inner">
          <a href="#home" className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>Home</a>
          <a href="#songs" className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>Songs</a>
          <a href="#about" className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>About</a>
          <a href="#purpose" className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>Story</a>
          <a href="#contact" className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
}
