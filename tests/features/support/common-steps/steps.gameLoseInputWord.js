const {Given, When, Then} = require('@cucumber/cucumber');

const {By} = require('selenium-webdriver');
const assert = require("assert").strict;

const driver = require('../driver');
const config = require('../config.json');


Given('User lose game', async function () {
    await driver.get(config.URL);
    let alert = await driver.switchTo().alert();
    setTimeout(async () => {
        await alert.accept();
    }, 1000);
});


When('User input the wrong word three times', async function () {
    // first attempt
    setTimeout( async () => {
        await driver.findElement(By.id('riskFieldWord')).sendKeys('jirafa');
        await driver.findElement(By.id('riskedWordButton')).click();
    }, 2000);

    // second attempt
    setTimeout( async () => {
        await driver.findElement(By.id('riskFieldWord')).sendKeys('jirafa');
        await driver.findElement(By.id('riskedWordButton')).click();
    }, 4000);

    // third attempt
    setTimeout( async () => {
        await driver.findElement(By.id('riskFieldWord')).sendKeys('jirafa');
        await driver.findElement(By.id('riskedWordButton')).click();
    }, 6000);
});


Then('User should see message Perdiste', async function () {
    setTimeout( async () => {
        let objResult = await driver.findElement(By.id('stateGame'));
        let strResult = await objResult.getText();
        assert.equal(strResult, 'PERDISTE');
        driver.quit();
    }, 8000);
});