# Central Club Changanacherry — website

Live at https://centralclubchry.com (hosted on Cloudflare Pages).

## How to update the site
Almost everything is in **one file: `data/club.js`**.

1. On GitHub, open `data/club.js` and click the pencil icon.
2. Change the text. Keep the "double quotes" and the commas exactly as in the examples.
3. Click **Commit changes**. The live site updates in about a minute.

If the page goes blank after an edit, a quote or comma is missing. Open the file's
History on GitHub and compare with the previous version.

| To do this | Edit this part of data/club.js |
|---|---|
| Post an announcement | `news` (add the newest at the top) |
| Show the LIVE banner | `live` → `active: true` and paste the YouTube link |
| Add a tournament and its results | `tournaments` (newest at the top; copy a whole block) |
| Add a member | upload photo to `images/members/`, then add a line to `members` |
| Add gallery photos | upload to `images/gallery/<album>/`, then list them in `gallery` |
| Add a video | short clips: upload to `videos/` and set `file`; long ones: YouTube ID in `youtubeId` |
| Change the home page photo | `heroImage` |

## Photos
- Resize to about 1600 px wide before uploading (members: square, about 600 px).
- File names: lowercase, no spaces, e.g. `images/members/arun-thomas.jpg`.
- Only publish members who have given consent. Never add phone numbers or home addresses.

## Security
`_headers` sets the security headers (Content-Security-Policy etc.). If you embed
something new from another site (e.g. a Google Map), that site must be added there.
