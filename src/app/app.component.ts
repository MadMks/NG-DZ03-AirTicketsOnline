import { Component } from '@angular/core';
import {PopupService} from './services/popup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NG-DZ03-AirTicketsOnline';

  private popupService;

  constructor(popupService: PopupService) {
    this.popupService = popupService;
  }
}
