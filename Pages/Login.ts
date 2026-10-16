import {Page,Locator,expect} from '@playwright/test';
import { TestData } from '../Test data/Testd';


export class Login
{
page:Page;
username : Locator;
Password : Locator;
LButton: Locator;
//Llist : Locator;


constructor(page :  Page)
{
this.page =page;
this.username =page.getByPlaceholder('Username');
this.Password =page.getByPlaceholder('Password');
this.LButton = page.locator("//*[@id= 'login-button']");
//this.Llist = page.locator("//*[@class = 'inventory_list']");
}

async urlfun()
{
await this.page.goto(TestData.urls.Base);

}

async login()
{
await this.username.fill(TestData.user.username);
await this.Password.fill(TestData.user.password);
await this.LButton.click();
}
}