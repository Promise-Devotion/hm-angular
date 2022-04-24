import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newsdetail',
  templateUrl: './newsdetail.component.html',
  styleUrls: ['./newsdetail.component.scss'],
})
export class NewsdetailComponent implements OnInit {
  public product: string = '';
  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route.params);
    this.route.params.subscribe((data) => {
      this.product = data['id'];
    });
    console.log(this.product);
  }
}
