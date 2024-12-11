const{test, expect, request} = require('@playwright/test');
const payload = {userEmail:"raghavdce@gmail.com", userPassword:"Rahulshetty@123"};
const orderPayload = {orders: [{country: "United Kingdom", productOrderedId: "6581cade9fd99c85e8ee7ff5"}]};
let token, orderId;

test ('ToGetToken', async()=>
{
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data:payload
        })
        expect(loginResponse.ok()).toBeTruthy();
        const responseJson = await loginResponse.json();
        token = responseJson.token;
        console.log(token);

        const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
            data:orderPayload,
            headers:{
                'Authorization':token,
                'Content-Type':'application/json'
            },
        })
        const orderjson = await orderResponse.json();
        orderId = orderjson.orders[0];
        console.log(orderId);

});

test('ToPassTokenToUI', async({page})=>
{
    page.addInitScript(value =>{
        window.localStorage.setItem('token',value);
    }, token);
    await page.goto("https://rahulshettyacademy.com/client");
    await page.pause();
})