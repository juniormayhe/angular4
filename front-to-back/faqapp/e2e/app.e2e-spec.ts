import { FaqappPage } from './app.po';

describe('faqapp App', () => {
  let page: FaqappPage;

  beforeEach(() => {
    page = new FaqappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
