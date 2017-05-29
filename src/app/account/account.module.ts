import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {AccountProfileComponent} from "./account-profile/account-profile.component";
import {AccountSettingsComponent} from "./account-settings/account-settings.component";
import {SharedModule} from "../shared/modules/shared.module";
import {AccountRoutingModule} from "./account-routing.module";

@NgModule({
  declarations: [
    AccountProfileComponent,
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AccountRoutingModule
  ]

})

export class AccountModule {}
