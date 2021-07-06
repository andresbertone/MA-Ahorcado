const {Given, When} = require('@cucumber/cucumber');

const {By} = require('selenium-webdriver');

const driver = require('../driver');
const config = require('../config.json');

Given('User lose game choosing wrong letters', async function () {
    await driver.get(config.URL);
});

When('User choose letter t', async function () {
    setTimeout(async () => {
        await driver.findElement(By.id('teclat')).click();
    }, 2000);
});

When('User choose letter y', async function () {
    await driver.findElement(By.id('teclay')).click();
});


When('User choose letter r', async function () {
    await driver.findElement(By.id('teclar')).click();
});

When('User choose letter p', async function () {
    await driver.findElement(By.id('teclap')).click();
});

When('User choose letter m', async function () {
    await driver.findElement(By.id('teclam')).click();
});

When('User choose letter q', async function () {
    await driver.findElement(By.id('teclaq')).click();
});