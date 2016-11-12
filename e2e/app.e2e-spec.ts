import { AngularCliEsriPage } from './app.po';

describe('angular-cli-esri App', function() {
  let page: AngularCliEsriPage;

  beforeEach(() => {
    page = new AngularCliEsriPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
