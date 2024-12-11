const {test,expect} = require('@playwright/test')

test('alertsHandling', async ({page}) => {

    page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.pause();
    await page.locator("#mousehover").hover();



}
)