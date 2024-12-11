class OrderConfirmationPage
{

    constructor(page){
        this.msg = page.locator(".hero-primary");
        this.orderID  = page.locator(".em-spacer-1 .ng-star-inserted");

    }

    async orderConfirmation(expect, textCheck){
        
    await expect(this.msg).toHaveText(textCheck);
    const orderID = await this.orderID.textContent();
    const newOrderID = orderID.split(" ")[2].trim();
    console.log(newOrderID);
    return orderID;
    }
}

module.exports = {OrderConfirmationPage};