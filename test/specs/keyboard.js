const {
	Builder, Key, By
} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
chrome.setDefaultService(new chrome.ServiceBuilder('/Users/erik/webDriver/bin/chromedriver').build());
let driver = new Builder().forBrowser('chrome').build();
(async function myFunction() {
	try {
		await driver.get('https://www.google.com');
		// await driver.findElement(By.name('q')).sendKeys('webdriver', Key.ENTER);
		// await driver.actions().keyDown(Key.CONTROL).sendKeys('a').perform();
		// let search = driver.findElement(By.name('q'));
		// await driver.actions().click(search).keyDown(Key.SHIFT).sendKeys('qwerty').keyUp(Key.SHIFT).sendKeys('qwerty').perform();

		let searchInput = driver.findElement(By.name('q'));
		await searchInput.sendKeys('selenium');
		setTimeout(() => {
			searchInput.clear();
		}, 1500);
	}
	finally {
		// await driver.quit();
	}
})();