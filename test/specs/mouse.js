const {
	Builder,
	By
} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
chrome.setDefaultService(new chrome.ServiceBuilder('/Users/erik/webDriver/bin/chromedriver').build());
let driver = new Builder().forBrowser('chrome').build();
(async function myFunction() {
	try {
		await driver.get('https://crossbrowsertesting.github.io/drag-and-drop');
		let searchBtn = driver.findElement(By.linkText("登录"));
		let gmailLink = driver.findElement(By.linkText("Gmail"));
		let sourceEle = driver.findElement(By.id("draggable"));
		let targetEle = driver.findElement(By.id('droppable'));
		let offset = await targetEle.getRect();
		let x = await offset.x;
		let y = await offset.y;
		const actions = driver.actions({async: true});
		// await actions.move({origin: searchBtn}).press().perform();
		// await actions.contextClick(searchBtn).perform();
		// await actions.doubleClick(searchBtn).perform();
		// await actions.move({origin: gmailLink}).perform();
		// let offset = await gmailLink.getRect();
		// let x = await offset.x;
		// let y = await offset.y;
		// await actions.move({x: parseInt(x), y: parseInt(y)}).pause(3000).perform();
		// await actions.dragAndDrop(sourceEle, targetEle).perform();
		await actions.dragAndDrop(sourceEle, {x: parseInt(x), y: parseInt(y)}).perform();
	}
	finally {}
})();