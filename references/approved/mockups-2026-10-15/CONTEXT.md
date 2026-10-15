# Approved screen references — Context

Purpose: Canonical, user-approved, 23-screen visual specification and three boards for BE YOU. The PNGs are concepts; they are never passed off as actual screenshots of the running UI.

Key files: `README.md` maps each reference to the real route/state. `01_...` through `23_...` are individual phone mockups; `BOARD_01.jpg`–`BOARD_03.jpg` provide quick overview.

Connections: One running implementation in `../../../../app/`; its eight approved illustration assets remain `app/assets/approved/volume-01` and `volume-02`. `app/functional.js` and `app/responsive.css` render functional counterparts.

Change and verify: Do not change an approved mockup silently. For code revisions run `cd app && npm test`, browser tests and refresh real screenshots separately.