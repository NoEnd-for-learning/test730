const { expect } = require('chai');
const webDriver = require('selenium-webdriver');
const By = webDriver.By;
const chromeDriver = require('selenium-webdriver/chrome');

describe('百度首页 UI 测试', function () {
  this.timeout(500000);

  let driver;
  before(() => {
    driver = new webDriver.Builder()
      .forBrowser('chrome')
      .setChromeOptions(new chromeDriver.Options().addArguments(['headless']))
      .build();
  });

  it('should have title "百度一下，你就知道"', function (done) {
    driver.get('https://www.baidu.com').then(() => {
      driver.getTitle().then(title => {
        expect(title).to.equal('百度一下，你就知道');
        done();
      });
    });
  });

  it('should have button', function (done) {
    driver.findElement(By.id('su')).then(button => {
      button.getAttribute('value').then(value => {
        expect(value).to.equal('百度一下');
        done();
      });
    });
  });

  after(() => {
    driver.quit();
  });
});
