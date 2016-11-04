import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add-folder-page',
  templateUrl: 'add-folder-page.html'
})
export class AddFolderPage {
  folderName;

  constructor(public view: ViewController) {}

  saveFolder() {
    let newFolder = {
      id: Math.random(),
      name: this.folderName,
    };
 
    this.view.dismiss(newFolder);
 
  }
 
  close() {
    this.view.dismiss();
  }

}
