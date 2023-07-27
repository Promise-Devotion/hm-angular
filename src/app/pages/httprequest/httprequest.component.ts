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
    let api: string = '/bill-list?id=12353434';
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'body',
      responseType: 'json',
    };
    this.http.get(api, {observe: 'body'}).subscribe((res: any) => {
      this.productList = res.data;
      console.log(res)
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
    // this.getBaidu();
  }
}
