# Mood selector — Screen 05, 2026-10-16

**Decision:** Keep the redesigned rounded five-card controls and pastel selected-state accents, but do not ship the recent wrong-face images. This remains **one mood-selection screen** with five interactive states, not five routes or panels.

**Implementation:** On `?screen=mood`, tapping Good, Calm, Okay, Anxious or Low immediately updates exactly one selected button (`aria-pressed`), a restrained mood color, and a short live-announced supportive description without re-rendering the page or saving unfinished input. Continue opens the existing `mood-details` view; Save persists the same selected mood using the existing localStorage schema.

**Artwork lock:** All five states use only the existing `journey-letting-go` hero. `moodPortraitRoles` is ready for future approved mapping but intentionally does not switch art yet. New variants require the canonical `references/approved/01-character-sheet.png`, recognizable consistent facial features, visibly different pose/prop/angle, **full face and complete hair in viewport crops**, an explicit user sign-off, and corresponding registry/cache/tests/docs updates.

**Evidence:** `npm test` checks that the five choices are states of one page and do not change artwork. New genuine rendered mobile and desktop captures plus live PWA/device verification remain outstanding; older screenshots and generated concepts are not implementation evidence.
