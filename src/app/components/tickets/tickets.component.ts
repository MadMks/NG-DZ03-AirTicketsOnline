import { Component, OnInit } from '@angular/core';
import {TicketService} from '../../services/ticket.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  public tickets;
  private _ticketService;

  constructor(ticketService: TicketService) {
    this._ticketService = ticketService;
  }

  ngOnInit() {
    this.tickets = this._ticketService.getTickets();
  }

}
