# Playwright Automation Framework for pwPractice App

Automated end-to-end testing framework built with [Playwright](https://playwright.dev/) and TypeScript.

## Project Structure

```
├── env/                    # Environment configuration files
│   ├── .env                # TEST_ENV selector & secrets (gitignored)
│   ├── .env.shared         # Shared config (IdP URLs, client IDs, scopes)
│   ├── .env.local          # Local environment base URL
│   └── .env.qa             # QA environment base URL
├── pages/                  # Page Object Model classes
│   ├── BasePage.ts
│   ├── HomePage.ts
│   ├── FormsLayoutPage.ts
│   └── LeftMenuPanelPage.ts
├── tests/                  # Test specs
│   ├── example.spec.ts
│   ├── homePage.spec.ts
│   └── form-layouts.spec.ts
├── playwright.config.ts    # Playwright configuration
├── package.json
├── .prettierrc             # Prettier code formatting config
└── .prettierignore         # Prettier ignore rules
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- npm

## Setup

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

## Running Tests

```bash
# Run all tests (default: chromium, local env)
npx playwright test

# Run a specific test file
npx playwright test tests/homePage.spec.ts

# Run tests in headed mode
npx playwright test --headed

# Run tests against a specific environment
TEST_ENV=qa npx playwright test
```

## Environment Configuration

The framework loads environment variables in the following order:

1. `env/.env.shared` — shared config (committed)
2. `env/.env` — `TEST_ENV` selector and secrets (gitignored)
3. `env/.env.<TEST_ENV>` — environment-specific base URL (committed)

Set `TEST_ENV` in `env/.env` or pass it inline:

```bash
TEST_ENV=qa npx playwright test
```

## Reports

```bash
# Open the HTML report after a test run
npx playwright show-report
```

## Tech Stack

- **Playwright** — browser automation & test runner
- **TypeScript** — type-safe test code
- **dotenv** — environment variable management
- **Page Object Model** — maintainable test architecture
