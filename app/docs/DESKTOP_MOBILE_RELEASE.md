# BE YOU — Responsive PWA release · 2026-10-15

## What changed

- Replaced the desktop phone-frame presentation with a full-width application workspace.
- Added an accessible desktop navigation rail for Home, Today, Mood, Journal, Heal & Grow, Insights, Affirmations, Breathing, You and Settings; these use the existing real screen routes and persisted data.
- Kept the approved minimal manga visual identity and thumb-friendly mobile bottom navigation.
- Added tablet and landscape layouts, removed decorative fake device chrome, supported reduced motion, improved scroll areas and focus indicators.
- Updated the service worker cache to include the new responsive CSS and navigation code; offline failures no longer return HTML for missing artwork.
- Kept eight approved WebP illustrations and all existing data and privacy controls.

## Verified

- `npm test`: all source and functional smoke tests pass.
- Chromium isolated-render tests at 320 × 700, 390 × 844, 810 × 1100, 1024 × 768, 1440 × 900: no horizontal overflow or broken images.
- In-browser interactions checked: onboarding, mood save, journal save, guided reflection save, insights, and preferences.
- Two evidence screenshots are in `screenshots/release/`.

## Important limitations

The automated visual tests loaded the application's own CSS and JS into an isolated Chromium page because this execution environment blocks navigation to local/served URLs. The live production URL and device-specific service-worker installation were not tested by that method. Confirm actual iOS Safari, Android Chrome, desktop installability, offline reload, and accessibility before wider release.

Data remains device-local in unencrypted browser `localStorage`; it does not synchronize between PC and phone. Export backups before browser cleanup.