import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.ts';

test.describe('Home Page Tests', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        const environmentURL = process.env.BASE_URL;
        if (!environmentURL) {
            console.warn('BASE_URL environment variable is not set');
        } else {
            await page.goto(environmentURL);
        }
        
    });

    test('Verify Home Page is displayed', async ({page}) => {
        homePage = new HomePage(page);
        await homePage.isHomePageDisplayed();
    });
});