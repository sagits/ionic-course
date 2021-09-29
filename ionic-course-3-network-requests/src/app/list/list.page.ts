import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  list;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get("http://localhost:8000/api/products").subscribe((data: any) => {
      this.list = data;
    })
  }


}
