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
  address: "Ruby Nagar, Changanacherry, Kerala [PIN]",
  phone: "[+91 00000 00000]",
  email: "info@centralclubchry.com",
  mapsUrl: "https://maps.google.com/?q=Central+Club+Changanacherry",

  /* Home page background photo: a wide, empty court looks best. Leave "" to use the video panel instead. */
  heroImage: "images/club/hero-court.jpg",

  /* Home page video: short, muted, looping (used when heroImage is ""). */
  heroVideo: { file: "videos/hero-courts.mp4", poster: "images/club/hero-poster.jpg" },

  /* Photos of the club, shown on the home page and in the gallery. */
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
    { year: "[Year]", text: "[Michael's School of Badminton starts regular coaching]" },
    { year: "2026",   text: "Club website launched at centralclubchry.com." }
  ],

  /* The 17 founder members, as on the club's founders' plaque.
     Photos are from the Malayala Manorama feature of 27 December 2000. */
  founders: [
    { name: "Anil Mathew",           note: "Vaniapurackal",       photo: "images/founders/anil-mathew.jpg" },
    { name: "Babu Joseph",           note: "Kallukulam",          photo: "images/founders/babu-joseph.jpg" },
    { name: "Bobby Abraham",         note: "Manamel",             photo: "images/founders/bobby-abraham.jpg" },
    { name: "Georgekutty M. G.",     note: "Marattukulam",        photo: "" },
    { name: "Gigi Francis",          note: "Pulickal",            photo: "images/founders/gigi-francis.jpg" },
    { name: "Gigi James",            note: "Koduppanapolackal",   photo: "images/founders/gigi-james.jpg" },
    { name: "Gigen Thomas",          note: "Koippallil",          photo: "images/founders/gigen-thomas.jpg" },
    { name: "Jojo James",            note: "Koduppanapolackal",   photo: "images/founders/jojo-james.jpg" },
    { name: "P. F. Joseph",          note: "Pulickal",            photo: "images/founders/pf-joseph.jpg" },
    { name: "T. A. Kannan",          note: "Thirumalathazhchayil", photo: "images/founders/ta-kannan.jpg" },
    { name: "Mathew Kurian",         note: "Pottamkulam",         photo: "images/founders/mathew-kurian.jpg" },
    { name: "S. R. Nambi",           note: "Selvi Nivas",         photo: "images/founders/sr-nambi.jpg", role: "Patron" },
    { name: "Renjith Mathews",       note: "Karingada",           photo: "images/founders/renjith-mathews.jpg" },
    { name: "T. A. Reghu",           note: "Thirumalathazhchayil", photo: "images/founders/ta-reghu.jpg" },
    { name: "Santhosh Thomas",       note: "Perumpuzhakadavil",   photo: "images/founders/santhosh-thomas.jpg" },
    { name: "Satheesh Valiyaveedan", note: "",                    photo: "images/founders/satheesh-valiyaveedan.jpg" },
    { name: "Siby Scaria",           note: "Karimattom",          photo: "images/founders/siby-scaria.jpg" }
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
    { name: "[Name]", role: "President", photo: "" },
    { name: "[Name]", role: "Secretary", photo: "" },
    { name: "[Name]", role: "Treasurer", photo: "" },
    { name: "[Name]", role: "Manager",   photo: "" }
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
    intro: "Regular badminton coaching at Central Club for beginners and competitive players, from grip and footwork to match play.",
    coaches: [
      { name: "Michael Sebastian", role: "Chief Coach",     photo: "" },
      { name: "Nithin",            role: "Assistant Coach", photo: "" }
    ],
    batches: [
      { name: "Kids (beginners)", ages: "[Ages 7–12]",  days: "[Mon–Fri]",   time: "[5:00–6:00 PM]" },
      { name: "Juniors",          ages: "[Ages 12–17]", days: "[Mon–Fri]",   time: "[6:00–7:00 PM]" },
      { name: "Adults",           ages: "18+",          days: "[Sat & Sun]", time: "[6:30–8:00 AM]" }
    ],
    enquiry: "Call [+91 00000 00000] or email info@centralclubchry.com to book a trial session."
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
    { date: "2026-11-01", title: "Home Badminton Tournament 2026: finals played", text: "After a week of league matches from 25 October, the semi-finals and finals of both tournaments (Category A & B, Category C & D) were played on 1 November. Results are on the News page.", link: "" },
    { date: "2026-10-20", title: "League fixtures announced", text: "Pool league matches run from 25 to 31 October, 7 PM onwards on two courts.", link: "" },
    { date: "2026-10-01", title: "[Sample update]", text: "[Use this space for notices: holidays, court maintenance, meetings, new members.]", link: "" }
  ],

  /* ---------- Upcoming events ---------- */
  events: [
    { date: "[Dec 2026]", title: "[Youth tournament (U13 / U17)]", place: "Central Club courts" },
    { date: "[Jan 2027]", title: "[Annual general body meeting]",   place: "Club hall" }
  ],

  /* ---------- Tournaments and results (newest first) ----------
     The first tournament is shown as "Latest results" on the home page.
     For a new tournament, copy a whole { ... } block, paste it at the top, and edit it. */
  tournaments: [
    {
      name: "Youth Badminton Tournament 2026",
      date: "[Date]",
      venue: "Central Club, Changanacherry",
      categories: [
        { event: "Under 13 Boys Singles",  winner: "Arunendra S.",  winnerPhoto: "images/tournaments/youth-2026/u13-boys-winner.jpg",
          runnerUp: "Kailas D.",            runnerUpPhoto: "images/tournaments/youth-2026/u13-boys-runner-up.jpg" },
        { event: "Under 13 Girls Singles", winner: "Ahana Krishna", winnerPhoto: "images/tournaments/youth-2026/girls-winner.jpg",
          runnerUp: "Gouri Nandha Dhanesh", runnerUpPhoto: "" },
        { event: "Under 17 Boys Singles",  winner: "Aiben Joseph",  winnerPhoto: "images/tournaments/youth-2026/u17-boys-winner.jpg",
          runnerUp: "John Parambat Chako",  runnerUpPhoto: "images/tournaments/youth-2026/u17-boys-runner-up.jpg" },
        { event: "Under 17 Girls Singles", winner: "Ahana Krishna", winnerPhoto: "images/tournaments/youth-2026/girls-winner.jpg",
          runnerUp: "Helen Susan Jenu",     runnerUpPhoto: "images/tournaments/youth-2026/u17-girls-runner-up.jpg" }
      ],
      note: "Ahana Krishna won both the Under 13 and Under 17 girls' titles.",
      groupPhoto: "images/tournaments/youth-2026/prize-distribution.jpg",
      groupCaption: "Winners and runners-up with club members and coaches at the prize distribution."
    },
    {
      name: "Home Badminton Tournament 2026",
      date: "2026-11-01",
      venue: "Central Club, Changanacherry",
      categories: [
        { event: "Category A & B", winner: "[Winners]", winnerPhoto: "", runnerUp: "[Runners-up]", runnerUpPhoto: "" },
        { event: "Category C & D", winner: "[Winners]", winnerPhoto: "", runnerUp: "[Runners-up]", runnerUpPhoto: "" }
      ]
    }
  ],

  /* ---------- Gallery ----------
     Upload photos to images/gallery/<album-folder>/ then list them here. */
  gallery: [
    { album: "Youth Badminton Tournament 2026", date: "[Date]", photos: [
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
    { title: "Arriving at Central Club",   file: "videos/arriving-at-the-club.mp4", poster: "images/club/arriving-at-the-club-poster.jpg" },
    { title: "Walking into the courts",    file: "videos/walk-into-the-courts.mp4", poster: "images/club/walk-into-the-courts-poster.jpg" },
    { title: "An evening on court",        file: "videos/hero-courts.mp4",          poster: "images/club/hero-poster.jpg" }
  ]
};
