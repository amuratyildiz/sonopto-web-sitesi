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

// Nav disclosure: Escape and click-outside dismissal. <details> gives us the
// toggle, keyboard activation and screen-reader state for free but neither of
// these, so they are added here. Purely additive — if this file is blocked the
// dropdown still opens, closes and keyboard-navigates correctly.
//
// Note the CSS-only version of this (hiding the panel with :not(:focus-within))
// is a trap: the panel would disappear while `open` stayed true, so the next
// click on the trigger would only flip `open` back to false and appear to do
// nothing. Closing the element itself is the only correct fix.
(function () {
  var panels = document.querySelectorAll('details.nav-disclosure');
  if (!panels.length) return;

  var closeAll = function (except) {
    panels.forEach(function (el) {
      if (el !== except) el.open = false;
    });
  };

  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;
    panels.forEach(function (el) {
      if (!el.open) return;
      el.open = false;
      var summary = el.querySelector('summary');
      if (summary) summary.focus();
    });
  });

  document.addEventListener('pointerdown', function (event) {
    var open = null;
    panels.forEach(function (el) {
      if (el.open && el.contains(event.target)) open = el;
    });
    closeAll(open);
  });
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
