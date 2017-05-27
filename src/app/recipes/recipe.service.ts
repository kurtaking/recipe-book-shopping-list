import {EventEmitter, Injectable} from "@angular/core";

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/models/ingredient.model'
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(
    private shoppingListService : ShoppingListService
  ) {}

  private recipes: Recipe[] = [
    new Recipe(
      'Burgers',
      'Recipe for my making homemade burgers',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Bread', 2),
        new Ingredient('Cheese', 1)
      ]
    ),
    new Recipe(
      'Carne Asada Tacos',
      'Best taco recipe in town',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
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
