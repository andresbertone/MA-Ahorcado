const {Given, When} = require('@cucumber/cucumber');

const {By} = require('selenium-webdriver');

const driver = require('../driver');
const config = require('../config.json');


Given('User win game choosing correct letters', async function () {
    await driver.get(config.URL);
    let alert = await driver.switchTo().alert();
    setTimeout(async () => {
        await alert.accept();
    }, 1000);
});


When('User choose letter a', async function () {
    setTimeout(async () => {
        await driver.findElement(By.id('teclaa')).click();
    }, 2000);
});

When('User choose letter g', async function () {
    setTimeout(async () => {
        await driver.findElement(By.id('teclag')).click();
    }, 3000);
});

When('User choose letter i', async function () {
    setTimeout(async () => {
        await driver.findElement(By.id('teclal')).click();
    }, 4000);
});

When('User choose letter l', async function () {
    setTimeout(async () => {
        await driver.findElement(By.id('teclai')).click();
    }, 5000);
});

When('User choose letter d', async function () {
    setTimeout(async () => {
        await driver.findElement(By.id('teclad')).click();
    }, 6000);
});