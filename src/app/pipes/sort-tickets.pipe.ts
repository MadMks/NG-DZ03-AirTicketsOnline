import { Pipe, PipeTransform } from '@angular/core';
import {Ticket} from '../models/Ticket';

@Pipe({
  name: 'sortTickets'
})
export class SortTicketsPipe implements PipeTransform {

  transform(tickets: Ticket[]): Ticket[] {
    if (!tickets) { return; }
    return tickets.sort( (a, b) => {
      if (Date.parse(a.departure_date + ' ' + a.departure_time)
        > Date.parse(b.departure_date + ' ' + b.departure_time)) {
        return 1;
      }
      if (Date.parse(a.departure_date + ' ' + a.departure_time)
        < Date.parse(b.departure_date + ' ' + b.departure_time)) {
        return -1;
      }
      return 0;
    });
  }

}
