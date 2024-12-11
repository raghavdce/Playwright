const {LoginPage} = require('../PageObject/LoginPage');
const {DashboardPage} = require('../PageObject/DashboardPage');
const {CartPage} = require('../PageObject/CartPage');
const {PaymentPage} = require('../PageObject/PaymentPage');
const {OrderConfirmationPage} = require('../PageObject/OrderConfirmationPage');
const {ViewPage} = require('../PageObject/ViewPage');

class POManager
{
    //change constructor to have only page if error occurs
    constructor(page){
        this.page = page;
        this.LoginPage = new LoginPage(this.page);
        this.dashboard = new DashboardPage(this.page);
        this.cartcheck = new CartPage(this.page);
        this.paymentPage = new PaymentPage(this.page);
        this.orderConfirmation = new OrderConfirmationPage(page);
        this.viewPage = new ViewPage(page);

    }

    getLogin(){
        return this.LoginPage;
    }

    getdashboard(){
        return this.dashboard;
    }

    getcart(){
        return this.cartcheck;
    }

    getpayment(){
        return this.paymentPage;
    }

    getorderconfirm(){
        return this.orderConfirmation;
    }

    getpageView(){
        return this.viewPage;
    }


}

module.exports = {POManager};