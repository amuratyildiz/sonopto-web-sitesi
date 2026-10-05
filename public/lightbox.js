// Reference photo gallery: click a photo to see it whole.
//
// The grid crops every photo to 4:3 with object-cover, but the files behind it
// run from 900x405 to 1500x2000 — so enlarging is not just "bigger", it is the
// only way to see what the crop removes.
//
// Lives in public/ and is loaded with <script is:inline src> rather than an
// Astro <script>: Astro inlines a small bundled chunk straight into the HTML,
// and the site's CSP has no 'unsafe-inline', so that version would work in dev
// and be blocked in production. Same arrangement as public/search.js.
//
// Every photo is already a plain <a> to its own file. This script intercepts
// the click; if it never runs, the links still open the image. Nothing here
// hides anything the markup shows.
(function () {
  var dialog = document.getElementById('lightbox');
  var links = [].slice.call(document.querySelectorAll('[data-lightbox]'));
  if (!dialog || !links.length) return;

  // An old browser without the dialog API keeps the plain links, which work.
  if (typeof dialog.showModal !== 'function') return;

  var frame = document.getElementById('lightbox-frame');
  var img = document.getElementById('lightbox-image');
  var caption = document.getElementById('lightbox-caption');
  var counter = document.getElementById('lightbox-counter');
  var prevButton = document.getElementById('lightbox-prev');
  var nextButton = document.getElementById('lightbox-next');
  var counterTemplate = dialog.dataset.counterLabel || '%d / %d';

  var frames = links.map(function (link) {
    var thumb = link.querySelector('img');
    return {
      src: link.getAttribute('href'),
      alt: thumb ? thumb.getAttribute('alt') || '' : '',
    };
  });

  var index = 0;

  // The viewport's scrollbar is <html>'s: <body>'s overflow only stands in
  // while <html>'s is visible, which is true here today and is not something
  // the gallery should rest on. The previous inline value is put back rather
  // than cleared, so the lock can never wipe a value it did not set.
  var previousOverflow = '';
  var locked = false;

  // Opening while already open must not record the lock's own value as the one
  // to restore, or the page stays frozen after the gallery closes.
  function lock() {
    if (locked) return;
    locked = true;
    previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
  }

  function unlock() {
    if (!locked) return;
    locked = false;
    document.documentElement.style.overflow = previousOverflow;
  }

  // A touch that moved still ends in a synthetic click, on whatever sits under
  // the finger — beside the photo that is the frame, the dismiss surface. This
  // is set when a gesture ends having moved and consumed by the click that
  // follows, so a swipe cannot also close the gallery. The next gesture clears
  // it, so it can never outlive its own click. A time window was tried first
  // and swallowed a deliberate tap that came quickly after a swipe.
  var swallowNextClick = false;

  // A single photo has nothing to step through.
  if (frames.length < 2) {
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';
    counter.style.display = 'none';
  }

  function preload(i) {
    var frame = frames[(i + frames.length) % frames.length];
    if (!frame) return;
    var warm = new Image();
    warm.src = frame.src;
  }

  function show(i) {
    index = (i + frames.length) % frames.length;
    var frame = frames[index];

    // Cleared before the swap so the previous photo's width cap cannot apply
    // to this one while it loads.
    img.style.maxWidth = '';
    img.src = frame.src;
    img.alt = frame.alt;

    // Most photos have no alt text written yet. An empty caption bar would
    // just be a gap, and inventing "Photo 3" would say nothing.
    //
    // display, not the hidden attribute: preflight's [hidden] sits in an
    // earlier cascade layer than @layer components, so .lightbox-caption's
    // own display would win and the row would stay visible.
    caption.textContent = frame.alt;
    caption.style.display = frame.alt ? '' : 'none';

    counter.textContent = counterTemplate
      .replace('%d', String(index + 1))
      .replace('%d', String(frames.length));

    if (frames.length > 1) {
      preload(index + 1);
      preload(index - 1);
    }
  }

  // Never stretch a photo past its own pixels: these files are 900-1600px
  // wide and a 2560px viewport would only make them soft. Sharp and smaller
  // beats blurry and full-bleed. min() keeps the phone case right, where the
  // viewport is narrower than the file.
  img.addEventListener('load', function () {
    if (img.naturalWidth) img.style.maxWidth = 'min(95vw, ' + img.naturalWidth + 'px)';
  });

  links.forEach(function (link, i) {
    link.addEventListener('click', function (event) {
      // Leave "open in a new tab" alone.
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      show(i);
      dialog.showModal();
      lock();
    });
  });

  prevButton.addEventListener('click', function () {
    show(index - 1);
  });

  nextButton.addEventListener('click', function () {
    show(index + 1);
  });

  document.getElementById('lightbox-close').addEventListener('click', function () {
    dialog.close();
  });

  // Clicking away closes. .lightbox-frame fills the dialog, so a click in the
  // empty space beside the photo lands on the frame and the dialog itself is
  // almost never the target — testing for the dialog alone read correctly and
  // closed nothing. Anything inside the frame — the photo, a button, the
  // caption — reports itself and must not close.
  dialog.addEventListener('click', function (event) {
    if (swallowNextClick) {
      swallowNextClick = false;
      return;
    }
    if (event.target === dialog || event.target === frame) dialog.close();
  });

  dialog.addEventListener('keydown', function (event) {
    if (frames.length < 2) return;
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      show(index + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      show(index - 1);
    }
  });

  // Escape, the focus trap and returning focus to the photo that opened the
  // dialog all come from <dialog> itself; only the scroll lock is ours.
  dialog.addEventListener('close', unlock);

  var startX = null;
  var startY = null;

  dialog.addEventListener(
    'touchstart',
    function (event) {
      swallowNextClick = false;
      // More than one finger is a pinch-zoom; leave the gesture to the browser.
      if (event.touches.length !== 1) {
        startX = null;
        return;
      }
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
    },
    { passive: true }
  );

  dialog.addEventListener(
    'touchend',
    function (event) {
      if (startX === null || !event.changedTouches.length) return;
      var dx = event.changedTouches[0].clientX - startX;
      var dy = event.changedTouches[0].clientY - startY;
      startX = null;

      // A touch that moved still ends in a synthetic click, on whatever sits
      // under the finger — beside the photo that is the frame, which is the
      // dismiss surface. Without this window every swipe would also close the
      // gallery.
      if (Math.abs(dx) > 10 || Math.abs(dy) > 10) swallowNextClick = true;

      if (frames.length < 2) return;
      // Clearly horizontal, or it was a scroll or a dismiss drag.
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        show(index + (dx < 0 ? 1 : -1));
      }
    },
    { passive: true }
  );
})();
