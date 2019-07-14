import { Injectable } from '@angular/core';
import {Currency} from '../models/Currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private currentCurrency: Currency;
  private currencies: Currency[] = [
    {
      name: 'UAH',
      price: 1,
      sign: '₴'
    },
    {
      name: 'USD',
      price: 25.67,
      sign: '$'
    },
    {
      name: 'EUR',
      price: 28.98,
      sign: '€'
    }
  ];

  constructor() {
    this.currentCurrency = this.currencies[0];
  }

  public getCurrentCurrencyRate() {
    return this.currentCurrency.price;
  }

  public getCurrentCurrencySign() {
    return this.currentCurrency.sign;
  }

  public setCurrentCurrency(curr: string) {
    switch (curr) {
      case this.currencies[0].name:
        this.currentCurrency = this.currencies[0];
        break;
      case this.currencies[1].name:
        this.currentCurrency = this.currencies[1];
        break;
      case this.currencies[2].name:
        this.currentCurrency = this.currencies[2];
        break;
    }
  }
}
