# BE YOU — Project Agent Contract

This repository owns one working wellbeing PWA in `app/`. Follow `PROJECT.md` and the closest `CONTEXT.md` and `DESIGN.md` before modifying the application. Do not create second UI implementations or unapproved art variants.

Preserve approved manga artwork and the dark charcoal/ivory palette. Keep privacy statements accurate: data is saved to local browser storage, not encrypted or automatically synchronized. Prefer small incremental changes. On every change, run `cd app && npm test`; for UI, navigation or release changes also run `cd app && npm run test:browser` and review mobile, desktop and WebKit evidence. Capture genuine rendered evidence for visual changes. The Pages workflow must not deploy when either automated gate fails. Do not call generated mockups screenshots of the actual app.

Each maintained subfolder needs a concise `CONTEXT.md`. The visual application folder also needs `DESIGN.md` and a current real UI `SCREENSHOT.png`; missing screenshots are outstanding work, not evidence of completion. Track approvals in `app/docs/`. Use optimistic SHA updates and never force-push.

Pixel baselines in `app/tests/visual-baselines/` are actual running-browser captures. Review every unexpected Playwright expected/actual/diff image; **never auto-approve snapshots to bypass visual failures**. Snapshot changes require a reviewed PR, with screenshot evidence and matching docs. Deploy only the production PWA, excluding test dependencies, scripts and reference PNGs.
