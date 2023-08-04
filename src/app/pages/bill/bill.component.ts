import { Component } from '@angular/core';
export interface billItem {
  billid: string
  billname: string
}
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})


export class BillComponent {
  displayedColumns: string[] = ['position', 'name'];
  public billList: billItem[] = [
    {
      billid: '123',
      billname: '买包'
    },
    {
      billid: '124',
      billname: '买车票'
    }
  ]
}
