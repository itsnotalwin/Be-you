# BE YOU — Unified App

This directory is the **only runnable BE YOU application**. It is taken from the newest approved unified app ZIP, with earlier nonessential screenshot archives removed from the repository.

Run from this directory:

```bash
npm start
# http://localhost:4173
npm test
```

Node.js 18+ is required; no dependency installation is needed. `npm test` checks the asset and source integrity and runs the mood/journal/journey smoke tests.

## Runtime files

- `index.html` — entry point.
- `app.css` — **one** design-system stylesheet.
- `ui-primitives.js` — shared UI components and routing of approved images.
- `functional.js` — screen templates, local persistence, and interactions.
- `sw.js` and `manifest.webmanifest` — installable/offline PWA shell.
- `assets/approved/volume-01/` and `volume-02/` — **eight approved standalone manga illustrations**.
- `assets/icons/` and `assets/brand/` — icons and branding.
- `scripts/verify.mjs` and `scripts/smoke.mjs` — integrity tests.
- `screenshots/refined/` — ten UI screenshots from the prior refinement review; not freshly re-rendered.
- `docs/` — original product and technical notes bundled with the unified ZIP.

## Refined screen previews

| Today | Mood | Journal | Heal & Grow |
|:--:|:--:|:--:|:--:|
| ![Today](screenshots/refined/today.webp) | ![Mood](screenshots/refined/mood.webp) | ![Journal](screenshots/refined/journal.webp) | ![Heal](screenshots/refined/heal.webp) |

[Full screen gallery](../README.md) · [Approved design references](../references/README.md)

## State and limitations

The prototype uses browser **localStorage without encryption or cloud backup**. It has no account sync, device-to-device continuity or clinical interpretation. Browser cleanup can erase data. Please export backups and complete live-browser/offline/device/accessibility testing before public release.

The reference boards are stored only in `../references/`, rather than duplicated within the app. No second runnable app or unused `assets/manga/` placeholder folder is maintained.
