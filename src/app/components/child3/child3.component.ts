import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss'],
})
export class Child3Component implements OnInit {
  /**
   * 子组件可以使用output广播事件
   */

  @Output() private childOurter = new EventEmitter();
  public child3_msg: string = '我是child3msg数据';
  public child3_obj = {
    name: 'child3',
    describe: 'child3组件',
  };

  constructor() {}

  ngOnInit(): void {}
  sendParent() {
    alert(this.child3_msg);
    this.childOurter.emit(this.child3_obj);
  }
}
