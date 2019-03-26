import { browser, by, element } from 'protractor';
var AppPage = /** @class */ (function () {
    function AppPage() {
    }
    AppPage.prototype.navigateToFullWidth = function () {
        var width = 1580;
        var height = 800;
        browser.driver.manage().window().setSize(width, height);
        return browser.get(browser.baseUrl);
    };
    AppPage.prototype.navigateToMobile = function () {
        var width = 750;
        var height = 400;
        browser.driver.manage().window().setSize(width, height);
        return browser.get(browser.baseUrl);
    };
    AppPage.prototype.getTextSearchBtn = function () {
        return element(by.css('.menu [routerLink="/search"] span')).getText();
    };
    AppPage.prototype.getTextBestRatedBtn = function () {
        return element(by.css('.menu [routerLink="/best-rated"] span')).getText();
    };
    AppPage.prototype.getTextTrendsBtn = function () {
        return element(by.css('.menu [routerLink="/trends"] span')).getText();
    };
    AppPage.prototype.getMobileMenuBtn = function () {
        return element(by.css('.mobileMenu > button'));
    };
    AppPage.prototype.getTextMobileTrendsBtn = function () {
        return element(by.css('.metMenu [routerLink="/trends"] span')).getText();
    };
    AppPage.prototype.getTextMobileBestRatedBtn = function () {
        return element(by.css('.metMenu [routerLink="/best-rated"] span')).getText();
    };
    AppPage.prototype.getTextMobileSearchBtn = function () {
        return element(by.css('.metMenu [routerLink="/search"] span')).getText();
    };
    AppPage.prototype.getSearchBtn = function () {
        return element(by.css('.menu [routerLink="/search"]'));
    };
    AppPage.prototype.getBestRatedBtn = function () {
        return element(by.css('.menu [routerLink="/best-rated"]'));
    };
    AppPage.prototype.getTrendsBtn = function () {
        return element(by.css('.menu [routerLink="/trends"]'));
    };
    AppPage.prototype.getMobileSearchBtn = function () {
        return element(by.css('.metMenu [routerLink="/search"]'));
    };
    AppPage.prototype.getMobileBestRatedBtn = function () {
        return element(by.css('.metMenu [routerLink="/best-rated"]'));
    };
    AppPage.prototype.getMobileTrendsBtn = function () {
        return element(by.css('.metMenu [routerLink="/trends"]'));
    };
    AppPage.prototype.clickButton = function (selector) {
        browser.executeScript("\n        const button = document.querySelector('" + selector + "');\n        button.click();");
    };
    AppPage.prototype.getLastWeekTrendsFirstEl = function () {
        return element(by.css('.lastWeekTrendsWrapper > div:first-of-type'));
    };
    AppPage.prototype.getTillFirstEl = function () {
        return element.all(by.css('.movieTitle')).first();
    };
    AppPage.prototype.addTextToSearchinput = function (text) {
        element(by.css('.formWrapper input')).clear();
        element(by.css('.formWrapper input')).sendKeys(text);
    };
    AppPage.prototype.getSubmitBtn = function () {
        return element(by.css('[type="submit"]'));
    };
    return AppPage;
}());
export { AppPage };
//# sourceMappingURL=app.po.js.map