# BE YOU — COMPLETE PRODUCT, DESIGN & PWA SPECIFICATION

**Document version:** 1.0 | **Status:** agent-ready implementation specification  
**Reference:** `../assets/REFERENCE_SCREENSHOT.jpg` | **App:** Be You (working title)

---

## 01 — Product vision

**Positioning:** A private, beautiful emotional check-in and self-motivation companion. People spend 30–60 seconds naming how they feel, optionally reflecting, and finding one small, relevant, achievable action. Over time they can see patterns without being judged by an algorithm.

**Promise:** “Make space for how you feel. Find your next small step.”

**Emotional qualities:** quiet, intimate, candid, non-clinical, protective, introspective, artistic, reassuring without being sugary. The app must treat difficult moods as valid information—not problems to automatically optimize away.

**Primary jobs to be done:**
1. Name my present mood in under 45 seconds.
2. Understand what may be influencing it, without making false causal claims.
3. Record optional, private notes or guided reflections.
4. Find a short exercise suited to the selected mood/need.
5. Review patterns across days/weeks in a non-judgmental way.
6. Open small self-guided journeys about letting go, loneliness, self-trust, and growth.

**Audience:** adults who want reflective self-care, not clinical treatment. Use inclusive and gender-neutral UI language despite illustrated characters sometimes being feminine.

**Non-goals for MVP:** clinical diagnosis, suicide-risk prediction, therapy claims, social network, mandatory accounts, AI-generated counselling, chatbot impersonating a therapist, personalized medical advice, achievements/leaderboards, paywalls, remote sync, push notifications.

**Core design invariant:** Every main screen should feel like a page in a beautiful ink-drawn personal journal.

---

## 02 — Reference image audit (what to preserve)

Reference consists of three tall phone compositions set against a charcoal editorial backdrop:

1. **Onboarding:** huge warm-ivory ink illustration featuring a dark-haired original manga-style woman and organic hands/gestures. Bottom dark zone with “Be You” in large serif, a small reassuring subheading, discreet pagination dots, ivory circular arrow button.
2. **Today:** nearly-black surface, expressive serif weekday headline, quiet ellipsis, subtle elevated suggestion module, “Heal & Grow” title and quiet description, two-column art-first editorial cards (Travel Journal / Unsent Letter / Rethinking Loneliness / Letting Go), then “Love yourself” below the fold, bottom three-item navigation.
3. **Journey detail:** simple back-button header with category title, tall ivory illustrated panel; inset dark overlay at bottom containing “Letting Go”, a subtitle and ivory rectangular CTA; “Resources” beneath, with iconographic article row and persistent bottom navigation.

**Preserve:** near-monochrome ink/ivory, serif+sans hierarchy, dramatically cropped portrait imagery, low-contrast dark panels, generous outside gutters, intentional cutoffs below the fold, minimalist tab bar, subtle rounded geometry, content-first editorial grid.

**Correct for production:** reference is tiny/low contrast in places; real implementation must raise body/text contrast, use touch-friendly controls, avoid typo “START JOUNEY” (use **START JOURNEY**), and adapt to 320–430px mobile screens.

**Do not do:** generic purple gradients, glowing glassmorphism, neon, stock yoga/meditation photos, unlicensed manga scans, manga character tracing, medical-dashboard gauges, giant smiley-face emoji mood cards, overly rounded pill shapes everywhere.

---

## 03 — Identity and brand language

**Working brand:** BE YOU.  
**Personality:** journal-editorial, expressive, understated, clear-eyed, quietly optimistic.  
**Primary phrase:** “A little closer to yourself.”  
**Support phrase:** “How you feel deserves a place to land.”

**Writing rules:** short, concrete, gently encouraging; use “notice” and “explore,” not “fix” or “cure.” Do not command users to feel happy. Do not produce guilt-inducing streak copy.

Examples:
- Welcome: “Be You” / “Today, we’re being ourselves.”
- Check-in: “What does today feel like?” / “There’s no right answer.”
- After entry: “Thank you for checking in.” / “One moment of attention matters.”
- Quiet day: “Nothing to catch up on. Begin where you are.”
- Trend caveat: “These are patterns in your entries, not explanations or diagnoses.”
- Journey CTA: “Begin journey” / “Continue gently” / “Pause for now”.

---

## 04 — Design tokens and palette

Use `../starter/design-tokens.css` as the canonical initial values. Approximate sampling from image supports page charcoal **#282D33**, primary surface **#1A1D22**, subtle panels **#242A30**, ink **#191C20**, warm illustration paper **#E5E2DD**. These are adapted approximate tokens; visual QA against the image takes precedence.

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#1A1D22` | Screen background / portrait footer |
| `--bg-outer` | `#282D33` | Desktop showcase backdrop |
| `--surface` | `#242A30` | Suggestions / elevated fields |
| `--surface-2` | `#2C3239` | Hover/selection/active panel |
| `--paper` | `#E5E2DD` | Manga artwork ground and primary light button |
| `--paper-light` | `#F3F0EA` | Highlight panels |
| `--ink` | `#191C20` | Manga ink and text on paper |
| `--text` | `#F2F0ED` | Headings and primary copy |
| `--text-secondary` | `#B8BEC6` | Descriptions and labels |
| `--text-muted` | `#939BA5` | Secondary metadata, verify contrast |
| `--border` | `#3B424B` | Hairline edges/dividers |
| `--focus` | `#E5E2DD` | Focus rings |
| `--positive` | `#A9BEA9` | Only small, accessible semantic hints |
| `--caution` | `#E2C69A` | Non-destructive warnings |
| `--danger` | `#DEAAA8` | Delete confirmations |

**Color discipline:** 90–95% neutral UI. Never encode mood by color alone; always pair labels, pattern, or position. Real captions need legibility against charcoal; preserve mood primarily through composition, not washed-out microtext.

**Typography:**
- **Display / expressive headings:** *Cormorant Garamond* (self-host subset, weights 500/600; fall back Georgia, serif). Use 36–46px mobile h1 with tight ~1.02 line-height; 30–34px feature section headings; 28–36px journey title.
- **Interface / all functional text:** *DM Sans* (self-host 400/500/600/700; fallback system-ui). 15–16px body at 1.5–1.6; 13–14px metadata; 14–16px button labels; 12px only for genuinely supplementary tags with high contrast.
- Avoid fake-light font weights, tiny labels like those in the reference, wide tracking on whole paragraphs.
- Letter-spacing: body ~0, headings ~-0.015em, uppercase eyebrow labels ~0.10em.

**Spacing:** 4px base. 4/8/12/16/20/24/32/40/48/64. Standard screen inline padding 24px at 390px; 16px at <=350px. Main content sections ~28–36px apart. Card grid gap 16–18px. Inside panels 16–20px.

**Radii:** app shell preview 30px (desktop only), cards 6px for artwork tiles, panels 8–10px, pill/circle only for icon buttons, journey hero 6px, primary rectangular CTA 5px; bottom sheet 20px top corners. Do not use 24px rounding on every item.

**Elevations:** generally none; use contrast shifts and 1px translucent stroke instead of glossy shadows. Optional `0 12px 40px rgba(0,0,0,.2)` for modals on dark overlay.

**Icons:** 20–22px consistent thin-line 1.5px strokes, no filled emoji. Original/simple SVG or Lucide. Consistent direction and clarity.

**Art treatment:** warm ivory panels, black/charcoal ink figures, bold expressive negative space, restrained fine cross-hatching. Original manga-inspired editorial ink drawings—not copied panel/character art.

---

## 05 — Layout, safe areas and responsive behavior

**Core canvas:** 390 x 844 CSS-pixel mobile design reference. Must work 320–430px width and 640px minimum usable height; content can scroll. Never force a fixed viewport height that hides buttons when iOS browser chrome expands.

**PWA viewport:** `width=device-width, initial-scale=1, viewport-fit=cover`; honor `env(safe-area-inset-top)` and `env(safe-area-inset-bottom)` with appropriate padding. Body scroll, no horizontal overflow. Touch affordances >=44x44px for priority controls. Ensure keyboard activation/focus.

**Bottom nav:** always fixed/sticky to safe-area edge for primary screens; 64–72px visible height + bottom inset. Dark panel slightly lighter than background, top hairline optional. Exactly three primary destinations: **Home | Today | You**. Only one active. Screen content bottom-padding accounts for nav height.

**Responsive:**
- 320–479px: mobile first, 2-column journeys where cards each can remain >=135px; at narrowest or long text use layout that does not truncate essential labels; portrait art 1:1 tile crop.
- 480–767px: content max-width 480px centered, same mobile nav.
- 768–1199px: centered editorial app column max-width 560–620px or purposeful two-column library/insights layouts; no stretched 3:1 illustration cards.
- >=1200px: app-centered 980–1100px editorial layout (optional left context rail), preserve dark background and sparse compositions. Do not just float a thin phone in enormous blank space for production desktop usage.

**Performance/animation:** page transitions subtle: 150–240ms crossfade/translate 6–10px; tile hover slight 1.01 image scale desktop only; taps feel immediate. `prefers-reduced-motion` removes nonessential transitions and all parallax. Never animate mood data dramatically or gamify difficult emotions.

---

## 06 — Information architecture and routes

```text
/welcome                  3 original illustrated onboarding panels (first launch)
/onboarding               Optional preferences (name, goal, reminder preference off by default)
/home                     Editorial discovery / featured journeys / recent journal
/today                    DAILY HOME, weekday heading, check-in and suggested exercises
/check-in                 3-step mood entry; progress + optional skip
/journal                  Private entries list, filter by dates
/journal/:id              Entry detail, edit and delete
/journeys                 Full journey library and categories
/journeys/:slug           Journey detail + resources + progress
/journeys/:slug/step/:id  Guided reflection/exercise step
/insights                 Trends & gentle pattern review, with limitations
/you                      Personal overview, goals, insights entry point
/settings                 Preferences, reminders, local storage, export/delete
/privacy                  Clear privacy policy in product language
/offline                  Recovery page for any uncached route
```

**Navigation model:** Main 3-tab bar Home/Today/You; push pages preserve active parent tab via router state and keep top back control. Check-in is a major CTA reachable from Today and Home. Journal, Journeys and Insights remain accessible with 1–2 taps. Do not create a 5-tab nav.

---

## 07 — Screen specifications (functional, not just static)

### 07A. Welcome / first launch
**Visual:** full viewport, top 57–63% cropped original illustrated portrait in warm ivory, very dark lower 37–43%. Big “Be You” bottom-left, 16px subtitle, tiny progress dots, light circular next/continue arrow bottom-right. Preserve screenshot silhouette and balance without copying the character.

**Flow:** three panels: (1) “Be You” / “Today, we're being ourselves.” (2) “Notice the moment” / “A small check-in can say a lot.” (3) “Grow in your own time” / “No pressure. No perfect days.” Third CTA “Start”. Next and previous (or swipe plus accessible next/back buttons), skip accessible. Persist `onboardingComplete`, route to Today. Do not gate app behind signup or intrusive health questionnaire.

### 07B. Today (flagship screenshot screen)
**Layout from top:** top safe area > header (dynamic weekday in Cormorant, discreet ellipsis/settings) > understated salutation/date > primary quick mood check-in strip (usable 44px+ CTA) > subtle “Suggest an exercise” feature tile > **Heal & Grow** h2 / “Set a goal and create a fulfilling future” > 2-column art-led 4-card journey grid > **Love yourself** section > another thoughtful card or prompt > fixed nav.

**Feature suggestion tile:** current suggested action name, 1-line reason (based only on explicit mood selection OR generic when none), arrow. Do not claim to infer emotions from passive sensor signals or read a user's mind.

**Four image tile names exactly for launch:** Travel Journal, Unsent Letter, Rethinking Loneliness, Letting Go. Preserve their spatial rhythms. All open real pages. Original distinct art for each.

**States:** never checked in; checked in today; offline (still complete); loading storage (fast local skeleton); storage unavailable (clear fallbacks); no content (packaged journeys always available).

### 07C. Mood Check-In (the core interaction)
Goal: **under 45 seconds** when skipping options. Three progressive steps with a visible text progress label; back/next; no forced typing.

1. “What does today feel like?” choose one main response: Very low / Low / Mixed / Good / Great. Each text option optionally uses an abstract black-ink expression, but never emoji-only. Single selection; 5-point `valence` scale `1..5` with names that avoid clinical interpretation. Support “Not sure”, recorded as `null` with `uncertain=true` (not silently 3). Mark no mood as wrong.
2. “Can you name any of it?” optional multi-select from Calm, Hopeful, Grateful, Anxious, Lonely, Frustrated, Sad, Overwhelmed, Tired, Restless, Content, Motivated; add custom text. Optional energy low/okay/high. Optional context tags Work, Relationships, Health, Rest, Family, Money, Other. This is self-reported language, never diagnosis.
3. “Would you like to leave a note?” optional 0–2000-character private journal, optional single gentle intention. Save directly to IndexedDB. “Save check-in” action works offline. Confirmation offers “Try an exercise”, “Read an entry”, “Go to Today”.

Allow multiple check-ins a day; display latest plus timeline. Do not force one per day or conflate absence with bad mood. Validate required identity of entry; user can abandon without unintended save. Explicitly permit edit/delete after save.

### 07D. Home — editorial library
Hero with “Start where you are” and bespoke 3:2 artwork; continue a journey section; Journeys featured, Journal entry point, small prompt of day. Use curated shelves but do not fill entire home with duplicated Today components. Low-distraction layout, clear browse all CTA.

### 07E. Journey library
Categorize: Heal & Grow; Love Yourself; Find Your Way. In MVP ship 4 complete journeys with exact names above. In later iteration add Boundaries / Self Trust / One Quiet Morning / Rewriting the Story. Each card: title, editorial drawing, duration estimate, 1-sentence promise; no misleading therapeutic outcomes.

### 07F. Journey detail — Letting Go reference screen
Back circle, centered parent category text **Heal & Grow**. Tall portrait illustration ~4:5/3:4 aspect ratio, warm paper. A dark inset overlay in lower section, not over the subject's face, containing title “Letting Go”, subtitle “Forgive to move forward”, ivory full-width rectangle **START JOURNEY** / **CONTINUE JOURNEY**. Below: **Resources**, featured article row with outline icon, uppercase “STORY”, title “Introduction to Letting Go”, optional 2-min estimate, divider. Four real guided steps with completion tracking; show progress discreetly, never required daily streak.

All journeys follow same template while varying art and content. Card detail must be dynamic from typed content seed, not four hardcoded duplicate pages.

### 07G. Guided step / exercise
Clear step index “01 / 04”, serif title, concise intro, optional passage / prompt, optional text field or 30–90-second mindful action, “Save reflection” if typed, “Mark complete” for non-writing steps, back/next. Autosave drafts locally with debounce; manual save confirmation when leaving. Journal entry creation from written reflection with source journey link. On final step show a modest completion screen, “You made space for yourself.” No confetti, points or streak guilt.

### 07H. Journal
Entry list sorted descending with date, mood text, 1–2 line preview, journey context icon when relevant. Search own note text locally; filters: date and mood tag; no remote search. Read/edit/delete, confirmation on destructive action, undo within current session when feasible. Empty: “Your pages start here.” with CTA. Free-write entry separate from mood check-in also supported. Local timestamps and date grouping respect timezone + DST.

### 07I. Insights
Hero “Patterns, not judgments.” Weekly mood balance bar/grid or dot plot showing counts by valence; calendar showing check-in days; selectable 7/30/90 day; top self-reported feeling tags, top contexts; optional neutral descriptions such as “You noted feeling tired on 4 check-ins this month.”

Never assert “work causes your anxiety” based on co-occurrences. Show “Not enough entries yet” until threshold (>=7 check-ins over >=4 distinct days for summary patterns); still display raw history at lower counts. For 7-day window, include number of recorded days rather than treating missing as neutral. Charts must have textual equivalents, accessible labels and dark-friendly gridlines. No automatic clinical severity classification.

### 07J. You and Settings
“You” features quiet illustrated portrait, preferred first name (optional), entry counts, recent reflections, goals/intention, shortcuts to Insights, Journal, Journeys and Settings. Settings: data stays on this device notice, export JSON (with version) and human-readable CSV, import with validation/preview and duplicate handling, delete all data (strong confirmation), appearance (dark default; light is future), optional notification prefs (off / later), reduce motion (system default), passcode is **not** claimed unless actually implemented, privacy and emergency support links.

### 07K. Offline and edge states
App shell and all bundled journeys should work offline after initial install/visit. Mood saves, journal edits, history, exercises and insights work offline with local data. Show optional quiet ‘Saved on this device’ messaging, no fake cloud sync. Offline route fallback should explain what is and isn't cached; do not block core work behind network presence. Handle IndexedDB blocked, quota exceeded, corrupted record and import failure without silent loss.

---

## 08 — Core components inventory

- `AppShell`, `ScreenHeader`, `BottomTabBar`, `SafeAreaSpacer`, `BackButton`
- `EditorialHeading`, `EyebrowLabel`, `SectionHeader`, `SubtleDivider`, `EmptyState`
- `MangaPanel`, `JourneyCard`, `JourneyHero`, `JourneyMeta`, `ResourceRow`
- `QuickMoodCard`, `MoodChoice`, `FeelingTagPicker`, `EnergyPicker`, `ContextTagPicker`
- `JournalComposer`, `JournalEntryCard`, `EntryDetail`, `ConfirmDeleteDialog`
- `WeekMoodChart`, `CalendarActivityGrid`, `InsightNotice`, `PromptCard`
- `JourneyStepCard`, `JourneyProgress`, `ReflectionEditor`, `SuccessState`
- `IconButton`, `PrimaryButton`, `SecondaryButton`, `ModalSheet`, `Toast`, `Skeleton`
- `InstallHint`, `UpdateAvailableToast`, `StorageWarning`, `OfflineNotice`

Every clickable tile = semantic link or button; visuals are never the only click targets. Components have pressed/focus/disabled/loading/empty states. Use native elements where feasible; handle scroll restoration when returning to Today/Journeys.

---

## 09 — Interaction rules and motion guidelines

- Primary actions respond instantly with clear visible state; 150–240ms UI transitions maximum.
- Back navigation uses history when appropriate; deep-linked screen has deterministic parent route fallback.
- Bottom tabs persist across app sections; drawer/dedicated sheet for overflow, never nested scroll traps.
- Confirm destructive operations, with exact records being deleted. No one-click irreversible “delete everything”.
- On journaling, autosave draft local only; mark saved state. Keyboard must not hide the save/continue action.
- Check-in is not a streak; no red badges for missed days. “Come back anytime” instead of “you broke your streak.”
- Use input labels, help text and error summaries; native virtual keyboard `inputmode` where useful.

---

## 10 — Data model and local-first storage

**Architecture:** `Dexie` wrapper over IndexedDB; schema migrations with explicit versioning; typed runtime validation with Zod; repository interface to separate storage from UI. Never store user diary content in URL query params, analytics, crash logs or service-worker asset cache.

```ts
type MoodValence = 1 | 2 | 3 | 4 | 5 | null;
type EnergyLevel = 'low' | 'okay' | 'high' | null;
type MoodEntry = {
  id: string; createdAt: string; updatedAt: string;
  timezone: string; localDate: string;
  valence: MoodValence; uncertain: boolean;
  feelings: string[]; contextTags: string[]; energy: EnergyLevel;
  note: string; intention?: string; source: 'checkin' | 'reflection';
};
type JournalEntry = {
  id: string; createdAt: string; updatedAt: string;
  title?: string; body: string; linkedMoodEntryId?: string;
  journeyId?: string; journeyStepId?: string;
};
type JourneyProgress = {
  journeyId: string; completedStepIds: string[]; startedAt: string;
  updatedAt: string; completedAt?: string;
};
type AppPreferences = {
  onboardingComplete: boolean; displayName?: string;
  reduceMotion: 'system' | 'on' | 'off';
  remindersEnabled: false; // MVP doesn't send notifications
  lastExportAt?: string;
};
```

Additional data: `exercise_history` optional, `drafts` local, `content_version`, DB migration metadata. Use UUIDs; ISO UTC instants + IANA timezone; localDate computed at entry time (with re-grouping rule documented if user moves timezones). Multi-entry same day allowed. Journey content is packaged static JSON and must not be mixed with private entries.

**Storage risk communication:** Browser storage may be cleared by users, private browsing, quota, or browser policies. Offer export prominently and optionally `navigator.storage.persist()` if supported after user understands its purpose; do not promise permanent preservation. Local IndexedDB is **not** automatically end-to-end encrypted or password-protected. No analytics or third-party SDK can inspect private reflections in MVP.

**Import:** show preview and count, schema version check, run validation, detect ID collisions, offer explicit merge vs replace and maintain backup until commit completes. **Export:** downloadable JSON includes `formatVersion`, `exportedAt`, and explicit data arrays. CSV only includes check-in summary fields, with journal notes excluded by default unless user deliberately includes them. Use `URL.createObjectURL` client side and revoke. Provide data delete flow scoped to user data (not bundled art/content).

---

## 11 — PWA technical specification

**Recommended MVP stack:** Vite + React + TypeScript (`strict`), React Router, Tailwind CSS (CSS variables as source of truth), Dexie, Zod, React Hook Form for optional forms, Motion (small gestures only), Lucide or bespoke SVGs, Vitest + React Testing Library, Playwright. `vite-plugin-pwa` with Workbox; use a version-compatible current release and validate plugin behavior. No backend required.

**Manifest** (`../starter/manifest.example.webmanifest`): meaningful `name`, `short_name`, `start_url`, `scope`, `display: standalone`, `theme_color`, `background_color`, `icons` 192/512 plus maskable variant, portrait screenshots if implemented. Serve HTTPS (localhost accepted in development).

**Caching:** precache the app shell / required CSS / JS / locally hosted fonts / correctly optimized approved illustration assets / packaged content; versioned caches and update notice that avoids disrupting an unsaved journal draft. Navigations should use offline SPA fallback; avoid caching private exports or user-generated content in a service worker. Never blindly runtime-cache authenticated private URLs. Avoid enormous art bundle; consider precaching first-use journeys and using local bundled images that the build can precache; target balanced cache size. Confirm offline operation on a fresh install after one successful online visit.

**Install:** detect `beforeinstallprompt` only where supported, show a quiet install option after first successful use, hide when installed. On iOS/iPadOS offer contextual manual Add to Home Screen instructions; do not assume browser events or native install prompts exist everywhere. `display-mode` and `navigator.standalone` used only as progressive enhancements.

**Updates:** show “New version available” with manual restart/reload option. Do not force update while user is composing. Data schema migrations safe and non-destructive; regression test cross-version upgrades.

**Offline/reliability:** handle `navigator.onLine` as hint only; actually handle failed fetches. All main actions require no network after assets cached. UX must stay functional with service worker disabled (online). Provide export in offline mode.

**Security:** CSP where feasible, no `dangerouslySetInnerHTML` with user text, sanitize if accepting any rich text (prefer plain text), safe external rel attributes, dependencies audited, no client secret keys. Security headers through host where possible. Do not call external generative AI or analytics endpoints.

---

## 12 — Accessibility / content safety

- Target **WCAG 2.2 AA**, including text contrast >=4.5:1 for typical body type, focus visible, keyboard operation, screen reader names, non-color-only signals, sensible heading levels and proper form error announcements. Review any muted metadata against its exact rendered background.
- Graphics decorative `alt=""`; meaningful art `alt` describing the actual visual content, without assigning emotions/diagnoses to the user.
- Touch targets preferably >=44 CSS px on primary interactions (comfort target). Honor zoom at 200%, reflow at 320px, no landscape lock.
- `aria-live` for save feedback, not constant mood commentary. Provide text alternatives for trend graphs; reduced motion and sufficient focus outlines.
- Support dark UI with high contrast; save buttons reachable when mobile keyboard is open.
- Explicitly state: “Be You is for reflection and self-care, not a substitute for professional support or emergency services.”
- No ‘mood predicts depression’ outputs; do not make psychological diagnoses, do not provide medication advice or therapeutic efficacy claims.
- If users voluntarily type urgent distress content, no background scanning is promised or performed. Offer accessible optional “Need more support?” section with country-aware configurable trusted resources and an emergency contact prompt, without inventing emergency numbers or implying 24/7 monitoring.
- Avoid showing sensitive diary content in notifications, search snippets, OS share previews, app title, or error telemetry.

---

## 13 — Required content and illustrations

**MVP:** 4 journeys with 4 real steps each (not coming-soon placeholders); each includes title, one-line subtitle, short overview, 2–5 minute segments, at least one guided prompt/exercise, 1 original hero illustration, at least one article/resource introduction; `../starter/content-seed.json` provides seed material.

**Original asset shot list:** see `02_ART_DIRECTION_AND_ASSET_BRIEFS.md`. 12–14 consistent ink images, including welcome panels, journey cards/heroes, home portrait, empty-state art and at least one journal illustration. Create local AVIF/WebP for photos/raster or SVG for carefully drawn line art; no remote hotlinked art in production.

**Content requirement:** guidance must be thoughtful and specific; not repetitive “breathe and be positive” stock copy. Include clear actions; allow skipping. Illustrations must look deliberately composed with strong graphic black/ivory contrast, not bland avatar clipart.

---

## 14 — Engineering structure and quality

```text
src/
  app/                  router, providers, app shell, safe areas
  components/           shared UI primitives
  features/
    onboarding/
    today/
    mood/
    journal/
    journeys/
    insights/
    settings/
  data/                 Dexie schema, repositories, migrations, export-import
  content/              typed journey seeds, helpful resources
  hooks/                state and responsive hooks
  lib/                  timezones, validation, accessibility utils
  styles/               tokens, globals, typography
  assets/illustrations/ original exported art
public/
  icons/                PWA icons (multiple sizes, maskable)
  manifest.webmanifest (or plugin-generated equivalent)
tests/
  unit/
  e2e/
```

**Code standards:** strict types/no `any` for domain models, no dead click targets, no silent storage errors, component tests for check-in and edit/delete, repository tests for migrations/exports, Playwright e2e for onboarding/check-in/journeys/offline/install smoke, accessibility audit via axe and keyboard manual review. Quality gates `lint`, `typecheck`, `test`, `build`; smoke-test `preview` over localhost and a real mobile viewport.

**Content honesty:** Don’t seed the user's actual mood/journal history. Optional screenshot demo dataset must be isolated behind `/demo` or explicit dev-only fixture, not counted as their history.

---

## 15 — Completion acceptance criteria

**Visual**
- [ ] Screenshot comparison of 390x844 Welcome, Today and Letting Go matches composition, density, art contrast and typography of reference at a glance.
- [ ] Original illustration asset pipeline delivered, no broken URL/no AI-art placeholder blocks.
- [ ] Main UI respects color token system, bottom safe area and 320px reflow.
- [ ] Original artwork is not an unlicensed extraction from reference screenshot.

**Functional**
- [ ] 3-step onboarding completes/skips and persists.
- [ ] Check-in saves offline with a real indexed record; reload preserves it.
- [ ] Optional tags, note, energy/context, uncertain answer and multi-entry days work.
- [ ] Journal create/read/edit/delete, local search and export/import validated.
- [ ] All 4 journeys have complete playable steps, resume progress after restart.
- [ ] Insights updates from user's data; empty and low-data states are truthful.
- [ ] Home, Today, You, back navigation, deep links and settings all work.

**PWA/reliability**
- [ ] Manifest valid, 192/512 and maskable icons load, HTTPS deployment instructions documented.
- [ ] Offline launch after warm first visit; core tasks functional without network.
- [ ] Update prompt cannot destroy unsaved notes; install path gracefully falls back on iOS.
- [ ] Clear privacy notice: local data loss risk; export and full deletion work.

**Quality**
- [ ] No console errors/hydration issues, 0 broken links, no clickable dead-ends.
- [ ] Keyboard screen-reader labels, high-contrast readable text, 200% zoom and reduced-motion tested.
- [ ] Typecheck/lint/tests/build pass; Playwright key journeys pass at mobile + desktop.
- [ ] Final agent report includes paths to working screenshots, screenshots of **actual app**, QA results, known issues, and explicit “not deployed” status until approved.

---

## 16 — Implementation milestones / staged delivery

**Stage 0 — audit and constraints (1 session):** determine new/existing repo, establish branch, inspect provided screenshot/assets, read docs, choose dependencies, create agent task ledger. No deployment.

**Stage 1 — visual foundation:** fonts, tokens, responsive shell, nav, reusable manga panels, assets, Welcome, Today, Journey detail. Snapshot screenshot + visual iteration. This is the design quality gate.

**Stage 2 — working product:** typed content, 4 journeys and progress, check-in and mood records, journal editing, insights, Home/You/Settings, Dexie and import/export. No placeholder routes.

**Stage 3 — PWA + reliability:** manifest/icons, service worker/offline, accessibility, mobile safe areas, keyboard, tests, content safety, privacy disclosures, export/backup instructions.

**Stage 4 — final evidence:** screenshots for mobile 390x844 & 320x720, tablet 768, desktop 1440; side-by-side reference comparison; test report; open PR/development branch. Wait for user approval prior to merging or production deployment.

**Definition of complete:** A fresh user can install the PWA, go through onboarding, record and revise a mood, complete a guided journey, use the app offline, read their weekly history, export their data, and delete it—and all of this feels faithful to the reference image.

---

## 17 — Verified technical reading

- MDN PWA installation requirements: https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable
- MDN offline/service workers: https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation
- web.dev PWA reliability checklist: https://web.dev/learn/pwa/getting-started
- MDN storage quotas / eviction: https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria
- Vite PWA injectManifest docs: https://github.com/vite-pwa/vite-plugin-pwa/blob/main/docs/guide/inject-manifest.md
- WCAG 2.2 standard: https://www.w3.org/TR/WCAG22/

These links are implementation references, not a claim that the provided design screenshot has already been coded or audited.
