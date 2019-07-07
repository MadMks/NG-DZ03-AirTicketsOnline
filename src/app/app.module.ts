import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Test1Component } from './components/test1/test1.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import {TicketService} from './services/ticket.service';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    TicketComponent,
    TicketsComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
