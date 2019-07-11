import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  @Input() numberCheckbox;
  @Output() checkEvent = new EventEmitter<boolean>();
  checkboxes: any;

  constructor() { }

  ngOnInit() {
  }

  check() {
    this.checkEvent.emit(true);
  }

}
