import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, NavParams, ToastController } from '@ionic/angular';
import { ProductService } from '../services/product.service';
import * as moment from 'moment';
import { ProductsFirebaseService } from '../services/products-firebase.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.page.html',
  styleUrls: ['./add-edit.page.scss'],
})
export class AddEditPage implements OnInit {

  item: any = {};
  id;

  constructor(
    public navController: NavController,
    public navParams: NavParams,
    public productsFirebaseService: ProductsFirebaseService,
    public toastController: ToastController

  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getData();
  }

  getData() {
    this.id = this.navParams.get('id');
    if (!this.id) return;

    this.productsFirebaseService.getById(this.id).subscribe(data => {
      this.item = data;
    });
  }

  async showSuccessMessage() {
    const toast = await this.toastController.create({
      message: 'Produto salvo com sucesso.',
      duration: 2000
    });
    toast.present();
  }


  onSubmit(form: NgForm) {
    if (form.valid) {

      this.item.createdAt = moment().format("YYYY-MM-DD");

      let addOrEditrequest = this.item.id ? this.productsFirebaseService.edit(this.item)
      : this.productsFirebaseService.add(this.item);

      this.productsFirebaseService.add(this.item)
        .subscribe((data) => {
          this.navController.pop(); 
          this.showSuccessMessage();
        })
    }


  }

}
