# Approved mood portraits

Purpose: Five user-approved independent emotion images for **one** dynamic mood-selection screen, never five routes.

Key files: `01-good.webp`, `02-calm.webp`, `03-okay.webp`, `04-anxious.webp`, `05-low.webp`.

Connections: These derive from approved board generation `5b7c3f3f-9541-42ea-841b-53dbdf0ea30a`; they are mapped in `../../../ui-primitives.js`, rendered in `../../../functional.js`, fitted in `../../../responsive.css` and cached by `../../../sw.js`.

Change and verify: Never crop face/hair in the hero; keep a one-to-one mood mapping, correct alt text and image hashes. Run `cd app && npm test`. Genuine updated running screenshot is **outstanding**, not a generated concept.
