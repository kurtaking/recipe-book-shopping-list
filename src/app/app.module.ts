import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { HttpModule }               from '@angular/http';

import { AppRoutingModule }         from "./app-routing.module";
import { RecipeModule }             from "./recipes/recipes.module";
import { ShoppingListModule }       from "./shopping-list/shopping-list.module";
import { SharedModule }             from "./shared/modules/shared.module";
import { AuthModule }               from "./auth/auth.module";

import { AppComponent }             from './app.component';
import { HeaderComponent }          from "./header/header.component";

import { ShoppingListService }      from "./shopping-list/shopping-list.service";
import { RecipeService }            from "./recipes/recipe.service";
import { DataStorageService }       from "./shared/services/data-storage.service";

import { AuthService }              from "./auth/auth.service";
import { AuthGuard }                from "./auth/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    RecipeModule,
    ShoppingListModule,
    AuthModule,
    SharedModule
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
