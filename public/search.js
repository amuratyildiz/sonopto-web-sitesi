// Site search. Loaded only by the search page, which carries the index URL and
// every localised string on data-* attributes — the same way the contact form
// gets its messages across from Astro.
//
// This file lives in public/ and is referenced with <script is:inline src>
// rather than being written as an Astro <script>: Astro inlines a small bundled
// chunk straight into the HTML, and the site's CSP has no 'unsafe-inline', so
// that version would work in dev and be blocked in production.
(function () {
  var root = document.getElementById('search-root');
  if (!root) return;

  var form = document.getElementById('search-form');
  var input = document.getElementById('search-input');
  var status = document.getElementById('search-status');
  var list = document.getElementById('search-results');

  var strings = {
    count: root.dataset.countLabel,
    empty: root.dataset.emptyLabel,
    prompt: root.dataset.promptLabel,
    unavailable: root.dataset.unavailableLabel,
  };
  var sections = JSON.parse(root.dataset.sections);

  // Turkish spelling folded to plain ASCII, matching build-search-index.mjs, so
  // a visitor without a Turkish keyboard can type "calma listesi" and find it.
  var FOLD = { ç: 'c', ğ: 'g', ı: 'i', ö: 'o', ş: 's', ü: 'u', â: 'a', î: 'i', û: 'u', İ: 'i' };
  function fold(text) {
    return text.toLowerCase().replace(/[çğıöşüâîûİ]/g, function (c) {
      return FOLD[c] || c;
    });
  }
  function tokenize(text) {
    return fold(text).match(/[0-9a-zçğıöşüâîû]{2,}/g) || [];
  }

  var index = null;
  var terms = null;
  var loading = null;

  function load() {
    if (loading) return loading;
    // no-cache revalidates rather than refetches: the filename is stable across
    // builds, so an ETag check is what keeps a stale index from being served.
    loading = fetch(root.dataset.indexUrl, { cache: 'no-cache' })
      .then(function (response) {
        if (!response.ok) throw new Error('index ' + response.status);
        return response.json();
      })
      .then(function (data) {
        index = data;
        terms = Object.keys(data.terms);
        return data;
      });
    return loading;
  }

  // Turkish suffixes attach to the end of a word, so matching by prefix does
  // most of what a stemmer would: "kurulum" reaches "kurulumu" and
  // "kurulumunda", and nothing gets conflated the way a rule-based stemmer can.
  // It covers English plurals in passing.
  function postingsFor(prefix) {
    var docs = {};
    for (var i = 0; i < terms.length; i++) {
      if (terms[i].lastIndexOf(prefix, 0) !== 0) continue;
      var ids = index.terms[terms[i]];
      for (var j = 0; j < ids.length; j++) docs[ids[j]] = true;
    }
    return Object.keys(docs);
  }

  function search(query) {
    var words = tokenize(query);
    if (!words.length) return [];

    var total = index.docs.length;
    var perWord = [];
    for (var w = 0; w < words.length; w++) {
      var ids = postingsFor(words[w]);
      // Rarer words say more about what the visitor meant than common ones.
      var idf = Math.log(1 + total / (1 + ids.length));
      perWord.push({ word: words[w], ids: ids, idf: idf });
    }

    var scores = {};
    var hits = {};
    for (var k = 0; k < perWord.length; k++) {
      var entry = perWord[k];
      for (var n = 0; n < entry.ids.length; n++) {
        var id = entry.ids[n];
        var titleTokens = tokenize(index.docs[id][0]);
        var inTitle = false;
        for (var t = 0; t < titleTokens.length; t++) {
          if (titleTokens[t].lastIndexOf(entry.word, 0) === 0) {
            inTitle = true;
            break;
          }
        }
        scores[id] = (scores[id] || 0) + entry.idf * (inTitle ? 4 : 1);
        hits[id] = (hits[id] || 0) + 1;
      }
    }

    // Pages carrying every word first; if none do, fall back to any of them
    // rather than telling the visitor there is nothing.
    var ids = Object.keys(scores);
    var all = ids.filter(function (id) {
      return hits[id] === words.length;
    });
    var chosen = all.length ? all : ids;

    return chosen
      .sort(function (a, b) {
        return scores[b] - scores[a];
      })
      .slice(0, 50)
      .map(function (id) {
        return index.docs[id];
      });
  }

  function render(results, query) {
    list.textContent = '';
    if (!query) {
      status.textContent = strings.prompt;
      return;
    }
    status.textContent = results.length
      ? strings.count.replace('%d', results.length)
      : strings.empty;

    for (var i = 0; i < results.length; i++) {
      var doc = results[i];
      var item = document.createElement('li');

      var link = document.createElement('a');
      link.href = doc[1];
      link.className = 'search-result';

      var head = document.createElement('span');
      head.className = 'search-result-head';

      var title = document.createElement('span');
      title.className = 'search-result-title';
      title.textContent = doc[0];
      head.appendChild(title);

      var badge = document.createElement('span');
      badge.className = 'search-result-section';
      badge.textContent = sections[doc[2]] || '';
      head.appendChild(badge);

      link.appendChild(head);

      if (doc[3]) {
        var summary = document.createElement('span');
        summary.className = 'search-result-summary';
        summary.textContent = doc[3];
        link.appendChild(summary);
      }

      item.appendChild(link);
      list.appendChild(item);
    }
  }

  function run(query, pushUrl) {
    load()
      .then(function () {
        render(search(query), query.trim());
        if (pushUrl) {
          var url = query.trim()
            ? window.location.pathname + '?q=' + encodeURIComponent(query.trim())
            : window.location.pathname;
          window.history.replaceState(null, '', url);
        }
      })
      .catch(function () {
        list.textContent = '';
        status.textContent = strings.unavailable;
      });
  }

  var timer = null;
  input.addEventListener('input', function () {
    window.clearTimeout(timer);
    timer = window.setTimeout(function () {
      run(input.value, true);
    }, 120);
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    window.clearTimeout(timer);
    run(input.value, true);
  });

  var initial = new URLSearchParams(window.location.search).get('q') || '';
  if (initial) {
    input.value = initial;
    run(initial, false);
  } else {
    status.textContent = strings.prompt;
  }
})();
