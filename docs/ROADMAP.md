# Production readiness / next milestones

**Phase 01 complete:** eight approved monochrome illustrations wired into a working, local-first HTML/CSS/JavaScript PWA prototype.

**Repository cleanup:** one canonical `app/`, linked approved visual references, screenshot gallery, smoke-test script. This is a *structural/design audit*, not a claim of commercial readiness.

## Next

- **Art variety:** new standalone wide scenes, full-body character poses, environments without characters, transparent botanical/koi motifs; approve each individually before shipping.
- **UI/UX:** real-device review against approved reference, revise small-text contrast, responsive safe areas, journey completion states, journal empty/list states and illustration crops.
- **Privacy/security:** move beyond unencrypted localStorage if supporting sensitive long-term journaling; data loss and shared-device access must be addressed. Add explicit privacy explanation and export reminders.
- **Accessibility:** keyboard, focus, WCAG contrast, screen-reader labels, reduced motion, logical headings and touch targets.
- **PWA:** HTTPS hosting, offline install/update lifecycle, iOS Safari and Android Chrome verification.
- **Release:** unit/integration/E2E tests, accessibility audit, performance budgets, handling incident/support copy and privacy policy before deployment.

No backend, authenticated accounts or cross-device sync are currently part of the working prototype.