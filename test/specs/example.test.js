const { assert } = require('console');
const { Builder, By } = require('selenium-webdriver');
let fs =require('fs');
const chrome = require('selenium-webdriver/chrome');
chrome.setDefaultService(new chrome.ServiceBuilder('/Users/erik/webDriver/bin/chromedriver').build());
(async function myFunction() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:8081/test.html');
    let url = await driver.getCurrentUrl();
    // await driver.navigate().back();
    // await driver.navigate().forward();
    // await driver.navigate().refresh();
    let title = await driver.getTitle();
    let window = await driver.getWindowHandle();
    const originalWindow = await driver.getWindowHandle();
    const iframe = await driver.findElement(By.css('#modal> iframe'));

    const { width, height } = await driver.manage().window().getRect();
    const { x, y } = await driver.manage().window().getRect();
    console.log(width, height, x, y);
    assert((await driver.getAllWindowHandles()).length === 1);
    try {
        await driver.findElement(By.linkText('123')).click();
        await driver.wait(async () => (await driver.getAllWindowHandles()).length === 2, 1000);

        const windows = await driver.getAllWindowHandles();
        windows.forEach(async handle => {
            if (handle !== originalWindow) {
                await driver.switchTo().window(handle);
            }
        })

        // await driver.wait(until.titleIs('Selenium documentation'), 1000);
        await driver.switchTo().newWindow('window');
        await driver.close();
        await driver.switchTo().window(originalWindow);
        
        await driver.switchTo().frame(iframe);
        await driver.findElement(By.css('.dismiss')).
        await driver.switchTo().defaultContent();

        await driver.manage().window().setRect({width: 1024, height:768});
        await driver.manage().window().setRect({x: 0, y: 0});
        await driver.manage().window().maximize();
        // await driver.manage().window().fullscreen();

        // let encodedString = driver.takeScreenshot().then(res => {
        //     fs.writeFileSync('./image.png', res, 'base64');
        // });

        // await fs.writeFileSync('./image.png', encodedString, 'base64');
        let ele = await driver.findElement(By.css('h1'));
        let encodedString = await ele.takeScreenshot(true);
        await fs.writeFileSync('./image.png', encodedString, 'base64');

        let header = await driver.findElement(By.css('h1'));
        let text = await driver.executeScript('return arguments[0].innerText', header);

        console.log('text', text);
    } finally {
        // await driver.quit();
    }
})();