# Assets folder context

Purpose: Local static media owned by the sole BE YOU PWA; no external image CDN or data-sync service.

Key files: `approved/` stores reviewed illustrations; `brand/` holds original marks; `icons/` holds PWA icons. Asset paths appear in `ui-primitives.js`, `sw.js`, and `ASSET_INVENTORY.json`.

Connections: Served relative to `app/index.html` on GitHub Pages. Review all art against `references/approved/` and preserve existing local routes.

Change and verify: Maintain hashes and offline cache, use compressed formats, and do not rename existing assets without updating all references and tests.
