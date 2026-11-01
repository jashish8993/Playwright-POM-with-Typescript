import { Locator,Page } from "@playwright/test";
import { headerComponent } from "../Components/Component";

export class Abouts{
page: Page;
header : headerComponent;
About : Locator

constructor(page:Page)
{
    this.page=page;
this.header = new headerComponent(page);
this.About =page.locator("//a[text()='About']");

}

async Clicks()
{
    await this.About.click();
}

}