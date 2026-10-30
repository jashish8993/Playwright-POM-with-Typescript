import {Page,Locator} from '@playwright/test'

export class headerComponent{
page :Page;
Hamburgermenu : Locator;
HamburgerClose : Locator;

constructor(page:Page)
{
this.page=page
this.Hamburgermenu = page.locator("//button[@id= 'react-burger-menu-btn']");
this.HamburgerClose = page.locator("//button[@id= 'react-burger-cross-btn']");
}

async operations()
{
await this.Hamburgermenu.click();
await this.page.waitForTimeout(4000);
await this.HamburgerClose.click();

}

}