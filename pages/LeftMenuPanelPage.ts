import { expect, Locator, Page } from "@playwright/test";


export class LeftMenuPanelPage {
        page: Page;

        //Page Element Locators
        readonly iotDashboardLink: Locator;
        readonly formsLink: Locator;
        readonly formLayoutsLink: Locator;
        readonly datepickerLink: Locator;
        readonly modalOverlaysLink: Locator;
        readonly extraComponentsLink: Locator;
        readonly chartsLink: Locator;
        readonly tableAndDataLink: Locator;
        readonly authLink: Locator;

        //class constructor
        constructor(page: Page) {
            this.page = page;
            this.iotDashboardLink = this.page.getByRole('link', { name: 'IoTDashboard' });
            this.formsLink = this.page.getByRole('link', { name: 'Forms' });
            this.formLayoutsLink = this.page.getByRole('link', { name: 'Form Layouts' });
            this.datepickerLink = this.page.getByRole('link', { name: 'Datepicker' });
            this.modalOverlaysLink = this.page.getByRole('link', { name: 'Modal & Overlays' });
            this.extraComponentsLink = this.page.getByRole('link', { name: 'Extra Components' });
            this.chartsLink = this.page.getByRole('link', { name: 'Charts' });
            this.tableAndDataLink = this.page.getByRole('link', { name: 'Tables & Data' });
            this.authLink = this.page.getByRole('link', { name: 'Auth' });
        }

        async isLeftMenuPanelVisible() {
            await expect(this.iotDashboardLink).toBeVisible();
            await expect(this.formsLink).toBeVisible();
        }

        async navigateToHome() {
            await this.iotDashboardLink.click();
        }

        async clickIOTDashboardLink() {
            await this.iotDashboardLink.click();
        }
}