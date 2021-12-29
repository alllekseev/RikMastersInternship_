import {Component, OnInit} from '@angular/core';
import {TicketsService} from "../../../services/tickets.service";
import {Ticket} from "../../../services/tickets.service";

@Component({
  selector: 'app-tariffs',
  templateUrl: './tariffs.component.html',
  styleUrls: ['./tariffs.component.sass'],
  providers: [TicketsService]
})
export class TariffsComponent implements OnInit {

  tickets: Ticket[] = [];
  imgURL: string = 'http://127.0.0.1:8188/storage/uploads/';

  constructor(private ticketsService: TicketsService) {
    // получить id routing => занести в переменную => использовать в верстке
  }

  ngOnInit(): void {

    this.ticketsService.getTickets().subscribe(data => {
      // @ts-ignore
      data['data'].forEach(item => {
        this.tickets.push(new Ticket(item['id'], item['image_url'], item['name'], item['description']))
      })
      console.log(this.tickets)
    })
  }

}
