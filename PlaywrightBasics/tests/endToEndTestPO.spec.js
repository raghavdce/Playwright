const {test,expect} = require('@playwright/test');
const {POManager} = require('../PageObject/POManager');
const dataSet = JSON.parse(JSON.stringify(require('../Utility/endToEndTestPOTestdata.json')));

for (const data of dataSet)
{
    test (`endToEndTestingPO ${data.prod}`, async ({page}) =>
{
    const poManager = new POManager(page);
    
    const loginpage = poManager.getLogin();
    await loginpage.goTo();
    await loginpage.loginToApp(data.email, data.password);

    const dashboard = poManager.getdashboard();
    await dashboard.searchProdAddCart(data.prod);
    await dashboard.navigateToCart();

    const cartcheck = poManager.getcart();
    await cartcheck.checkingCart(expect);

    const paymentPage = poManager.getpayment();
    await paymentPage.selectCountry(data.countryCode, expect, data.email);

    const orderConfirmation = poManager.getorderconfirm();
    const orderID = await orderConfirmation.orderConfirmation(expect, data.textCheck);

    const viewPage = poManager.getpageView();
    await viewPage.viewOrders(orderID,expect);

    await page.pause();
}
)

}


