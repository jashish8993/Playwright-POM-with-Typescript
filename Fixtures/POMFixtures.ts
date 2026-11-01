import {test as base,expect,Fixtures,Page} from '@playwright/test'
import { Login } from '../Pages/Login';
import { inventory } from '../Pages/Inventory';
import {Abouts} from '../Pages/About';

type myfixture ={
logp : Login;
inve : inventory;
about : Abouts;
}
export const test = base.extend<myfixture>({
logp: async({page},use)=>{
await use(new Login(page));
},
inve: async({page},use)=>{
await use(new inventory(page));
},
about: async({page},use)=>{
await use(new Abouts(page));
},
})
export {expect} from '@playwright/test'