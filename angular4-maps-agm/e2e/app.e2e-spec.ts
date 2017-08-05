import { Angular4MapsAgmPage } from './app.po';

describe('angular4-maps-agm App', () => {
  let page: Angular4MapsAgmPage;

  beforeEach(() => {
    page = new Angular4MapsAgmPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
