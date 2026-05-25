import {test as base} from '@playwright/test';
import { OrangeHRMLoginPage } from '../pages/OrangeHRMLoginPage.ts';
import { OrangeHRMHomePage } from '../pages/OrangeHRMHomePage.ts';
import { DemoqaHomePage } from '../pages/Demoqa_1_HomePage.ts';
import { DemoqaElementsLeftMenuPage, } from '../pages/Demoqa_2_ElementsLeftMenuPage.ts';
import { DemoqaElementsTextBoxPage } from '../pages/Demoqa_3_ElementsTextBoxPage.ts';


export type BaseFixtures = {
        orangeHRMLoginPage: OrangeHRMLoginPage;
        orangeHRMHomePage: OrangeHRMHomePage;
        demoqaHomePage: DemoqaHomePage;
        demoqaElementsLeftMenuPage: DemoqaElementsLeftMenuPage;
        demoqaElementsTextBoxPage: DemoqaElementsTextBoxPage;
};

export const test = base.extend <BaseFixtures> ({
    // Define any fixtures here if needed in the future
        orangeHRMLoginPage: async ({ page }, use) => {
                await use(new OrangeHRMLoginPage(page));
        },

        orangeHRMHomePage: async ({ page }, use) => {
                await use(new OrangeHRMHomePage(page));
        },

        demoqaHomePage: async ({ page }, use) => { 
                await use(new DemoqaHomePage(page));
        },

        demoqaElementsLeftMenuPage: async ({ page }, use) => {
                await use(new DemoqaElementsLeftMenuPage(page));
        },
        
        demoqaElementsTextBoxPage: async ({ page }, use) => {
                await use(new DemoqaElementsTextBoxPage(page));
        }
});