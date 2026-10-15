# UI parity review — BE YOU

**Approved master reference:** [`references/approved/03-updated-app-screens.png`](../references/approved/03-updated-app-screens.png), plus the original [three-screen inspiration](../references/inspiration/00-original-visual-reference.jpg).
**Implemented gallery:** [`docs/previews/`](previews/) — captured during the Phase 01 app review; *these are real UI screenshots*, not concepts.

**15 October UI refinement:** [review the refreshed gallery](previews/UI_REFINEMENT_GALLERY.webp) and [the specific changes and QA](UI_REFINEMENT.md). The table below is a directional alignment review, not a pixel-diff report.

The goal is **faithful visual language**, not literal reproduction of concept-board text, fake mood metrics or ornamental status bars.

| Surface | Target from approved references | Current Phase 01 implementation | Review |
| --- | --- | --- | --- |
| Welcome | Dominant original ink portrait on ivory, black lower panel, discreet serif “Be You” | The approved koi portrait fills the art area; typography and navigation remain separate UI | **Aligned** |
| Onboarding | Quiet, human-centered art and brief readable explanatory copy | Separate art panel, live text and progress indicators | **Aligned** |
| Today | Oversized serif weekday; short prompt card; 2×2 guided journey art grid; bottom navigation | Same visual hierarchy with live weekday/date and four distinct approved images | **Aligned**, with dynamic date |
| Mood check-in | Simple graphic emotional UI, dark charcoal, one clear action | Large headline, approved illustrated strip, five accessible mood choices, optional note and influences | **Aligned**, more input detail |
| Journal | Typography first, minimal thumbnails, private reflection list | Empty state or real saved entries; search and editor implemented | **Aligned**; concept filler omitted |
| Heal & Grow | Illustrated journey cards and simple primary button | Four editorial rows/detail page with progress and real guided prompts | **Aligned**; journeys are functional |
| Insights | Calm mood summaries, no overwhelming charts | Entries-derived charts and counts, not fake sample distributions | **Aligned**; empty state depends on data |
| Profile / You | Illustrated protagonist with settings and personal space | Approved portrait, saved entry counts and settings navigation | **Aligned** |

## Visual specification

- **Primary background:** `#1A1D22` · **secondary surface:** `#282E34` · **artwork paper:** `#E5E2DD` · **text:** warm ivory.
- **Typography:** restrained high-contrast serif headings with legible system sans UI text (Georgia fallback). All text is actual HTML; no baked-in type inside art.
- **Artwork:** eight approved black-and-ivory WebP illustrations. Keep subject recognizable, clean silhouettes, generous white space.
- **Spacing:** center one mobile column, clear 2-column journey grid, no sideways scroll, fixed three-tab bottom nav.
- **Responsive targets:** 320, 360, 390 and 430 CSS pixel widths; fresh browser screenshots must be reviewed on each major UI change.

## Remaining gaps to track (not grounds for false “pixel-perfect” claims)

1. The generated approved concept has some copy, labels and ornamental icons that are **not** implemented verbatim; screen layout/content varies with actual user data and viewport.
2. Two legacy environment images (`cat-window.webp`, `city-night.webp`) remain fallback art for secondary screens until replacement assets are approved.
3. The newer refinement gallery was rendered from the actual app components and styles using an isolated browser DOM harness; full HTTP-origin capture and real-device verification are still outstanding. Older screen tiles remain available as historical reference.
4. Validate small-screen font legibility, safe areas, VoiceOver/TalkBack, colour contrast and native PWA installation on actual phones before calling it production-ready.

Future changes should be reviewed visually against **both** the approved reference board and a fresh capture of the running code before approval.