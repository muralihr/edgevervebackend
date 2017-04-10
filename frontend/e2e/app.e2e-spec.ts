import { AlumnifrontendPage } from './app.po';

describe('alumnifrontend App', () => {
  let page: AlumnifrontendPage;

  beforeEach(() => {
    page = new AlumnifrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
