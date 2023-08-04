import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor() { }
  public msg: string = '这是service msg'

  ngOnInit(): void {
  }

  fatherRun () {
    console.log('this is service fatherrun')
  }
}
