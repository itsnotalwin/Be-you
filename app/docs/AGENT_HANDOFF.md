# Coding agent handoff — continue this WORKING application

## Do not start from scratch
This ZIP has runnable pages, original image assets, persistent data flows, a working PWA shell and verified screenshots. Examine and run the existing application before proposing a rewrite. Prioritize fidelity to `screenshots/` and the user-provided `reference/original_reference.jpg`.

1. Run `npm start`, open localhost:4173, and inspect all paths (initial onboarding, Today, Mood, Journal, Heal & Grow, insights, You, Settings).
2. Review source: `functional.js` contains the actual app and state; `ui-primitives.js` holds shared visual primitives and old base layouts; `app.css` extends the reference CSS. Do not accidentally regress working behavior or replace UI with a collage.
3. Audit keyboard, screen-reader behavior, 320px and 430px responsive viewports, and dark/light theme.
4. For a full production refactor, migrate into Vite + React + TypeScript, IndexedDB, robust tests and an explicit versioned import/export schema while preserving art and established layouts. Do not port until visual quality and behavior have been captured in regression screenshots.
5. Never fabricate user insights or use external analytics. Respect privacy as the first-class product principle. Retain user confirmation for destructive operations.
6. Only ship/merge/deploy after the owner approves. Keep changes on a feature branch, include screenshots, test reports and remaining limitations.

Images: `assets/manga/` has 16 local concept-origin WebPs; `assets/brand/koi-botanical.svg` and `flower-line.svg` are new editable SVG illustrations. Reference the individual assets, not screenshots or the AI board, in the running UI.
