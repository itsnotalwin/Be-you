# Volume 03 — BE YOU Golden-Hour Sakura Full-App Migration

**Decision:** User-directed full app refactor using new original artwork (2026-10-15); implement in the existing runnable `app/` rather than create a parallel app.

## What changed

- All active illustration role keys now resolve to ten optimized `assets/approved/volume-03/*.webp` assets. Seven original generations and three derived crops; exact source generation IDs, roles, hashes and filenames in [`ASSET-MANIFEST.json`](../assets/approved/volume-03/ASSET-MANIFEST.json).
- New artwork-first screen designs for Today, Journal and Grow; mood selection/details and other destinations inherit a unified warm-charcoal/ivory/sepia design via `scene-v3.css`.
- Four real mobile tabs (Today, Journal, Grow, You) plus existing desktop sidebar remain navigable; journal quick-draft prefill flows into the existing full editor. Personal content still saves in browser localStorage, not synced/encrypted.
- Original artwork and face-sheet illustrations contain no flattened UI controls. Earlier volumes are preserved for provenance/history only, not used in runtime routes or the offline precache.

## Assets to create / maintain

- Hero portraits and identity variations for onboarding, Today, Mood, You (01–03, 08).
- Reflective writing scenes for Journal, entries and guided letters (04, 06, 10).
- Wide environmental journey art for breathing, releasing and travel (05, 07, 09).
- Two sheets: `FACE-SHEET.webp` for every derivative and `CHARACTER-FACE-SHEET.webp` for expression continuity.
- `ART-DIRECTION.md`, `ASSET-MANIFEST.json` (source IDs, roles, SHA-256).

## Test and release evidence

- Local `npm test` passed before source publish: verification and simulated journaling/mood/journey persistence. Browser tests covered 320px, 390px and 1440px widths, no observed horizontal overflow in the preview, and mood save/journal prefill/journal save.
- App root `SCREENSHOT.png` and mobile/desktop previews are actual Chromium renders of the **local updated preview implementation**, not generated art mockups. The final remote build should be independently verified after publishing; these captures do not prove a GitHub Pages deployment.
- Volume 03 textures and the sunset heroine were produced with image generation. Original prompt text/seeds are unavailable, not reconstructed. Exact IDs in the asset manifest.

## Follow-up

Verify GitHub Pages Actions release and runtime response, check offline after a service-worker update, inspect typography/cropping on iOS Safari and test keyboard/screen-reader navigation. Do not claim these unavailable checks passed.
