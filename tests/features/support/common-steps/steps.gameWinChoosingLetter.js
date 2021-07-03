const {Given, When} = require('@cucumber/cucumber');

const {By} = require('selenium-webdriver');

const driver = require('../driver');


Given('User win game choosing correct letters', async function () {
    await driver.get("https://andresbertone.github.io/MA-Ahorcado/");
});

When('User choose letter a', async function () {
    setTimeout(async () => {
        await driver.findElement(By.id('teclaa')).click();
    }, 2000);
});

When('User choose letter g', async function () {
    await driver.findElement(By.id('teclag')).click();
});

When('User choose letter i', async function () {
    await driver.findElement(By.id('teclai')).click();
});

When('User choose letter l', async function () {
    await driver.findElement(By.id('teclal')).click();
});

When('User choose letter d', async function () {
    await driver.findElement(By.id('teclad')).click();
});