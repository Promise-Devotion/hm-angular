import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from 'src/app/services/storage.service';

// 引入service
// import { StorageService } from './../../../services/storage.service';

@Component({
  selector: 'app-basic-knowledge',
  templateUrl: './basic-knowledge.component.html',
  styleUrls: ['./basic-knowledge.component.scss'],
  // providers: [StorageService]
})
export class BasicKnowledgeComponent implements OnInit {
  public responseStr: string = '';
  public api: string = '/bill-list'
  public userList: any[] = [];
  public promiseDa: any
  constructor(
    public storage: StorageService,
    public http: HttpClient
  ) {
    this.responseStr = this.storage.get();
    console.log(this.responseStr);
  }

  ngOnInit(): void {
    // this.getUserList()
    this.storage.getData((res: any) => {
      this.promiseDa = res
      console.log(this.promiseDa)
    })
    this.storage.getPromiseData().then((res) => {
      console.log(res)
    })
  }
  getUserList() {
    this.http.get(this.api).subscribe((res: any) => {
      // console.log(res)
      this.userList = res.data
    })
  }
}
