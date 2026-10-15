# BE YOU — Project

**Source:** `itsnotalwin/Be-you`, branch `main`.

**Objective:** Original minimal editorial manga, local-first wellbeing journal and installable desktop/mobile PWA.

**Entry point:** `app/index.html`; implementation in `app/functional.js`, `app/ui-primitives.js`; CSS in `app/app.css` and `app/responsive.css`.

**Approved illustrations:** `app/assets/approved/`. New screens must reuse this approved library unless new art is explicitly accepted.

**Run:** `cd app && npm start`. **Verify:** `cd app && npm test`. **Publish:** GitHub Actions deploys `app/` to [GitHub Pages](https://itsnotalwin.github.io/Be-you/).

**Design approval (2026-10-15):** Screen 03 onboarding and Screen 04 Today are approved. Screen 04 is implemented in the runtime code: large Travel Journal hero, subdued Letting Go card, check-in first, generous breathing room. Screen 05 is under visual review and must not be shipped before approval.

**Verification status:** Code pushed to `main`. Latest Pages build and actual browser screenshots must be verified; no claim that unconfirmed deploy is live. Current design notes are in `app/DESIGN.md`.
