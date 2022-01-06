import { Injectable, Inject } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, map} from "rxjs";

@Injectable({
  providedIn: "root",
})

export class TariffsService {

  ticket: Ticket[] = [];

  constructor(private http:HttpClient) { }

  getTickets(): Observable<Ticket[]> {
    return this.http.get<TariffsPage>('http://127.0.0.1:8188/api/v1/tickets')
      .pipe(map(response => this.ticket = response.data))
  }
}

@Inject('data')

export class TariffsPage {
  constructor(
    public data: Ticket[],
  ) {
  }
}
export class Ticket {
  constructor(
    public id: number,
    public image_url: string,
    public name: string,
    public description: string
  ) {
  }
}


