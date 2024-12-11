class LoginPage
{
constructor(page)
    {
        this.page = page;
        this.enterUN = page.locator("#userEmail");
        this.enterPwd = page.locator("#userPassword");
        this.clickLogin = page.locator("#login");
        this.cardbody = page.locator(".card-body");
    }

async goTo()
    {
        await this.page.goto("https://rahulshettyacademy.com/client/");
    }

async loginToApp(email, password)
    {
        await this.enterUN.fill(email);
        await this.enterPwd.fill(password);
        await this.clickLogin.click();
        await this.cardbody.first().waitFor();
    }
}

module.exports = {LoginPage};

