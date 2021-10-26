import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { ProductService } from '../services/product.service';
import * as moment from 'moment';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.page.html',
  styleUrls: ['./add-edit.page.scss'],
})
export class AddEditPage implements OnInit {

  item: any = {};

  constructor(
    public navController: NavController,
    public productService: ProductService,
    public toastController: ToastController

  ) { }

  ngOnInit() {
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

      this.productService.add(this.item)
        .subscribe((data) => {
          this.navController.pop(); 
          this.showSuccessMessage();
        })
    }


  }

}
