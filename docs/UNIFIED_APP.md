# BE YOU — Unified actual application

Date: 15 October 2026

## What was changed

- Removed **18 non-functional static mockup templates** from `app/ui-primitives.js`. All screen destinations now live in `app/functional.js` (including welcome + onboarding).
- Consolidated `styles.css`, `app.css`, and `refinement.css` in cascade order into **`app/app.css`**; retired the two redundant CSS files. This preserves the approved dark/ivory mockup styling.
- Removed the two legacy concept-origin `assets/manga/` fallback images from the actual runtime. Empty journal and offline pages now use **approved** illustrations. The `APPROVED_ART` role map continues to support all screen placements.
- Updated service worker cache to `be-you-v2-unified-app`. No change to persisted data storage key, data format, settings or previously saved user content.
- Tightened `npm test` to verify all artwork and app wiring and execute a zero-dependency smoke test of every actual screen plus mood, journal and guided-journey saves.

## Source of truth

`app/` is the **single runnable PWA**. `app/functional.js` owns all working screens and interactions, `app/ui-primitives.js` the shared visual language and image role map, and `app/app.css` the complete stylesheet. The `references/` directory contains aesthetic inspiration, not runtime components. Screenshot gallery is for review only.

## Verification

- `node --check app/ui-primitives.js` and `node --check app/functional.js`: passed.
- `cd app && npm test`: source assets, 21 actual destinations, and saved mood/journal/journey smoke checks passed.
- HTTP static shell served correctly on `localhost:4173` (HTTP 200).
- The browser runner reported `ERR_BLOCKED_BY_ADMINISTRATOR` on even blank and localhost pages, preventing fresh visual or real-browser interaction captures. This is a **test-environment restriction, not evidence of a product failure**, and a live-browser review remains necessary.

## Visual acceptance checklist (still pending real-device verification)

1. Compare Today’s four journey cards to the original three-screen concept.
2. Review cropped portraits, reading contrast and bottom nav on 320, 360, 390 and 430 px viewports.
3. Check saved check-in, journal edit/delete, journey progress, data export, offline caching and install prompts in Chrome/Safari.
4. Check keyboard-only traversal, VoiceOver/TalkBack and reduced-motion appearance.

## Privacy note

The app uses unencrypted browser `localStorage`; shared-device access and local data loss are possible. Export backups regularly. This is a personal-reflection app, not medical care.