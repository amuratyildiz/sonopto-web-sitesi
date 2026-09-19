// Homepage header: transparent over the hero, solid once scrolled. This is a
// legibility state, not decoration, so it runs regardless of reduced motion.
(function () {
  var header = document.querySelector('[data-transparent-header]');
  if (!header) return;

  var sync = function () {
    header.classList.toggle('is-solid', window.scrollY > 24);
  };

  sync();
  window.addEventListener('scroll', sync, { passive: true });
})();

(function () {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var targets = document.querySelectorAll('[data-reveal]');
  if (!targets.length) return;

  // Hiding happens here, never in the stylesheet: if this script is blocked
  // or fails, every [data-reveal] element stays in its visible default state.
  targets.forEach(function (el) {
    el.classList.add('reveal-pending');
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-pending');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
})();
