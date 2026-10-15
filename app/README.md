# BE YOU — Responsive PWA

This is the **actual installable app**, not a phone mockup or illustration board.
It works in modern desktop and mobile browsers from the same source.

## Run and test

```bash
npm start
# Open http://localhost:4173
npm test
```

No package install or backend is needed. Requires Node.js 18 or newer for the local preview server.

## Features

- Responsive desktop workspace with persistent navigation, phone layout with bottom tabs, and a tablet-friendly layout.
- Mood check-ins and optional notes, saved on this device.
- Private journal creation, search, edit and deletion.
- Four guided reflection journeys with saved progress.
- Insight charts calculated from recorded data, affirmations, breathing timer and appearance preferences.
- Export/import JSON backups, and erase stored data from Settings.
- Installable PWA with a manifest and a service worker that caches the interface and approved illustrations for offline use after first load.

## Deploy

GitHub Actions publishes the `app/` directory directly to GitHub Pages.
The repository is at https://github.com/itsnotalwin/Be-you.
The live URL is https://itsnotalwin.github.io/Be-you/.

## Important privacy and availability limits

The app stores entries **unencrypted in browser localStorage** on each device. They are not synchronized between your PC and phone. Clearing storage or changing browsers can delete entries; **export a backup** from Settings first. BE YOU does not provide medical or crisis support.

Chromium UI automation validates multiple screen sizes and major interactions; production verification should additionally cover real iOS Safari, Android Chrome, offline first-install behaviour, screen readers, and a privacy/security review.

## Files

- `index.html`, `app.css` — screen markup and editorial visual identity.
- `responsive.css`, `responsive-nav.js` — adaptive desktop, tablet and mobile workspace navigation.
- `functional.js`, `ui-primitives.js` — actual screen content, navigation, persistence and UI elements.
- `assets/approved/volume-03/` — ten new active images with provenance.
- `sw.js`, `manifest.webmanifest` — offline PWA installation files.
- `scripts/verify.mjs`, `scripts/smoke.mjs` — source and data-flow checks.

## Current illustrations — Volume 03 (2026-10-15)

All active screen artwork comes from `assets/approved/volume-03/`: ten optimized images based on seven new generations and three crops. Their source titles, generation IDs, hashes, roles and visual face sheets are in `ASSET-MANIFEST.json` and `ART-DIRECTION.md`. Earlier Volume 01 and 02 artworks remain as history; they are **not** referenced by the working app. The current scene design lives in `scene-v3.css`, with older `app.css`/`responsive.css` retained as structural layers. See `docs/VOLUME_03_FULL_APP_MIGRATION.md`.
