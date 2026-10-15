# Application folder context

**Purpose:** Sole runnable BE YOU desktop/mobile wellbeing PWA; localStorage privacy model and offline support.

**Key files:** `index.html` app shell; `functional.js` screen registry, actions and data; `ui-primitives.js` shared markup and approved-art mapping; `app.css` base styles; `responsive.css` responsive behavior and scoped Screen 04/05/06 styles; `sw.js` offline cache; `assets/approved/` original illustrations.

**Connections:** GitHub Pages serves this folder. `scripts/` tests cover core navigation and saved data. `docs/` owns approval and release notes.

**Change & verify:** Keep all art routed through `artwork()`, test `cd app && npm test`, check 320/390 px mobile and wide desktop, verify no horizontal overflow and confirm offline-cache version. Local Chromium screenshots document the Volume 03 preview; verify the production build independently.


**Volume 03 active layer:** `scene-v3.css` owns the current visual refactor. `assets/approved/volume-03/` is the only active illustration library; its manifest contains generation IDs and the face sheets. Four mobile tabs, existing desktop sidebar and browser-local data remain real controls. Current local browser captures live at `SCREENSHOT.png` and `SCREENSHOT-*.png`. Verify deployment independently after push.
