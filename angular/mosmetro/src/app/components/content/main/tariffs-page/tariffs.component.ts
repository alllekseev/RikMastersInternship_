import {Component, OnInit} from '@angular/core';

import {TariffsService} from "./service/tariffs.service";

import {Ticket} from "../main.module";

@Component({
  selector: 'app-tariffs-page',
  templateUrl: './tariffs.component.html',
  styleUrls: ['./tariffs.component.sass'],
})
export class TariffsComponent implements OnInit {

  tickets: Ticket[] = [];

  constructor(
    private ticketsService: TariffsService) {

    // получить id routing => занести в переменную => использовать в верстке
  }

  ngOnInit(): void {
    this.ticketsService.getTickets().subscribe(data => {

      this.tickets = data;
    })
  }

}
