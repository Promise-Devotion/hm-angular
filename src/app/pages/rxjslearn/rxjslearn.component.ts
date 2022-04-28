import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-rxjslearn',
  templateUrl: './rxjslearn.component.html',
  styleUrls: ['./rxjslearn.component.scss'],
})
export class RxjslearnComponent implements OnInit {
  public response: any = '';
  public response1: any = '';
  public response2: any = '';
  public stream: any = '';
  public responseNum: number = 0;
  public responseNum2: number = 0;

  constructor(public storage: StorageService) {}

  ngOnInit(): void {
    this.storage.getData((res: any) => {
      this.response = res;
      console.log(this.response);
    });
    this.storage.getPromiseData().then((res) => {
      this.response1 = res;
      console.log(this.response1);
    });
    this.storage.getRxjsData().subscribe((res) => {
      this.response2 = res;
      console.log(this.response2);
    });
    let streamRx = this.storage.getRxjsData();
    let d = streamRx.subscribe((res) => {
      this.stream = res;
    });
    setTimeout(() => {
      d.unsubscribe();
      this.stream = '请求撤回了';
    }, 1000);

    let steam = this.storage.getRxjsNum();
    let steam2 = this.storage.getRxjsNum();
    steam.pipe(filter((val) => val % 2 === 0)).subscribe((value) => {
      this.responseNum = value;
    });
    steam2.pipe(map((value) => value * 2)).subscribe((value) => {
      this.responseNum2 = value;
    });
  }
}
