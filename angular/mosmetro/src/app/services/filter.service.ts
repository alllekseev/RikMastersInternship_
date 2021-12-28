import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilterService {

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

export class FilterPage {
  constructor(
    public data: Filter[],
  ) {
  }
}

export class Filter {
  constructor(
    public id: number,
    public name: string,
    public number: string,
    public status: Array<Status[]>
  ) {
  }
}

export class Status {
  constructor(
    public id: number,
    public name: string,
    public title: string
  ) {
  }
}
