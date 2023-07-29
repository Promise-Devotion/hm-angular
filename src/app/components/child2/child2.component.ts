import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss'],
})
export class Child2Component implements OnInit {
  public msg: string = '我是子组件child2的msg';

  constructor() {}

  ngOnInit(): void {}

  childRun(): void {
    alert('我是子组件child2的childRun方法');
  }
}
