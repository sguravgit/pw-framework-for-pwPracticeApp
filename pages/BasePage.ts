import {Page} from '@playwright/test';
import { LeftMenuPanelPage } from './LeftMenuPanelPage';


export class BasePage {
    page: Page;
    leftMenuPanel: LeftMenuPanelPage;

    constructor(page: Page) {
        this.page = page;
        this.leftMenuPanel = new LeftMenuPanelPage(this.page);
    }
    
    async navigateToHomePage() {
        await this.page.goto(process.env.BASE_URL || 'http://localhost:4200');
    }
}
