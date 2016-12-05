import { AngularCliEsriPage } from './app.po';

describe('esri-angular-cli-example App', function() {
  let page: AngularCliEsriPage;

  beforeEach(() => {
    page = new AngularCliEsriPage();
  });

  it('should display the title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Esri Angular CLI Example');
  });
});
