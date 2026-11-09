/* ==========================================================================
   CENTRAL CLUB CHANGANACHERRY — SITE CONTENT
   --------------------------------------------------------------------------
   This is the ONLY file you need to edit to update the website.
   Edit it on GitHub (pencil icon), then click "Commit changes".
   The live site updates in about a minute.

   Rules to avoid breaking the site:
   - Keep text inside "double quotes".
   - Keep the comma after each item, like the examples.
   - To add an item, copy an existing { ... }, paste it, and change the text.
   - Photos: upload to the images/ folder first, then type the path here.
   - Anything in [square brackets] is sample text to replace.
   ========================================================================== */

window.CLUB = {

  /* ---------- Basic details ---------- */
  name: "Central Club",
  town: "Changanacherry",
  founded: "1992",
  tagline: "Badminton, table tennis, carroms and good company, right here in Changanacherry.",
  address: "Ruby Nagar, Changanacherry, Kerala 686103",
  phone: "+91 98470 58009",
  email: "info@centralclubchry.com",
  mapsUrl: "https://maps.google.com/?q=Central+Club+Changanacherry",

  /* Home page slideshow: photos change every few seconds, with arrows and dots.
     position moves the photo inside the frame ("center 30%" shows more of the top). */
  heroSlides: [
    { photo: "images/tournaments/home-2026/all-winners.jpg",            caption: "This season's winners, all together",             position: "center 62%" },
    { photo: "images/tournaments/home-2026/a-b-champions.jpg",          caption: "Category A & B champions Sohan & Sandeep celebrate",              position: "center 35%" },
    { photo: "images/tournaments/home-2026/a-b-finalists.jpg",          caption: "Category A & B winners and runners-up",           position: "center 30%" },
    { photo: "images/tournaments/home-2026/c-d-winners.jpg",            caption: "Category C & D winners Manu & Ciril",                          position: "center 38%" },
    { photo: "images/tournaments/youth-2026/youth-winners-collage.jpg", caption: "Youth Tournament 2026 winners and runners-up", fit: "contain" },
    { photo: "images/tournaments/home-2026/sibichen-award.jpg",       caption: "Siby Scaria Karimattom, the Home Tournament's oldest player",  position: "center 35%" },
  ],

  /* Single background photo, used only if heroSlides is empty. */
  heroImage: "images/club/hero-court.jpg",

  /* Home page video: short, muted, looping (used when heroImage is ""). */
  heroVideo: { file: "videos/hero-courts.mp4", poster: "images/club/hero-poster.jpg" },

  /* Photos of the club, shown on the About page. */
  clubPhotos: [
    { photo: "images/club/courts-overhead.jpg",  caption: "Two indoor courts, seen from the gallery" },
    { photo: "images/club/covered-walkway.jpg",  caption: "The covered walkway to the courts" },
    { photo: "images/club/courts-play-1.jpg",    caption: "Evening games on court 2" },
    { photo: "images/club/courts-play-2.jpg",    caption: "Doubles on court 1" },
    { photo: "images/club/clubhouse-front.jpg",  caption: "Central Club at Ruby Nagar" },
    { photo: "images/club/walkway-gym.jpg",      caption: "Gym equipment along the walkway" }
  ],

  /* (older list, kept for reference) */
  facilities: [
    { photo: "images/club/courts-overhead.jpg",  caption: "Two indoor courts, seen from the gallery" },
    { photo: "images/club/courts-play-1.jpg",    caption: "Evening games on court 2" },
    { photo: "images/club/covered-walkway.jpg",  caption: "The covered walkway to the courts" },
    { photo: "images/club/courts-play-2.jpg",    caption: "Doubles on court 1" }
  ],

  social: {
    youtube:   "https://www.youtube.com/",   // replace with the club channel link
    facebook:  "https://www.facebook.com/",  // replace with the club page link
    instagram: "https://www.instagram.com/", // replace with the club profile link
    whatsapp:  ""                            // optional: WhatsApp channel link
  },

  /* ---------- Live banner ----------
     Set active: true and paste the YouTube link when a tournament is live.
     Set active: false when it ends. */
  live: {
    active: false,
    title: "Home Badminton Tournament — Finals",
    streamUrl: "https://www.youtube.com/",
    scoresUrl: ""   // optional: link to the live score app
  },

  /* About page */
  aboutHero: { photo: "images/club/clubhouse-hero.jpg", kicker: "About Central Club", line1: "Seventeen friends.", line2: "One club." },
  storyText: "Central Club began with seventeen shuttle badminton players who wanted Changanacherry to have a proper place to play, so they built one themselves: their own office and indoor courts at Ruby Nagar, welcomed by the town as a gift to every sports lover. That spirit has never left. It lives on in the champions raised on our courts, the coaching that fills the hall every evening, the tournaments that mark the calendar, and the friendships that keep members coming back.",
  aboutNumbers: [ ["17", "friends who built it"], ["2", "indoor courts of our own"], ["34", "years of sport"], ["1", "club, still playing"] ],

  /* Questions shown at the end of the About page */
  faq: [
    { q: "Is Central Club the same as The Changanacherry Club?",
      a: "No. Central Club Changanacherry is an independent sports club founded in 1992 by seventeen shuttle badminton players, with its own indoor courts at Ruby Nagar. It is not connected to The Changanacherry Club on Bypass Road. Our only website is centralclubchry.com." },
    { q: "Where is Central Club?",
      a: "Ruby Nagar, Changanacherry, Kerala 686103. Use the Google Maps link at the bottom of any page for directions." }
  ],

  /* ---------- About & history ---------- */
  history: [
    "Central Club was formed in 1992 by seventeen shuttle badminton players in Changanacherry. The town had a proud sporting tradition, with its schools and colleges producing athletes for years, but it had fallen behind other parts of Kerala when it came to facilities. The founders decided to do something about it themselves.",
    "They bought 14 cents of land at Ruby Nagar and built the club's own office and an indoor shuttle court, laid out as two courts so that four teams can train at the same time, with rest rooms for players, a locker for every member and seating for guests.",
    "The new building was inaugurated on 27 December 2000. Sri Siby Mathews IPS, Inspector General of Police, inaugurated the club, and Sri C. F. Thomas MLA opened the shuttle court, at a function presided over by Municipal Chairperson Smt. Krishnakumari Rajasekharan. Malayala Manorama marked the day with a special feature that called the court a New Year gift to the sports lovers of Changanacherry.",
    "From the start, the founders' plans went beyond their own games: bringing state and district tournaments back to Changanacherry, and free coaching for talented school and college players from families who could not afford it.",
    "Today the club is home to badminton, table tennis and carroms, regular coaching through Michael's School of Badminton, club tournaments through the year, and charity work in the community."
  ],

  milestones: [
    { year: "1992", text: "Central Club formed by 17 shuttle badminton players in Changanacherry." },
    { year: "1994–95", text: "First office bearers on the club's honours board: Siby Scaria, President, and Mathew Kurian, Secretary." },
    { year: "2000", text: "Club office and indoor shuttle court at Ruby Nagar inaugurated on 27 December, with nearly 90 members." },
    { year: "2010", text: "Michael's School of Badminton starts regular coaching at the club." },
    { year: "2026",   text: "Club website launched at centralclubchry.com." }
  ],

  /* The 17 founder members, in display order. Founders with a photo appear as large cards;
     the rest are listed below them until a photo is added. */
  founders: [
    { name: "Anil Mathew Vaniapurackal", photo: "images/people/anil-mathew.jpg", highlight: "Four-time President" },
    { name: "Siby Scaria Karimattom", photo: "images/people/siby-scaria.jpg", highlight: "The club’s first President and one of its finest badminton players" },
    { name: "Gigi James Koduppunapolackal", photo: "images/people/gigi-james.jpg", highlight: "Former MG University and Kerala badminton player" },
    { name: "Jojo James Koduppunapolackal", photo: "images/people/jojo-james.jpg", highlight: "Badminton, cricket and table tennis player" },
    { name: "Santhosh Thomas Perumpuzhakadavil", photo: "images/people/santhosh-thomas.jpg", highlight: "Badminton and table tennis player" },
    { name: "Babu Joseph Kallukalam", photo: "images/people/babu-joseph.jpg", highlight: "President 1999–2000" },
    { name: "Gijan Thomas Koipally", photo: "images/people/gigen-thomas.jpg", highlight: "" },
    { name: "Gigi Francis Pulickal", photo: "images/people/gigi-francis.jpg", highlight: "Former university and state player" },
    { name: "Sathish Valiaveedan", photo: "images/people/satheesh-valiyaveedan.jpg", highlight: "President when the indoor court opened" },
    { name: "Kannan T. A. Thirumalathazhchayil", photo: "images/people/ta-kannan.jpg", highlight: "Vice President in 2000" },
    { name: "Boby Abraham Manamel", photo: "images/people/bobby-abraham.jpg", highlight: "" },
    { name: "Renjith Mathews Karingada", photo: "images/people/renjith-mathews.jpg", highlight: "President 2002–03" },
    { name: "Mathew Kurian", note: "Pottamkulam", photo: "", highlight: "The club’s first Secretary" },
    { name: "S. R. Nambi", note: "Selvi Nivas", photo: "", highlight: "Patron" },
    { name: "Georgekutty M. G.", note: "Marattukulam", photo: "", highlight: "Treasurer in 2000" },
    { name: "P. F. Joseph", note: "Pulickal", photo: "", highlight: "" },
    { name: "T. A. Reghu", note: "Thirumalathazhchayil", photo: "", highlight: "" }
  ],

  /* Presidents and secretaries, from the club's honours board. Add new years at the bottom. */
  officeBearers: [
    { year: "1994–95",   president: "Siby Scaria",           secretary: "Mathew Kurian" },
    { year: "1995–96",   president: "Anil Mathew",           secretary: "Mathew Kurian" },
    { year: "1996–97",   president: "Siby Scaria",           secretary: "Gigi Francis" },
    { year: "1997–98",   president: "Siby Scaria",           secretary: "Gigi Francis" },
    { year: "1999–2000", president: "Babu Joseph",           secretary: "Mathew Kurian" },
    { year: "2000–01",   president: "Satheesh Valiyaveedan", secretary: "Gigi Francis" },
    { year: "2001–02",   president: "Satheesh Valiyaveedan", secretary: "Gigi Francis" },
    { year: "2002–03",   president: "Renjith Mathews",       secretary: "Gigi James" },
    { year: "2003–04",   president: "Anil Mathew",           secretary: "Gigi Francis" },
    { year: "2004–05",   president: "Gigi Francis",          secretary: "Siby Mathew" },
    { year: "2005–06",   president: "Siby Mathew",           secretary: "A. Bijumon" },
    { year: "2006–07",   president: "K. M. Thomas",          secretary: "Joshy Abraham" },
    { year: "2007–08",   president: "K. M. Thomas",          secretary: "A. Bijumon" },
    { year: "2008–09",   president: "Stephen Thomas",        secretary: "Gigi Francis" },
    { year: "2009–10",   president: "Stephen Thomas",        secretary: "Sunny Joseph" },
    { year: "2010–11",   president: "Anil Mathew",           secretary: "Thomas Antony" },
    { year: "2011–12",   president: "Anil Mathew",           secretary: "Thomas Antony" }
  ],

  /* Presidents & Secretaries gallery on the About page.
     current: this year's office bearers (leave secretary "" until known).
     photos: office bearer name exactly as written in officeBearers -> photo file.
     founders: office bearers who are also founder members (shows a small "Founder" tag).
     recentCount: how many past people to show before the "Earlier years" button. */
  leaders: {
    current: { year: "2026–27", president: "Rony", secretary: "" },
    photos: {
      "Rony": "images/people/rony.jpg",
      "Anil Mathew": "images/people/anil-mathew.jpg",
      "Siby Scaria": "images/people/siby-scaria.jpg",
      "Babu Joseph": "images/people/babu-joseph.jpg",
      "Satheesh Valiyaveedan": "images/people/satheesh-valiyaveedan.jpg",
      "Renjith Mathews": "images/people/renjith-mathews.jpg",
      "Gigi Francis": "images/people/gigi-francis.jpg",
      "Gigi James": "images/people/gigi-james.jpg"
    },
    founders: ["Anil Mathew", "Siby Scaria", "Babu Joseph", "Satheesh Valiyaveedan", "Renjith Mathews", "Gigi Francis", "Gigi James", "Mathew Kurian"],
    recentCount: 5
  },

  /* From the archives: newspaper cuttings and old documents. */
  archive: [
    {
      title: "Indoor shuttle court inauguration",
      source: "Malayala Manorama (Kottayam), special feature, 27 December 2000",
      images: ["images/archive/manorama-2000-12-27-page1.jpg", "images/archive/manorama-2000-12-27-page2.jpg"],
      summary: [
        "A two-page feature on the day the club's office and indoor shuttle court at Ruby Nagar opened. The lead article, by club President Satheesh Valiyaveedan, called the court Central Club's New Year gift to the sports lovers of Changanacherry.",
        "It describes how 17 shuttle players formed the club in 1992, bought 14 cents of land, and built the office and a two-court indoor hall with rest rooms, a locker for every member and seating for guests. It also sets out the club's plans to bring state and district tournaments to the town and to offer free coaching to talented students from poorer families.",
        "The second page shows the founder members and the names of the members behind the club at the time."
      ],
      programme: [
        ["Prayer", "Sri L. P. R. Varma"],
        ["Welcome speech", "Satheesh Valiyaveedan, President"],
        ["Presidential address", "Smt. Krishnakumari Rajasekharan, Municipal Chairperson"],
        ["Inauguration of the club", "Sri Siby Mathews IPS, Inspector General of Police"],
        ["Inauguration of the shuttle court", "Sri C. F. Thomas MLA"],
        ["Felicitation", "Sri Moncy Thoompunkal, Ward Councillor"],
        ["Vote of thanks", "Georgekutty M. G., Treasurer"],
        ["", "National Anthem"]
      ]
    }
  ],

  committee: [
    { name: "Rony",          role: "President",        photo: "images/people/rony.jpg" },
    { name: "Biju",          role: "Vice President",   photo: "images/people/biju.jpg" },
    { name: "Shoji James",   role: "Joint Secretary",  photo: "images/people/shoji-james.jpg" },
    { name: "Martin Joseph", role: "Executive member", photo: "images/people/martin-joseph.jpg" },
    { name: "Kishore",       role: "Executive member", photo: "images/people/kishore.jpg" }
  ],

  /* ---------- Members ----------
     Add only members who have given consent to appear publicly.
     photo: "images/members/firstname-lastname.jpg" (or leave "" to show initials) */
  members: [
    { name: "[Sample Member One]",   profession: "[Engineer]", joined: 2026, photo: "" },
    { name: "[Sample Member Two]",   profession: "[Doctor]",   joined: 2026, photo: "" },
    { name: "[Sample Member Three]", profession: "[Teacher]",  joined: 2025, photo: "" },
    { name: "[Sample Member Four]",  profession: "[Business]", joined: 2024, photo: "" }
  ],

  /* ---------- Coaching ---------- */
  coaching: {
    name: "Michael's School of Badminton",
    headline: "Badminton coaching at Central Club",
    tagline: "Train with champions. Play like one.",
    intro: "Central Club runs regular badminton coaching on its own two indoor courts at Ruby Nagar, through Michael's School of Badminton. Sessions cover everything from grip and footwork to match play, for complete beginners through to players competing at state and national level.",
    homeIntro: "Regular coaching on Central Club's own indoor courts, from first lessons to competitive play. Run by Michael's School of Badminton, with batches for every age and level.",
    admissions: "Admissions open · All ages · All levels",
    phone: "+91 90611 37394",
    forWhom: ["Boys & girls", "Men", "Women", "Seniors & masters", "Beginner to advanced", "Individual & group"],
    coaches: [
      { name: "Michael Sebastian", role: "Chief Coach", photo: "images/coaching/michael-sebastian.jpg",
        credentials: ["BWF Certified Coach", "KBSA Certified Coach", "2× Silver Medallist for India, Masters", "National Masters Champion", "State Masters Champion"] },
      { name: "Nithin", role: "Assistant Coach", photo: "images/coaching/nithin.jpg", credentials: [] }
    ],
    achievements: [
      { photo: "images/coaching/achievement-india-korea-2023.jpg", caption: "For India, Korea 2023" },
      { photo: "images/coaching/achievement-apmg-2023.jpg",        caption: "Medal ceremony, APMG 2023" },
      { photo: "images/coaching/achievement-bwf-dubai-2016.jpg",   caption: "BWF Coaching Forum, Dubai 2016" }
    ],
    champions: [
      { name: "Gowri Krishna T R", label: "India player", photo: "images/coaching/champion-gowri-krishna.jpg",
        text: ["Runner-up, Women's Doubles, All India Senior Ranking 2025", "36th National Games, Gujarat 2022"] },
      { name: "Varghese", label: "State player", photo: "images/coaching/champion-varghese.jpg",
        text: ["Kerala State, Men's Singles", "Winners, SGFI National School Games"] },
      { name: "Ahana Krishna", label: "State champion", photo: "images/coaching/champion-ahana-krishna.jpg",
        text: ["Kerala State Under-13 Girls' Champion"] }
    ],
    /* Photos for the coaching page */
    testimonials: [
      { file: "videos/testimonials/t1.mp4", poster: "images/testimonials/t1.jpg" },
      { file: "videos/testimonials/t2.mp4", poster: "images/testimonials/t2.jpg" },
      { file: "videos/testimonials/t3.mp4", poster: "images/testimonials/t3.jpg" },
      { file: "videos/testimonials/t4.mp4", poster: "images/testimonials/t4.jpg" },
      { file: "videos/testimonials/t5.mp4", poster: "images/testimonials/t5.jpg" },
      { file: "videos/testimonials/t6.mp4", poster: "images/testimonials/t6.jpg" },
      { file: "videos/testimonials/t7.mp4", poster: "images/testimonials/t7.jpg" }
    ],
    trainingPhotos: [
      { photo: "images/coaching/batch-michaels-school.jpg", caption: "A coaching batch in Michael's School of Badminton jerseys" },
      { photo: "images/coaching/batch-training-group.jpg",  caption: "An evening training group with the coaches" },
      { photo: "images/coaching/batch-juniors-1.jpg",       caption: "Junior players after a training session" },
      { photo: "images/coaching/batch-trophies.jpg",        caption: "Players and coach with team trophies" },
      { photo: "images/coaching/batch-big-group.jpg",       caption: "One of the club's largest coaching batches" }
    ],
    competitionPhotos: [
      { photo: "images/coaching/play-national-games-2022.jpg",   caption: "Mixed doubles at the 36th National Games, Gujarat 2022" },
      { photo: "images/coaching/play-mixed-doubles-india.jpg",   caption: "Mixed doubles in India colours" },
      { photo: "images/coaching/play-girls-singles.jpg",         caption: "Girls' singles in action" },
      { photo: "images/coaching/play-boys-singles.jpg",          caption: "Boys' singles in action" },
      { photo: "images/coaching/win-ahana-trophies.jpg",         caption: "Ahana Krishna with her trophies" },
      { photo: "images/coaching/win-state-sub-junior-2023.jpg",  caption: "Ahana Krishna, Kerala State Sub Junior Ranking Tournament 2023" },
      { photo: "images/coaching/win-ssb-open-2023.jpg",          caption: "A junior trophy haul at an open tournament, 2023" },
      { photo: "images/coaching/win-junior-pair.jpg",            caption: "Junior players with their trophies" },
      { photo: "images/coaching/win-jbc-2018.jpg",               caption: "Runner-up, Junior Badminton Championship 2018" }
    ],
    batches: [
      { name: "Kids (beginners)", ages: "[Ages 7–12]",  days: "[Mon–Fri]",   time: "[5:00–6:00 PM]" },
      { name: "Juniors",          ages: "[Ages 12–17]", days: "[Mon–Fri]",   time: "[6:00–7:00 PM]" },
      { name: "Adults",           ages: "18+",          days: "[Sat & Sun]", time: "[6:30–8:00 AM]" }
    ],
    enquiry: "Call +91 90611 37394 or email info@centralclubchry.com to book a trial session."
  },

  /* ---------- Activities ----------
     icon can be: shuttle, paddle, carrom, heart, star */
  activities: [
    { name: "Badminton",           icon: "shuttle", text: "The heart of the club. Courts open to members daily, with club tournaments through the year and regular coaching." },
    { name: "Table tennis",        icon: "paddle",  text: "[Number] tables for casual games and friendly club ladders. [Add timings or a note about tournaments.]" },
    { name: "Carroms",             icon: "carrom",  text: "[When carroms is played and any club competitions.]" },
    { name: "Charity & community", icon: "heart",   text: "[The club's charity work: drives, donations, sponsoring young players, community events.]" },
    { name: "Other activities",    icon: "star",    text: "[Cards, chess, family days, annual celebrations — whatever else the club does.]" }
  ],

  /* ---------- News & updates (newest first, date as YYYY-MM-DD) ---------- */
  news: [
    { date: "2026-11-01", title: "Youth Tournament 2026: Ahana Krishna takes both girls' titles", text: "Under 13 and Under 17 boys and girls played on 31 October and 1 November. Ahana Krishna won both girls' titles, Arunendra S. took the Under 13 boys' title and Aiben Joseph the Under 17 boys'. Full results are on the News page.", link: "" },
    { date: "2026-11-01", title: "Home Badminton Tournament 2026: finals played", text: "After a week of league matches from 25 October, the semi-finals and finals of both tournaments (Category A & B, Category C & D) were played on 1 November. Results are on the News page.", link: "" },
    { date: "2026-10-20", title: "League fixtures announced", text: "Pool league matches run from 25 to 31 October, 7 PM onwards on two courts.", link: "" },
    { date: "2026-10-01", title: "[Sample update]", text: "[Use this space for notices: holidays, court maintenance, meetings, new members.]", link: "" }
  ],

  /* ---------- Upcoming events ---------- */
  events: [
    { date: "[Jan 2027]", title: "[Annual general body meeting]",   place: "Club hall" }
  ],

  /* ---------- Tournaments and results (newest first) ----------
     The first tournament is shown as "Latest results" on the home page.
     For a new tournament, copy a whole { ... } block, paste it at the top, and edit it. */
  tournaments: [
    {
      name: "Home Badminton Tournament 2026",
      date: "2026-11-01",
      venue: "Central Club, Changanacherry",
      note: "Two doubles tournaments, Category A & B and Category C & D, with a week of league matches and finals on 1 November.",
      categories: [
        { event: "Category A & B doubles", winner: "Sohan & Sandeep", runnerUp: "Aswin & Suresh Philip" },
        { event: "Category C & D doubles", winner: "Manu & Ciril", runnerUp: "Tenny Thomas & Mahesh" }
      ],
      players: [
        { name: "Sohan & Sandeep",        result: "Winners",         event: "Category A & B doubles", group: "Category A & B", photo: "images/tournaments/home-2026/a-b-winners-card.jpg" },
        { name: "Aswin & Suresh Philip",  result: "Runners-up",      event: "Category A & B doubles", group: "Category A & B", photo: "images/tournaments/home-2026/a-b-runners-up.jpg" },
        { name: "Manu & Ciril",           result: "Winners",         event: "Category C & D doubles", group: "Category C & D", photo: "images/tournaments/home-2026/c-d-winners-card.jpg" },
        { name: "Tenny Thomas & Mahesh",  result: "Runners-up",      event: "Category C & D doubles", group: "Category C & D", photo: "images/tournaments/home-2026/c-d-runners-up-card.jpg" },
        { name: "Sojan Sajan",            result: "Best Player",     event: "Home Tournament 2026",   group: "Special awards", photo: "images/tournaments/home-2026/best-player.jpg" },
        { name: "Savio Sojappan",         result: "Special mention", event: "Junior player",          group: "Special awards", photo: "images/tournaments/home-2026/special-mention.jpg" },
        { name: "Siby Scaria Karimattom", result: "Oldest player",   event: "Home Tournament 2026",           group: "Special awards", photo: "images/tournaments/home-2026/sibichen.jpg" }
      ],
      groupPhoto: "images/tournaments/home-2026/all-winners.jpg",
      groupCaption: "Winners of the Home Tournament and the Youth Tournament together at the club."
    },
    {
      name: "Youth Badminton Tournament 2026",
      date: "31 October – 1 November 2026",
      venue: "Central Club, Changanacherry",
      categories: [
        { event: "Under 13 Boys Singles",  winner: "Arunendra S.",  runnerUp: "Kailas D." },
        { event: "Under 13 Girls Singles", winner: "Ahana Krishna", runnerUp: "Gouri Nandha Dhanesh" },
        { event: "Under 17 Boys Singles",  winner: "Aiben Joseph",  runnerUp: "John Parampathu Chacko" },
        { event: "Under 17 Girls Singles", winner: "Ahana Krishna", runnerUp: "Helen Susan Jenu" }
      ],
      /* Photo cards: one per player. result is "Winner" or "Runner-up". */
      players: [
        { name: "Arunendra S.",         result: "Winner",    event: "Under 13 Boys",              group: "Boys",  photo: "images/tournaments/youth-2026/u13-boys-winner.jpg" },
        { name: "Kailas D.",            result: "Runner-up", event: "Under 13 Boys",              group: "Boys",  photo: "images/tournaments/youth-2026/u13-boys-runner-up.jpg" },
        { name: "Aiben Joseph",         result: "Winner",    event: "Under 17 Boys",              group: "Boys",  photo: "images/tournaments/youth-2026/u17-boys-winner.jpg" },
        { name: "John Parampathu Chacko",  result: "Runner-up", event: "Under 17 Boys",              group: "Boys",  photo: "images/tournaments/youth-2026/u17-boys-runner-up.jpg" },
        { name: "Ahana Krishna",        result: "Winner",    event: "Under 13 & Under 17 Girls",  group: "Girls", photo: "images/tournaments/youth-2026/girls-winner.jpg" },
        { name: "Gouri Nandha Dhanesh", result: "Runner-up", event: "Under 13 Girls",             group: "Girls", photo: "images/tournaments/youth-2026/u13-girls-runner-up.jpg" },
        { name: "Helen Susan Jenu",     result: "Runner-up", event: "Under 17 Girls",             group: "Girls", photo: "images/tournaments/youth-2026/u17-girls-runner-up.jpg" }
      ],
      note: "Double champion: Ahana Krishna won both the Under 13 and Under 17 girls' titles.",
      testimonialsLink: "coaching.html#testimonials",
      groupPhoto: "images/tournaments/youth-2026/prize-distribution.jpg",
      groupCaption: "Winners and runners-up with club members and coaches at the prize distribution."
    }
  ],

  /* ---------- Gallery ----------
     Upload photos to images/gallery/<album-folder>/ then list them here. */
  gallery: [
    { album: "Home Badminton Tournament 2026", date: "2026-11-01", photos: [
      "images/tournaments/home-2026/all-winners.jpg", "images/tournaments/home-2026/a-b-champions.jpg", "images/tournaments/home-2026/a-b-finalists.jpg", "images/tournaments/home-2026/a-b-winners.jpg",
      "images/tournaments/home-2026/c-d-winners.jpg", "images/tournaments/home-2026/c-d-runners-up.jpg", "images/tournaments/home-2026/best-player-award.jpg",
      "images/tournaments/home-2026/special-mention-award.jpg", "images/tournaments/home-2026/sibichen-award.jpg" ] },
    { album: "Youth Badminton Tournament 2026", date: "31 Oct – 1 Nov 2026", photos: [
      "images/tournaments/youth-2026/prize-distribution.jpg",
      "images/tournaments/youth-2026/u13-boys-winner.jpg",
      "images/tournaments/youth-2026/girls-winner.jpg",
      "images/tournaments/youth-2026/u17-boys-winner.jpg",
      "images/tournaments/youth-2026/u17-boys-runner-up.jpg",
      "images/tournaments/youth-2026/u17-girls-runner-up.jpg",
      "images/tournaments/youth-2026/u13-boys-runner-up.jpg" ] },
    { album: "The club", date: "", photos: [
      "images/club/courts-overhead.jpg", "images/club/courts-play-1.jpg", "images/club/courts-play-2.jpg",
      "images/club/clubhouse-front.jpg", "images/club/clubhouse-side.jpg", "images/club/covered-walkway.jpg",
      "images/club/walkway-gym.jpg", "images/club/approach-road.jpg" ] }
  ],

  /* ---------- Videos ----------
     Short clips: upload the .mp4 to videos/ and set file.
     Longer videos: put them on YouTube and paste the video ID in youtubeId. */
  videos: [
    { title: "Youth Tournament 2026", file: "videos/testimonials/t1.mp4", poster: "images/testimonials/t1.jpg" },
    { title: "Youth Tournament 2026", file: "videos/testimonials/t2.mp4", poster: "images/testimonials/t2.jpg" },
    { title: "Youth Tournament 2026", file: "videos/testimonials/t3.mp4", poster: "images/testimonials/t3.jpg" },
    { title: "Youth Tournament 2026", file: "videos/testimonials/t4.mp4", poster: "images/testimonials/t4.jpg" },
    { title: "Youth Tournament 2026", file: "videos/testimonials/t5.mp4", poster: "images/testimonials/t5.jpg" },
    { title: "Youth Tournament 2026", file: "videos/testimonials/t6.mp4", poster: "images/testimonials/t6.jpg" },
    { title: "Youth Tournament 2026", file: "videos/testimonials/t7.mp4", poster: "images/testimonials/t7.jpg" },
    { title: "Arriving at Central Club",   file: "videos/arriving-at-the-club.mp4", poster: "images/club/arriving-at-the-club-poster.jpg" },
    { title: "Walking into the courts",    file: "videos/walk-into-the-courts.mp4", poster: "images/club/walk-into-the-courts-poster.jpg" },
    { title: "An evening on court",        file: "videos/hero-courts.mp4",          poster: "images/club/hero-poster.jpg" }
  ]
};
