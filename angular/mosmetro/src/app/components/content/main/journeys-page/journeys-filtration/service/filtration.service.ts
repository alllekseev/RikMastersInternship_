import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Filter, Status, FilterPage} from "../../journeys.module";

@Injectable({
  providedIn: 'root'
})
export class FiltrationService {

  filter: Filter[] = [];
  status: Status[] = [];

  constructor(private httpClient: HttpClient) { }

  getCarriers(): Observable<Filter[]> {
    return this.httpClient.get<FilterPage>('http://127.0.0.1:8188/api/v1/carriers')
      .pipe(
        map(response => this.filter = response.data)
      )
  }
}
