import { AngularReduxTodoPage } from './app.po';

describe('angular-redux-todo App', () => {
  let page: AngularReduxTodoPage;

  beforeEach(() => {
    page = new AngularReduxTodoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
