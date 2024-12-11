const {test} = require('@playwright/test')

test('splLocatorTechnique', async({page})=>{
    await page.goto("https://rahulshettyacademy.com/angularpractice/");

    //to select a radio button or a checkbox using the label tag
    await page.getByLabel("Employed").click();
    await page.getByLabel("Check me out if you Love IceCreams!").check();

    //to select a dropdown option for select tag
    await page.getByLabel("Gender").selectOption("Male");

    //to fill in the value for the textbox field
    await page.getByPlaceholder("Password").fill("Ragav");
    await page.getByText("Check me out if you Love IceCreams!").click();

    //await page.pause();

    await page.getByRole("button",{name:"Submit"}).click();
    await page.getByRole("link",{name:"Shop"}).click();

    await page.locator("app-card").filter({hasText: "Blackberry"}).getByRole("button").click();
    await page.pause();

    page.on('dialog', dialog => dialog.accept());

    

})