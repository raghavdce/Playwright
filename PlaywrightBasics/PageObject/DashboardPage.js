class DashboardPage
{

    constructor(page)
    {
        this.prodList = page.locator(".card-body");
        this.cart = page.locator("[routerlink*='cart']");

    }


    async searchProdAddCart(prod){

        //clicking add to cart on the desired product
        const count = await this.prodList.count();
        console.log(count);
        for(let i=0; i<count; ++i)
        {
            if (await this.prodList.nth(i).locator("b").textContent() === prod)
            {
            await  this.prodList.nth(i).locator("text= Add To Cart").click();
            break;

            }
        }
        await this.cart.click();

    }

    async navigateToCart(){
        await this.cart.click();
    }
}

module.exports = {DashboardPage};