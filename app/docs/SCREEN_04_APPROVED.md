# Screen 04 — Today Dashboard

**Decision:** APPROVED / LOCKED (2026-10-15). The user selected the revised, more spacious and art-led dashboard after rejecting the crowded four-image composition.

## Approved experience

- Retain current charcoal/ivory palette, serif-led typography, original black-and-white manga character artwork and quiet tone.
- Clear hierarchy: large weekday header and dynamic date, a single quick mood check-in, then **Gentle Beginnings / Heal & Grow**.
- Make the **Travel Journal** illustration dominant: full-width visual hero, followed by a large elegant title and brief supporting copy.
- Present **Letting Go** as one restrained image-and-text horizontal card; give every block comfortable vertical and horizontal spacing.
- No cluttered four-card grid above the fold; other guided journeys are accessible through a quiet **Explore all journeys** link.
- Keep functional, accessible routes: mood check-in opens mood; travel and letting-go open their genuine guided journeys; all journeys opens Heal & Grow; desktop and mobile nav remain functional.
- The image approved in chat was a concept. The production implementation uses existing **approved art** through `artwork('journey-travel')` and `artwork('journey-letting-go')`, not a raster UI mockup embedded in the page.

## Changed runtime

- `app/functional.js` — `screens.today` implementation.
- `app/responsive.css` — scoped `.today-v2` styling, including mobile, desktop, light mode and reduced motion.
- `app/sw.js` — versioned cache refresh.

## Current verification limit

Source is committed to the `main` branch. Actual deployed Pages content and fresh genuine running-UI screenshots need independent confirmation. Screen 05 is now approved and published to source; see `SCREEN_05_APPROVED.md`. Screen 06 remains pending.
