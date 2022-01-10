import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Filter, Status, FilterPage} from "../../journeys.module";
import {methods, urlAPI} from "../../../../../../global";

@Injectable({
  providedIn: 'root'
})
export class FiltrationService {

  filter: Filter[] = [];
  status: Status[] = [];

  constructor(private httpClient: HttpClient) { }

  getCarriers(): Observable<Filter[]> {
    return this.httpClient.get<FilterPage>(urlAPI + methods.carriers)
      .pipe(
        map(response => this.filter = response.data)
      )
  }
}
