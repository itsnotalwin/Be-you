import {defineConfig} from '@playwright/test';

const baseURL = (process.env.PLAYWRIGHT_BASE_URL || 'http://127.0.0.1:4173/').replace(/\\/?$/, '/');
const chromium = {browserName: 'chromium', viewport: {width: 390, height: 844}};

export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.mjs',
  timeout: 60000,
  expect: {timeout: 10000},
  fullyParallel: false,
  workers: 1,
  retries: process.env.CI ? 1 : 0,
  reporter: [['list'], ['html', {open: 'never', outputFolder: 'playwright-report'}]],
  outputDir: 'test-results',
  use: {
    baseURL,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    serviceWorkers: 'block'
  },
  projects: [
    {name: 'chromium-320', use: {...chromium, viewport: {width: 320, height: 700}}},
    {name: 'chromium-390', use: chromium},
    {name: 'chromium-desktop', use: {...chromium, viewport: {width: 1280, height: 800}}},
    {name: 'webkit-393', use: {browserName: 'webkit', viewport: {width: 393, height: 852}}}
  ],
  webServer: process.env.PLAYWRIGHT_BASE_URL ? undefined : {
    command: 'npm start',
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 30000
  }
});
