import {test,expect} from '@playwright/test';
//$env:ENV ="dev";
test('Enviroment file', async({page}) =>
{
console.log(process.env.URL);
console.log(process.env.USERNAME)
console.log(process.env.PASSWORD)



})