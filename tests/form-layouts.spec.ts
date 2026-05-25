import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.ts';
import { FormsLayoutPage } from '../pages/FormsLayoutPage.ts';

test.describe('Forms Layout Page Tests', () => {
    let homePage: HomePage;
    let formsLayoutPage: FormsLayoutPage;

    test.beforeEach(async ({ page }) => {
        const environmentURL = process.env.BASE_URL;
        if (!environmentURL) {
            console.warn('BASE_URL environment variable is not set');
        } else {
            await page.goto(environmentURL);
            homePage = new HomePage(page);
            await homePage.isHomePageDisplayed();
            await homePage.navigateToFormsLayoutPage();
        }
        
    });

    test('is Forms Layout Page displayed', async ({page}) => {
        formsLayoutPage = new FormsLayoutPage(page);
        await formsLayoutPage.isFormLayoutsPageDisplayed();
    });

    test('Forms Layout Page - Fill and Submit Inline Form', async ({page}) => {
        formsLayoutPage = new FormsLayoutPage(page);
        await formsLayoutPage.isFormLayoutsPageDisplayed();

        await formsLayoutPage.nameField.fill('Test User');
        await formsLayoutPage.emailField.fill('test@example.com');
        //await formsLayoutPage.rememberMeCheckbox.check();
        await formsLayoutPage.submitButton.click();
    });
});