//import {test as setup,expect} from '@playwright/test'
import { TestData } from '../Test data/Testd';
import {test as setup ,expect} from '../Fixtures/POMFixtures';

setup('authenticate', async({logp,page})=>{
   
    await logp.urlfun();
    await logp.login();
    await page.context().storageState({path : 'auth.json'});

});



