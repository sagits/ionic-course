import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private storage: Storage) {
    this.storage.create();
  }

  getUser() {
    return this.storage.get("user");
  }

  setUser(user) {
    return this.storage.set("user", user);
  }

  removeUser() {
    return this.storage.remove("user");
  }

}
