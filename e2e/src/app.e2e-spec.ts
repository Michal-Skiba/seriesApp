import { AppPage } from './app.po';
import { browser, element, by, protractor } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('buttons from mobile should not exist, button from high width page should exist, and should return correct text', () => {
    page.navigateToFullWidth();
    expect(page.getTextSearchBtn()).toEqual(`Wyszukaj serial`);
    expect(page.getTextBestRatedBtn()).toEqual(`Najlepiej oceniane seriale`);
    expect(page.getTextTrendsBtn()).toEqual(`Ostatnie trendy`);
    expect(element(by.css('.metMenu')).isPresent()).toEqual(false)
  })

  it('should mobile buttons exist, and return correct text', () => {
    page.navigateToMobile();
    page.getMobileMenuBtn().click()
    expect(page.getTextMobileTrendsBtn()).toEqual(`Ostatnie trendy`)
    expect(page.getTextMobileSearchBtn()).toEqual(`Wyszukaj serial`);
    expect(page.getTextMobileBestRatedBtn()).toEqual(`Najlepiej oceniane seriale`);
  })

  it('click on best-rated button(on high width) should redirect to best-rated component, Footer should still display' + 
  'click on till title should redirect to serie detail', () => {
    page.navigateToFullWidth();
    page.getBestRatedBtn().click()
    expect(element(by.id('bestRated')).isPresent()).toEqual(true)
    expect(element(by.id('footer')).isPresent()).toEqual(true)
    page.getTillFirstEl().click()
    expect(element(by.id('serieDetail')).isPresent()).toEqual(true)
  })

  it('click on last-trends button(on high width) should redirect to last-trends component. Footer should still display' +
  'click on till title should redirect to serie detail', () => {
    page.navigateToFullWidth();
    page.getTrendsBtn().click()
    expect(element(by.id('lastTrends')).isPresent()).toEqual(true)
    expect(element(by.id('footer')).isPresent()).toEqual(true)
  })

  it('click on search button(on high width) should redirect to search component. Footer should still display', () => {
    page.navigateToFullWidth();
    browser.get('/test')
    page.getSearchBtn().click()
    expect(element(by.id('seriesSearch')).isPresent()).toEqual(true)
    expect(element(by.id('footer')).isPresent()).toEqual(true)
  })

  it('click on button(on small screen) should redirect to chosen component, Footer should still display', () => {
    page.navigateToMobile();
    page.getMobileMenuBtn().click()
    page.clickButton('.metMenu [routerLink="/best-rated"]');
    expect(element(by.id('bestRated')).isPresent()).toEqual(true)
    expect(element(by.id('footer')).isPresent()).toEqual(true)
    page.getMobileMenuBtn().click()
    page.clickButton('.metMenu [routerLink="/trends"]');
    expect(element(by.id('lastTrends')).isPresent()).toEqual(true)
    expect(element(by.id('footer')).isPresent()).toEqual(true)
    page.getMobileMenuBtn().click()
    page.clickButton('.metMenu [routerLink="/search"]');
    expect(element(by.id('seriesSearch')).isPresent()).toEqual(true)
    expect(element(by.id('footer')).isPresent()).toEqual(true)
  })

  it('click on lastWeek table row should redirect to serieDetail component', () => {
    page.navigateToFullWidth();
    page.getLastWeekTrendsFirstEl().click();
    expect(element(by.id('serieDetail')).isPresent()).toEqual(true)
    expect(element(by.id('footer')).isPresent()).toEqual(true)
  })

  it('click on slide shoult change viev', () => {
    page.navigateToFullWidth();
    page.getBestRatedBtn().click();
    expect(element(by.id('tillViev')).isPresent()).toEqual(true)
    element(by.id('slideToggle')).click()
    expect(element(by.id('tableViev')).isPresent()).toEqual(true)
  })
  
  it('test', () => {
    browser.sleep(7000)
    page.navigateToFullWidth();
    expect(element(by.id('premiere')).isPresent()).toEqual(true) //searchError
    page.addTextToSearchinput('x')
    page.getSubmitBtn().click().then(() => {
      browser.wait(() => {
        return element(by.css('.searchError')).isPresent()
      })
    })
    page.addTextToSearchinput('blablablaxyzxyzjanusz')
    page.getSubmitBtn().click().then(() => {
      browser.wait(() => {
        return element(by.css('.noFiles')).isPresent()
      })
    })
    page.addTextToSearchinput('dragon ball')
    page.getSubmitBtn().click().then(() => {
      browser.wait(() => {
        return element(by.id('displayViev')).isPresent()
      })
    })
    
  })

});

