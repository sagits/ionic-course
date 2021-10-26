import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = "http://localhost:8000/api/products";

  constructor(public http: HttpClient) { }

  getAll() {
    return this.http.get(this.url);
  }
}
