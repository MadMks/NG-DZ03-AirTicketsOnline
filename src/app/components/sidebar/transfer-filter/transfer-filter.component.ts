import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-transfer-filter',
  templateUrl: './transfer-filter.component.html',
  styleUrls: ['./transfer-filter.component.css']
})
export class TransferFilterComponent implements OnInit {

  private isNeedToFilter = false;
  private checkboxValues: boolean[];

  constructor() {
    this.checkboxValues = [
      false,
      false,
      false,
      false,
      false
    ];
  }

  ngOnInit() {
  }

  // checkFilterValues($event) {
  //   this.isNeedToFilter = $event;
  //   console.log(this.isNeedToFilter);
  // }

  checkFilterValues($event) {
    // console.log($event.target.checked + ' ' + $event.target.name);
    // Получение измененного значения чекбокса,
    // и запись в соответствующее место в массиве
    this.checkboxValues[$event.target.name.toString()]
      = $event.target.checked;
    // Изменение вывода билетов, на основе значений чекбоксов
    this.changeTicketDisplay();
    console.log();
    console.log(this.checkboxValues);
  }

  changeTicketDisplay() {
    // Если все false (флажки сняты)
    if (!this.checkboxValues.includes(true, 0)) {
      // TODO: показать все билеты
      console.log('all false');
    } else if (this.checkboxValues[0] === true
      && !this.checkboxValues.includes(true, 1)) {
      // TODO: показать все билеты
      // TODO: выбрать все флажки
      console.log('show all');
    }
  }

}
