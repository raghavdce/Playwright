const {test,expect} = require('@playwright/test')

//test.describe.configure({mode:'parallel'});
//test.describe.configure({mode:'serial'});

//use the command --> npx playwright test /tests/Tags --grep=@Web
test('@Web takeScreenshot', async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.locator("#displayed-text").screenshot({path:'partialscreenshot.png'});
    await page.locator("#hide-textbox").click();
    await page.screenshot({path:'screenshot.png'});

})

test('@Web screenshotcomparison', async({page})=>{

    await page.goto("https://google.com");
    expect (await page.screenshot()).toMatchSnapshot('google.png');

})

test('@Ui screenshotcomparisondummy', async({page})=>{

    await page.goto("https://google.com");
    expect (await page.screenshot()).toMatchSnapshot('google.png');

})