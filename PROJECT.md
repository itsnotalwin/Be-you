# BE YOU — Project

**Source:** `itsnotalwin/Be-you`, branch `main`.

**Objective:** Original minimal editorial manga, local-first wellbeing journal and installable desktop/mobile PWA.

**Entry point:** `app/index.html`; implementation in `app/functional.js`, `app/ui-primitives.js`; CSS in `app/app.css` and `app/responsive.css`.

**Approved illustrations:** `app/assets/approved/`. New screens must reuse this approved library unless new art is explicitly accepted.

**Run:** `cd app && npm start`. **Verify:** `cd app && npm test`. **Publish:** GitHub Actions deploys `app/` to [GitHub Pages](https://itsnotalwin.github.io/Be-you/).

**Design approval (2026-10-15):** Screen 03 onboarding and Screen 04 Today are approved. Screen 04 is implemented in the runtime code: large Travel Journal hero, subdued Letting Go card, check-in first, generous breathing room. Screen 05 mood selection is also approved and implemented with a large illustration. Screen 06 mood details is also approved and implemented with an artwork-first optional details form. The user-directed global Volume 03 redesign supersedes prior scene styling.

**Verification status:** Code pushed to `main`. Latest Pages build and actual browser screenshots must be verified; no claim that unconfirmed deploy is live. Current design notes are in `app/DESIGN.md`.


## User-directed full-app Volume 03 refactor (2026-10-15)

**Current active direction:** Warm charcoal, ivory, sunset-sakura manga storytelling and very prominent original illustrations. `app/scene-v3.css` is the shared visual layer; all active `artwork()` roles in `app/ui-primitives.js` resolve exclusively to `app/assets/approved/volume-03/`.

**Implementation:** Refactored Today, Journal and Heal & Grow home experiences, updated typography, controls and four-tab mobile navigation. The prior screen-specific approval notes remain historical decisions; the user's global refactor takes precedence for current artwork. The older image files remain for history, never the active runtime or service-worker cache.

**Provenance:** [`app/assets/approved/volume-03/ASSET-MANIFEST.json`](app/assets/approved/volume-03/ASSET-MANIFEST.json) + two face sheets. See [`app/docs/VOLUME_03_FULL_APP_MIGRATION.md`](app/docs/VOLUME_03_FULL_APP_MIGRATION.md) for handoff and QA limits.
