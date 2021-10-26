import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ProductsFirebaseService } from '../services/products-firebase.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  item;
  id;

  constructor(
    public navController: NavController,
    public navParams: NavParams,
    public productsFirebaseService: ProductsFirebaseService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getData();
  }

  onEditClick() {
    this.navParams.data['id'] = this.item.id;
    this.navController.navigateForward("/add-edit");
  }

  getData() {
    this.id = this.navParams.get('id');
    if (!this.id) return;

    this.productsFirebaseService.getById(this.id).subscribe(data => {
      this.item = data;
    });
  }

}
