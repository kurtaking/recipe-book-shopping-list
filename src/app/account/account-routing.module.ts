import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {AccountProfileComponent} from "./account-profile/account-profile.component";
import {AccountSettingsComponent} from "./account-settings/account-settings.component";
import {AuthGuard} from "../auth/auth-guard.service";

const accountRoutes: Routes = [
  { path: 'profile', component: AccountProfileComponent, /*canActivate: [AuthGuard]*/},
  { path: 'settings', component: AccountSettingsComponent, /*canActivate: [AuthGuard]*/}
]

@NgModule({
  imports: [RouterModule.forChild(accountRoutes)],
  exports: [RouterModule]
})

export class AccountRoutingModule {}
