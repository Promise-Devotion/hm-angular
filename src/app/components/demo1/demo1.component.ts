import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss'],
})
export class Demo1Component implements OnInit {
  /**
   * Input
    DECORATOR
    一个装饰器，用来把某个类字段标记为输入属性，并提供配置元数据。
    该输入属性会绑定到模板中的某个 DOM 属性。当变更检测时，Angular 会自动使用这个 DOM 属性的值来更新此数据属性。
   */
  @Input() msg: string | undefined;
  @Input() dataRun: any;
  @Input() home: any;
  @Output() hone:any;
  @Input() fatherRun: any;
  @Input() father: any;
  constructor() {}

  ngOnInit(): void {}
  run() {
    console.log('demo1的方法');
  }
  getFatherFunction() {
    alert(this.msg);
    this.fatherRun();
  }
}
