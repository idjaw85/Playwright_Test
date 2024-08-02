import{test,expect} from "@playwright/test";
test('verification page',async({page})=>{
//Open platform
await page.goto('https://www.demoblaze.com/index.html');
// login to the platform
await page.getByRole('link', { name: 'Log in' }).click();
await page.locator('#loginusername').click();
await page.locator('#loginusername').fill('pavanole');
await page.locator('#loginpassword').click();
await page.locator('#loginusername').click();
await page.locator('#loginusername').fill('pavanol');
await page.locator('#loginpassword').click();
await page.locator('#loginpassword').fill('test@123');
await page.getByRole('button', { name: 'Log in' }).click();
// Choice product
await page.locator('.card > a').first().click();
// add product
await page.getByRole('link', { name: 'Add to cart' }).click();
await page.getByRole('link', { name: 'Cart', exact: true }).click();
await page.getByRole('button', { name: 'Place Order' }).click();
// Payment data 
await page.getByLabel('Total:').click();
await page.getByLabel('Total:').fill('waj');
await page.getByLabel('Country:').click();
await page.getByLabel('Country:').fill('waj');
await page.getByLabel('City:').click();
await page.getByLabel('City:').fill('tunisie');
await page.getByLabel('Credit card:').click();
await page.getByLabel('Credit card:').fill('123456789');
await page.getByLabel('Month:').click();
await page.getByLabel('Month:').fill('10');
await page.getByLabel('Year:').click();
await page.getByLabel('Year:').fill('2028');
await page.getByRole('button', { name: 'Purchase' }).click();
await page.getByRole('button', { name: 'OK' }).click();
//await page.getByRole('button', { name: 'Close' }).click();

// logout 
await page.reload();
await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
await page.getByRole('link', { name: 'Log out' }).click();
await page.close();

})