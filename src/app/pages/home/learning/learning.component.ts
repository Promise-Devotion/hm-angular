import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss'],
})
export class LearningComponent implements OnInit {
  /**
   * NgModel
DIRECTIVE
根据领域对象创建一个 FormControl 实例，并把它绑定到一个表单控件元素上。
   */
  public person: any = {
    name: 'aa',
    age: 20,
  };
  constructor() {}

  ngOnInit(): void {}
  changeName() {
    this.person.name = '张三';
    this.person.age = 22;
  }
  sublitData() {
    console.log(this.person);
  }
}
