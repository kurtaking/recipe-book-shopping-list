import {Component, Input, OnInit} from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  @Input() loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({

    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
