const {test,expect} = require('@playwright/test')

test('endToEndTesting', async ({page}) =>{


    const prod = "IPHONE 13 PRO";
    const email = "raghavdce@gmail.com"
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("Rahulshetty@123");
    await page.locator("#login").click();
    await page.locator(".card-body").first().waitFor();
    //clicking add to cart on the desired product
    const prodList = page.locator(".card-body");
    const count = await prodList.count();
    console.log(count);
    for(let i=0; i<count; ++i)
    {
        if (await prodList.nth(i).locator("b").textContent() === prod)
        {
           await  prodList.nth(i).locator("text= Add To Cart").click();
           break;

        }

    }

    //to check whether the cart has the product
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('IPHONE 13 PRO')").isVisible();
    expect(bool).toBeTruthy();

    //to click checkout and select country in payment screen
    await page.locator("text=Checkout").click();
    await page.locator("[placeholder='Select Country']").pressSequentially("ind");
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    const drpcount = await dropdown.locator("button").count();
    for(let i=0; i<drpcount; i++){
        const text = await dropdown.locator("button").nth(i).textContent();
        if(text === " India"){
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }

    //to check the payment page the logged in email and click place order
    await expect(page.locator(".mt-5 [type='text']").first()).toHaveText(email);
    await page.locator(".action__submit ").click();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    const newOrderID = orderID.split(" ")[2].trim();
    console.log(newOrderID);

    //check whether the order id exist in the orders screen
    await page.locator("li [routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const tablerows = await page.locator("tbody tr");

    for(let i=0; i< await tablerows.count(); i++){
        const rowOrderID = await tablerows.nth(i).locator("th").textContent();
        if(orderID.includes(rowOrderID)){

            await tablerows.nth(i).locator("button").first().click();
            break;
        }
    }

    const finalOrder = await page.locator('div .col-text').textContent();
    expect(orderID.includes(finalOrder)).toBeTruthy();
    

    await page.pause();

    
}
)