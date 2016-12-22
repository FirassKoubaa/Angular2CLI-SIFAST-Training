import { FirasProjectPage } from './app.po';

describe('firas-project App', function() {
  let page: FirasProjectPage;

  beforeEach(() => {
    page = new FirasProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
