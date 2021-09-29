import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  list;

  constructor(public productService: ProductService) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.productService.getAll().subscribe(data => {
      this.list = data;
    });
  }

}
