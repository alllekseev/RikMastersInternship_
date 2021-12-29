import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class NewServiceService {

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

export class HistoryPage {
  constructor(
    public data: History[],
  ) {
  }
}

export class History {
  constructor(
    public id: number,
    public place_name: string,
    public price: string,
    public created_at: string,
    public carriers: Carriers[],
  ) {
  }
}

export class Carriers {
  constructor (
    public id: number,
    public name: string,
    public number: string,
  ) {
  }
}
