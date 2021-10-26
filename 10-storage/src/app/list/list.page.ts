import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ProductsFirebaseService } from '../services/products-firebase.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  list;

  constructor(
    public navController: NavController,
    public navParams: NavParams,
    public productsFirebaseService: ProductsFirebaseService,
  ) {
  }

  onAddClick() {
    this.navController.navigateForward("/add-edit");
  }

  onItemClick(item) {
    this.navParams.data['id'] = item.id;
    this.navController.navigateForward("/details");
  }


  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getData();
  }

  getData() {
    this.navParams.data['id'] = null;

    this.productsFirebaseService.getAll().subscribe(data => {
      this.list = data;
    });
  }

}
