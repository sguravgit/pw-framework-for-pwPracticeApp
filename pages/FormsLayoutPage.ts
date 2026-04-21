import { expect, Locator, Page } from "@playwright/test";
import {BasePage} from "./BasePage.ts";

export class FormsLayoutPage extends BasePage {
    //Inline Form - Element Locators
    readonly nameField: Locator;
    readonly emailField: Locator;
    readonly rememberMeCheckbox: Locator;
    readonly submitButton: Locator;    

    //class constructor
    constructor(page: Page) {
        super(page);
        this.nameField = this.page.getByPlaceholder('Jane Doe');
        this.emailField = this.page.getByRole('textbox', { name: 'Email' }).first();
        this.rememberMeCheckbox = this.page.getByRole('checkbox', { name: 'Remember me' }).first();
        this.submitButton = this.page.getByRole('button', { name: 'Submit' }).first();
    }

    async isFormLayoutsPageDisplayed() {
        await this.nameField.isVisible();
        await this.emailField.isVisible();
    }

    async fillInlineForm(name: string, email: string, rememberMe: boolean) {
        await this.nameField.fill(name);
        await this.emailField.fill(email);
        if (rememberMe) {
            await this.rememberMeCheckbox.check();
        } else {
            await this.rememberMeCheckbox.uncheck();
        }
        await this.submitButton.click();
    }
}