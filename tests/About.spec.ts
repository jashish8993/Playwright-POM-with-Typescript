import { headerComponent } from "../Components/Component";
import {test,expect} from '../Fixtures/POMFixtures';
import { inventory } from "../Pages/Inventory";
import { TestData } from "../Test data/Testd";

test('About',async({page,about})=>{
await page.goto(TestData.urls.inventoryu);
await about.header.OpenOperations();
await page.waitForTimeout(4000);
await expect(about.About).toBeTruthy();
await about.Clicks();
await expect(page).toHaveURL('https://saucelabs.com/');

})