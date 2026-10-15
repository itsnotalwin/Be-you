# One repo, one app

- `app/` is the **only implementation**. Entry: `app/index.html`; server: `app/server.mjs`; state and interactions: `app/functional.js`.
- `app/ui-primitives.js` includes SVG primitives, shared artwork routing and onboarding.
- `app/styles.css` is foundational legacy stylesheet; `app/app.css` is the editorial refinement layer loaded after it. Keep changes scoped, don't rebuild a duplicate UI.
- `assets/illustrations/` stores the **approved reference masters** in two batches. `app/assets/approved/` holds runtime copies. Both copies are intentional: the masters are a review/provenance archive; the runtime copies allow static PWA hosting.
- `references/approved/` stores **style/character/screen boards**, not runtime assets.
- `references/inspiration/` holds a reference screenshot only; do not ship that image as in-app artwork.
- `docs/previews/` stores small derived screenshots for the GitHub landing page. They do not replace source files.
- `pwa/` is deliberately retired to eliminate duplicated app source; its README links here. Old content remains recoverable in Git history.

## Adding art

1. Generate artwork separately (no text/UI). Get human visual approval.
2. Save the named original under `assets/illustrations/volume-XX/`.
3. Export app-sized WebP into `app/assets/approved/volume-XX/`.
4. Update the `APPROVED_ART` map in `app/ui-primitives.js`; verify every logical image role resolves.
5. Add the new runtime file to `app/sw.js` precache and bump the cache name.
6. Run `cd app && npm test`, review in browser, capture a real screenshot, then update `docs/UI_PARITY.md` and root README gallery if needed.