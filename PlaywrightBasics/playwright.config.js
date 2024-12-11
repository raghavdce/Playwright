// @ts-check
const { defineConfig, devices, chromium } = require('@playwright/test');


module.exports = defineConfig({
  testDir: './tests',
  timeout : 30*1000,    // wait time for entire script like searching a web element
  expect :{
    timeout : 5000      // wait time for the line expect (used to assert) in test case
  },
 
  reporter: 'html',
  
  use: {
    browserName : 'chromium',    //chromium for chrome, firefox for firefox and webkit for safari
    headless : false,
    screenshot : 'only-on-failure',
    trace : 'on',
  },

 
});

