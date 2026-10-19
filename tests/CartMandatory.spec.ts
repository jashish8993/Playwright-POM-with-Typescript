//import {test,expect} from '@playwright/test'
import { TestData } from "../Test data/Testd";
import {test,expect} from '../Fixtures/POMFixtures';
import { inventory } from "../Pages/Inventory";

test('Mandatory',async ({page,inve})=> {

await page.goto(TestData.urls.inventoryu);
await inve.cardmandat();
await expect(inve.lcard).toBeTruthy();



})