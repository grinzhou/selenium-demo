const {
	Builder,
	By,
	until
} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
chrome.setDefaultService(new chrome.ServiceBuilder('/Users/erik/webDriver/bin/chromedriver').build());
(async function myFunction() {

	let driver = await new Builder().forBrowser('chrome').build();
	await driver.get('http://localhost:8081/test.html');
	try {
		// await driver.findElement(By.linkText('See an example alert')).click();
		// await driver.wait(until.alertIsPresent());
		// let alert = await driver.switchTo().alert();
		// let alertText = await alert.getText();
		// await alert.accept();

		// await driver.findElement(By.linkText('See an example confirm')).click();
		// await driver.wait(until.alertIsPresent());
		// let alert = await driver.switchTo().alert();
		// let alertText = await alert.getText();
		// await alert.dismiss();

		await driver.findElement(By.linkText('See a sample prompt')).click();
		await driver.wait(until.alertIsPresent());
		let alert = await driver.switchTo().alert();
		await alert.sendKeys('Selenium');
		// await alert.accept();
	} finally {
		// await driver.quit();
	}
})();