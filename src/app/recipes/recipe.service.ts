import {Injectable} from "@angular/core";

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/models/ingredient.model'
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  constructor(
    private shoppingListService : ShoppingListService
  ) {}

  private recipes: Recipe[] = [
    new Recipe(
      'Burgers',
      'Recipe for my making homemade burgers',
      'https://c1.staticflickr.com/8/7307/8736284104_9a6a3792d2_b.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Bread', 2),
        new Ingredient('Cheese', 1),
        new Ingredient('Lettuce', 1),
        new Ingredient('Tomato', 1),
        new Ingredient('Pickles', 4),
      ]
    ),
    new Recipe(
      'Carne Asada Tacos',
      'Best taco recipe in town',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/1024px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg',
      [
        new Ingredient('Tortillas', 4),
        new Ingredient('Carne Asada', 1),
        new Ingredient('Onion', 1),
        new Ingredient('Salsa', 1)
      ]
    )
  ];

  getRecipe(index: number) {
    return this.recipes[index];
  }

  getRecipes() {
    return this.recipes.slice(); // only allow a copy to be accessed from outside component
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
