import {Component, Injectable, OnInit} from '@angular/core';
import {Ticket, TicketsService} from "../../../services/tickets.service";

@Injectable()

@Component({
  selector: 'app-tariffs',
  templateUrl: './tariffs.component.html',
  styleUrls: ['./tariffs.component.sass'],
  providers: [TicketsService]
})
export class TariffsComponent implements OnInit {
  ticket: Ticket;

  constructor(ticketsService: TicketsService) {
    this.ticket = ticketsService.getTickets();
  }

  ngOnInit(): void {
  }

}
