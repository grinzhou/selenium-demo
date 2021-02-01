const {
	Builder,
	By
} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
chrome.setDefaultService(new chrome.ServiceBuilder('/Users/erik/webDriver/bin/chromedriver').build());
let driver = new Builder().forBrowser('chrome').build();
(async function myFunction() {
	// await driver.get('http://www.google.com');
	//   let searchBar = driver.findElement(By.name('q'));
	//   await searchBar.sendKeys('Webdriver');
	// try {
	// 	await driver.get('http://www.google.com');
	// 	let elements = await driver.findElements(By.css('.Fx4vi'));
	// 	for (let e of elements) {
	// 		console.log(await e.getText());
	// 	}
	// }
	// finally {
	// 	// await driver.quit();
	// }
	// await driver.get('http://www.google.com');
	// let searchForm = driver.findElement(By.name('f'));
	// let searchBar = searchForm.findElement(By.name('q'));
	// await searchBar.sendKeys('Webdriver');
	await (await driver).get('http://localhost:8081/test.html');
	// let element = driver.findElement(By.css('div'));
	// let elements = await element.findElements(By.css('p'));
	// for (let e of elements) {
	// 	console.log(await e.getText());
	// }

	// await driver.findElement(By.css('[name="q"]')).sendKeys('webElement');
	// let attr = await driver.switchTo().activeElement().getAttribute('title');
	// console.log(`${attr}`);
	// let element=  await driver.findElement(By.name('q')).isEnabled();
	// console.log(element);

	// let res = await driver.findElement(By.css('input[type="checkbox"]:last-of-type')).isSelected();
	// console.log(res);

	// let value = await driver.findElement(By.css('input')).getTagName();
	// console.log(value);

	// let element = await driver.findElement(By.css('input')).getRect();
	// console.log(element);

	// let cssValue = await driver.findElement(By.linkText("More information...")).getCssValue('color');
	// console.log(cssValue);

	let text = await (await driver).findElement(By.css('a')).getText();
	console.log(text);
})();