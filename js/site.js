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
    ["home", "index.html", "Home"],
    ["about", "about.html", "About"],
    ["members", "members.html", "Members"],
    ["coaching", "coaching.html", "Coaching"],
    ["activities", "activities.html", "Activities"],
    ["news", "news.html", "News & results"],
    ["gallery", "gallery.html", "Gallery"]
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
      return '<li><a href="/' + n[1] + '"' + (n[0] === page ? ' aria-current="page"' : "") + ">" + n[2] + "</a></li>";
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
        ? groups.map(function (g) {
            return (g ? '<h4 class="player-group">' + esc(g) + "</h4>" : "") + '<div class="players">' +
              pls.filter(function (pl) { return (pl.group || "") === g; }).map(playerCard).join("") + "</div>";
          }).join("")
        : "") +
      (!compact || !pls.length ? (t.categories && t.categories.length ? '<h4 class="player-group">All results</h4>' + resultsTable(t.categories) : "") : "") +
      (!compact && t.groupPhoto ? '<figure class="group-photo"><img src="' + safeUrl(t.groupPhoto) + '" alt="' + esc(t.groupCaption || t.name) + '" loading="lazy"><figcaption>' + esc(t.groupCaption || "") + "</figcaption></figure>" : "") +
      "</div>";
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

  /* ---------- pages ---------- */
  var PAGES = {
    home: function () {
      var co = C.coaching || {}, latest = (C.tournaments || [])[0], fac = C.facilities || [];
      main().innerHTML =
        ((C.heroSlides || []).length ? '<section class="hero hero-slideshow">' + heroSlideshow(C.heroSlides) + '<div class="wrap hero-grid"><div class="hero-text">' :
        (C.heroImage ? '<section class="hero hero-photo"><img class="hero-bg" src="' + safeUrl(C.heroImage) + '" alt="">' : '<section class="hero">') + COURT + '<div class="wrap hero-grid"><div class="hero-text">') +
        "<h1>" + esc(C.name) + '<span class="town">' + esc(C.town) + "</span></h1>" +
        "<p>" + esc(C.tagline) + "</p>" +
        '<p class="since">Est. ' + esc(C.founded) + "</p>" +
        '<div class="actions"><a class="btn btn-flood" href="coaching.html">Join badminton coaching</a>' +
        '<a class="btn btn-line" href="news.html#results">Latest results</a></div></div>' + ((C.heroSlides || []).length || C.heroImage ? "" : heroMedia()) + "</div></section>" +

        (latest ? '<section class="section"><div class="wrap"><div class="section-top"><h2>Latest results</h2><a href="news.html#results">All results</a></div>' +
          (C.tournaments || []).slice(0, 2).map(function (t) { return tournamentBlock(t, true); }).join("") + "</div></section>" : "") +

        '<section class="section"><div class="wrap"><h2>What we play</h2>' +
        activityList(C.activities, true) + '<p class="actions"><a href="activities.html">More about club activities</a></p></div></section>' +

        (fac.length ? '<section class="section"><div class="wrap"><div class="section-top"><h2>The club</h2><a href="gallery.html">Gallery</a></div><div class="facility-strip">' +
          fac.map(function (f) { return '<figure><img src="' + safeUrl(f.photo) + '" alt="' + esc(f.caption) + '" loading="lazy"><figcaption>' + esc(f.caption) + "</figcaption></figure>"; }).join("") +
          "</div></div></section>" : "") +

        '<section class="section"><div class="wrap split">' +
        "<div><h2>Club updates</h2>" + newsList((C.news || []).slice(0, 3)) + '<p class="actions"><a href="news.html">All news</a></p></div>' +
        "<div><h2>Coming up</h2>" + eventsTable(C.events) + "</div></div></section>" +

        '<section class="section"><div class="wrap"><div class="callout"><div><h2>' + esc(co.name) + "</h2><p>" + esc(co.intro) + "</p><p>" +
        (co.coaches || []).map(function (c) { return esc(c.name) + ", " + esc(c.role); }).join("<br>") + "</p></div>" +
        '<div><p>' + esc(co.enquiry) + '</p><a class="btn btn-flood" href="coaching.html">See batches and timings</a></div></div></div></section>' +

        '<section class="section"><div class="wrap split"><div><h2>Visit the club</h2><p>' + esc(C.address) + "</p>" +
        '<p class="actions"><a class="btn btn-court" href="' + safeUrl(C.mapsUrl) + '" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>' +
        '<a class="btn btn-court" href="mailto:' + esc(C.email) + '">Email the club</a></p></div>' +
        "<div><h2>The people behind the club</h2><p>Founded in " + esc(C.founded) + " by seventeen shuttle players. Meet the founders, and the members who keep it going today.</p>" +
        '<p class="actions"><a href="about.html#founders">The founding team</a><a href="members.html">Our members</a></p></div></div></section>';
    },

    about: function () {
      var ob = C.officeBearers || [], arc = C.archive || [];
      main().innerHTML = pageHead("About the club", "Est. " + C.founded + " in " + C.town) +
        '<section class="section"><div class="wrap split"><div><h2>Our story</h2>' +
        (C.history || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div>" +
        '<div><h2>Milestones</h2><ol class="timeline">' +
        (C.milestones || []).map(function (m) { return "<li><b>" + esc(m.year) + "</b>" + esc(m.text) + "</li>"; }).join("") +
        "</ol></div></div></section>" +

        '<section class="section" id="founders"><div class="wrap"><h2>The founding team</h2><p class="section-lead">The ' +
        (C.founders || []).length + " founder members of Central Club. Photographs from the year 2000.</p><div class=\"people founders\">" +
        (C.founders || []).map(function (p) { return person(p, p.note, p.role); }).join("") + "</div></div></section>" +

        (ob.length ? '<section class="section" id="office-bearers"><div class="wrap"><h2>Office bearers through the years</h2>' +
          '<div class="table-wrap"><table class="bearers"><thead><tr><th>Year</th><th>President</th><th>Secretary</th></tr></thead><tbody>' +
          ob.slice().reverse().map(function (r) { return "<tr><td>" + esc(r.year) + "</td><td>" + esc(r.president) + "</td><td>" + esc(r.secretary) + "</td></tr>"; }).join("") +
          "</tbody></table></div></div></section>" : "") +

        arc.map(function (a) {
          return '<section class="section" id="archive"><div class="wrap"><h2>From the archives</h2>' +
            '<div class="archive"><div class="archive-pages">' +
            (a.images || []).map(function (im, i) {
              return '<a href="' + safeUrl(im) + '" target="_blank" rel="noopener"><img src="' + safeUrl(im) + '" alt="' + esc(a.title) + ", page " + (i + 1) + '" loading="lazy"></a>';
            }).join("") + "</div>" +
            '<div class="archive-text"><h3>' + esc(a.title) + '</h3><p class="archive-source">' + esc(a.source) + "</p>" +
            (a.summary || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
            (a.programme && a.programme.length ? '<h3 class="programme-head">Programme</h3><dl class="programme">' +
              a.programme.map(function (r) { return "<dt>" + esc(r[0]) + "</dt><dd>" + esc(r[1]) + "</dd>"; }).join("") + "</dl>" : "") +
            "</div></div></div></section>";
        }).join("") +

        '<section class="section" id="committee"><div class="wrap"><h2>Current committee</h2><div class="people">' +
        (C.committee || []).map(function (p) { return person(p, p.role); }).join("") + "</div></div></section>";
    },

    members: function () {
      var list = (C.members || []).slice();
      main().innerHTML = pageHead("Our members", list.length + " members and counting") +
        '<section class="section"><div class="wrap">' +
        '<div class="toolbar"><label for="q">Find a member</label><input id="q" type="search" placeholder="Search by name or profession" autocomplete="off"></div>' +
        '<div id="member-list"></div></div></section>';

      function render(q) {
        q = (q || "").toLowerCase().trim();
        var shown = list.filter(function (m) {
          return !q || (m.name + " " + m.profession).toLowerCase().indexOf(q) !== -1;
        });
        var years = {};
        shown.forEach(function (m) { (years[m.joined] = years[m.joined] || []).push(m); });
        var keys = Object.keys(years).sort(function (a, b) { return b - a; });
        document.getElementById("member-list").innerHTML = keys.length
          ? keys.map(function (y) {
              var ms = years[y].sort(function (a, b) { return a.name.localeCompare(b.name); });
              return '<div class="year-group"><h2>Joined ' + esc(y) + "<small>" + ms.length + (ms.length === 1 ? " member" : " members") + '</small></h2><div class="people">' +
                ms.map(function (m) { return person(m, m.profession); }).join("") + "</div></div>";
            }).join("")
          : '<p class="empty">No members match "' + esc(q) + '". Try a different name or profession.</p>';
      }
      render("");
      document.getElementById("q").addEventListener("input", function (e) { render(e.target.value); });
    },

    coaching: function () {
      var co = C.coaching || {};
      main().innerHTML = pageHead(co.name, "Badminton coaching at Central Club") +
        '<section class="section"><div class="wrap split"><div><h2>About the coaching</h2><p>' + esc(co.intro) + "</p><p>" + esc(co.enquiry) + "</p></div>" +
        '<div><h2>Coaches</h2><div class="people">' + (co.coaches || []).map(function (c) { return person(c, c.role); }).join("") + "</div></div></div></section>" +
        '<section class="section"><div class="wrap"><h2>Batches and timings</h2><div class="batches">' +
        (co.batches || []).map(function (b) {
          return '<div class="batch"><h3>' + esc(b.name) + "</h3><dl><dt>Ages</dt><dd>" + esc(b.ages) + "</dd><dt>Days</dt><dd>" + esc(b.days) + "</dd><dt>Time</dt><dd>" + esc(b.time) + "</dd></dl></div>";
        }).join("") + "</div></div></section>" +
        '<section class="section"><div class="wrap"><div class="callout"><div><h2>Book a trial session</h2><p>' + esc(co.enquiry) + "</p></div>" +
        '<div><a class="btn btn-flood" href="mailto:' + esc(C.email) + '?subject=Badminton%20coaching%20enquiry">Email a coaching enquiry</a></div></div></div></section>';
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
  footer();
})();
