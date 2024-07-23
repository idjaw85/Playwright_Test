import{test,expect} from "@playwright/test";
test.use({viewport:{width:1920,height:1080}})//pour definir un viewport avec les dimension respective 
test('Locators',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');

    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.waitForTimeout(5000);  
    //verification bouton logout
    const logout= await page.locator('#logout2')
    await expect(logout).toBeVisible()
    await expect(logout).toContainText('Log out')
    await expect(logout).toBeEnabled()
    await page.locator('#logout2').click();
    await page.waitForTimeout(1000);
    await page.close()
})