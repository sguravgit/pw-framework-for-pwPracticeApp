import { expect, Locator, Page } from "@playwright/test";
import {BasePage} from "./BasePage.ts";

export class HomePage extends BasePage {
    //Page Element Locators
    readonly temperatureLink: Locator;
    readonly humidityLink: Locator

    //class constructor
    constructor(page: Page) {
        super(page);
        this.temperatureLink = this.page.getByRole('link', { name: 'Temperature' });
        this.humidityLink = this.page.getByRole('link', { name: 'Humidity' });
    }

    async navigateToHomePage() {
        await this.leftMenuPanel.iotDashboardLink.click();
    }

    async isHomePageDisplayed() {
        await expect(this.temperatureLink).toBeVisible();
        await expect(this.humidityLink).toBeVisible();
    }

    async navigateToFormsLayoutPage() {
        await this.leftMenuPanel.formsLink.click();
        await this.leftMenuPanel.formLayoutsLink.click();
    }
}