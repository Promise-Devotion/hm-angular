import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('demo1', { static: true }) demo1: any;
  constructor() {}
  ngAfterViewInit(): void {
    // let oBox: any = document.getElementById('box1');
    // oBox.style.color = 'red';
    // console.log(oBox.innerHTML);
    // this.demo1.run();
  }
  ngOnInit(): void {}
  runChildFunction() {
    this.demo1.run();
  }
  fatherRun() {
    alert('this. is father function')
  }
}
