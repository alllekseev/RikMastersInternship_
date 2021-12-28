import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TariffsService {
  tariff!: Tariff[];
  offers!: Offers[];

  constructor(private httpClient: HttpClient) {
  }

  getTariffs(): Observable<Tariff[]> {
    // @ts-ignore
    return this.httpClient.get<TariffPage>('http://127.0.0.1:8188/api/v1/tariffs')
      .pipe(
        map(response => this.tariff = response.data),
      )
  }
}

export class TariffPage {
  constructor(
    public data: Tariff[],
  ) {
  }
}

export class Tariff {
  constructor(
    public id: number,
    public name: string,
    public title: string,
    public description: string,
    public offers: Offers[]
  ) {
  }
}

export class Offers {
  constructor(
    public id: number,
    public name: string,
    public description: null,
    public price: string
  ) {
  }
}

// export interface Tariff {
//    id: number,
//    name: string,
//    title: string,
//    description: string,
//    offers: Offers[]
// }
//
// export interface Offers {
//   id: number,
//   name: string,
//   description: null,
//   price: string
// }
