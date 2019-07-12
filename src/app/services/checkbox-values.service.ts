import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckboxValuesService {

  private checkboxValues = [
    false,
    false,
    false,
    false,
    false
  ];

  constructor() { }

  public getValues() {
    return this.checkboxValues;
  }
}
