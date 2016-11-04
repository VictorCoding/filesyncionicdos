import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { FolderPage } from '../folder-page/folder-page';
import { AddFolderPage } from '../add-folder-page/add-folder-page';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  folders = []

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {

  }
  
  ionViewDidLoad() {
    this.dataService.getFolders().then((folders) => {
      if (folders) {
        this.folders = JSON.parse(folders);
      }
    });
  }
  
  viewFolder(folder) {
    this.navCtrl.push(FolderPage, {
      folder
    });
  }
  
  addFolder() {
    let addModal = this.modalCtrl.create(AddFolderPage);
    addModal.onDidDismiss((folder) => {
      if (folder) {
        this.saveFolder(folder);
      }
    });
    
    addModal.present();
  }
  
  saveFolder(folder) {
    this.folders.push(folder);
    this.dataService.save(this.folders);
  }

}
