import { Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, map} from "rxjs";

import {TariffsPage, Ticket} from "../../main.module";

import {methods, urlAPI} from "../../../../../global";

@Injectable({
  providedIn: "root",
})

export class TariffsService {

  ticket: Ticket[] = [];

  constructor(private http:HttpClient) { }

  getTickets(): Observable<Ticket[]> {
    return this.http.get<TariffsPage>(urlAPI + methods.tickets)
      .pipe(map(response => this.ticket = response.data))
  }
}
