import {Component, Input, OnInit} from '@angular/core';
import {Ticket} from '../../models/Ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  @Input() ticket: Ticket;

  constructor() { }

  ngOnInit() {
  }

}
