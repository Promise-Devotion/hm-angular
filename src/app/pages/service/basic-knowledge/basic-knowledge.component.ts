import { Component, OnInit } from '@angular/core';

// 引入service
import { StorageService } from './../../../services/storage.service';

@Component({
  selector: 'app-basic-knowledge',
  templateUrl: './basic-knowledge.component.html',
  styleUrls: ['./basic-knowledge.component.scss'],
})
export class BasicKnowledgeComponent implements OnInit {
  public responseStr: string = '';
  constructor(public storage: StorageService) {
    this.responseStr = this.storage.get();
    console.log(this.responseStr);
  }

  ngOnInit(): void {}
}
