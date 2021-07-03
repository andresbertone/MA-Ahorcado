const {Given, When, Then} = require('@cucumber/cucumber');

const {By} = require('selenium-webdriver');
const assert = require("assert").strict;

const driver = require('../driver');


Given('User win game', async function () {
    await driver.get("http://127.0.0.1:5500/index.html");
});

When('User input the correct word', async function () {
    await driver.findElement(By.id('riskFieldWord')).sendKeys('agilidad');
    setTimeout( async () => {
        await driver.findElement(By.id('riskedWordButton')).click();
    }, 2000);
});

Then('User should see message Ganaste', async function () {
    setTimeout( async () => {
        let objResult = await driver.findElement(By.id('stateGame'));
        let strResult = await objResult.getText();
        assert.equal(strResult, 'GANASTE');
        driver.quit();
    }, 4000);
});