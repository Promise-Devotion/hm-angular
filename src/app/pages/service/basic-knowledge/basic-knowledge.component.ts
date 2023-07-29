import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// 引入service
import { StorageService } from './../../../services/storage.service';

@Component({
  selector: 'app-basic-knowledge',
  templateUrl: './basic-knowledge.component.html',
  styleUrls: ['./basic-knowledge.component.scss'],
})
export class BasicKnowledgeComponent implements OnInit {
  public responseStr: string = '';
  public baseUrl: string = 'http://127.0.0.1:5000/api'
  public userList: any[] = [];
  constructor(
    public storage: StorageService,
    public http: HttpClient
  ) {
    this.responseStr = this.storage.get();
    console.log(this.responseStr);
  }

  ngOnInit(): void {
    // this.getUserList()
  }
  getUserList() {
    this.http.get(`${this.baseUrl}/users/userlist?name=jim`).subscribe((res: any) => {
      // console.log(res)
      this.userList = res.data
    })
  }
}
