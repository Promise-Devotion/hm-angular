import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-httprequest',
  templateUrl: './httprequest.component.html',
  styleUrls: ['./httprequest.component.scss'],
})
export class HttprequestComponent implements OnInit {
  public hotList: string = '';
  public productList: any[] = [];
  constructor(public http: HttpClient) {}
  getData() {
    /**
     * http://a.itying.com/api/productlist;
     */
    let api: string = 'http://a.itying.com/api/productlist';
    this.http.get(api).subscribe((res: any) => {
      this.productList = res.result;
    });
  }
  getBaidu() {
    let api: string = 'http://127.0.0.1:3000/dologin';
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    this.http.post(api, httpOptions).subscribe((res: any) => {
      console.log(res);
      this.hotList = res.msg;
    });
  }

  ngOnInit() {
    this.getData();
    this.getBaidu();
  }
}
