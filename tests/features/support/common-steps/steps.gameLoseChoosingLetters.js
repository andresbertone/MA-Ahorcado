const {Given, When} = require('@cucumber/cucumber');

const {By} = require('selenium-webdriver');

const driver = require('../driver');
const config = require('../config.json');


Given('User lose game choosing wrong letters', async function () {
    await driver.get(config.URL);
    let alert = await driver.switchTo().alert();
    setTimeout(async () => {
        await alert.accept();
    }, 1000);
});


When('User choose letter h', async function () {
    setTimeout(async () => {
        await driver.findElement(By.id('teclah')).click();
    }, 2000);
});

When('User choose letter s', async function () {
    setTimeout(async () => {
        await driver.findElement(By.id('teclas')).click();
    }, 3000);
});

When('User choose letter p', async function () {
    setTimeout(async () => {
        await driver.findElement(By.id('teclap')).click();
    }, 4000);
});

When('User choose letter k', async function () {
    setTimeout(async () => {
        await driver.findElement(By.id('teclak')).click();
    }, 5000);
});

When('User choose letter q', async function () {
    setTimeout(async () => {
        await driver.findElement(By.id('teclaq')).click();
    }, 6000);
});

When('User choose letter t', async function () {
    setTimeout(async () => {
        await driver.findElement(By.id('teclat')).click();
    }, 7000);
});