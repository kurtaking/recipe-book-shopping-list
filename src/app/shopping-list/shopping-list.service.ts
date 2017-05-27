import { Ingredient } from '../shared/models/ingredient.model';
import {fingerprint} from "@angular/compiler/src/i18n/digest";

export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice(); // user cannot access original array of ingredients but instead a copy
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
