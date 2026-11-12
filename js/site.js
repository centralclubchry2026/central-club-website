/* Central Club Changanacherry — page rendering.
   You should not need to edit this file. Content lives in data/club.js. */
(function () {
  "use strict";
  var C = window.CLUB || {};
  var page = document.body.getAttribute("data-page") || "home";

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function safeUrl(u) {
    u = String(u || "").trim();
    if (/^(https?:|mailto:|tel:)/i.test(u) || /^[\w\-./#]+$/.test(u)) return esc(u);
    return "#";
  }
  function fmtDate(d) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(d || "")) return esc(d);
    var dt = new Date(d + "T00:00:00");
    return esc(dt.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }));
  }
  function initials(name) {
    var parts = String(name || "").replace(/[\[\]]/g, "").trim().split(/\s+/);
    return esc(((parts[0] || "")[0] || "") + ((parts[1] || "")[0] || "")).toUpperCase() || "CC";
  }
  function avatar(p) {
    return '<div class="avatar">' +
      (p.photo ? '<img src="' + safeUrl(p.photo) + '" alt="' + esc(p.name) + '" loading="lazy">' : '<span aria-hidden="true">' + initials(p.name) + "</span>") +
      "</div>";
  }
  function person(p, sub, note) {
    return '<figure class="person">' + avatar(p) + "<figcaption><strong>" + esc(p.name) + "</strong>" +
      (sub ? "<span>" + esc(sub) + "</span>" : "") +
      (note ? '<span class="note">' + esc(note) + "</span>" : "") + "</figcaption></figure>";
  }
  function ext(u) { return ' href="' + safeUrl(u) + '" target="_blank" rel="noopener noreferrer"'; }
  function main() { return document.getElementById("main"); }

  /* ---------- icons ---------- */
  var ICON = {
    shuttle: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" aria-hidden="true"><circle cx="24" cy="39" r="6"/><path d="M19 35 10 8h28l-9 27"/><path d="M17 8l3 27M31 8l-3 27M24 8v27M12 18h24M15 27h18"/></svg>',
    paddle:  '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><circle cx="20" cy="20" r="13"/><path d="m29 29 11 11"/><circle cx="38" cy="12" r="3.5"/></svg>',
    carrom:  '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><rect x="5" y="5" width="38" height="38" rx="3"/><circle cx="24" cy="24" r="7"/><circle cx="10" cy="10" r="2.5"/><circle cx="38" cy="10" r="2.5"/><circle cx="10" cy="38" r="2.5"/><circle cx="38" cy="38" r="2.5"/></svg>',
    heart:   '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" aria-hidden="true"><path d="M24 41S6 30 6 17a9 9 0 0 1 18-3 9 9 0 0 1 18 3c0 13-18 24-18 24Z"/></svg>',
    star:    '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" aria-hidden="true"><path d="m24 5 5.6 12.3 13.4 1.5-10 9.1 2.8 13.2L24 34.3l-11.8 6.8L15 27.9 5 18.8l13.4-1.5Z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.8 15.1V8.9L15.5 12Z"/></svg>',
    facebook:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.6-1.5h1.6V4.3a21 21 0 0 0-2.4-.1c-2.4 0-4 1.4-4 4.1v2.2H7.7v3h2.6V21Z"/></svg>',
    instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    whatsapp:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15l-1.4 5 5.1-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-3.2-.7a11 11 0 0 1-4.2-3.7c-.3-.4-1-1.4-1-2.6s.6-1.8.9-2.1c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.8 1.2 1.6 2 1 .9 1.9 1.2 2.2 1.3.3.2.4.1.6-.1l.8-1c.2-.2.4-.2.6-.1l1.9.9c.3.1.4.2.5.3.1.2.1.6-.1 1.2Z"/></svg>'
  };

  /* Badminton court, to scale (13.4 m × 6.1 m), used as the hero's background. */
  var COURT =
    '<svg class="court-lines" viewBox="-60 -60 1460 730" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
    '<rect x="0" y="0" width="1340" height="610"/>' +
    '<line x1="0" y1="46" x2="1340" y2="46"/><line x1="0" y1="564" x2="1340" y2="564"/>' +
    '<line x1="76" y1="0" x2="76" y2="610"/><line x1="1264" y1="0" x2="1264" y2="610"/>' +
    '<line x1="472" y1="0" x2="472" y2="610"/><line x1="868" y1="0" x2="868" y2="610"/>' +
    '<line x1="0" y1="305" x2="472" y2="305"/><line x1="868" y1="305" x2="1340" y2="305"/>' +
    '<line x1="670" y1="-30" x2="670" y2="640" stroke-dasharray="6 10" stroke-width="5"/>' +
    "</svg>";

  /* ---------- header & footer ---------- */
  var NAV = [
    ["home", "/", "Home"],
    ["about", "/about", "About"],
    ["members", "/members", "Members"],
    ["coaching", "/coaching", "Coaching"],
    ["activities", "/activities", "Activities"],
    ["news", "/news", "News & results"],
    ["gallery", "/gallery", "Gallery"]
  ];

  function socialLinks() {
    var s = C.social || {}, out = "";
    [["youtube", "YouTube"], ["facebook", "Facebook"], ["instagram", "Instagram"], ["whatsapp", "WhatsApp"]].forEach(function (k) {
      if (s[k[0]]) out += "<a" + ext(s[k[0]]) + ">" + ICON[k[0]] + k[1] + "</a>";
    });
    return out;
  }

  function header() {
    var live = C.live && C.live.active
      ? '<div class="live-bar" role="status"><div class="wrap"><span><span class="live-dot"></span>Live now: ' + esc(C.live.title) + "</span>" +
        (C.live.streamUrl ? "<a" + ext(C.live.streamUrl) + ">Watch on YouTube</a>" : "") +
        (C.live.scoresUrl ? "<a" + ext(C.live.scoresUrl) + ">Live scores</a>" : "") + "</div></div>"
      : "";
    var links = NAV.map(function (n) {
      return '<li><a href="' + n[1] + '"' + (n[0] === page ? ' aria-current="page"' : "") + ">" + n[2] + "</a></li>";
    }).join("");
    var h = document.createElement("div");
    h.innerHTML =
      '<a class="skip" href="#main">Skip to content</a>' + live +
      '<header class="site-header"><div class="wrap">' +
      '<a class="brand" href="/"><img src="/images/logo-mark-on-dark.svg" alt=""><span>' + esc(C.name) + "<small>" + esc(C.town) + "</small></span></a>" +
      '<button class="nav-toggle" aria-expanded="false" aria-controls="site-nav">Menu</button>' +
      '<nav class="nav" id="site-nav" aria-label="Main"><ul>' + links + "</ul></nav></div></header>";
    var first = document.body.firstChild;
    while (h.firstChild) document.body.insertBefore(h.firstChild, first);

    var btn = document.querySelector(".nav-toggle"), nav = document.getElementById("site-nav");
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.textContent = open ? "Close" : "Menu";
    });
  }

  function footer() {
    var f = document.createElement("footer");
    f.className = "site-footer";
    f.innerHTML = '<div class="wrap"><div class="footer-grid">' +
      '<div><img class="footer-logo" src="/images/logo-full-on-dark.svg" alt="' + esc(C.name) + " " + esc(C.town) + '"><p>' + esc(C.address) + "</p>" +
      '<p><a href="' + safeUrl(C.mapsUrl) + '" target="_blank" rel="noopener noreferrer">Get directions on Google Maps</a></p></div>' +
      "<div><h2>Contact</h2><ul>" +
      '<li><a href="mailto:' + esc(C.email) + '">' + esc(C.email) + "</a></li>" +
      "<li>" + esc(C.phone) + "</li></ul></div>" +
      '<div><h2>Follow the club</h2><div class="social">' + socialLinks() + "</div></div>" +
      '</div><p class="fine">© ' + new Date().getFullYear() + " " + esc(C.name) + " " + esc(C.town) + ". Member photos and details are shown with each member's consent.</p></div>";
    document.body.appendChild(f);
  }

  function pageHead(title, sub) {
    return '<section class="page-head">' + COURT + '<div class="wrap"><h1>' + esc(title) + "</h1>" + (sub ? "<p>" + esc(sub) + "</p>" : "") + "</div></section>";
  }

  /* ---------- shared blocks ---------- */
  function activityList(items, wide) {
    return '<ul class="activity-list' + (wide ? " wide" : "") + '">' + (items || []).map(function (a) {
      return "<li>" + (ICON[a.icon] || ICON.star) + "<h3>" + esc(a.name) + "</h3><p>" + esc(a.text) + "</p></li>";
    }).join("") + "</ul>";
  }
  function newsList(items) {
    if (!items || !items.length) return '<p class="empty">No updates yet.</p>';
    return '<ul class="news-list">' + items.map(function (n) {
      return '<li><span class="news-date">' + fmtDate(n.date) + "</span><h3>" + esc(n.title) + "</h3><p>" + esc(n.text) +
        (n.link ? ' <a' + ext(n.link) + ">Read more</a>" : "") + "</p></li>";
    }).join("") + "</ul>";
  }
  function eventsList(items) {
    if (!items || !items.length) return '<p class="empty">Nothing scheduled right now.</p>';
    return '<ul class="event-list">' + items.map(function (e) {
      return '<li><span class="event-date">' + fmtDate(e.date) + '</span><strong>' + esc(e.title) + "</strong><span>" + esc(e.place) + "</span></li>";
    }).join("") + "</ul>";
  }
  function eventsTable(items) {
    if (!items || !items.length) return '<p class="empty">No events scheduled right now.</p>';
    return '<div class="table-wrap"><table><thead><tr><th>Date</th><th>Event</th><th>Where</th></tr></thead><tbody>' +
      items.map(function (e) { return "<tr><td>" + fmtDate(e.date) + "</td><td>" + esc(e.title) + "</td><td>" + esc(e.place) + "</td></tr>"; }).join("") +
      "</tbody></table></div>";
  }

  /* Tournament results */
  function playerCard(pl) {
    var win = /^(winner|best)/i.test(pl.result || "");
    return '<article class="player' + (win ? " is-winner" : "") + '">' +
      '<div class="player-photo">' + (pl.photo
        ? '<img src="' + safeUrl(pl.photo) + '" alt="' + esc(pl.name) + '" loading="lazy">'
        : '<span aria-hidden="true">' + initials(pl.name) + "</span>") +
      '<span class="badge">' + esc(pl.result) + "</span></div>" +
      '<div class="player-text"><p class="player-name">' + esc(pl.name) + '</p><p class="player-event">' + esc(pl.event) + "</p></div></article>";
  }
  function resultsTable(cats) {
    return '<div class="table-wrap"><table class="results-table"><thead><tr><th>Category</th><th>Winner</th><th>Runner-up</th></tr></thead><tbody>' +
      cats.map(function (c) { return "<tr><td>" + esc(c.event) + "</td><td>" + esc(c.winner) + "</td><td>" + esc(c.runnerUp) + "</td></tr>"; }).join("") +
      "</tbody></table></div>";
  }
  function tournamentBlock(t, compact) {
    var pls = t.players || [], groups = [];
    pls.forEach(function (pl) { var g = pl.group || ""; if (groups.indexOf(g) === -1) groups.push(g); });
    return '<div class="tournament">' +
      '<div class="tournament-head"><h3>' + esc(t.name) + "</h3><p>" + fmtDate(t.date) + (t.venue ? " · " + esc(t.venue) : "") + "</p></div>" +
      (t.note ? '<p class="tournament-note">' + esc(t.note) + "</p>" : "") +
      (pls.length
        ? '<div class="pgroups' + (compact ? " compact" : "") + '">' + groups.map(function (g) {
            return '<div class="pgroup">' + (g ? '<h4 class="player-group">' + esc(g) + "</h4>" : "") + '<div class="players' + (compact ? " compact" : "") + '">' +
              pls.filter(function (pl) { return (pl.group || "") === g; }).map(playerCard).join("") + "</div></div>";
          }).join("") + "</div>"
        : "") +
      (!compact || !pls.length ? (t.categories && t.categories.length ? '<h4 class="player-group">All results</h4>' + resultsTable(t.categories) : "") : "") +
      (!compact && t.testimonialsLink ? '<p class="voices-link"><a href="' + safeUrl(t.testimonialsLink) + '">Watch players and parents talk about the tournament</a></p>' : "") +
      (!compact && t.groupPhoto ? '<figure class="group-photo"><img src="' + safeUrl(t.groupPhoto) + '" alt="' + esc(t.groupCaption || t.name) + '" loading="lazy"><figcaption>' + esc(t.groupCaption || "") + "</figcaption></figure>" : "") +
      "</div>";
  }
  function voices(list, strip) {
    return '<div class="voices' + (strip ? " strip" : "") + '">' + list.map(function (v) {
      return '<figure class="voice"><button type="button" class="voice-play" data-video="' + safeUrl(v.file) + '" aria-label="Play video">' +
        '<img src="' + safeUrl(v.poster) + '" alt="" loading="lazy"><span class="play"></span></button></figure>';
    }).join("") + "</div>";
  }
  function initVoices() {
    document.addEventListener("click", function (e) {
      var b = e.target.closest && e.target.closest(".voice-play"); if (!b) return;
      var v = document.createElement("video");
      v.src = b.getAttribute("data-video"); v.controls = true; v.autoplay = true; v.playsInline = true;
      var poster = b.querySelector("img"); if (poster) v.poster = poster.src;
      b.parentNode.replaceChild(v, b);
    });
  }
  function heroSlideshow(slides) {
    return '<div class="slides" aria-roledescription="carousel" aria-label="Club highlights">' +
      slides.map(function (sl, i) {
        return '<figure class="slide' + (i === 0 ? " is-active" : "") + (sl.fit === "contain" ? " is-contain" : "") + '" aria-roledescription="slide" aria-label="' + (i + 1) + " of " + slides.length + '"' + (i ? ' aria-hidden="true"' : "") + ">" +
          '<img src="' + safeUrl(sl.photo) + '" alt="' + esc(sl.caption) + '"' + (i ? ' loading="lazy"' : "") + ' data-pos="' + esc(sl.position || "") + '">' +
          "<figcaption>" + esc(sl.caption) + "</figcaption></figure>";
      }).join("") +
      '<button type="button" class="slide-nav prev" aria-label="Previous photo">&#8249;</button>' +
      '<button type="button" class="slide-nav next" aria-label="Next photo">&#8250;</button>' +
      '<div class="slide-dots">' + slides.map(function (sl, i) {
        return '<button type="button" aria-label="Show photo ' + (i + 1) + '"' + (i === 0 ? ' aria-current="true"' : "") + "></button>";
      }).join("") + "</div></div>";
  }
  function startSlideshow() {
    var root = document.querySelector(".slides"); if (!root) return;
    var slides = root.querySelectorAll(".slide"), dots = root.querySelectorAll(".slide-dots button"), cur = 0, timer = null;
    root.querySelectorAll("img[data-pos]").forEach(function (im) { var p = im.getAttribute("data-pos"); if (p) im.style.objectPosition = p; });
    function show(n) {
      cur = (n + slides.length) % slides.length;
      slides.forEach(function (s, i) { s.classList.toggle("is-active", i === cur); if (i === cur) s.removeAttribute("aria-hidden"); else s.setAttribute("aria-hidden", "true"); });
      dots.forEach(function (d, i) { if (i === cur) d.setAttribute("aria-current", "true"); else d.removeAttribute("aria-current"); });
    }
    var still = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    function play() { if (!still && !timer) timer = setInterval(function () { show(cur + 1); }, 6000); }
    function stop() { clearInterval(timer); timer = null; }
    root.querySelector(".prev").addEventListener("click", function () { stop(); show(cur - 1); play(); });
    root.querySelector(".next").addEventListener("click", function () { stop(); show(cur + 1); play(); });
    dots.forEach(function (d, i) { d.addEventListener("click", function () { stop(); show(i); play(); }); });
    root.addEventListener("mouseenter", stop); root.addEventListener("mouseleave", play);
    root.addEventListener("focusin", stop); root.addEventListener("focusout", play);
    var x0 = null;
    root.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    root.addEventListener("touchend", function (e) { if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) { stop(); show(cur + (dx < 0 ? 1 : -1)); play(); } x0 = null; });
    play();
  }
  function heroMedia() {
    var v = C.heroVideo || {};
    if (!v.file && !v.poster) return "";
    var still = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return '<div class="hero-media">' + (v.file && !still
      ? '<video autoplay muted loop playsinline preload="metadata" poster="' + safeUrl(v.poster) + '" aria-label="Badminton at Central Club"><source src="' + safeUrl(v.file) + '" type="video/mp4"></video>'
      : '<img src="' + safeUrl(v.poster) + '" alt="Badminton at Central Club">') + "</div>";
  }

  /* Presidents & Secretaries gallery: newest first, current office bearers spotlighted */
  function leadersSection(ob) {
    var L = C.leaders || {}, cur = L.current || {}, photos = L.photos || {}, fnd = L.founders || [], n = L.recentCount || 5;
    if (!ob.length && !cur.president) return "";
    function start(y) { var m = String(y).match(/\d{4}/); return m ? +m[0] : 0; }
    function people(role) {
      var map = {}, order = [];
      ob.slice().sort(function (a, b) { return start(b.year) - start(a.year); }).forEach(function (r) {
        var who = r[role]; if (!who) return;
        if (!map[who]) { map[who] = []; order.push(who); }
        map[who].push(r.year);
      });
      return order.map(function (w) { return { name: w, years: map[w] }; });
    }
    function face(name) {
      return '<div class="ldr-av">' + (photos[name] ? '<img src="' + safeUrl(photos[name]) + '" alt="' + esc(name) + '" loading="lazy">' : '<span aria-hidden="true">' + initials(name) + "</span>") + "</div>";
    }
    function card(p) {
      return '<div class="ldr">' + face(p.name) + "<b>" + esc(p.name) + '</b><div class="ldr-chips">' +
        p.years.map(function (y, i) { return '<span' + (i === 0 ? ' class="latest"' : "") + ">" + esc(y) + "</span>"; }).join("") + "</div>" +
        (fnd.indexOf(p.name) !== -1 ? '<span class="ldr-fd">Founder</span>' : "") + "</div>";
    }
    function block(title, role, curName) {
      var list = people(role), recent = list.slice(0, n), older = list.slice(n);
      var span = older.length ? older.reduce(function (a, p) { p.years.forEach(function (y) { a.push(start(y)); }); return a; }, []) : [];
      var label = span.length ? "Earlier years (" + Math.min.apply(null, span) + "–" + (Math.max.apply(null, span) + 1) + ")" : "";
      return '<h3 class="ldr-title">' + title + '</h3><div class="ldr-row">' +
        (curName ? '<div class="ldr ldr-cur"><span class="ldr-lbl">Current · ' + esc(cur.year || "") + "</span>" + face(curName) + "<b>" + esc(curName) + "</b><small>" + (role === "president" ? "President" : "Secretary") + "</small></div>" : "") +
        recent.map(card).join("") + "</div>" +
        (older.length ? '<details class="ldr-more"><summary>' + esc(label) + '</summary><div class="ldr-row ldr-older">' + older.map(card).join("") + "</div></details>" : "");
    }
    return '<section class="section ldr-section" id="office-bearers"><div class="wrap"><h2 class="ab-h2">Presidents &amp; Secretaries</h2><p class="ab-sub">The people who have led Central Club, newest first.</p>' +
      block("Presidents", "president", cur.president) + block("Secretaries", "secretary", cur.secretary) + "</div></section>";
  }

  /* ---------- pages ---------- */
  var PAGES = {
    home: function () {
      var co = C.coaching || {}, ts = C.tournaments || [];
      main().innerHTML =
        ((C.heroSlides || []).length ? '<section class="hero hero-slideshow">' + heroSlideshow(C.heroSlides) + '<div class="wrap hero-grid"><div class="hero-text">' :
        (C.heroImage ? '<section class="hero hero-photo"><img class="hero-bg" src="' + safeUrl(C.heroImage) + '" alt="">' : '<section class="hero">') + COURT + '<div class="wrap hero-grid"><div class="hero-text">') +
        "<h1>" + esc(C.name) + '<span class="town">' + esc(C.town) + "</span></h1>" +
        "<p>" + esc(C.tagline) + "</p>" +
        '<p class="since">Est. ' + esc(C.founded) + "</p>" +
        '<div class="actions"><a class="btn btn-flood" href="/coaching">Join badminton coaching</a>' +
        '<a class="btn btn-line" href="/news#results">Latest results</a></div></div>' + ((C.heroSlides || []).length || C.heroImage ? "" : heroMedia()) + "</div></section>" +

        '<section class="section home-main"><div class="wrap home-grid">' +
        '<div class="home-results"><div class="section-top"><h2>Latest results</h2><a href="/news#results">All results</a></div>' +
        (ts.length ? ts.slice(0, 2).map(function (t) { return tournamentBlock(t, true); }).join("") : '<p class="empty">Results will appear here after each tournament.</p>') + "</div>" +
        '<aside class="home-side" aria-label="Club updates and events">' +
        '<div class="side-card"><div class="section-top"><h2>Club updates</h2><a href="/news">All news</a></div>' + newsList((C.news || []).slice(0, 3)) + "</div>" +
        '<div class="side-card"><h2>Coming up</h2>' + eventsList(C.events) + "</div>" +
        '<div class="side-card side-coaching"><p class="side-kicker">' + esc(co.admissions || "") + "</p><h2>" + esc(co.headline || "Coaching") + "</h2><p>" + esc(co.homeIntro || co.intro) + "</p>" +
        ((co.forWhom || []).length ? '<ul class="chips">' + co.forWhom.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul>" : "") +
        '<a class="btn btn-flood" href="/coaching">Coaching, batches & timings</a></div>' +
        "</aside></div></section>";
    },

    about: function () {
      var hero = C.aboutHero || {}, ob = C.officeBearers || [], fac = C.clubPhotos || [];
      var fs = C.founders || [], withPhoto = fs.filter(function (f) { return f.photo; }), noPhoto = fs.filter(function (f) { return !f.photo; });
      main().innerHTML =
        '<section class="ab-hero">' + (hero.photo ? '<img class="ab-hero-img" src="' + safeUrl(hero.photo) + '" alt="Central Club at Ruby Nagar, Changanacherry">' : "") +
        '<div class="ab-panel">' + COURT + '<div class="ab-panel-in"><p class="ab-kicker">' + esc(hero.kicker || "About Central Club") + "</p>" +
        "<h1>" + esc(hero.line1 || "") + "<span>" + esc(hero.line2 || "") + "</span></h1></div></div></section>" +

        (C.storyText ? '<section class="ab-story"><div class="wrap"><div class="ab-orn"><span></span><i>Our story</i><span></span></div>' +
          "<p>" + esc(C.storyText) + '</p><div class="ab-orn"><span></span><b aria-hidden="true">&#9670;</b><span></span></div></div></section>' : "") +

        ((C.aboutNumbers || []).length ? '<section class="ab-numbers-wrap"><div class="wrap"><div class="ab-numbers">' + COURT +
          C.aboutNumbers.map(function (n) { return '<div class="ab-num"><b>' + esc(n[0]) + "</b><span>" + esc(n[1]) + "</span></div>"; }).join("") + "</div></div></section>" : "") +

        '<section class="section ab-founders" id="founders"><div class="wrap"><h2 class="ab-h2">Our founders</h2><p class="ab-sub">The seventeen friends who built Central Club.</p>' +
        '<div class="ab-fgrid">' + withPhoto.map(function (f) {
          return '<article class="ab-fcard"><img src="' + safeUrl(f.photo) + '" alt="' + esc(f.name) + '" loading="lazy"><div><span class="ab-badge">Founder member</span><h3>' + esc(f.name) + "</h3>" +
            (f.highlight ? "<p>" + esc(f.highlight) + "</p>" : "") + "</div></article>";
        }).join("") + "</div>" +
        (noPhoto.length ? '<div class="ab-also"><h3>Also among our founders</h3><div class="ab-names">' + noPhoto.map(function (f) {
          return '<div class="ab-name"><i aria-hidden="true">' + initials(f.name) + "</i><div><b>" + esc(f.name) + "</b><small>" + esc(f.highlight || f.note || "") + "</small></div></div>";
        }).join("") + "</div></div>" : "") + "</div></section>" +

        ((C.committee || []).length ? '<section class="ab-committee"><div class="wrap"><h2 class="ab-h2">Committee 2026–27</h2><p class="ab-sub">Leading the club today</p><div class="ab-crow">' +
          C.committee.map(function (c) {
            return '<article class="ab-ccard">' + (c.photo ? '<img src="' + safeUrl(c.photo) + '" alt="' + esc(c.name) + '" loading="lazy">' : '<span class="ab-cini">' + initials(c.name) + "</span>") +
              '<div><span class="ab-badge">' + esc(c.role) + "</span><h3>" + esc(c.name) + "</h3></div></article>";
          }).join("") + "</div></div></section>" : "") +

        '<section class="section milestones-section"><div class="wrap"><h2>Milestones</h2><ol class="milestones">' +
        (C.milestones || []).map(function (m) { return '<li><span class="m-year">' + esc(m.year) + '</span><span class="m-dot" aria-hidden="true"></span><p>' + esc(m.text) + "</p></li>"; }).join("") + "</ol></div></section>" +

        leadersSection(ob) +

        '<section class="section" id="activities"><div class="wrap"><h2>What we play</h2>' + activityList(C.activities, true) + "</div></section>" +

        (fac.length ? '<section class="section" id="the-club"><div class="wrap"><div class="section-top"><h2>The club</h2><a href="/gallery">Gallery</a></div><div class="club-photos">' +
          fac.map(function (f) { return '<figure><img src="' + safeUrl(f.photo) + '" alt="' + esc(f.caption) + '" loading="lazy"><figcaption>' + esc(f.caption) + "</figcaption></figure>"; }).join("") + "</div></div></section>" : "") +

        ((C.faq || []).length ? '<section class="section" id="faq"><div class="wrap"><h2>Good to know</h2><div class="faq">' +
          C.faq.map(function (f) { return "<details><summary>" + esc(f.q) + "</summary><p>" + esc(f.a) + "</p></details>"; }).join("") + "</div></div></section>" : "");
    },

    members: function () {
      var list = (C.members || []).slice();
      function bare(n) { return String(n || "").replace(/^\s*(dr|adv)\.?\s*/i, "").trim(); }
      function ini(n) {
        var w = bare(n).replace(/[^A-Za-z ]/g, " ").split(/\s+/).filter(Boolean);
        return esc(((w[0] || "")[0] || "") + ((w[1] || "")[0] || "")).toUpperCase() || "CC";
      }
      function letter(n) { var c = bare(n).charAt(0).toUpperCase(); return /[A-Z]/.test(c) ? c : "#"; }
      list.sort(function (a, b) { return bare(a.name).localeCompare(bare(b.name)); });

      main().innerHTML =
        '<section class="mb-hero"><div class="wrap mb-hero-in"><div class="mb-hero-text">' + COURT +
        '<p class="ab-kicker">Members</p><h1>The heart<span>of the club.</span></h1>' +
        '<p class="mb-lead">Families, professionals and players who make Central Club what it is.</p></div>' +
        '<div class="mb-logo"><img src="images/logo-full-on-dark.svg" alt="Central Club Changanacherry"></div></div></section>' +
        '<section class="section mb-section"><div class="wrap"><h2 class="ab-h2">Our members</h2><p class="ab-sub">Search by name, or jump to a letter.</p>' +
        '<div class="mb-tools"><div class="mb-search"><label for="q" class="sr-only">Search members</label>' +
        '<input id="q" type="search" placeholder="Search members" autocomplete="off"><span id="mb-count" aria-live="polite"></span></div>' +
        '<div class="mb-az" id="mb-az" aria-label="Jump to a letter"></div></div>' +
        '<div id="member-list"></div>' +
        '<div class="mb-join"><div><h3>Join Central Club</h3><p>Call ' + esc(C.phone || "") + " or email " + esc(C.email || "") + "</p></div>" +
        '<a class="btn btn-flood" href="mailto:' + esc(C.email || "") + '?subject=Membership%20enquiry">Membership enquiry</a></div>' +
        "</div></section>";

      function card(m) {
        return '<div class="mb-card"><div class="mb-av">' + (m.photo ? '<img src="' + safeUrl(m.photo) + '" alt="' + esc(m.name) + '" loading="lazy">' : '<span aria-hidden="true">' + ini(m.name) + "</span>") + "</div>" +
          "<b>" + esc(m.name) + "</b>" + (m.house ? "<small>" + esc(m.house) + "</small>" : "") + (m.committee ? '<span class="mb-cm">' + esc(m.committee) + "</span>" : "") + (m.founder ? '<span class="ldr-fd">Founder</span>' : "") + "</div>";
      }
      function render(q) {
        q = (q || "").toLowerCase().trim();
        var shown = list.filter(function (m) { return !q || (m.name + " " + (m.house || "")).toLowerCase().indexOf(q) !== -1; });
        var groups = {}, order = [];
        shown.forEach(function (m) { var l = letter(m.name); if (!groups[l]) { groups[l] = []; order.push(l); } groups[l].push(m); });
        document.getElementById("mb-count").textContent = shown.length + (shown.length === 1 ? " member" : " members");
        document.getElementById("mb-az").innerHTML = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(function (l) {
          return groups[l] ? '<button type="button" data-l="' + l + '">' + l + "</button>" : '<button type="button" disabled>' + l + "</button>";
        }).join("");
        document.getElementById("member-list").innerHTML = order.length ? order.map(function (l) {
          return '<div class="mb-group" id="letter-' + l + '"><div class="mb-gh"><b>' + l + "</b><span></span><small>" + groups[l].length + '</small></div><div class="mb-grid">' +
            groups[l].map(card).join("") + "</div></div>";
        }).join("") : '<p class="empty">No members match "' + esc(q) + '". Try a different name.</p>';
      }
      render("");
      document.getElementById("q").addEventListener("input", function (e) { render(e.target.value); });
      document.getElementById("mb-az").addEventListener("click", function (e) {
        var l = e.target.getAttribute && e.target.getAttribute("data-l"); if (!l) return;
        var g = document.getElementById("letter-" + l); if (!g) return;
        var y = g.getBoundingClientRect().top + window.pageYOffset - (document.querySelector(".mb-tools").offsetHeight + 80);
        window.scrollTo({ top: y, behavior: "smooth" });
      });
    },

    coaching: function () {
      var co = C.coaching || {}, tel = String(co.phone || "").replace(/[^\d+]/g, "");
      var lead = (co.coaches || [])[0], rest = (co.coaches || []).slice(1);
      main().innerHTML = pageHead(co.headline || "Coaching", co.name + " · " + (co.admissions || "")) +

        '<section class="section"><div class="wrap split"><div><h2>' + esc(co.tagline || "") + "</h2><p class=\"lede\">" + esc(co.intro) + "</p>" +
        '<p class="actions">' + (tel ? '<a class="btn btn-flood" href="tel:' + esc(tel) + '">Call ' + esc(co.phone) + "</a>" : "") +
        '<a class="btn btn-court" href="mailto:' + esc(C.email) + '?subject=Badminton%20coaching%20enquiry">Email an enquiry</a></p></div>' +
        '<div><h3 class="for-head">Coaching for</h3><ul class="for-grid">' + (co.forWhom || []).map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul></div></div></section>" +

        (lead ? '<section class="section"><div class="wrap"><h2>The coach</h2><div class="coach-lead">' +
          '<div class="coach-photo">' + (lead.photo ? '<img src="' + safeUrl(lead.photo) + '" alt="' + esc(lead.name) + '" loading="lazy">' : "") + "</div>" +
          '<div class="coach-info"><p class="coach-role">' + esc(lead.role) + "</p><h3>" + esc(lead.name) + "</h3>" +
          ((lead.credentials || []).length ? '<ul class="creds">' + lead.credentials.map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("") + "</ul>" : "") +
          ((co.achievements || []).length ? '<div class="achievements">' + co.achievements.map(function (a) {
            return '<figure><img src="' + safeUrl(a.photo) + '" alt="' + esc(a.caption) + '" loading="lazy"><figcaption>' + esc(a.caption) + "</figcaption></figure>";
          }).join("") + "</div>" : "") + "</div></div>" +
          "</div></section>" : "") +
        ((co.trainingPhotos || []).length ? '<section class="section"><div class="wrap"><h2>Training at Central Club</h2><p class="section-lead">Regular batches on the club\'s two indoor courts.</p><div class="photo-mosaic training">' +
          co.trainingPhotos.map(function (f) { return '<figure><img src="' + safeUrl(f.photo) + '" alt="' + esc(f.caption) + '" loading="lazy"><figcaption>' + esc(f.caption) + "</figcaption></figure>"; }).join("") + "</div></div></section>" : "") +

        ((co.champions || []).length ? '<section class="section champions-section"><div class="wrap"><h2>Our champions</h2><p class="section-lead">Trained on Central Club\'s courts. Competing for Kerala and India.</p><div class="champions">' +
          co.champions.map(function (ch) {
            return '<article class="champion"><img src="' + safeUrl(ch.photo) + '" alt="' + esc(ch.name) + '" loading="lazy"><div><span class="badge-inline">' + esc(ch.label) + "</span><h3>" + esc(ch.name) + "</h3>" +
              (ch.text || []).map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("") + "</div></article>";
          }).join("") + "</div></div></section>" : "") +

        ((co.testimonials || []).length ? '<section class="section" id="testimonials"><div class="wrap"><div class="section-top"><h2>What players and parents say</h2><span class="swipe-hint">Swipe or scroll for more</span></div><p class="section-lead">In their own words, at the club\'s youth tournament.</p>' + voices(co.testimonials, true) + "</div></section>" : "") +
        ((co.competitionPhotos || []).length ? '<section class="section"><div class="wrap"><h2>Our players in competition</h2><p class="section-lead">From state ranking events to the National Games.</p><div class="photo-mosaic">' +
          co.competitionPhotos.map(function (f) { return '<figure><img src="' + safeUrl(f.photo) + '" alt="' + esc(f.caption) + '" loading="lazy"><figcaption>' + esc(f.caption) + "</figcaption></figure>"; }).join("") + "</div></div></section>" : "") +
        '<section class="section"><div class="wrap"><h2>Batches and timings</h2><div class="batches">' +
        (co.batches || []).map(function (b) {
          return '<div class="batch"><h3>' + esc(b.name) + "</h3><dl><dt>Ages</dt><dd>" + esc(b.ages) + "</dd><dt>Days</dt><dd>" + esc(b.days) + "</dd><dt>Time</dt><dd>" + esc(b.time) + "</dd></dl></div>";
        }).join("") + "</div></div></section>" +

        '<section class="section"><div class="wrap"><div class="callout"><div><h2>Book a trial session</h2><p>' + esc(co.enquiry) + "</p></div>" +
        '<div class="actions">' + (tel ? '<a class="btn btn-flood" href="tel:' + esc(tel) + '">Call now</a>' : "") +
        '<a class="btn btn-line" href="mailto:' + esc(C.email) + '?subject=Badminton%20coaching%20enquiry">Email</a></div></div></div></section>';
    },

    activities: function () {
      main().innerHTML = pageHead("Club activities", "Sport, recreation and giving back") +
        '<section class="section"><div class="wrap">' + activityList(C.activities, true) + "</div></section>" +
        '<section class="section"><div class="wrap"><h2>Coming up</h2>' + eventsTable(C.events) + "</div></section>";
    },

    news: function () {
      var ts = C.tournaments || [];
      main().innerHTML = pageHead("News & results", "Notices, tournament updates and results") +
        (C.live && C.live.active
          ? '<section class="section"><div class="wrap"><div class="callout"><div><h2>Live now</h2><p>' + esc(C.live.title) + '</p></div><div class="actions">' +
            (C.live.streamUrl ? '<a class="btn btn-flood"' + ext(C.live.streamUrl) + ">Watch on YouTube</a>" : "") +
            (C.live.scoresUrl ? '<a class="btn btn-line"' + ext(C.live.scoresUrl) + ">Live scores</a>" : "") + "</div></div></div></section>"
          : "") +
        '<section class="section" id="results"><div class="wrap"><h2>Results</h2>' +
        (ts.length ? ts.map(function (t) { return tournamentBlock(t, false); }).join("") : '<p class="empty">Results will appear here after each tournament.</p>') +
        "</div></section>" +
        '<section class="section"><div class="wrap split"><div><h2>Updates</h2>' + newsList(C.news) + "</div>" +
        "<div><h2>Coming up</h2>" + eventsTable(C.events) + "</div></div></section>";
    },

    gallery: function () {
      var albums = C.gallery || [], vids = C.videos || [];
      main().innerHTML = pageHead("Gallery", "Photos and videos from club events") +
        '<section class="section"><div class="wrap"><h2>Photos</h2>' +
        albums.map(function (a) {
          return '<div class="album"><div class="album-head"><h3>' + esc(a.album) + "</h3><span>" + fmtDate(a.date) + "</span></div>" +
            '<div class="photos">' + ((a.photos && a.photos.length)
              ? a.photos.map(function (p) { return '<button type="button" data-full="' + safeUrl(p) + '" aria-label="View photo"><img src="' + safeUrl(p) + '" alt="' + esc(a.album) + '" loading="lazy"></button>'; }).join("")
              : '<div class="photo-empty">Photos coming soon</div>') + "</div></div>";
        }).join("") + "</div></section>" +
        '<section class="section"><div class="wrap"><h2>Videos</h2><div class="videos">' +
        vids.map(function (v) {
          var id = String(v.youtubeId || "").replace(/[^\w-]/g, "");
          if (v.file) return '<figure class="video video-file"><div class="video-frame tall"><video controls playsinline preload="none" poster="' + safeUrl(v.poster) + '"><source src="' + safeUrl(v.file) + '" type="video/mp4"></video></div><figcaption>' + esc(v.title) + "</figcaption></figure>";
          return '<figure class="video"><div class="video-frame">' + (id
            ? '<button type="button" data-yt="' + id + '" aria-label="Play ' + esc(v.title) + '"><img src="https://i.ytimg.com/vi/' + id + '/hqdefault.jpg" alt="" loading="lazy"><span class="play"></span></button>'
            : '<div class="photo-empty">Video coming soon</div>') +
            "</div><figcaption>" + esc(v.title) + "</figcaption></figure>";
        }).join("") + "</div>" +
        (C.social && C.social.youtube ? '<p class="actions"><a class="btn btn-court"' + ext(C.social.youtube) + ">More on our YouTube channel</a></p>" : "") +
        '</div></section><dialog class="lightbox" id="lightbox"><img alt=""><div><button type="button" class="btn btn-flood" id="lb-close">Close</button></div></dialog>';

      var lb = document.getElementById("lightbox");
      main().addEventListener("click", function (e) {
        var ph = e.target.closest("[data-full]");
        if (ph && lb.showModal) { lb.querySelector("img").src = ph.getAttribute("data-full"); lb.showModal(); return; }
        var yt = e.target.closest("[data-yt]");
        if (yt) {
          var f = document.createElement("iframe");
          f.src = "https://www.youtube-nocookie.com/embed/" + yt.getAttribute("data-yt") + "?autoplay=1";
          f.title = "Video"; f.allow = "autoplay; encrypted-media; picture-in-picture"; f.allowFullscreen = true;
          yt.parentNode.replaceChild(f, yt);
        }
      });
      document.getElementById("lb-close").addEventListener("click", function () { lb.close(); });
      lb.addEventListener("click", function (e) { if (e.target === lb) lb.close(); });
    }
  };

  PAGES.notfound = function () {
    main().innerHTML = pageHead("Page not found", "That link doesn't go anywhere on this site.") +
      '<section class="section"><div class="wrap"><p>Check the address, or go back to the home page.</p><p class="actions"><a class="btn btn-court" href="/">Go to the home page</a></p></div></section>';
  };

  header();
  (PAGES[page] || PAGES.home)();
  startSlideshow();
  initVoices();
  footer();
})();
