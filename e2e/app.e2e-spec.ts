import { OutilTestPage } from './app.po';

describe('outil-test App', function() {
  let page: OutilTestPage;

  beforeEach(() => {
    page = new OutilTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
