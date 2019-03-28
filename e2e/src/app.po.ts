import { browser, by, element } from 'protractor';

export class AppPage {

  static getTextTrendsBtn() {
    return element(by.css('.menu [routerLink="/trends"] span')).getText();
  }
  navigateToFullWidth() {
    const width = 1580;
    const height = 800;
    browser.driver.manage().window().setSize(width, height);
    return browser.get(browser.baseUrl) as Promise<any>;
  }
  navigateToMobile() {
    const width = 750;
    const height = 400;
    browser.driver.manage().window().setSize(width, height);
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTextSearchBtn() {
    return element(by.css('.menu [routerLink="/search"] span')).getText();
  }

  getTextBestRatedBtn() {
    return element(by.css('.menu [routerLink="/best-rated"] span')).getText();
  }

  getMobileMenuBtn() {
    return element(by.css('.mobileMenu > button'));
  }

  getTextMobileTrendsBtn() {
    return element(by.css('.metMenu [routerLink="/trends"] span')).getText();
  }

  getTextMobileBestRatedBtn() {
    return element(by.css('.metMenu [routerLink="/best-rated"] span')).getText();
  }

  getTextMobileSearchBtn() {
    return element(by.css('.metMenu [routerLink="/search"] span')).getText();
  }

  getSearchBtn() {
    return element(by.css('.menu [routerLink="/search"]'));
  }

  getBestRatedBtn() {
    return element(by.css('.menu [routerLink="/best-rated"]'));
  }

  getTrendsBtn() {
    return element(by.css('.menu [routerLink="/trends"]'));
  }

  getMobileSearchBtn() {
    return element(by.css('.metMenu [routerLink="/search"]'));
  }

  getMobileBestRatedBtn() {
    return element(by.css('.metMenu [routerLink="/best-rated"]'));
  }

  getMobileTrendsBtn() {
    return element(by.css('.metMenu [routerLink="/trends"]'));
  }

  clickButton(selector: string) {
    browser.executeScript(`
        const button = document.querySelector('${selector}');
        button.click();`
    );
  }

  getLastWeekTrendsFirstEl() {
    return element(by.css('.lastWeekTrendsWrapper > div:first-of-type'));
  }

  getTillFirstEl() {
    return element.all(by.css('.movieTitle')).first();
  }

  addTextToSearchinput(text: string) {
    element(by.css('.formWrapper input')).clear();
    element(by.css('.formWrapper input')).sendKeys(text)
  }

  getSubmitBtn() {
    return element(by.css('[type="submit"]'));
  }

}
