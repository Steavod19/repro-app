import { ReproUiPage } from './app.po';

describe('repro-ui App', () => {
  let page: ReproUiPage;

  beforeEach(() => {
    page = new ReproUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
