import { headerComponent } from "../Components/Component";
import {test,expect} from '../Fixtures/POMFixtures';
import { inventory } from "../Pages/Inventory";
import { TestData } from "../Test data/Testd";

test('SideMenuMandatory',async({page,inve})=>{
await page.goto(TestData.urls.inventoryu);
await inve.header.OpenOperations();
await page.waitForTimeout(4000);

await expect(inve.allItems).toBeTruthy();
await expect(inve.DynamicCat).toBeTruthy();
await expect(inve.About).toBeTruthy();
await expect(inve.Logout).toBeTruthy();
await expect(inve.Reset).toBeTruthy();
await inve.header.CloseOperations();
})