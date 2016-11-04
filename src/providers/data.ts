import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class Data {

  constructor(public storage: Storage) {

  }
  
  getFolders() {
    return this.storage.get('folders')
  }
  
  save(folders) {
    this.storage.set('folders', JSON.stringify(folders))
  }

}
