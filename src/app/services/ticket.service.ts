import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ticket} from '../models/Ticket';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private fileUrl = './assets/tickets.json';
  private tickets: Ticket[];

  constructor(private http: HttpClient) {
  }

  public getTickets() {
    return this.http.get(this.fileUrl)
      .pipe(
        map( dataFile => {
          this.tickets = dataFile["tickets"];
          return this.tickets;
        })
      );
  }
}
