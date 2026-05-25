import {test} from '../../fixtures/basicfixture.ts';
import {expect} from '@playwright/test';

        test.beforeEach(async ({ page }) => {
                const environmentURL = process.env.BASE_URL||'https://demoqa.com/';
                await page.goto(environmentURL!);
        });

        test('Validate DemoQA home page @qaenv', async ({ demoqaHomePage, demoqaElementsLeftMenuPage }) => {
                await demoqaHomePage.isDemoqaHomePageDisplayed();
        });

        test('Navigate to Elements Page @qaenv', async ({ demoqaHomePage, demoqaElementsLeftMenuPage }) => {
                await demoqaHomePage.isDemoqaHomePageDisplayed();
                await demoqaHomePage.navigateToElementsPage();
                await demoqaElementsLeftMenuPage.isElementsLeftMenuPageDisplayed();
        });

        test('Navigate to Text Box Page and validate @qaenv', async ({ demoqaHomePage, demoqaElementsLeftMenuPage, demoqaElementsTextBoxPage }) => {
                await demoqaHomePage.isDemoqaHomePageDisplayed();
                await demoqaHomePage.navigateToElementsPage();
                await demoqaElementsLeftMenuPage.clickOnElementsMenu();
                await demoqaElementsTextBoxPage.navigateToTextBoxPage();
                await demoqaElementsTextBoxPage.isElementsTextBoxPageDisplayed();
                await demoqaElementsTextBoxPage.fillTextBoxFormDynamic();
        }   
);
     