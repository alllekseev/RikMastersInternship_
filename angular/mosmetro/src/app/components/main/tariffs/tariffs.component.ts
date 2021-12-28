import {Component, Injectable, OnInit} from '@angular/core';
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
  data: any

  constructor(private ticketsService: TicketsService) {
    // получить id routing => занести в переменную => использовать в верстке
  }

  ngOnInit(): void {

    this.data = this.ticketsService.getTickets().subscribe(data => {
      // @ts-ignore
      data['data'].forEach(item => {

        this.tickets.push(new Ticket(item['id'], item['image_url'], item['name'], item['description']))
        // console.log(item)
      })
      console.log(this.tickets)
      // @ts-ignore
      // this.tickets = data['data'];
      // for (let i of this.tickets) {
      //   this.tickets.push(new Ticket(i.id, i.imgUrl, i.name, i.description))
      // }
      // return this.tickets;
    })



    this.ticketsService.showTicket()
    // console.log(this.tickets)
  }

}
