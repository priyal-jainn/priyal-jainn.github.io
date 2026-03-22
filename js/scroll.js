/* ================================================================
   SCROLL.JS — Intersection Observer reveal animations
   Watches elements with class .reveal and adds .visible when
   they enter the viewport.
   ================================================================ */

(function () {
  'use strict';

  const THRESHOLD  = 0.12;   // % of element visible before trigger
  const ROOT_MARGIN = '0px 0px -40px 0px'; // trigger slightly before bottom

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Unobserve after reveal — no need to re-animate
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: THRESHOLD, rootMargin: ROOT_MARGIN }
  );

  // Observe all .reveal elements (including those added later by other sections)
  function observeAll() {
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeAll);
  } else {
    observeAll();
  }
})();
