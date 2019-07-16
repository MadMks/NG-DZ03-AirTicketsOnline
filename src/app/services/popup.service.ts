import { Injectable } from '@angular/core';
import {Ticket} from '../models/Ticket';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  private isShown = false;
  private ticket: Ticket;

  constructor() { }

  public getShown() {
    return this.isShown;
  }

  public setShown(isShown: boolean) {
    this.isShown = isShown;
  }

  public getTicket() {
    return this.ticket;
  }

  public setTicket(ticket: Ticket) {
    this.ticket = ticket;
  }
}
