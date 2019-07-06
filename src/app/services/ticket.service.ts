import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private tickets = [1, 2, 3, 4];

  constructor() { }

  public getTickets() {
    return this.tickets;
  }
}
