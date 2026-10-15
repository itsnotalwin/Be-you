# Application folder context

**Purpose:** Sole runnable BE YOU desktop/mobile wellbeing PWA; localStorage privacy model and offline support.

**Key files:** `index.html` app shell; `functional.js` screen registry, actions and data; `ui-primitives.js` shared markup and approved-art mapping; `app.css` base styles; `responsive.css` responsive behavior and scoped Screen 04/05/06 styles; `sw.js` offline cache; `assets/approved/` original illustrations.

**Connections:** GitHub Pages serves this folder. `scripts/` tests cover core navigation and saved data. `docs/` owns approval and release notes.

**Change & verify:** Keep all art routed through `artwork()`, test `cd app && npm test`, check 320/390 px mobile and wide desktop, verify no horizontal overflow and confirm offline-cache version. Visual revisions require genuine rendered screenshots. As of the README-based restoration, the latest capture is still outstanding; earlier gallery captures are historical.

**README restored:** Keep only the original eight approved art assets mapped from `ui-primitives.js` (Volumes 01/02). Avoid unapproved faces, Volume 03 routes, duplicate implementations and secondary scene CSS. The user asked for the documented app, not additional art explorations.
