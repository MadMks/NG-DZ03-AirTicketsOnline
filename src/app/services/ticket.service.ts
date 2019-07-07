import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// import * as data from '../data/tickets.json';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  // private tickets = [1, 2, 3, 4, 5];
  // private tickets = data.tickets;
  private tickets = this.getJSON();

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log('> Test\n' + data);
    });
  }
  // constructor() {
  // }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/tickets.json');
  }

  public getTickets() {
    // console.log(data.tickets[0].price);
    return this.tickets;
  }
}
