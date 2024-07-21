import{test,expect} from "@playwright/test";
test('verification page',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
    await page.waitForTimeout(5000)
    const pageTitle= await page.title()
    await console.log('page title is : ',pageTitle );
    const Verif="STORE"
    await expect(pageTitle).toEqual(Verif)
    if(Verif===pageTitle){
        console.log('True')
    }
    else{
        console.log('false')
    }
    await page.close()
})