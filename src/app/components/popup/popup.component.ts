import {Component, OnInit} from '@angular/core';
import {PopupService} from '../../services/popup.service';
import {Ticket} from '../../models/Ticket';
import {CurrencyService} from '../../services/currency.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  private ticket: Ticket;
  private currentPrice;

  private popupService;
  private currencyService;

  constructor(popupService: PopupService,
              currencyService: CurrencyService) {
    this.popupService = popupService;
    this.currencyService = currencyService;
  }

  ngOnInit() {
    this.ticket = this.popupService.getTicket();
    this.computePrice(1);
  }

  hidePopup() {
    this.popupService.setShown(false);
  }

  getTicketPrice() {
    return this.ticket.price;
  }

  getCurrentSign() {
    return this.currencyService.getCurrentCurrencySign();
  }

  convertCurrency(price: number) {
    return Math.round(price / this.currencyService.getCurrentCurrencyRate());
  }

  // computePrice() {
  //   return this.convertCurrency(this.getTicketPrice());
  // }

  computePrice(quantity) {
    this.currentPrice =
      this.convertCurrency(this.getTicketPrice())
      * quantity;
  }

}
