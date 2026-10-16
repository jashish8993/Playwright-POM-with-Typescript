import {test,expect} from '@playwright/test';
import {Login} from '../Pages/Login'
import { TestData } from '../Test data/Testd';

test('Login',async ({page}) =>{

const Logg = new Login(page);
await Logg.urlfun();
await Logg.login();
await expect(page).toHaveURL(TestData.urls.carturl);

}
)