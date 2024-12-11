const{test} = require('@playwright/test')

test("lazyLoading Test", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("#userEmail").fill("raghavdce@gmail.com");
    await page.locator("#userPassword").fill("Rahulshetty@123");
    await page.locator("#login").click();
   // await page.waitForLoadState('networkidle');   for few this is not working
    await page.locator(".card-body b").first().waitFor();
    const prod1 = await page.locator(".card-body b").allTextContents();
    console.log(prod1);

});