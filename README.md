# BE YOU

**A beautifully illustrated, local-first wellbeing journal.** Track moods, write privately, and explore guided reflection journeys in a minimalist black-and-ivory manga interface.

> **One application. One approved reference library.** The current runnable app is in [`app/`](app/). Approved image boards and original visual inspiration are in [`references/`](references/). There are no parallel app implementations, experimental art folders, or separate design-preview directories.

## Current app — screen gallery

These are screenshots from the UI refinement of the running prototype, preserved from the latest unified app ZIP. They are **not new captures after repository consolidation**.

| Welcome | Today | Mood Check-In |
|:--:|:--:|:--:|
| [![Welcome](app/screenshots/refined/welcome.webp)](app/screenshots/refined/welcome.webp) | [![Today](app/screenshots/refined/today.webp)](app/screenshots/refined/today.webp) | [![Mood](app/screenshots/refined/mood.webp)](app/screenshots/refined/mood.webp) |
| Journal | Heal & Grow | Journey Detail |
| [![Journal](app/screenshots/refined/journal.webp)](app/screenshots/refined/journal.webp) | [![Heal](app/screenshots/refined/heal.webp)](app/screenshots/refined/heal.webp) | [![Journey](app/screenshots/refined/journey-detail.webp)](app/screenshots/refined/journey-detail.webp) |
| Home | You | Breathing |
| [![Home](app/screenshots/refined/home.webp)](app/screenshots/refined/home.webp) | [![You](app/screenshots/refined/you.webp)](app/screenshots/refined/you.webp) | [![Breathing](app/screenshots/refined/breathe.webp)](app/screenshots/refined/breathe.webp) |

[Affirmations screenshot](app/screenshots/refined/affirmations.webp) · [App source and usage](app/README.md)

## Approved art direction

| Character sheet | Illustration library | Updated UI concept |
|:--:|:--:|:--:|
| [![Character](references/approved/01-character-sheet.png)](references/approved/01-character-sheet.png) | [![Illustrations](references/approved/02-illustration-library.png)](references/approved/02-illustration-library.png) | [![UI design](references/approved/03-updated-app-screens.png)](references/approved/03-updated-app-screens.png) |

[Original design inspiration](references/inspiration/00-original-visual-reference.jpg) · [Reference guide](references/README.md)

The **eight approved standalone illustrations** used at runtime live inside [`app/assets/approved/`](app/assets/approved/). The reference boards are visual guidance, not separate production-ready images.

## Deploy to GitHub Pages

GitHub Pages must be set to **GitHub Actions**, not **Deploy from a branch → /docs**. The old `docs/` publish source was removed during consolidation, which caused the Pages Jekyll build to fail.

1. Open **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
2. Open **Actions → Deploy BE YOU to GitHub Pages** and select **Run workflow** (branch `main`), or push a change to `app/`.
3. Watch the **Verify and publish app/** job. It runs `npm test` and publishes only the `app/` folder, so `app/index.html` becomes the site's home page. Reference images remain in the repo but are not deployed to the app site.

**Live URL after a successful deployment:** https://itsnotalwin.github.io/Be-you/

No separate `docs/`, `dist/`, or duplicate app directory is required. See [the deploy workflow](.github/workflows/deploy-pages.yml).

## Run locally

Requires **Node.js 18+**, with no third-party runtime packages.

```bash
cd app
npm start
```

Open [http://localhost:4173](http://localhost:4173). To verify the bundled app:

```bash
cd app
npm test
```

The prototype includes onboarding, daily moods and notes, private journal entries, four guided journeys, personal insights, affirmations, breathing, and PWA install/offline support. Browser data is stored **unencrypted in localStorage**, not synced to an account. Back up important writing and avoid shared devices; this is not medical care.

## Repository structure

```text
Be-you/
├── README.md              # Project overview and screenshots
├── .gitignore
├── app/                   # Only runnable PWA: source, assets, tests, refined screenshots
└── references/            # Approved character/UI boards and original inspiration
```

This branch is intentionally minimal. Older experiments and earlier UI captures remain accessible in Git history. **Not yet production-ready:** a served-browser/device installation pass, accessibility review and security/privacy audit are still required.
