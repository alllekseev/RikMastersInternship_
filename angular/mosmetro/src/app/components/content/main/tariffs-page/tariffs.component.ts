import {Component, OnInit} from '@angular/core';

import {TariffsService, Ticket} from "./service/tariffs.service";


@Component({
  selector: 'app-tariffs-page',
  templateUrl: './tariffs.component.html',
  styleUrls: ['./tariffs.component.sass'],
})
export class TariffsComponent implements OnInit {

  tickets: Ticket[] = [];
  imgURL: string = 'http://127.0.0.1:8188/storage/uploads/tickets/';

  constructor(private ticketsService: TariffsService) {
    // получить id routing => занести в переменную => использовать в верстке
  }

  ngOnInit(): void {
    this.ticketsService.getTickets().subscribe(data => {

      this.tickets = data;
    })
  }

}
