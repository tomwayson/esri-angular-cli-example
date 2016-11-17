import { AngularCliEsriPage } from './app.po';

describe('angular-cli-esri App', function() {
  let page: AngularCliEsriPage;

  beforeEach(() => {
    page = new AngularCliEsriPage();
  });

  it('should display the title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Angular CLI Esri');
  });
});
