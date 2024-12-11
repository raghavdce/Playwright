class CartPage
{

    constructor(page){
        this.cartList = page.locator("div li");
        this.cartProd = page.locator(".cartSection h3");
        this.checkout = page.locator("text=Checkout");


    }

    async checkingCart(expect){
        await this.cartList.first().waitFor();
        const bool = await this.cartProd.isVisible();
        expect(bool).toBeTruthy();
        await this.checkout.click();
    }


}

module.exports = {CartPage};