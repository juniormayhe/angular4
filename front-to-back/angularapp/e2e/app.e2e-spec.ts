import { AngularappPage } from './app.po';

describe('angularapp App', () => {
  let page: AngularappPage;

  beforeEach(() => {
    page = new AngularappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
