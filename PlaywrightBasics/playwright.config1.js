// @ts-check
const { defineConfig, devices, chromium } = require('@playwright/test');


module.exports = defineConfig({
  testDir: './tests',
  retries:1,
  //workers:4,  //used to control the parallel execution count based on .spec.js file level
  timeout : 30*1000,    // wait time for entire script like searching a web element
  expect :{
    timeout : 5000      // wait time for the line expect (used to assert) in test case
  },
 
  reporter: 'html',

  projects : [
   { name : 'chrome',
    use: {
      browserName : 'chromium',    //chromium for chrome, firefox for firefox and webkit for safari
      headless : false,
      screenshot : 'only-on-failure',
      video:'retain-on-failure',
      trace : 'on', // it will print the trace for each and every test
      //viewport : {width:720, height:720},
      ...devices['Blackberry PlayBook'],
      ignoreHTTPSErrors:true,
      permissions:['geolocation'],
    }
  },
  { name : 'firefox',
    use: {
      browserName : 'firefox',    //chromium for chrome, firefox for firefox and webkit for safari
      headless : false,
      screenshot : 'on',
      trace : 'on',
    }
  },

  ]
  
 ,

 
});

