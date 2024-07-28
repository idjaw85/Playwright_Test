import{test,expect} from "@playwright/test";
test('verification page',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
    await page.waitForSelector('//div[@id="tbodyid"]//div')
    const Cells =await page.$$('//div[@id="tbodyid"]//div')
     await console.log("the number of cells is :",Cells.length) // length : methode d'enumeration des cellules 
     for(const link of Cells) {
        const lien= await link.textContent()
        console.log("InnerText of link is :",lien) //afficher les liens
     }
    
    
    await page.close()
})