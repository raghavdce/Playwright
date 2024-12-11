const{Before, After, BeforeStep, AfterStep, Status} = require('@cucumber/cucumber');
const playwright = require('@playwright/test');
const {POManager} = require('../../PageObject/POManager');

Before(async function(){
    const browser = await playwright.chromium.launch(
        {
          headless:false
        }
      );
      const context = await browser.newContext();
      this.page = await context.newPage();
      this.poManager = new POManager(this.page);
})

AfterStep(async function (result) {
    if(result.status === Status.FAILED ){
        await this.page.screenshot({path:'screenshot1.png'});
    }
    else
        await this.page.screenshot({path:'screenshot.png'});
})