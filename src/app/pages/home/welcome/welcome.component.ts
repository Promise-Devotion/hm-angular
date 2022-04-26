import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  public flag: boolean = true;

  /**
   * ViewChild DECORATOR
    属性装饰器，用于配置一个视图查询。 变更检测器会在视图的 DOM 中查找能匹配上该选择器的第一个元素或指令。 
    如果视图的 DOM 发生了变化，出现了匹配该选择器的新的子节点，该属性就会被更新。
   */
  @ViewChild('box1') box1: any;
  constructor() {}

  /**
   * api: ngAfterViewInit 视图加载后的钩子
   * AfterViewInit    INTERFACE
    一个生命周期钩子，会在 Angular 完全初始化了组件的视图后调用。 定义一个 ngAfterViewInit() 方法来处理一些额外的初始化任务。
    一个回调方法，它会在 Angular 完成了组件视图的初始化逻辑之后立即调用。 在视图初始化完成之后，它只会调用一次。
   */
  ngAfterViewInit(): void {
    // let oBox: any = document.getElementById('box1');
    // oBox.style.color = 'red';
    // console.log(oBox.innerHTML);
    console.log(this.box1.nativeElement);
  }
  ngOnInit() {
    let odom: any = document.getElementById('box');
    odom.style.color = 'red';
    console.log(odom.innerHTML);
  }
  run() {
    console.log('welcome中的方法');
  }
}
