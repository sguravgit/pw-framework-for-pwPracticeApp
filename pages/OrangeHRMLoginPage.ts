import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage.ts';

export class OrangeHRMLoginPage extends BasePage {
    //Page Element Locators
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;

    //class constructor
    constructor(page: Page) {
        super(page);
        this.usernameField = this.page.getByPlaceholder('username');
        this.passwordField = this.page.getByPlaceholder('password');
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
    }

    async isLoginPageDisplayed() {
        await expect(this.usernameField).toBeVisible();
        await expect(this.passwordField).toBeVisible();
        await expect(this.loginButton).toBeVisible();
    }

    async login(username: string, password: string) {
        console.log(`Logging in with username: ${username} and password: ${password}`);
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle'); // Wait for the page to load after login
    }
}