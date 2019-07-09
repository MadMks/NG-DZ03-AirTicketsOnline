import { Component, OnInit } from '@angular/core';
import {TicketService} from '../../services/ticket.service';
import {Ticket} from '../../models/Ticket';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  public tickets: Ticket[];
  private ticketService;

  constructor(ticketService: TicketService) {
    this.ticketService = ticketService;
  }

  ngOnInit() {
    this.ticketService.getTickets()
      .subscribe(data => this.tickets = data);
  }

}
