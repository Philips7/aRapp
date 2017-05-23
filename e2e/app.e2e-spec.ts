import { ARappPage } from './app.po';

describe('a-rapp App', () => {
  let page: ARappPage;

  beforeEach(() => {
    page = new ARappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
