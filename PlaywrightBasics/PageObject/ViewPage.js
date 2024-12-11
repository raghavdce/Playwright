class ViewPage
{

    constructor(page) { 
        this.ordersPage = page.locator("li [routerlink*='myorders']");
        this.table = page.locator("tbody");
        this.tablerows = page.locator("tbody tr");
        this.finalOrder = page.locator('div .col-text');

    }

    async viewOrders(orderID,expect){

        await this.ordersPage.click();
        await this.table.waitFor();
        const tablerows = await this.tablerows;

        for(let i=0; i< await tablerows.count(); i++){
            const rowOrderID = await tablerows.nth(i).locator("th").textContent();
            if(orderID.includes(rowOrderID)){

                await tablerows.nth(i).locator("button").first().click();
                break;
            }
        }

        const finalOrder = await this.finalOrder.textContent();
        expect(orderID.includes(finalOrder)).toBeTruthy();
    }
}

module.exports = {ViewPage};