import { browser, by, element } from 'protractor';

export class MyApmModule5DatabindingAndPipesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
