# Application folder context

Purpose: Sole installable local-first BE YOU PWA for mobile/desktop, with real mood, journal, guided journey, insight and personal-space flows.

Key files: `index.html` entry; `functional.js` authoritative routing and localStorage persistence; `ui-primitives.js` approved art roles and four-tab mobile nav; `app.css` base and `responsive.css` final 23-screen styling; `sw.js` cache. `assets/approved/` has eight approved illustrations; `screenshots/refined/` is historical.

Connections: Reference targets are in `../references/approved/mockups-2026-10-15/`; `scripts/` tests; GitHub Actions deploys exactly `app/`.

Change and verify: `cd app && npm test`, real Chromium mobile and desktop, verify images and navigation, confirm Pages Actions completion, and capture fresh screenshots after visual changes. Stored user data is unencrypted and device-local; preserve keys and export/import format.