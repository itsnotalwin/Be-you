# Real-browser verification (BE YOU)

The existing `npm test` checks integrity and simulated application flows. `npm run test:browser` adds genuine Chromium (320px, 390px, 1280px) and WebKit (393px) navigation, image loading, responsive layout, mood geometry and persistence tests. It does **not** change the approved UI or artwork.

```sh
cd app
npm install
npx playwright install --with-deps chromium webkit
npm test
npm run test:browser
PLAYWRIGHT_CAPTURE=1 npm run test:browser
```

The browser suite opens 21 direct screen routes, then the two data-dependent journal states. It captures real rendered screenshots into ephemeral Playwright result folders when `PLAYWRIGHT_CAPTURE=1`. It independently tests all five mood selections within **one** reactive route, confirming each approved file loads and its natural proportions survive rendering. Browser tests use an isolated synthetic localStorage profile, with no user information.

GitHub Actions runs original tests first, then four real browser viewport projects, uploads reports/screenshots even on failures and blocks Pages deployment on failure. A post-deploy Chromium smoke checks the published commit marker and the live mood selector.

**Evidence boundary:** This is not yet a reviewed pixel-diff baseline for the 23 concepts; screenshots must be inspected/approved before adding snapshot comparisons. WebKit is a Safari-engine approximation, not a physical iPhone test. Offline installation, native safe-area behaviour, screen-reader accessibility and security/privacy audits remain separate gates. Real screenshots checked into `app/SCREENSHOT*.png` are historical until deliberately updated from real current captures; CI artifacts do not silently replace them.