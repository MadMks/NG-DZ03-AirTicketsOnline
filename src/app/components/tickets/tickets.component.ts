import { Component, OnInit } from '@angular/core';
import {TicketService} from '../../services/ticket.service';
import {Ticket} from '../../models/Ticket';
import {CheckboxValuesService} from '../../services/checkbox-values.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  public tickets: Ticket[];
  private checkboxValues;
  private ticketService;
  private checkboxValuesService;

  constructor(ticketService: TicketService,
              checkboxValuesService: CheckboxValuesService) {
    this.ticketService = ticketService;
    this.checkboxValuesService = checkboxValuesService;
  }

  ngOnInit() {
    this.ticketService.getTickets()
      .subscribe(data => this.tickets = data);
    this.checkboxValues = this.checkboxValuesService.getValues();
  }

  changeDisplay(ticket: Ticket) {
    if (!this.checkboxValues.includes(true, 0)) {
      // TODO: показать все билеты
      console.log('all false = show all');
      return true;
    } else if (this.checkboxValues[0] === true
      && !this.checkboxValues.includes(true, 1)) {
      // TODO: показать все билеты
      // TODO: выбрать все флажки
      console.log('show all');
      return true;
    }
    // Если нужно фильтровать
    const i = ticket.stops + 1;
    if (this.checkboxValues[i] === true) {
      return true;
    }
    return false;
  }

}
