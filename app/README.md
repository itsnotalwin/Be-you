# BE YOU — Runnable PWA

[**Visual gallery, approved mockups, and repository guide →**](../README.md)

This is the **canonical implementation**. Run `npm start` and open <http://localhost:4173>. Node 18+; no installation or build step required.

Run `npm test` to verify the screen references, local artwork, web manifest and offline shell assets. For manual smoke checks, review mood save, journal create/edit/delete, journey progress, settings/data export and PWA install/offline on localhost or HTTPS.

Entry files: `index.html`, `ui-primitives.js` (components and artwork routing), `functional.js` (state and interactions), `styles.css` + `app.css` (design), `sw.js` (offline).

Eight approved standalone illustrations live under `assets/approved/volume-01/` and `volume-02/`. Two old environment scenes remain under `assets/manga/` as documented fallback art. Originals are in the root `assets/illustrations/` archive.

## Updated UI screenshots — complete 10-screen set

The screenshots below show our *current refined interface*, using the approved manga illustrations. Captured in the UI review harness at 780 × 1688; screenshots are visual references, not a replacement for running the app.

| Welcome | Today | Mood check-in |
|:--:|:--:|:--:|
| [![Welcome](screenshots/refined/welcome.webp)](screenshots/refined/welcome.webp) | [![Today](screenshots/refined/today.webp)](screenshots/refined/today.webp) | [![Mood](screenshots/refined/mood.webp)](screenshots/refined/mood.webp) |
| Journal | Heal & Grow | Journey detail |
| [![Journal](screenshots/refined/journal.webp)](screenshots/refined/journal.webp) | [![Heal](screenshots/refined/heal.webp)](screenshots/refined/heal.webp) | [![Journey detail](screenshots/refined/journey-detail.webp)](screenshots/refined/journey-detail.webp) |
| Home | You | Breathing |
| [![Home](screenshots/refined/home.webp)](screenshots/refined/home.webp) | [![You](screenshots/refined/you.webp)](screenshots/refined/you.webp) | [![Breathe](screenshots/refined/breathe.webp)](screenshots/refined/breathe.webp) |

[Affirmations screenshot](screenshots/refined/affirmations.webp) · [Main project gallery](../docs/previews/UI_REFINEMENT_GALLERY.webp) · [Original design mockups](../references/approved/03-updated-app-screens.png)

All application source files, icons, approved WebP illustrations, and brand imagery live under `app/`. Older implementations are preserved in Git history rather than duplicated as competing app directories.

**Privacy warning:** Mood and journal data are stored in unencrypted browser localStorage. There is no login or sync; data can be lost when browser storage is cleared, and shared-device access is possible. Export backups from Settings. This is not medical care or an emergency-support service.

**Stage:** reviewed prototype, not production-ready. See [UI parity](../docs/UI_PARITY.md), [technical limitations](../docs/ROADMAP.md) and [asset integration notes](docs/PHASE_01_ART_INTEGRATION.md).
