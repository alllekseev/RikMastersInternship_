import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, map} from "rxjs";

import {Carriers, History, HistoryPage} from "../../journeys.module";


@Injectable({
  providedIn: 'root'
})

export class JourneyHistoryService {

  public carriers: Carriers[] = [];
  public history: History[] = [];

  constructor(private httpClient: HttpClient) {}

  fetchHistory(): Observable<History[]> {

    return this.httpClient.get<HistoryPage>('http://127.0.0.1:8188/api/v1/history')
      .pipe(
        map(history =>  this.history = history.data)
      )
  }
}
