import {Component, Input, OnInit} from '@angular/core';
import {Ticket} from '../../models/Ticket';
import {CurrencyService} from 'src/app/services/currency.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  @Input() ticket: Ticket;

  private currentCurrencyRate: number;

  private currencyService;

  constructor(currencyService: CurrencyService) {
    this.currencyService = currencyService;
  }

  ngOnInit() {
    this.currentCurrencyRate = this.currencyService.getCurrentCurrencyRate();
  }

}
