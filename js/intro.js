/* Welcome intro: shown on the home page on a visitor's first visit only. */
(function () {
  var KEY = "cc-intro-seen";
  try {
    if (localStorage.getItem(KEY)) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  } catch (e) { return; }

  var o = document.createElement("div");
  o.className = "intro";
  o.setAttribute("role", "dialog");
  o.setAttribute("aria-label", "Welcome to Central Club Changanacherry");
  o.innerHTML =
    '<div class="intro-door left"></div><div class="intro-door right"></div>' +
    '<div class="intro-stage">' +
    '<svg class="intro-court" viewBox="-60 -60 1460 730" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
    '<rect x="0" y="0" width="1340" height="610"/><line x1="0" y1="46" x2="1340" y2="46"/><line x1="0" y1="564" x2="1340" y2="564"/>' +
    '<line x1="76" y1="0" x2="76" y2="610"/><line x1="1264" y1="0" x2="1264" y2="610"/><line x1="472" y1="0" x2="472" y2="610"/>' +
    '<line x1="868" y1="0" x2="868" y2="610"/><line x1="0" y1="305" x2="472" y2="305"/><line x1="868" y1="305" x2="1340" y2="305"/>' +
    '<line x1="670" y1="-30" x2="670" y2="640" class="net"/></svg>' +
    '<img class="intro-crest" src="/images/logo-full-on-dark.svg" alt="Central Club Changanacherry">' +
    '<p class="intro-line">Home of Champions <span>·</span> Since 1992</p>' +
    '<button type="button" class="intro-enter">Enter the club</button></div>';
  document.body.insertBefore(o, document.body.firstChild);
  document.documentElement.classList.add("intro-on");

  var timer;
  function enter() {
    if (o.classList.contains("opening")) return;
    clearTimeout(timer);
    try { localStorage.setItem(KEY, "1"); } catch (e) {}
    o.classList.add("opening");
    setTimeout(function () { o.remove(); document.documentElement.classList.remove("intro-on"); }, 1250);
  }
  var btn = o.querySelector(".intro-enter");
  btn.addEventListener("click", enter);
  document.addEventListener("keydown", function k(e) {
    if (e.key === "Enter" || e.key === "Escape" || e.key === " ") { e.preventDefault(); enter(); document.removeEventListener("keydown", k); }
  });
  setTimeout(function () { try { btn.focus({ preventScroll: true }); } catch (e) {} }, 2200);
  timer = setTimeout(enter, 4800);
})();
