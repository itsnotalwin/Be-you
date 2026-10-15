# Contributing to BE YOU

All work follows the approved black-and-ivory direction.

1. **Edit only `app/` for functional UI changes.** Do not recreate `pwa/` or store binaries in Markdown.
2. Check visual changes against [`docs/UI_PARITY.md`](docs/UI_PARITY.md) and the reference boards. Use real screenshots of the running app to document review.
3. Save illustration originals in `assets/illustrations/volume-XX/` with descriptive lowercase hyphenated names. Only approved and web-optimized derivatives belong in `app/assets/approved/`. Update image routing, precache list and asset inventory.
4. Never add copied manga scans, social-media art, or images without suitable usage rights. The original inspiration is a reference, not a commercial source asset.
5. Run `cd app && npm test`; manually smoke-test mood save, journal create/edit, guided journeys, themes and offline mode. For a production launch, test on real devices and conduct an accessibility/privacy review.
6. Use meaningful commits and avoid changing the approved reference artwork silently.

Avoid a hardcoded screenshot masquerading as UI: controls, labels and copy must remain accessible DOM elements.