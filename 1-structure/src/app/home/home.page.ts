import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title = "Hello World";

  user = {
    name: "Renato",
    lastName: "Probst"
  }


  constructor() { }

  changeTitle() {
    this.title = 'Meu app';
    this.user.name = "Paulo";
    this.user.lastName = "Alves";
  }

}
