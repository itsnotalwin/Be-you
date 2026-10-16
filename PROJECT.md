# BE YOU — Project

**Source:** `itsnotalwin/Be-you` (`main`) · **App:** `app/` · **Live:** https://itsnotalwin.github.io/Be-you/

**Current user-approved design baseline (2026-10-16):** All 23 phone screen mockups at [`references/approved/mockups-2026-10-15/README.md`](references/approved/mockups-2026-10-15/README.md), based exclusively on eight original approved manga art assets. Earlier narrower screen approvals remain in git history, superseded as a whole by this explicitly approved collection.

**One app, no forks:** Local-first, installable PWA. Routes and persistence in `app/functional.js`, art registry/nav in `app/ui-primitives.js`, visual styling in `app/app.css` + `app/responsive.css`. Four mobile tabs: Today, Journal, Grow, You. Desktop has its existing sidebar. `README.md` shows the design references and separately labels real local browser captures.

**Flows:** Onboarding; Today; mood selection, details and saved confirmation; journal empty/populated, new/view/edit/delete/search; four guided journeys; dynamic insights; affirmations and breathing; You and settings; offline/install. Records stored in unencrypted localStorage; no sync/account. Export/import remains functional.

**Build standards:** `AGENTS.md`, nearest `CONTEXT.md` and `DESIGN.md` accompany maintained visual folders. `app/SCREENSHOT.png` and mobile/desktop variants are genuine test-browser evidence, **not** mockup images. Update after visual changes.

**Run:** `cd app && npm start` · **Test:** `cd app && npm test` · **Publish:** GitHub Actions; check run status before declaring deployment done. Native device, accessibility and privacy/security review still required.

**Mood screen decision (2026-10-16):** The newly approved five-card control is implemented as state changes within one `mood` route. The five portraits from the approved 2026-10-16 mood board now ship from `app/assets/approved/moods/` and update in place when the user taps a mood. Other screens retain the original eight approved illustrations. See `app/docs/MOOD_SELECTOR_2026-10-16.md`. Real updated UI screenshots remain outstanding.
