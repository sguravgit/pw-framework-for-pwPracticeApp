import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage.ts";
import { faker } from '@faker-js/faker';

export class DemoqaElementsTextBoxPage extends BasePage {
    //Page Element Locators
    readonly TextBoxHeader: Locator;
    readonly FULL_NAME_FIELD: Locator;
    readonly EMAIL_FIELD: Locator;
    readonly CURRENT_ADDRESS_FIELD: Locator;
    readonly PERMANENT_ADDRESS_FIELD: Locator;
    readonly SUBMIT_BUTTON: Locator;
    

    //class constructor
    constructor(page: Page) {
        super(page);
        this.TextBoxHeader = this.page.getByText('Text Box');
        this.FULL_NAME_FIELD = this.page.getByRole('textbox', { name: 'Full Name' });
        this.EMAIL_FIELD = this.page.getByPlaceholder('name@example.com');
        this.CURRENT_ADDRESS_FIELD = this.page.getByPlaceholder('Current Address');
        this.PERMANENT_ADDRESS_FIELD = this.page.locator('#permanentAddress');
        this.SUBMIT_BUTTON = this.page.getByRole('button', { name: 'Submit' });
    }

    async navigateToTextBoxPage() {
        await this.TextBoxHeader.click();
    }

    async isElementsTextBoxPageDisplayed() {
        await expect(this.FULL_NAME_FIELD).toBeVisible();
        await expect(this.EMAIL_FIELD).toBeVisible();
        await expect(this.CURRENT_ADDRESS_FIELD).toBeVisible();
        await expect(this.PERMANENT_ADDRESS_FIELD).toBeVisible();
        await expect(this.SUBMIT_BUTTON).toBeVisible();
    }

    async fillTextBoxForm(fullName: string, email: string, currentAddress: string, permanentAddress: string) {
        await this.FULL_NAME_FIELD.fill(fullName);
        await this.EMAIL_FIELD.fill(email);
        await this.CURRENT_ADDRESS_FIELD.fill(currentAddress);
        await this.PERMANENT_ADDRESS_FIELD.fill(permanentAddress);
        await this.SUBMIT_BUTTON.click();
    }

    async fillTextBoxFormDynamic() {
        await this.FULL_NAME_FIELD.fill(faker.person.fullName());
        await this.EMAIL_FIELD.fill(faker.internet.email());
        await this.CURRENT_ADDRESS_FIELD.fill(faker.location.streetAddress());
        await this.PERMANENT_ADDRESS_FIELD.fill(faker.location.streetAddress());
        await this.SUBMIT_BUTTON.click();
    }
}