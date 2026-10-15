## Phase 01 — Approved manga artwork integrated (2026-10-15)

The existing local-first BE YOU PWA has been updated to display the eight **approved** standalone manga illustrations from [Volumes 01 and 02](https://github.com/itsnotalwin/Be-you/tree/main/assets/illustrations), replacing concept-board crops across primary onboarding, Today, and Heal & Grow surfaces.

- The routing manifest is `APPROVED_ART` in `ui-primitives.js` (shared with `functional.js`).
- Master approved PWA assets are in `assets/approved/volume-01/` and `assets/approved/volume-02/`.
- Old files in `assets/manga/` remain only as fallback for secondary surfaces not yet covered by the approved sets.
- The service worker cache is versioned and caches all approved images for offline use.
- Review screenshots in `screenshots/phase-01/`, with an overview at `screenshots/PHASE_01_CONTACT_SHEET.jpg`.
- Test steps, image role list, and limitations are in `docs/PHASE_01_ART_INTEGRATION.md`.

Open the preview by running `npm start` then visiting `http://localhost:4173`. For a specific screen, add `?screen=today`, `?screen=welcome`, `?screen=heal`, or `?screen=journey-detail` (journey detail defaults to Letting Go).

# BE YOU — WORKING APP, UI AND ILLUSTRATION PACKAGE

**Status:** runnable mobile-first PWA implementation — not just pictures or a click-through mockup. No backend, login, tracking, subscriptions, package installs or external APIs.

## See it running

1. Extract this ZIP.
2. In the extracted `BE_YOU_APP` folder, run `npm start` (Node.js 18+). No `npm install` needed.
3. Visit **http://localhost:4173** in a browser. On mobile, deploy the folder to HTTPS hosting to get PWA installation and service worker behavior.
4. You can also open `index.html` directly for a quick UI preview; proper offline installation requires localhost or HTTPS.

Windows: open the folder in a terminal and run `npm start`. macOS/Linux: same command.

## What is REAL and working

- Illustrated onboarding and Today/Home/You navigation.
- Mood check-ins: select a mood, influences, energy rating, optional note; save locally.
- Private journal: create, open/edit, search and delete entries. Empty states and real counts.
- Four guided journeys: Letting Go, Unsent Letter, Rethinking Loneliness, Travel Journal. Four individual writing prompts each, with locally saved progress and answers.
- Insights: actual seven-day check-in counts and mood distribution, not fake demo data.
- Affirmations: rotate, favourite, preserve favourites.
- Timed guided breathing exercise with start, pause, reset and reduced-motion support.
- Settings: light/dark appearance, larger text, reduced motion; export, import and delete all data.
- PWA install manifest, icons and offline cache (on secure origins or localhost).
- 21 verified PNG screenshots and one full contact sheet.
- 16 manga-style local image assets, plus original SVG/PNG koi and blossom emblem artwork.

## Privacy and limitations

All mood/journal/guide data is stored in this browser's **localStorage**, unencrypted. Other people using the same browser profile or device may be able to access it. No data is sent to a server. Storage may be cleared by the browser, so **export a backup regularly** from Settings. There is no cross-device sync. Imports replace existing local entries after confirmation. This is not a clinical or crisis-support service.

This version deliberately uses zero-dependency HTML, CSS and JavaScript so the UI is immediately runnable and editable. The earlier product specification mentions React/TypeScript/IndexedDB as a longer-term production target; those are **not** used in this implementation. If launching commercially, consider IndexedDB, stronger privacy safeguards, security and accessibility audits, cross-browser/iOS QA and proper deployment.

The manga assets in `assets/manga/` were produced from original AI-generated concept boards in the earlier design kit and then cropped/resized. They are suitable for a coherent prototype but **not all are native high-resolution illustration masters**. For commercial-scale large prints or full-bleed posters, commission/re-generate selected assets at higher resolution. New brand emblems are in `assets/brand/` as editable vector SVGs.

## Folder map

- `index.html`, `app.css`, `styles.css`: running interface and design system.
- `ui-primitives.js`: shared markup and retained reference layouts.
- `functional.js`: app routes, UI templates, local data, journeys, moods, interactions.
- `sw.js`, `manifest.webmanifest`, `assets/icons/`: PWA.
- `assets/manga/`: illustration library.
- `assets/brand/`: logo, custom koi/blossom vector art, system serif fallback.
- `screenshots/`: actual app screenshots taken at mobile dimensions, not AI collage.
- `reference/`: user-provided screenshot and newly generated art direction board.
- `docs/PRODUCT_DESIGN_SPEC.md`: original requested full product/design specification.
- `docs/IMPLEMENTATION_NOTES.md`: technical design and QA details.
- `docs/AGENT_HANDOFF.md`: instructions to extend/productionize the app.

## Deployment

Deploy the directory contents to a static HTTPS host. No build step is required. Verify that `manifest.webmanifest` and `sw.js` are served at the site root; hosting the app in a subdirectory also works if relative links and scope are kept aligned.

**No deployment has been performed.**