import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heaer',
  templateUrl: './heaer.component.html',
  styleUrls: ['./heaer.component.scss'],
})
export class HeaerComponent implements OnInit {
  public msg: string = 'hello,world!';
  public customers: any[] = [
    { name: 'aaaa', status: true },
    { name: 'bbbb', status: true },
    { name: 'cccc', status: false },
  ];

  public dateTime: number = 0;
  public htmlstr: string = '<p>hello</p>';

  constructor() {
    var d: number = new Date().getTime();
    this.dateTime = d;
    this.htmlstr = '<p>hello</p>';
  }

  ngOnInit(): void {}
}
