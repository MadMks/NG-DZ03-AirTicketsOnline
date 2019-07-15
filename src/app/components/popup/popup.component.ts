import { Component, OnInit } from '@angular/core';
import {PopupService} from '../../services/popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  private popupService;

  constructor(popupService: PopupService) {
    this.popupService = popupService;
  }

  ngOnInit() {
  }

  hidePopup() {
    this.popupService.setShown(false);
  }

}
