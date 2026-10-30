import {Locator,Page} from '@playwright/test';
import { headerComponent } from '../Components/Component';

export class inventory{

page: Page;
ulink : Locator;
ucart :Locator;
//header : headerComponent;
lcontainer :Locator;
ucheckout : Locator;
lcontinue : Locator;
lcard :Locator;


constructor(page: Page)
{
this.page=page;
//this.header = new headerComponent(page);
this.ulink=page.locator("//*[text()='Sauce Labs Bike Light']");
this.ucart=page.locator("//*[text()='Add to cart']");
this.lcontainer=page.locator("//div[@id='shopping_cart_container']");
this.ucheckout =page.getByRole('button',{name: 'Checkout'});
this.lcontinue =page.getByRole('button',{name: 'continue'});
this.lcard =page.locator("//*[text() = 'Error: First Name is required']");
}

async clicky()
{

await this.ulink.click();
await this.ucart.click();
await this.lcontainer.click();

}
async cardmandat()
{
await this.lcontainer.click();
await this.ucheckout.click();
await this.lcontinue.click();
}


}