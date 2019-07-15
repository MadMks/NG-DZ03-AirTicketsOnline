import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  private isShown = false;

  constructor() { }

  public getShown() {
    return this.isShown;
  }

  public setShown(isShown: boolean) {
    this.isShown = isShown;
  }
}
