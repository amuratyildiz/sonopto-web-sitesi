// Narrows the reference grid by job type and client type.
//
// Lives in public/ and is loaded with <script is:inline src> rather than an
// Astro <script>: Astro inlines a small bundled chunk straight into the HTML,
// and the site's CSP has no 'unsafe-inline', so that version would work in dev
// and be blocked in production. Same arrangement as public/search.js.
(function () {
  var root = document.getElementById('reference-filter');
  var grid = document.querySelector('[data-reveal-group]');
  if (!root || !grid) return;

  var status = document.getElementById('reference-filter-status');
  var cards = [].slice.call(grid.querySelectorAll('[data-is-tipi], [data-musteri-tipi]'));
  if (!cards.length) return;

  var countLabel = root.dataset.countLabel;
  var noneLabel = root.dataset.noneLabel;

  // The markup ships hidden so that with JavaScript off every card stays on
  // the page rather than being trapped behind a control that does nothing.
  root.hidden = false;

  var state = { is: '', musteri: '' };

  function matches(card) {
    if (state.is) {
      // A card can carry several job types, space separated, so compare whole
      // words — "led-ekran" must not match "led-ekran-tunel".
      var types = (card.dataset.isTipi || '').split(/\s+/);
      if (types.indexOf(state.is) === -1) return false;
    }
    if (state.musteri && (card.dataset.musteriTipi || '') !== state.musteri) return false;
    return true;
  }

  function apply(writeUrl) {
    var shown = 0;
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      if (matches(card)) {
        card.style.display = '';
        // motion.js gives every [data-reveal] a .reveal-pending class and drops
        // it the first time the element scrolls into view, then stops watching.
        // A card hidden before that happens never intersects, so without this
        // it would come back at opacity 0 and look like it had vanished.
        card.classList.remove('reveal-pending');
        shown += 1;
      } else {
        // An inline style rather than the hidden attribute: the card carries
        // Tailwind's .flex, which sits in the same layer as preflight's
        // [hidden] rule and beats it on source order, so the card would stay
        // on screen. display:none also takes it out of the accessibility tree.
        card.style.display = 'none';
      }
    }

    if (status) {
      status.textContent = shown ? countLabel.replace('%d', shown) : noneLabel;
    }

    var buttons = root.querySelectorAll('[data-filter]');
    for (var b = 0; b < buttons.length; b++) {
      var button = buttons[b];
      var active = state[button.dataset.filter] === button.dataset.value;
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    }

    if (writeUrl) {
      var params = [];
      if (state.is) params.push('is=' + encodeURIComponent(state.is));
      if (state.musteri) params.push('musteri=' + encodeURIComponent(state.musteri));
      var url = window.location.pathname + (params.length ? '?' + params.join('&') : '');
      window.history.replaceState(null, '', url);
    }
  }

  root.addEventListener('click', function (event) {
    var button = event.target.closest('[data-filter]');
    if (!button) return;
    state[button.dataset.filter] = button.dataset.value;
    apply(true);
  });

  // A shared link arrives with the selection already in the query string.
  var initial = new URLSearchParams(window.location.search);
  state.is = initial.get('is') || '';
  state.musteri = initial.get('musteri') || '';

  // A value that no card carries — a stale link, or a choice renamed in
  // Dataverse — would otherwise show an empty grid with no way back.
  var known = {};
  for (var k = 0; k < cards.length; k++) {
    var job = (cards[k].dataset.isTipi || '').split(/\s+/);
    for (var j = 0; j < job.length; j++) known['is:' + job[j]] = true;
    known['musteri:' + (cards[k].dataset.musteriTipi || '')] = true;
  }
  if (state.is && !known['is:' + state.is]) state.is = '';
  if (state.musteri && !known['musteri:' + state.musteri]) state.musteri = '';

  apply(false);
})();
