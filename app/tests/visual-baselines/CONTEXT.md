# Pixel snapshot context

Purpose: Contains **actual browser-generated candidate screenshots** used for pixel-level Playwright regression tests. They are not design mockups or alternative app assets.

Key files: `{projectName}-screen-*.png` captures the exact rendered viewport for 21 direct screens, populated journal states, and mood selections. `SCREENSHOT.png` is a genuine representative 390×844 Today screenshot, copied from its actual Playwright capture after generation.

Connections: `../visual.spec.mjs` defines fixtures/captures; `../../playwright.config.mjs` sets snapshot filenames, browser widths and locale. `DESIGN.md` states visual intent and capture metadata.

Change & verify: Never blindly refresh PNGs to make tests green. Generate only on a dedicated review branch, inspect actual/baseline/diff images, approve intentional visual changes, then commit refreshed screenshots. Never include real personal data.