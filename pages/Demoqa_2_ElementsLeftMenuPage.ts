import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage.ts";

export class DemoqaElementsLeftMenuPage extends BasePage {
    //Page Element Locators
    readonly Elements: Locator;
    readonly Forms: Locator;
    readonly AlertsFormsWindows: Locator;
    readonly Widgets: Locator;
    

    //class constructor
    constructor(page: Page) {
        super(page);
        this.Elements = this.page.getByText('Elements');
        this.Forms = this.page.getByText('Forms');
        this.AlertsFormsWindows = this.page.getByText('Alerts, Frame & Windows');
        this.Widgets = this.page.getByText('Widgets');
        
    }

    async isElementsLeftMenuPageDisplayed() {
        await expect(this.Elements).toBeVisible();
        await expect(this.Forms).toBeVisible();
        await expect(this.AlertsFormsWindows).toBeVisible();
        await expect(this.Widgets).toBeVisible();
    }

    async clickOnElementsMenu() {
        await this.Elements.click();
    }

    async clickOnFormsMenu() {
        await this.Forms.click();
    }
}