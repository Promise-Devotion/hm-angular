import {Component, NgModule, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

public links = [
  {
    name: '首页',
    path: '/home'
  },
  {name: '产品', path: '/product'},
    {name: '新闻', path: '/news'},
    {name: '动画', path: '/animation'},
    {name: '组件传值', path: '/datapatch'},
    {name: '服务学习', path: '/service'},
    {name: '生命周期', path: '/lifecycle'},
    {name: 'rxjs学习', path: '/rxjslearn'},
    {name: 'http请求', path: '/httpresuest'}
]
  constructor() { }

  ngOnInit(): void {
  }

}
