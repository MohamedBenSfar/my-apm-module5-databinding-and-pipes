import { MyApmModule5DatabindingAndPipesPage } from './app.po';

describe('my-apm-module5-databinding-and-pipes App', () => {
  let page: MyApmModule5DatabindingAndPipesPage;

  beforeEach(() => {
    page = new MyApmModule5DatabindingAndPipesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
