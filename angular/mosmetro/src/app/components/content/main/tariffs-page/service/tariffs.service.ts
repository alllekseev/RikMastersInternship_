import { Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, map} from "rxjs";

import {TariffsPage, Ticket} from "../../main.module";

import {methods} from "../../../../../global";
import {environment} from "../../../../../../environments/environment";

@Injectable({
  providedIn: "root",
})

export class TariffsService {

  ticket: Ticket[] = [];

  constructor(private http:HttpClient) { }

  getTickets(): Observable<Ticket[]> {
    return this.http.get<TariffsPage>(environment.urlAPI + methods.tickets)
      .pipe(map(response => this.ticket = response.data))
  }
}
