import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { HttpModule }               from '@angular/http';

import { AppRoutingModule }         from "./app-routing.module";
import { ShoppingListModule }       from "./shopping-list/shopping-list.module";
import { SharedModule }             from "./shared/modules/shared.module";
import { AuthModule }               from "./auth/auth.module";
import { AccountModule }            from "./account/account.module";
import { CoreModule }               from "./core/core.module";

import { AppComponent }             from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    AccountModule,
    ShoppingListModule,
    AuthModule,
    SharedModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
