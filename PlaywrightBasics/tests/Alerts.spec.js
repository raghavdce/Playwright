const {test,expect} = require('@playwright/test')

test('alertsHandling', async ({page}) => {

    page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    // to check whether an element is visible or not
    await page.pause();
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();

    //to handle alert
    page.on('dialog', dialog => dialog.accept());   //await is not reqd as this line should keep looking for alert
    await page.locator("#confirmbtn").click();  //this line helps to display the alert on screen

}
)