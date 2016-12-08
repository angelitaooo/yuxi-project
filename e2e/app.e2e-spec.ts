import { YuxiProjectPage } from './app.po';

describe('yuxi-project App', function() {
  let page: YuxiProjectPage;

  beforeEach(() => {
    page = new YuxiProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
