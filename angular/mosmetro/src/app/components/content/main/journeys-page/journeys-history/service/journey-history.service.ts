import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, map} from "rxjs";

import {Carriers, History, HistoryPage} from "../../journeys.module";
import {methods} from "../../../../../../global";
import {environment} from "../../../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class JourneyHistoryService {

  history: History [] = [];
  carrier: Carriers[] = [];


  constructor(private httpClient: HttpClient) {}

  fetchHistory(): Observable<History[]> {
    return this.httpClient.get<HistoryPage>(environment.urlAPI + methods.history)
      .pipe(
        map(history =>  this.history = history.data)
      )
  }

  fetchCards(): Observable<Carriers[]> {
    return this.httpClient.get<History>('http://127.0.0.1:8188/' + methods.history)
      .pipe(
        map(card => this.carrier = card.carrier)
      )
  }
}
