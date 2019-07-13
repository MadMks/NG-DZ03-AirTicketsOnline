import {Component, OnInit} from '@angular/core';
import {CurrencyService} from '../../../services/currency.service';

@Component({
  selector: 'app-currency-change',
  templateUrl: './currency-change.component.html',
  styleUrls: ['./currency-change.component.css']
})
export class CurrencyChangeComponent implements OnInit {

  private currentCurrencyRate;

  private currencyService;

  constructor(currencyService: CurrencyService) {
    this.currencyService = currencyService;
  }

  ngOnInit() {
    this.currentCurrencyRate = this.currencyService.getCurrentCurrencyRate();
    this.currencyService.setCurrentCurrency('UAH');
  }

  changeCurrency($event) {
    this.currencyService.setCurrentCurrency($event.target.value);
  }

}
