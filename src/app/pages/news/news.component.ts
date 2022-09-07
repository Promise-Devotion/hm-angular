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
      title: '星期一',
      id: '1111',
      subject: '今天天气晴朗',
      content: '付款前饭卡夫人请安乳房和情人湖v吧【评委秃头吧vyo不犹豫有毛病3额编码'
    },
    {
      title: '星期二',
      id: '2222',
      subject: '今天天气小雨',
      content: '付款前饭卡夫人请安乳房和情人湖v吧【评委秃头吧vyo不犹豫有毛病3额编码'
    },
  ];

  constructor(public router: Router) {}

  ngOnInit(): void {}
  gotoNewsDetail(id: string) {
    this.router.navigate(['/newsdetail', id]);
  }
}
