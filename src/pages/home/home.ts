import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { FolderPage } from '../folder-page/folder-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  folders = []

  constructor(public navCtrl: NavController) {

  }
  
  ionViewDidLoad() {
    this.folders = [
      {
        id: 1,
        name: 'english'
      },
      {
        id: 2,
        name: 'spanish'
      },
    ]
  }
  
  viewFolder(folder) {
    this.navCtrl.push(FolderPage, {
      folder
    });
  }

}
