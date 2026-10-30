import {test,expect} from '@playwright/test';
import Cred from '../Test data/Cred.json'

test('Login',async ({page}) =>{

    console.log(Cred.username);
    console.log(Cred.password);
}
)