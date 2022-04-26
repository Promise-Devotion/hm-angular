import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-datapatch',
  templateUrl: './datapatch.component.html',
  styleUrls: ['./datapatch.component.scss'],
})
export class DatapatchComponent implements OnInit {
  /**
   * 组件间数据传递方法
   * 1、父子组件之间，
   * 2、事件广播
   */
  public msg: string = 'datapatch组件间传值';

  @ViewChild('child2') child2: any;

  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    console.log(this.child2);
  }
  datarun() {
    alert('我是父组件的run方法');
  }
  getChildData() {
    alert(this.child2.msg);
    this.child2.childrun();
  }
  duleChildData(e: any) {
    console.log(e);
  }
}
