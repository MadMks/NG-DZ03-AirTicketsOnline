import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import {TicketService} from './services/ticket.service';
import { CurrencyChangeComponent } from './components/sidebar/currency-change/currency-change.component';
import { TransferFilterComponent } from './components/sidebar/transfer-filter/transfer-filter.component';
import { CheckboxComponent } from './components/sidebar/transfer-filter/checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    TicketsComponent,
    SidebarComponent,
    HeaderComponent,
    CurrencyChangeComponent,
    TransferFilterComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
