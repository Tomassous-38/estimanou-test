'use client';

import { useEffect } from 'react';

/**
 * Client component that observes elements with .animate-fade-in-up
 * and adds .visible when they scroll into view.
 * Mounted once in the root layout.
 */
export const ScrollAnimations = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    // Observe all elements with the animation class
    const elements = document.querySelectorAll('.animate-fade-in-up');
    elements.forEach((el) => observer.observe(el));

    // Re-observe on route changes (MutationObserver for SPA navigation)
    const mutationObserver = new MutationObserver(() => {
      const newElements = document.querySelectorAll('.animate-fade-in-up:not(.visible)');
      newElements.forEach((el) => observer.observe(el));
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
};
