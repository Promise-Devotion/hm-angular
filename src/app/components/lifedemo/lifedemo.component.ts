import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifedemo',
  templateUrl: './lifedemo.component.html',
  styleUrls: ['./lifedemo.component.scss'],
})
export class LifedemoComponent implements OnInit {
  @Input() title: string = '';

  constructor() {}

  ngOnInit(): void {}
}
