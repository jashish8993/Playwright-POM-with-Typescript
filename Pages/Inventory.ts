import {Locator,Page} from '@playwright/test';

export class inventory{

page: Page;
ulink : Locator;
ucart :Locator;
lcontainer :Locator;

constructor(page: Page)
{
this.page=page;
this.ulink=page.locator("//*[text()='Sauce Labs Bike Light']");
this.ucart=page.locator("//*[text()='Add to cart']");
this.lcontainer=page.locator("//div[@id='shopping_cart_container']");
    
}

async clicky()
{
await this.ulink.click();
await this.ucart.click();
await this.lcontainer.click();

}

}