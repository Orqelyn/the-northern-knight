import { useState, useEffect } from 'react';
import './SideNavigation.css';

const sideLinks = [
  {
    id: 'home',
    label: 'Home',
    href: '#home',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    id: 'songs',
    label: 'Songs',
    href: '#songs',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 18V5l12-2v13"/>
        <circle cx="6" cy="18" r="3"/>
        <circle cx="18" cy="16" r="3"/>
      </svg>
    ),
  },
  {
    id: 'about',
    label: 'About',
    href: '#about',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    id: 'purpose',
    label: 'Story',
    href: '#purpose',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '#contact',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
];

export default function SideNavigation() {
  const [active, setActive] = useState('home');

  // IntersectionObserver to auto-detect active section
  useEffect(() => {
    const sections = sideLinks.map(l => document.getElementById(l.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the section with the largest intersection ratio
        let best = null;
        let bestRatio = 0;
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio;
            best = entry.target.id;
          }
        });
        if (best) setActive(best);
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: '-10% 0px -50% 0px',
      }
    );

    sections.forEach(s => observer.observe(s));
    return () => sections.forEach(s => observer.unobserve(s));
  }, []);

  return (
    <aside
      className="side-nav"
      aria-label="Quick navigation"
    >
      <div className="side-nav__container">
        {sideLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={`side-nav__btn ${active === link.id ? 'side-nav__btn--active' : ''}`}
            title={link.label}
            aria-label={link.label}
            onClick={() => setActive(link.id)}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </aside>
  );
}
