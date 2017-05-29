import {Component} from '@angular/core';
import {DataStorageService} from "../../shared/services/data-storage.service";
import {Response} from "@angular/http";
import {AuthService} from "../../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls : ['header.component.css'],
})

export class HeaderComponent {

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
  ) {}

  onFetchData() {
    this.dataStorageService.retrieveRecipes();
  }

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  onLogout() {
    this.authService.logoutUser();
  }

}
