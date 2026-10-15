# BE YOU — Volume 03 Art Direction / Identity

Status: **active**, 2026-10-15. This is the new app illustration system. Volume 01 and 02 remain in Git history as prior art and must not be loaded by active screens or service-worker caches.

**Character anchor:** thoughtful young adult woman; dark loosely gathered hair, expressive eyes, dark floral garment; quiet, reflective postures. Each image was separately generated; exact face consistency cannot be guaranteed. The face sheet documents the range rather than claiming an identical master character model.

**Environment:** wooden veranda/window, sakura branches and falling petals, dusk lake, warm coastal reflections. **Color:** charcoal ink, ivory and muted golden sepia. Do not revert to monochrome neon or earlier black-and-white illustration role keys.

**Use:** images must stay free of UI text; responsive UI overlays come from CSS. Keep subjects out from behind controls when cropping. Preserve available source IDs and hashes in `ASSET-MANIFEST.json`. `FACE-SHEET.webp` is the visual catalog of all ten optimized assets; `CHARACTER-FACE-SHEET.webp` compares the five initial full-composition portraits. Derivative crops inherit their source generation IDs.

**Prompt limitations:** Original full model prompt text and reproducible seeds are not available in the asset output. Retain exact generated IDs and source artwork titles, and do not fabricate seed/prompt provenance.
