import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import { Product, products } from '../HomeComponent';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public product: any = '';

  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route.queryParams);
    // const routeParams = this.route.snapshot.paramMap;
    // const productIdFromRoute = routeParams.get('productid');
    // Find the product that correspond with the id provided in route.
    this.route.queryParams.subscribe((data) => {
      console.log(data);
      this.product = data['productid'];
    });
    // this.product = obj.productid;
    console.log(this.product);
  }
}
