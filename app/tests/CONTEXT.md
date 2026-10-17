# Browser tests context

Purpose: Real end-to-end browser and visual-geometry verification for the single BE YOU PWA. No second UI lives here.

Key file: `browser.spec.mjs` checks route rendering, art loading, interactive five-state mood portraits, persistence, responsive navigation and optional production smoke. Real viewport screenshots are CI artifacts, not edited or mock artwork.

Connections: `../playwright.config.mjs`, `../functional.js`, `../responsive.css`, `../assets/approved/` and `../../.github/workflows/deploy-pages.yml`.

Change and verify: From `app/`, run `npm run test:browser` with Chromium and WebKit installed. Screenshots and reports under `test-results/` and `playwright-report/` are generated and ignored; review captures before approving visual baselines. Tests use only isolated synthetic localStorage.