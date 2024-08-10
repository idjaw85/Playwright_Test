import { test, expect } from "@playwright/test";
test('verification page', async ({ page }) => {
    //Open platform
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#name').click();
    //await page.locator('#name').press('CapsLock');Chaque ligne contien CapsLock doit etre supprimé 
    
    await page.locator('#name').fill('Waj');
    await page.locator('#email').click();
    await page.locator('#email').fill('Waj@gmail.com');
    await page.locator('#phone').click();
    await page.locator('#phone').fill('0711111111');
    await page.getByLabel('Address:').click();
    await page.getByLabel('Address:').fill('Paris, france ');
    await page.getByLabel('Male', { exact: true }).check();
    await page.getByLabel('Saturday').check();
    await page.getByLabel('Saturday').uncheck();
    await page.waitForTimeout(1000);
    await page.getByLabel('Saturday').isChecked();

    
    
    

    await page.getByLabel('Country:').selectOption('france');
    await page.getByLabel('Colors:').selectOption('white');

    await page.close();

})