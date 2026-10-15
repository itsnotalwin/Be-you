# BE YOU — Screen 03 / Final onboarding

Status: **APPROVED** on 2026-10-15 (reviewed individual phone mockup).
Next review: **Screen 04 / Today**, not yet approved.

## Approved mobile composition

- Screen: third and final onboarding step, after "Understand your emotions."
- Art direction: black-ink manga illustration, warm ivory field, cherry blossom branches, expressive young adult with short dark hair and black top.
- Main title: **Grow at / your own pace.**
- Supporting copy (exact): **Small reflections. Kinder habits. A space to become more yourself, every day.**
- Top area: quiet status line; portrait illustration dominates roughly the upper 58% of the mobile canvas.
- Lower area: left-aligned serif title and plain copy, understated 3-dot step indicator with third dot active, black circular arrow button to enter Today, dark home indicator.
- No new visual flourishes or style changes without renewed approval.

## Current production implementation

- Runtime screen id: `onboard-grow` in `app/functional.js`.
- Illustration: `app/assets/approved/volume-02/04-hopeful-blooms.webp`, accessed through `artwork('welcome-grow')`.
- Presentation CSS: `app/app.css`, `app/responsive.css`.
- App entry: `app/index.html`.
- Navigation: the advance button points to `today`.
- Repository keeps **one runnable app in app/** and **one approved art library**. This document records the review state; it is not a second app implementation.

## Review control

Treat this screen's composition, text and manga art direction as approved; do not revise them while iterating on the remaining screens. Any later accessibility or device support fix should preserve this direction.

The separately generated `Be_You_Screen_03_Mockup.png` was the visual reviewed in chat. The original PNG bytes are not included in this markdown approval record.