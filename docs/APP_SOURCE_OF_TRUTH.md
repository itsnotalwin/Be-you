# BE YOU — Source of truth and releases

- The **only live application source** is [`../app/`](../app/).
- **Run:** `cd app && npm start` — open http://localhost:4173.
- **Verify:** `cd app && npm test` (also checked in GitHub Actions on pushes and pull requests).
- The complete runnable application includes `index.html`, CSS files, JS files, local assets, app icons, manifest and service worker. There are no runtime dependencies or external art-hosting requirements.
- Approved full illustration masters remain in [`../assets/illustrations/`](../assets/illustrations/) for provenance; optimized copies in `app/assets/approved/` are deliberately duplicated for a standalone runnable checkout.
- Current 10-screen UI captures are in [`../app/screenshots/refined/`](../app/screenshots/refined/); the composite gallery and art direction are in `docs/previews/` and `references/`.
- The old `pwa/` directory is only a redirect README. Do not create new runnable copies in root or other directories.
- **History:** prior implementation stages and refinements are available as Git commits. Future numbered releases should use Git tags and release notes, not parallel app folders.
- **Testing limits:** syntax and static file checks are automated. Visual screenshots were captured in an isolated browser review. A fully served-origin regression suite, offline/install checks on real devices, accessibility/security audits, and production hosting are still needed.
