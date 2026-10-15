# Application folder context

**Purpose:** Sole runnable BE YOU desktop/mobile wellbeing PWA; localStorage privacy model and offline support.

**Key files:** `index.html` app shell; `functional.js` screen registry, actions and data; `ui-primitives.js` shared markup and approved-art mapping; `app.css` base styles; `responsive.css` responsive behavior and scoped Screen 04 styles; `sw.js` offline cache; `assets/approved/` original illustrations.

**Connections:** GitHub Pages serves this folder. `scripts/` tests cover core navigation and saved data. `docs/` owns approval and release notes.

**Change & verify:** Keep all art routed through `artwork()`, test `cd app && npm test`, check 320/390 px mobile and wide desktop, verify no horizontal overflow and confirm offline-cache version. Visual revisions require real rendered screenshots; current capture remains outstanding.
