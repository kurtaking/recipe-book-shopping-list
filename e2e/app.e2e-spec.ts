import { RecipeBookShoppingListPage } from './app.po';

describe('recipe-book-shopping-list App', () => {
  let page: RecipeBookShoppingListPage;

  beforeEach(() => {
    page = new RecipeBookShoppingListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
