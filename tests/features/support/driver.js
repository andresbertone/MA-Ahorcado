const {Builder} = require('selenium-webdriver');

function createDriver() {
  try {
    let driver = new Builder().forBrowser('chrome').build();
    return driver;
  } catch (error) {
    return error;
  }  
};

module.exports = createDriver();