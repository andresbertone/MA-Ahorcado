const {Given, When, Then} = require('@cucumber/cucumber');
const {setDefaultTimeout} = require('@cucumber/cucumber');

const {By} = require('selenium-webdriver');
const assert = require("assert").strict;

const driver = require('../driver');
const config = require('../config.json');

setDefaultTimeout(60 * 1000);


Given('User win game', async function () {
    await driver.get(config.URL);
    let alert = await driver.switchTo().alert();
    setTimeout(async () => {
        await alert.accept();
    }, 1000);
});

When('User input the correct word', async function () {
    setTimeout(async () => {
        await driver.findElement(By.id('riskFieldWord')).sendKeys('agilidad');
        setTimeout( async () => {
            await driver.findElement(By.id('riskedWordButton')).click();
        }, 2000);
    }, 4000);
});

Then('User should see message Ganaste', async function () {
    setTimeout( async () => {
        let objResult = await driver.findElement(By.id('stateGame'));
        let strResult = await objResult.getText();
        assert.equal(strResult, 'GANASTE');
        driver.quit();
    }, 7000);
});