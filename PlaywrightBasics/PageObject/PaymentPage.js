class PaymentPage
{

    constructor(page){
        this.countrydrpdown = page.locator("[placeholder='Select Country']");
        this.dropdown = page.locator(".ta-results");
        this.checkout = page.locator(".action__submit ");
        this.usermailid = page.locator(".mt-5 [type='text']");

    }

    async selectCountry(countrycode, expect,email){

            //to click checkout and select country in payment screen
        await this.countrydrpdown.pressSequentially(countrycode);
        const dropdown = this.dropdown;
        await dropdown.waitFor();
        const drpcount = await dropdown.locator("button").count();
        for(let i=0; i<drpcount; i++){
            const text = await dropdown.locator("button").nth(i).textContent();
            if(text === " India"){
                await dropdown.locator("button").nth(i).click();
                break;
            }
        }
        await expect(this.usermailid.first()).toHaveText(email);
        await this.checkout.click();
    }
}

module.exports = {PaymentPage};