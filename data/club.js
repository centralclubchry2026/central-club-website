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
  founded: "[Year]",
  tagline: "Badminton, table tennis, carroms and good company, right here in Changanacherry.",
  address: "[Building / road], Changanacherry, Kerala [PIN]",
  phone: "[+91 00000 00000]",
  email: "info@centralclubchry.com",
  mapsUrl: "https://maps.google.com/?q=Central+Club+Changanacherry",

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
    "[Replace with the club's story. When did Central Club start, and who started it? What was Changanacherry like then, and why did the founders want a club?]",
    "[How has the club grown? New courts, the indoor hall, the first tournaments, and the players the club has produced who went on to district, state or national level.]",
    "[What the club stands for today: a place where families, working professionals and young players come together through sport, and give back through charity work.]"
  ],

  milestones: [
    { year: "[Year]", text: "Central Club founded by a group of friends in Changanacherry." },
    { year: "[Year]", text: "[First badminton court opened]" },
    { year: "[Year]", text: "[Michael's School of Badminton starts regular coaching]" },
    { year: "2026",   text: "Club website launched at centralclubchry.com." }
  ],

  founders: [
    { name: "[Founder name]", role: "Founding President", note: "[One line about their contribution]", photo: "" },
    { name: "[Founder name]", role: "Founding Secretary", note: "[One line about their contribution]", photo: "" },
    { name: "[Founder name]", role: "Founding Member",    note: "[One line about their contribution]", photo: "" }
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

  /* ---------- Results ---------- */
  results: [
    { tournament: "Home Badminton Tournament 2026", category: "Category A & B", winner: "[Winners]", runnerUp: "[Runners-up]" },
    { tournament: "Home Badminton Tournament 2026", category: "Category C & D", winner: "[Winners]", runnerUp: "[Runners-up]" }
  ],

  /* ---------- Gallery ----------
     Upload photos to images/gallery/<album-folder>/ then list the paths, e.g.
     photos: ["images/gallery/home-2026/final-1.jpg", "images/gallery/home-2026/final-2.jpg"] */
  gallery: [
    { album: "Home Badminton Tournament 2026", date: "Nov 2026", photos: [] },
    { album: "[Club day]",                     date: "[Date]",   photos: [] }
  ],

  /* ---------- Videos ----------
     Paste the YouTube video ID: the part after "watch?v=" in the link. */
  videos: [
    { title: "[Finals highlights]", youtubeId: "" }
  ]
};
