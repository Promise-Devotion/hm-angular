import { Component, OnInit, ViewChild } from '@angular/core';
import { Child2Component } from 'src/app/components/child2/child2.component';

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

  @ViewChild(Child2Component)
  private Child2Component!: Child2Component;

  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    console.log(this.Child2Component);
  }
  dataRun() {
    alert('我是父组件的run方法');
  }
  getChildData() {
    alert(this.Child2Component.msg);
    this.Child2Component.childRun();
  }
  duleChildData(e: any) {
    console.log(e);
  }
  fatherRun() {
    alert('父组件方法被调用')
  }
}
