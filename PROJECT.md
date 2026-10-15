# BE YOU — Project

**Source:** `itsnotalwin/Be-you`, branch `main`.

**Objective:** Original minimal editorial manga, local-first wellbeing journal and installable desktop/mobile PWA.

**Entry point:** `app/index.html`; implementation in `app/functional.js`, `app/ui-primitives.js`; CSS in `app/app.css` and `app/responsive.css`.

**Approved illustrations:** `app/assets/approved/`. New screens must reuse this approved library unless new art is explicitly accepted.

**Run:** `cd app && npm start`. **Verify:** `cd app && npm test`. **Publish:** GitHub Actions deploys `app/` to [GitHub Pages](https://itsnotalwin.github.io/Be-you/).

**Design approval (2026-10-15):** Screen 03 onboarding and Screen 04 Today are approved. Screen 04 is implemented in the runtime code: large Travel Journal hero, subdued Letting Go card, check-in first, generous breathing room. Screen 05 mood selection is also approved and implemented with a large illustration. Screen 06 mood details is also approved and implemented with an artwork-first optional details form. Screen 07 Journal awaits design review.

**Verification status:** Code pushed to `main`. Latest Pages build and actual browser screenshots must be verified; no claim that unconfirmed deploy is live. Current design notes are in `app/DESIGN.md`.


## README-conformance restoration (2026-10-15)

**Decision:** The repository-root `README.md` is the canonical product brief. At the user's direction, the Volume 03 sunset-sakura redesign, experimental faces, new art variants and separate scene override have been removed from the current branch, restoring the previously working README-aligned app. This is an intentional forward commit, not a force-reset; the discontinued work remains available in Git history.

**Runtime:** Exactly one PWA in `app/`, original black-and-ivory manga palette, eight approved standalone illustrations in Volumes 01/02, and visual guidance under `references/`. The pre-existing check-in, journal, journeys, insights, breathing, backup and offline flows are preserved. No duplicate app, Volume 03 runtime routes or active asset mapping.

**Quality:** GitHub Actions executes `cd app && npm test` before deploying the `app/` folder. Genuine screenshots of this exact restored revision and a physical-device accessibility/privacy pass remain outstanding until independently verified. Don't mark them complete based on the historical gallery.
