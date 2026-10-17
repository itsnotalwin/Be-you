/* BE YOU: pixel-level visual regression against real browser captures.
   Candidate PNGs require review before they are merged as approved baselines. */
import {test, expect} from '@playwright/test';

const fixedTime = new Date('2026-10-17T12:00:00.000Z');
const storageKey = 'beyou-v1-local-data';
const seed = () => ({
  version: 1, onboarded: true, checkins: [], journal: [], journeys: {},
  favorites: [], settings: {light: false, reduceMotion: true, largeText: false}
});
const routes = [
  'welcome', 'onboard-notice', 'onboard-grow', 'today', 'home',
  'mood', 'mood-details', 'mood-saved', 'journal', 'journal-edit',
  'heal', 'journey-detail', 'exercise', 'journey-complete',
  'insights', 'affirmations', 'breathe', 'you', 'settings', 'offline', 'install'
];
const emotions = ['happy', 'calm', 'neutral', 'anxious', 'sad'];
const otherWidths = {
  'chromium-320': ['today', 'mood', 'journal', 'settings'],
  'chromium-desktop': ['today', 'mood', 'journal', 'heal', 'settings'],
  'webkit-393': ['today', 'mood', 'journal', 'heal', 'settings']
};

test.beforeEach(async ({page}) => {
  await page.clock.setFixedTime(fixedTime);
  await page.addInitScript(({key, value}) => {
    localStorage.setItem(key, value);
  }, {key: storageKey, value: JSON.stringify(seed())});
});

async function open(page, screen) {
  await page.goto('?screen=' + encodeURIComponent(screen));
  await expect(page.locator('.device')).toHaveAttribute('data-page', screen);
  await expect(page.locator('#app')).not.toBeEmpty();
  await expect.poll(() => page.locator('#app img').evaluateAll(
    imgs => imgs.every(img => img.complete && img.naturalWidth > 0 && img.naturalHeight > 0)
  ), {message: 'Real approved artwork must finish decoding', timeout: 15000}).toBe(true);
  await page.evaluate(async () => { await document.fonts.ready; });
  await page.mouse.move(0, 0);
}

async function screenshot(page, filename) {
  // Each baseline compares pixels at an identical, deterministic browser viewport.
  // A tolerance of 0.1% handles minute anti-alias variations; meaningful UI movement fails.
  await expect(page).toHaveScreenshot(filename + '.png', {
    fullPage: false, animations: 'disabled', caret: 'hide',
    threshold: 0.15, maxDiffPixelRatio: 0.001,
    timeout: 30000
  });
}

for (const route of routes) {
  test('390px approved screen: ' + route, async ({page}, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-390', 'Full baseline set is maintained at 390px');
    await open(page, route);
    await screenshot(page, 'screen-' + route);
  });
}

for (const project of Object.keys(otherWidths)) {
  for (const route of otherWidths[project]) {
    test(project + ': ' + route, async ({page}, testInfo) => {
      test.skip(testInfo.project.name !== project, 'Viewport-specific baseline');
      await open(page, route);
      await screenshot(page, 'screen-' + route);
    });
  }
}

for (const state of ['journal-populated', 'journal-view']) {
  test('390px data-dependent state: ' + state, async ({page}, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-390', 'Full journal state baseline at 390px');
    const value = seed();
    value.journal.push({
      id: 'visual-test-entry', title: 'Test reflection',
      body: 'Only synthetic test words.',
      createdAt: Date.UTC(2026, 9, 16, 10),
      updatedAt: Date.UTC(2026, 9, 16, 10)
    });
    await page.addInitScript(({key, data}) => localStorage.setItem(key, data),
      {key: storageKey, data: JSON.stringify(value)});
    await open(page, 'journal');
    if (state === 'journal-view') {
      await page.locator('[data-view="visual-test-entry"]').click();
      await expect(page.locator('.device')).toHaveAttribute('data-page', 'journal-view');
    }
    await screenshot(page, 'screen-' + state);
  });
}

for (const emotion of emotions) {
  test('390px mood ' + emotion + ': portrait and selected controls', async ({page}, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-390', 'Mood portraits are checked at the canonical phone width');
    await open(page, 'mood');
    await page.locator('.mood-v2-options [data-mood="' + emotion + '"]').click();
    await expect(page.locator('.mood-v2')).toHaveAttribute('data-selected-mood', emotion);
    await expect(page.locator('.mood-v2-options [aria-pressed="true"]')).toHaveCount(1);
    await expect.poll(() => page.locator('#mood-portrait').evaluate(img => img.complete && img.naturalWidth > 0)).toBe(true);
    await page.evaluate(() => {document.activeElement?.blur();});
    await page.mouse.move(0, 0);
    const scroller = page.locator('.device .content');
    await scroller.evaluate(el => {el.scrollTop = 0;});
    await screenshot(page, 'mood-' + emotion + '-portrait');
    await scroller.evaluate(el => {el.scrollTop = el.scrollHeight;});
    await screenshot(page, 'mood-' + emotion + '-controls');
  });
}
