import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage.ts';
export class OrangeHRMHomePage extends BasePage {
    //Page Element Locators
    readonly dashboardLink: Locator;
    readonly adminLink: Locator;
    readonly pimLink: Locator;

    //class constructor
    constructor(page: Page) {
        super(page);
        this.dashboardLink = this.page.getByRole('link', { name: 'Dashboard' });
        this.adminLink = this.page.getByRole('link', { name: 'Admin' });
        this.pimLink = this.page.getByRole('link', { name: 'PIM' });
    }

    async isHomePageDisplayed() {
        await expect(this.dashboardLink).toBeVisible();
        await expect(this.adminLink).toBeVisible();
        await expect(this.pimLink).toBeVisible();
    }
}