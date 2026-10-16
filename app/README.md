# BE YOU — one working PWA

**Current approved baseline:** [23-screen mockup collection](../references/approved/mockups-2026-10-15/README.md). The concepts are reference images. The actual app UI is implemented with semantic HTML, source CSS and real local data flows.

`npm start` serves the app at `http://localhost:4173`. `npm test` verifies the real routes and data flows (Node >=18; no runtime dependencies).

## Real app features

- Three onboarding scenes, image-led Today dashboard and a single reactive five-choice mood screen with optional context and save confirmation.
- Journal empty and populated states, write/read/edit/search/delete, all stored privately in this browser.
- Four guided reflection journeys with persistent progress, insights based on real check-ins, affirmations and timed breathing.
- Four mobile tabs (Today, Journal, Grow, You), desktop sidebar, appearance/accessibility settings, backup export/import and data deletion.
- Installable offline-capable PWA with the service-worker cache of eight original approved Volume 01/02 artworks plus five approved mood portraits.

Data is kept **unencrypted** in localStorage and never synced; export backups regularly. BE YOU is not medical care.

**Art status:** The five explicitly approved portraits are now live as distinct files under `assets/approved/moods/`. A tap swaps the mood art in the existing single portrait slot without modifying saved entries. Portrait images are displayed with `object-fit: contain` to preserve the entire face and hair. Their common source board is documented in `docs/MOOD_SELECTOR_2026-10-16.md`.

## Render evidence

`SCREENSHOT.png` and related captures are screenshots of a local Chromium execution of the actual app code, not the approved mockup renders. Phone captures: 390 × 844. Desktop example: 1280 × 800. Physical-device and deployed-site validation remain separate work.
Existing mood screenshots predate the new portrait mapping. **A new genuine mobile/desktop capture is still needed**. Concept art is not live-app evidence.
