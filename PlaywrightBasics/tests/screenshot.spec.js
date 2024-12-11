const {test,expect} = require('@playwright/test')


test('takeScreenshot', async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.locator("#displayed-text").screenshot({path:'partialscreenshot.png'});
    await page.locator("#hide-textbox").click();
    await page.screenshot({path:'screenshot.png'});

})

test('screenshotcomparison', async({page})=>{

    await page.goto("https://google.com");
    expect (await page.screenshot()).toMatchSnapshot('google.png');

})