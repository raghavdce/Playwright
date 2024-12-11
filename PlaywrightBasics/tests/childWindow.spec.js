const {test} = require('@playwright/test');

test('siwtchToChildWindow', async ({browser})=> 
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const docuLink = page.locator("[href*='documents-request']");

    //to switch to a new window

    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            docuLink.click(),
        ]
    );

    const textfromNewPage = await newPage.locator(".red").textContent();
    console.log(textfromNewPage);   //Please email us at mentor@rahulshettyacademy.com with below template to receive response
    const newText = textfromNewPage.split("@");
    const domainName = newText[1].split(" ")[0];
    console.log(domainName);  //rahulshettyacademy.com

    // to switch to the parent window

    await page.locator("#username").fill(domainName);
    await page.pause();

}
)
