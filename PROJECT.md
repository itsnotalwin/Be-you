# BE YOU — Project

**Source:** `itsnotalwin/Be-you` (`main`) · **App:** `app/` · **Live:** https://itsnotalwin.github.io/Be-you/

**Current user-approved design baseline (2026-10-16):** All 23 phone screen mockups at [`references/approved/mockups-2026-10-15/README.md`](references/approved/mockups-2026-10-15/README.md), based exclusively on eight original approved manga art assets. Earlier narrower screen approvals remain in git history, superseded as a whole by this explicitly approved collection.

**One app, no forks:** Local-first, installable PWA. Routes and persistence in `app/functional.js`, art registry/nav in `app/ui-primitives.js`, visual styling in `app/app.css` + `app/responsive.css`. Four mobile tabs: Today, Journal, Grow, You. Desktop has its existing sidebar. `README.md` shows the design references and separately labels real local browser captures.

**Flows:** Onboarding; Today; mood selection, details and saved confirmation; journal empty/populated, new/view/edit/delete/search; four guided journeys; dynamic insights; affirmations and breathing; You and settings; offline/install. Records stored in unencrypted localStorage; no sync/account. Export/import remains functional.

**Build standards:** `AGENTS.md`, nearest `CONTEXT.md` and `DESIGN.md` accompany maintained visual folders. `app/SCREENSHOT.png` and mobile/desktop variants are genuine test-browser evidence, **not** mockup images. Update after visual changes.

**Run:** `cd app && npm start` · **Test:** `cd app && npm test` · **Publish:** GitHub Actions; check run status before declaring deployment done. Native device, accessibility and privacy/security review still required.

**Mood screen decision (2026-10-16):** The newly approved five-card control is implemented as state changes within one `mood` route. The five portraits from the approved 2026-10-16 mood board now ship from `app/assets/approved/moods/` and update in place when the user taps a mood. Other screens retain the original eight approved illustrations. See `app/docs/MOOD_SELECTOR_2026-10-16.md`. Real updated UI screenshots remain outstanding.

**Mood art frame adjustment (2026-10-16):** The reactive five-portrait mood selector now uses a natural-aspect portrait frame in `app/responsive.css` instead of a forced square/wide art box. Each already-approved WebP fills its own frame edge-to-edge, without clipping or stretching. See `app/docs/MOOD_SELECTOR_2026-10-16.md`. Fresh running-app mobile/desktop screenshots, device checks and CI confirmation remain outstanding for this latest change.

**Real-browser CI gate (2026-10-17):** Playwright tests live in `app/tests/` and run with the existing `npm test` before Pages publishing: 21 screen routes plus populated-journal states, five mood image fit/interaction assertions, isolated persistence checks and 320/390/1280 Chromium + 393 WebKit layouts. Workflow uploads genuine browser captures, verifies a release SHA after deploy and does not deploy on failed pre-release gates. Physical devices, pixel-diff baselines and reviewed refreshed `SCREENSHOT*.png` remain outstanding. See `app/docs/BROWSER_TESTING.md`.

**Pixel snapshot project (2026-10-17):** `app/tests/visual.spec.mjs` protects the 23 canonical 390px screen states, ten mood portrait/control frames and representative 320px, desktop and WebKit responsive views with fixed-date deterministic snapshots. Initial reference PNGs are generated from the running app on a dedicated QA pull-request branch; user visual review and PR merge are the approval gate. Test PNGs are not deployed to production. See `app/docs/BROWSER_TESTING.md`.
