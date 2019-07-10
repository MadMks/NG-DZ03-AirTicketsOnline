import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-filter',
  templateUrl: './transfer-filter.component.html',
  styleUrls: ['./transfer-filter.component.css']
})
export class TransferFilterComponent implements OnInit {

  private isNeedToFilter = false;

  constructor() { }

  ngOnInit() {
  }

  checkFilterValues() {
    console.log(this.isNeedToFilter);
  }

}
