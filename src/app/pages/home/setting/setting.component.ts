import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {
  /**
   * 在此学习*ngSwitch
   */

  public orderStatus: number = 2;
  public orderList: any = [
    {
      name: '格子衬衫',
      orderStatus: 1,
      time: '2022-4-20 14:20:33',
    },
    {
      name: '蚕丝被',
      orderStatus: 2,
      time: '2022-4-20 14:20:33',
    },
    {
      name: '餐桌',
      orderStatus: 3,
      time: '2022-4-20 14:20:33',
    },
    {
      name: '床垫',
      orderStatus: 4,
      time: '2022-4-20 14:20:33',
    },
    {
      name: '红酒',
      orderStatus: 5,
      time: '2022-4-20 14:20:33',
    },
  ];

  public nowDate: number = new Date().getTime();
  public sexValue: string = '0';

  constructor() {}

  ngOnInit(): void {}
  setSex() {
    this.sexValue = '1';
  }
  printValue(e: any) {
    console.log(e);
  }
  keyup(e: any) {
    console.log(e.target.value);
  }
}
