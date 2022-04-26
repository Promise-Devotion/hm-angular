import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss'],
})
export class Child2Component implements OnInit {
  public msg: string = '我是子组件的msg';

  constructor() {}

  ngOnInit(): void {}

  childrun() {
    alert('我是子组件的childrun方法');
  }
}
