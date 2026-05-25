import { Page} from '@playwright/test';

export class BasePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    
    async navigateToHomePage() {
        await this.page.goto(process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
}
