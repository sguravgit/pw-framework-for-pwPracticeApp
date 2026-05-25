import { defineConfig, devices } from '@playwright/test';
import { existsSync } from 'node:fs';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from 'dotenv';
import path from 'path';

function getProjectRootDir(): string {
    let dir = path.resolve(process.cwd());
    for (let i = 0; i < 6; i++) {
        if (existsSync(path.join(dir, 'package.json'))) return dir;
        const parent = path.dirname(dir);
        if (parent === dir) break;
        dir = parent;
    }
    return path.resolve(process.cwd());
}

/**
 * Env files Load order:
 *   1. envs/.env.shared (committed: IdP URLs, client IDs, scopes, test user)
 *   2. .env (TEST_ENV selector, COMMON_PASSWORD — gitignored)
 *   3. envs/.env.<TEST_ENV> (committed: BASE_URL per environment)
 *
 * Usage:
 *   npx playwright test               → TEST_ENV from .env, loads envs/.env.<TEST_ENV>
 *   TEST_ENV=qa npx playwright test   → overrides TEST_ENV, loads envs/.env.qa
 */

const projectRootDir = getProjectRootDir();

const sharedEnv = path.join(projectRootDir, 'env', '.env.shared');
    if (existsSync(sharedEnv)) dotenv.config({ path: sharedEnv });

const mainEnv = path.join(projectRootDir,'env', '.env');
    if (existsSync(mainEnv)) dotenv.config({ path: mainEnv });
    
const testEnv = process.env.TEST_ENV || 'local';
const specificEnv = path.join(projectRootDir, 'env', `.env.${testEnv}`);
    console.log(`Using TEST_ENV=${testEnv}, loading env from ${specificEnv}`);
    if (existsSync(specificEnv)) dotenv.config({ path: specificEnv });


/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html'],
  ["allure-playwright"]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // Commented for now
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
