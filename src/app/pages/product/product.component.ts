import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public products = [
    {
      name: 'mane1',
      id: '123',
    },
    {
      name: 'mane2',
      id: '124',
    },
    {
      name: 'mane3',
      id: '125',
    },
  ];
  constructor(public router: Router) {}

  ngOnInit(): void {}
  gotoproducydetail() {
    let queryParams: NavigationExtras = {
      queryParams: { id: 'a123' },
    };
    this.router.navigate(['/detail'], queryParams);
  }
}
