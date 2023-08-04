import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}
  get() {
    return 'this is a service';
  }
  // settimeout返回数据
  getData(cb: any) {
    setTimeout(() => {
      let data: any = '这是一秒后返回的数据--callback';
      cb(data);
    }, 1000);
  }
  // Promise
  getPromiseData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        let data: any = '这是一秒后返回的数据--promise';
        return resolve(data);
      }, 2000);
    });
  }
  // rxjs方式
  getRxjsData() {
    let count: number = 0;
    return new Observable((observe) => {
      setTimeout(() => {
        count++;
        let data: any = `这是${count}秒后返回的数据--rxjs`;
        observe.next(data);
      }, 1000);
    });
  }
  getRxjsNum() {
    let count: number = 0;
    return new Observable<any>((observe) => {
      setTimeout(() => {
        count++;
        observe.next(count);
      }, 1000);
    });
  }
}
