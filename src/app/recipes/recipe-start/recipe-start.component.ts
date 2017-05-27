import { Component, OnInit } from '@angular/core';

import {Recipe} from '../recipe.model';
import {RecipeService} from "../recipe.service";



@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.css']
})
export class RecipeStartComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.recipe = this.recipeService.getRecipes()[0];
  }

}
