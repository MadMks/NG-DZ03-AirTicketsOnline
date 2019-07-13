import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private currentCurrencyRate;
  private currencies = [
    {
      name: 'UAH',
      value: 1
    },
    {
      name: 'USD',
      value: 25.67
    },
    {
      name: 'EUR',
      value: 28.98
    }
  ];

  constructor() {
    this.currentCurrencyRate = 1;
  }

  public getCurrentCurrencyRate() {
    return this.currentCurrencyRate;
  }

  public setCurrentCurrency(curr: string) {
    switch (curr) {
      case this.currencies[0].name:
        this.currentCurrencyRate = this.currencies[0].value;
        break;
      case this.currencies[1].name:
        this.currentCurrencyRate = this.currencies[1].value;
        break;
      case this.currencies[2].name:
        this.currentCurrencyRate = this.currencies[2].value;
        break;
    }
  }
}
