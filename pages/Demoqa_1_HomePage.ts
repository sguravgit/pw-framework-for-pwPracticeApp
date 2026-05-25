import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage.ts';

export class DemoqaHomePage extends BasePage {
    //Page Element Locators
    readonly elementsCard: Locator;
    readonly formsCard: Locator;
    readonly alertsFrameWindowsCard: Locator;
    readonly widgetsCard: Locator;
    readonly interactionsCard: Locator;
    readonly bookStoreApplicationCard: Locator;

    //class constructor
    constructor(page: Page) {
        super(page);
        this.elementsCard = this.page.getByRole('link', { name: 'Elements' });
        this.formsCard = this.page.getByRole('link', { name: 'Forms' });
        this.alertsFrameWindowsCard = this.page.getByRole('link', { name: 'Alerts, Frame & Windows' });
        this.widgetsCard = this.page.getByRole('link', { name: 'Widgets' });
        this.interactionsCard = this.page.getByRole('link', { name: 'Interactions' });
        this.bookStoreApplicationCard = this.page.getByRole('link', { name: 'Book Store Application' });
    }

    async isDemoqaHomePageDisplayed() {
        await expect(this.elementsCard).toBeVisible();
        await expect(this.formsCard).toBeVisible();
        await expect(this.alertsFrameWindowsCard).toBeVisible();
        await expect(this.widgetsCard).toBeVisible();
        await expect(this.interactionsCard).toBeVisible();
        await expect(this.bookStoreApplicationCard).toBeVisible();
    }

    async navigateToElementsPage() {
        await this.elementsCard.click();
    }

    async navigateToFormsPage() {
        await this.formsCard.click();
    }
}