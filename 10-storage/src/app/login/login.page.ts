import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: any = {};

  constructor(
    public navCtrl: NavController,
    public userService: UserService,
    public navParams: NavParams
  ) { }

  ngOnInit() {
  }

  login(form) {
    this.userService.setUser(this.user).then((data) => {
      this.navCtrl.navigateRoot("list");
    });
  }

  ionViewDidEnter() {
    this.checkForUser();
  }

  checkForUser() {
    this.userService.getUser().then((user) => {
      if (user) {
        this.navCtrl.navigateRoot("list");
      }
    });
  }


}
