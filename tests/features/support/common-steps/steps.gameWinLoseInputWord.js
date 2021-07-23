const {When, Then} = require('@cucumber/cucumber');
const {setDefaultTimeout} = require('@cucumber/cucumber');

const {By} = require('selenium-webdriver');
const assert = require("assert").strict;

const driver = require('../driver');

setDefaultTimeout(60 * 1000);

When('User input the word {string}', async function(riskyWord) {
    setTimeout( async () => {
        await driver.findElement(By.id('riskFieldWord')).sendKeys(riskyWord);
    }, 2000);
    setTimeout( async () => {
        await driver.findElement(By.id('riskedWordButton')).click();
    }, 2000);
});


Then('User should see message {string}', async function (resultGame) {
    setTimeout( async () => {
        let objResult = await driver.findElement(By.id('stateGame'));
        let strResult = await objResult.getText();
        assert.equal(strResult, resultGame);
        driver.quit();
    }, 4000);
});