const {test, expect} = require ('@playwright/test');

test('dropDown test', async ({page})=> {

    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator("#username");
    const pwd = page.locator("[name='password']");
    await userName.fill("rahulshettyac");
    await pwd.fill("learning");
    
    //to select values from static drop down
    await page.locator("select.form-control").selectOption("consult");

    //to select radio button
    await page.locator("#usertype").last().click();
    await page.locator("#okayBtn").click();
    expect(page.locator("#usertype").last()).toBeChecked();

    //to check a checkbox
    await page.locator("#terms").check();
    await expect(page.locator("#terms")).toBeChecked();

    //to uncheck a checkbox
    await page.locator("#terms").uncheck();
    expect( await page.locator("#terms").isChecked()).toBeFalsy();
     // similar to thread.sleep when assertions are not in place.
    //await page.pause();      
    
    //to check whether an attribute has a particular value
    await expect(page.locator("[href*='documents-request']")).toHaveAttribute("class","blinkingText");


});