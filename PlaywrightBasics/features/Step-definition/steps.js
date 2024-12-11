const{Given,When, Then} = require('@cucumber/cucumber');
const {expect} = require('@playwright/test');
const playwright = require('@playwright/test');
const {POManager} = require('../../PageObject/POManager');


Given('Login using {string} and {string}', {timeout : 20*1000}, async function (username, password) {
    // Write code here that turns the phrase above into concrete actions
    
    const loginpage = this.poManager.getLogin();
    await loginpage.goTo();
    await loginpage.loginToApp(username, password);
  });

  When('User searches for {string} and add to cart', async function (prod) {
    // Write code here that turns the phrase above into concrete actions
    this.dashboard = this.poManager.getdashboard();
    await this.dashboard.searchProdAddCart(prod);
    await this.dashboard.navigateToCart();
  });
  
  Then('verify cart page displays the product {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    const cartcheck = this.poManager.getcart();
    await cartcheck.checkingCart(expect);
  });

  When('User enters the valid details like {string} and {string} places the order', async function (countryCode, email) {
    // Write code here that turns the phrase above into concrete actions
    const paymentPage = this.poManager.getpayment();
    await paymentPage.selectCountry(countryCode, expect, email);
  });

  Then('verify order in the order history with text {string}', async function (textCheck) {
    // Write code here that turns the phrase above into concrete actions
    const orderConfirmation = this.poManager.getorderconfirm();
    const orderID = await orderConfirmation.orderConfirmation(expect, textCheck);

    const viewPage = this.poManager.getpageView();
    await viewPage.viewOrders(orderID,expect);
  });

  
  Then('validate the error message', function () {
    console.log("dummy method");
  });
