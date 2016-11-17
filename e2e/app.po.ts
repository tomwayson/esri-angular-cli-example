import { browser, element, by } from 'protractor';

export class AngularCliEsriPage {
  navigateTo() {
    return browser.get('/home');
  }

  getTitleText() {
    return element(by.id('title')).getText();
  }
}
