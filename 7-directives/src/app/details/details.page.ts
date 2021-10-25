import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  item;

  constructor(public navParams: NavParams) { }

  ngOnInit() {
    this.item = this.navParams.get('product');
  }

}
