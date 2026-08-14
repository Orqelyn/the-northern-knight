import { useEffect } from 'react';

/**
 * Lightweight scroll-reveal using IntersectionObserver.
 * Watches all elements with [data-reveal] and adds .revealed class once visible.
 * Uses GPU-friendly opacity + transform only — no layout thrashing.
 *
 * @param {boolean} enabled - Only start observing when true (e.g. after welcome screen dismissed)
 */
export default function useScrollReveal(enabled = true) {
  useEffect(() => {
    if (!enabled) return;

    let observer = null;
    // Small delay so the DOM is fully painted before we start observing
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('[data-reveal]:not(.revealed)');
      if (!elements.length) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const delay = entry.target.dataset.revealDelay || 0;
              if (delay > 0) {
                setTimeout(() => {
                  entry.target.classList.add('revealed');
                }, Number(delay));
              } else {
                entry.target.classList.add('revealed');
              }
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: '0px 0px -40px 0px',
        }
      );

      elements.forEach((el) => observer.observe(el));
    }, 150);

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, [enabled]);
}
