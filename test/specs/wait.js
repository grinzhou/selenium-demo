const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');
chrome.setDefaultService(new chrome.ServiceBuilder('/Users/erik/webDriver/bin/chromedriver').build());
(async function myFunction() {
	let driver = await new Builder().forBrowser('chrome').build();
	await driver.get('http://localhost:8081/test.html');
	// const element = driver.findElement(By.css('p'));
	// assert.strictEqual(await element.getText(), 'Hello from Javascript!');

	// const documentInitialised = () => driver.executeScript('return initialised');
	// driver.get('http://localhost:8081/test.html');
	// await driver.wait(() => documentInitialised(), 10000);
	// const element = driver.findElement(By.css('p'));
	// assert.strictEqual(await element.getText(), 'Hello from Javascript!');
	// let ele = await driver.wait(until.elementLocated(By.css('p')), 10000);
	// let foo = await ele.getText();
	// assert(foo == "Hello from Javascript!");

	// await driver.manage().setTimeouts({ implicit: 10000 });
	// let webElement = driver.findElement(By.id("test"));

	let foo = await driver.wait(until.elementsLocated(By.id('foo')), 3000, 'Timed out after 30 seconds', 5000);
})();