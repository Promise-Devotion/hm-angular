import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public registerParam: any = {
    username: '',
    sex: '1',
    city: '',
    hobby: [],
  };
  public cityList: any = ['北京', '上海', '南京'];
  public hobbies = [
    {
      title: '足球',
      checkflag: false,
    },
    {
      title: '篮球',
      checkflag: false,
    },
    {
      title: '睡觉',
      checkflag: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  submitData() {
    console.log(this.registerParam);
  }
}
