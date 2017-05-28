import {Injectable}     from "@angular/core";
import {Http, Response}           from "@angular/http";

import {RecipeService}  from "../../recipes/recipe.service";
import {Recipe} from "../../recipes/recipe.model";


@Injectable()
export class DataStorageService {

  private dbUrl = "";

  constructor(
    private http: Http,
    private recipeService: RecipeService
  ) {}

  storeRecipes() {
    return this.http.put(
      this.dbUrl,
      this.recipeService.getRecipes()
    );

  }

  retrieveRecipes() {
    this.http.get(this.dbUrl).subscribe(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        this.recipeService.setRecipes(recipes);
      }
    )

    this.http.get(this.dbUrl)
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for(let recipe of recipes) {
            if(!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      )

  }

}
