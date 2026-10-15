# Phase 01 — visual integration handoff

## Goal
Replace unapproved placeholder illustrations with the eight approved BE YOU Volume 01/02 originals while preserving all existing PWA functionality, copy and privacy behaviour.

## Approved image routing

| Approved image | PWA surfaces |
| --- | --- |
| `volume-01/01-contemplative-koi-and-sakura.webp` | Splash / welcome hero; install artwork |
| `volume-01/02-koi-and-blossom-reverie.webp` | Profile, insights, additional reflection portrait |
| `volume-01/03-unsent-letter.webp` | Unsent Letter, journal |
| `volume-01/04-letting-go.webp` | Letting Go journey and saved-check-in success |
| `volume-02/01-travel-journal.webp` | Travel Journal tile and details |
| `volume-02/02-rethinking-loneliness.webp` | Onboarding, Rethinking Loneliness, empty journal |
| `volume-02/03-calm-koi.webp` | Mood and breathing / affirmations |
| `volume-02/04-hopeful-blooms.webp` | Second onboarding panel and botanical backdrop |

## QA checklist

1. Open `?screen=welcome`, advance through both onboarding panels. Images must be present and scaled without distortion.
2. Open `?screen=today` and confirm each of the four journey cards contains a distinct approved image.
3. Click all journey cards; inspect art on the detail and exercise views.
4. Complete a mood check-in. Verify it is saved and insights reflect the entry.
5. Create and reopen a journal entry; ensure local storage continues to work.
6. Test the image files with service worker caching enabled and then offline.
7. Verify at 320px, 360px, 390px, 430px screen widths; ensure no lateral overflow.

## Asset provenance and limitations

- Approved images were generated during BE YOU's art-direction review and explicitly approved by the project owner.
- All images are 1122 × 1402 WebP at their current resolution; they are **not** layered/vector masters.
- The app remains a **local-first functional PWA prototype**, not a tested production deployment.
- Secondary screens may still contain old images where approved replacements do not yet exist (for example the night-city illustration).
- Avoid stamping UI text into art; headings and buttons are real DOM elements.
- Keep originals in the repository. Future images should have new filenames and undergo approval before replacement.