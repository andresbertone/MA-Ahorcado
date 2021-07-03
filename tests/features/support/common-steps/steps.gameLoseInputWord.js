const {Given, When, Then} = require('@cucumber/cucumber');

const {By} = require('selenium-webdriver');
const assert = require("assert").strict;

const driver = require('../driver');


Given('User lose game', async function () {
    await driver.get("https://andresbertone.github.io/MA-Ahorcado/");
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
    }, 9000);
});
