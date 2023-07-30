import {Component, NgModule, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public msg: string = 'hello,world!';
  public customers: any[] = [
    { name: 'aaaa', status: true },
    { name: 'bbbb', status: true },
    { name: 'cccc', status: false },
  ];

  public dateTime: number = 0;
  public htmlstr: string = '<p>hello</p>';

  constructor(public router: Router) {
    var d: number = new Date().getTime();
    this.dateTime = d;
    this.htmlstr = '<p>hello</p>';
  }

  ngOnInit(): void {}
  gotoRegister() {
    this.router.navigate(['/register'])
  }
}
