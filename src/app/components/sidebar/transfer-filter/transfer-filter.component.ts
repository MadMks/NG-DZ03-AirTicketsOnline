import {Component, OnInit} from '@angular/core';
import {CheckboxValuesService} from '../../../services/checkbox-values.service';

@Component({
  selector: 'app-transfer-filter',
  templateUrl: './transfer-filter.component.html',
  styleUrls: ['./transfer-filter.component.css']
})
export class TransferFilterComponent implements OnInit {

  private checkboxValues: boolean[];
  private eventCheckboxName: string;

  private checkboxValuesService;

  constructor(checkboxValuesService: CheckboxValuesService) {
    this.checkboxValuesService = checkboxValuesService;
  }

  ngOnInit() {
    this.checkboxValues = this.checkboxValuesService.getValues();
  }

  saveFilterValues($event) {
    // Получение измененного значения чекбокса,
    // и запись в соответствующее место в массиве (в сервис)
    this.checkboxValues[$event.target.name.toString()]
      = $event.target.checked;
    // Запоминаем имя нажатого чекбокса.
    this.eventCheckboxName = $event.target.name;
    // Изменение вывода билетов, на основе значений чекбоксов
    this.changeFilterDisplay();
  }

  changeFilterDisplay() {
    // Если нажали "Все"
    if (this.eventCheckboxName === '0'
      && this.checkboxValues[0] === true) {
      // Выбрать все флажки
      for (let i = 1; i < this.checkboxValues.length; i++ ) {
        this.checkboxValues[i] = true;
      }
    } else if (this.checkboxValues[0] === true
      && this.checkboxValues.includes(false, 1)) {
      // Если нажат "Все", и отжали один из флажков (кроме Все)
      this.checkboxValues[0] = false;
    }
  }

}
