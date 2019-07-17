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
    this.popupService.setShown(true);
  }

  sendTicketInfo(ticket: Ticket) {
    this.popupService.setTicket(ticket);
  }

  transferWord(stops) {
    if (stops === 0) {
      return 'пересадок';
    } else if (stops === 1) {
      return 'пересадка';
    }
    return 'пересадки';
  }

}
