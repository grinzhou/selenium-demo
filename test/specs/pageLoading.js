const { Builder, Capabilities } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
chrome.setDefaultService(new chrome.ServiceBuilder('/Users/erik/webDriver/bin/chromedriver').build());
const caps = new Capabilities();
// caps.setPageLoadStrategy("normal");
// caps.setPageLoadStrategy('eager');
caps.setPageLoadStrategy('none');
(async function myFunction() {
  let driver = await new Builder().withCapabilities(caps).forBrowser('chrome').build();
  try {
      await driver.get('https://www.google.com');
  }
  finally {
      await driver.quit();
  }
})();