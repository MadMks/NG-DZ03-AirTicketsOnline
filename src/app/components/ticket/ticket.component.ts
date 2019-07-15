import {Component, Input, OnInit} from '@angular/core';
import {Ticket} from '../../models/Ticket';
import {CurrencyService} from 'src/app/services/currency.service';
import {PopupService} from '../../services/popup.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  @Input() ticket: Ticket;

  private currentCurrencyRate: number;

  private currencyService;
  private popupService;

  constructor(currencyService: CurrencyService,
              popupService: PopupService) {
    this.currencyService = currencyService;
    this.popupService = popupService;
  }

  ngOnInit() {
    this.currentCurrencyRate = this.currencyService.getCurrentCurrencyRate();
  }

  convertCurrency(price: number) {
    return Math.round(price / this.currencyService.getCurrentCurrencyRate());
  }

  getCurrencySign() {
    return this.currencyService.getCurrentCurrencySign();
  }

  showPopup() {
    console.log('ticket comp - show popup');
    this.popupService.setShown(true);
  }

}
