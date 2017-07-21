import { ClientpanelPage } from './app.po';

describe('clientpanel App', () => {
  let page: ClientpanelPage;

  beforeEach(() => {
    page = new ClientpanelPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
