const {test, expect} = require ('@playwright/test');

test('First test', async ({browser})=> {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("rahulshettyac");
    await page.locator("[name='password']").fill("learning");
    await page.locator("#signInBtn").click();
    // to get the text of the error message use --> textContent()
    console.log((await page.locator("[style*='block']").textContent()));
    //to validate the error message content
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");


});

test ('Second test', async ({page})=> {
    // remember the first 2 lines (row no 9 and 10 in test case 1) is provided by playwright default
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google")

}

);


