import {test} from '../../fixtures/basicfixture.ts';


test.beforeEach(async ({ page }) => {
        const environmentURL = process.env.BASE_URL;
        await page.goto(environmentURL!);
});

test('Login with valid credentials @local', async ({ orangeHRMLoginPage, orangeHRMHomePage }) => {
        await orangeHRMLoginPage.isLoginPageDisplayed();
        await orangeHRMLoginPage.login(process.env.USERNAME!, process.env.PASSWORD!);
        // Add assertions here to verify successful login, e.g., checking for a specific element on the dashboard
        await orangeHRMHomePage.isHomePageDisplayed();
});
     