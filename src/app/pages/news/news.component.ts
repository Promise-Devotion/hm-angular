import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  public newslist = [
    {
      title: 'qqqqqqqqqq',
      id: '1111',
    },
    {
      title: 'wwwwwww',
      id: '2222',
    },
  ];

  constructor(public router: Router) {}

  ngOnInit(): void {}
  gotonewsdetail(id: string) {
    this.router.navigate(['/newsdetail', id]);
  }
}
