# App design and release docs context

Purpose: Preserve approved design decisions, implementation notes and verification limitations without creating duplicate app source.

Key files: `APPROVED_23_SCREEN_BASELINE.md` is the current whole-app handoff; `MOOD_SELECTOR_2026-10-16.md` records the separately approved mood interaction and approved five-portrait generation ID and live mapping. `BROWSER_TESTING.md` documents browser verification, captured evidence, and outstanding visual-device gates. Prior `SCREEN_03_APPROVED.md`–`SCREEN_06_APPROVED.md` are historical; `DESKTOP_MOBILE_RELEASE.md` describes platform behavior.

Connections: Current 23-screen references under `../../references/approved/mockups-2026-10-15/`, real app in `../functional.js` and `../responsive.css`.

Change and verify: Record only actual user approvals; distinguish static mockups from real Chromium screenshots. `cd app && npm test`, `cd app && npm run test:browser`, and inspect live Pages workflow.