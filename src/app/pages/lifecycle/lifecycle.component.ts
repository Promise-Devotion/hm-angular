import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss'],
})
export class LifecycleComponent implements OnInit {
  public msg: string = '生命周期演示';
  public title: string = '传给子组件';

  ngOnChanges(): void {
    console.log('生命周期第一步');
  }
  constructor() {}

  ngOnInit(): void {
    // 生命周期
    console.log('初始化指令/组件');
  }

  // @Input('title') title:string;

  public userinfo: string = '';

  public oldUserinfo: string = '';

  ngDoCheck() {
    //写一些自定义的操作

    console.log(
      '03ngDoCheck执行了---检测，并在发生 Angular 无法或不愿意自己检测的变化时作出反应'
    );
    if (this.userinfo !== this.oldUserinfo) {
      console.log(`你从${this.oldUserinfo}改成${this.userinfo}`);
      this.oldUserinfo = this.userinfo;
    } else {
      console.log('数据没有变化');
    }
  }

  ngAfterContentInit() {
    console.log('04ngAfterContentInit执行了---当把内容投影进组件之后调用');
  }
  ngAfterContentChecked() {
    console.log(
      '05ngAfterContentChecked执行了---每次完成被投影组件内容的变更检测之后调用'
    );
  }
  ngAfterViewInit(): void {
    console.log(
      '06 ngAfterViewInit执行了----初始化完组件视图及其子视图之后调用（dom操作放在这个里面）'
    );
  }
  ngAfterViewChecked() {
    console.log(
      '07ngAfterViewChecked执行了----每次做完组件视图和子视图的变更检测之后调用'
    );
  }

  ngOnDestroy() {
    console.log('08ngOnDestroy执行了····');
  }

  //自定义方法

  changeMsg() {
    this.msg = '数据改变了';
  }
}
