const {test,expect} = require('@playwright/test')

test('frames', async ({page}) => {

    page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const framesName = page.frameLocator("#courses-iframe");
    await framesName.locator("li a[href*='lifetime-access']:visible").click();




}
)