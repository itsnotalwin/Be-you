# BE YOU implementation details

## Stack
- HTML, CSS, JavaScript ES2020+, Node built-in HTTP server for local preview.
- No runtime third-party network requests, trackers, hosted fonts or AI integrations.
- Service worker uses cache-first same-origin GET assets and cached offline shell.
- Data v1 object stored at localStorage key `beyou-v1-local-data`.

## Schema
```json
{
 "version":1, "onboarded":true,
 "checkins":[{"id":"uuid","createdAt":0,"mood":"calm","tags":["Sleep"],"energy":3,"note":"..."}],
 "journal":[{"id":"uuid","createdAt":0,"updatedAt":0,"title":"...","body":"..."}],
 "journeys":{"letting-go":{"step":1,"answers":{"0":"..."}}},
 "favorites":[0],
 "settings":{"light":false,"reduceMotion":false,"largeText":false}
}
```

## QA performed
- Parsed JavaScript using `node --check`.
- Ran interactive Chromium (embedded local resources because the testing browser has a navigation restriction): 21 mobile screens screenshot at viewport 390×844, DPR 2.
- Saved a check-in, created a journal, resumed a journey at step 2, and ran a breathing timer; no JavaScript exceptions observed.
- Measured document width at 320, 360 and 430px: matched each viewport, no horizontal overflow.
- Verified manifest JSON and referenced manga art paths exist.

## Known items for production
- Rework persistence on IndexedDB with import-version validation/migrations.
- Consider optional app-specific encryption and access controls; localStorage is not encrypted.
- Run installation/offline tests on actual iOS Safari, Android Chrome, and desktop HTTPS origin. Service-worker behavior was authored but not fully device-tested here.
- Complete keyboard/screen-reader audit and reduced-motion QA, check all responsive heights and dynamic text sizes.
- Replace cropped illustration masters where higher resolution is required.
- No automated e2e suite is shipped; the current smoke test was run during delivery production.
- The breathing animation is a gentle timer, not a therapeutic or medical protocol.
