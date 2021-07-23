const {Given, When} = require('@cucumber/cucumber');

const {By} = require('selenium-webdriver');

const driver = require('../driver');
const config = require('../config.json');


Given('User logs in', async function () {
    await driver.get(config.URL);
    let alert = await driver.switchTo().alert();
    setTimeout(async () => {
        await alert.accept();
    }, 1000);
});


When('User choose letter {string}', function (chosenLetter) {
    setTimeout(async () => {
        await driver.findElement(By.id(`tecla${chosenLetter}`)).click();
    }, 2000);
});