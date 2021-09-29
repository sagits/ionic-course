import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  list = [
    {
      "id":2,
      "title": "Galaxy Note S20 Ultra",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing.",
      "image": "https://tecnoblog.net/wp-content/uploads/2020/09/samsung-galaxy-note-20-ultra-review-11.jpg",
      "featured": true,
      "value": 4000,
      "createdAt": "2020-03-22"
    },
    {
      "id": 2,
      "title": "Iphone 23",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing.",
      "image": "https://malibushop.com.br/wp-content/uploads/2021/03/i12-mini.jpg",
      "value": 27000,
      "createdAt": "2020-03-27"
    },
    {
      "id": 3,
      "title": "TV LG 55",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing.",
      "image": "https://i.zst.com.br/thumbs/12/25/19/1142658346.jpg",
      "value": 27000,
      "createdAt": "2020-03-21"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
