import {test,expect} from '../Fixtures/POMFixtures'
import { TestData } from '../Test data/Testd';
//import {test,expect} from '@playwright/test';
//import {Login} from '../Pages/Login'
//import { inventory } from '../Pages/Inventory';




test('inventory' , async ({page, inve, logp})=> {
//const Logg= new Login(page);
//const inven = new inventory(page);
//await logp.urlfun();
//await logp.login();
await page.goto(TestData.urls.inventoryu);
await inve.clicky();
await expect(page).toHaveURL(TestData.urls.carturl);
//await page.pause();
})
